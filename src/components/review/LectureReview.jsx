import { useState, useEffect, useCallback } from 'react';
import { useStudy } from '../../context/StudyContext';
import reviewData from '../../data/reviewData';
import QuestionCard from '../common/QuestionCard';

const STORAGE_KEY = 'tori_review_progress';

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch { return {}; }
}

function saveProgress(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// ── Inline Table Component ──
function ReviewTable({ table }) {
  return (
    <div className="review-table-wrap">
      {table.title && <h4 className="review-table-title">{table.title}</h4>}
      <div className="review-table-scroll">
        <table className="review-table">
          <thead>
            <tr>{table.headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {table.rows.map((row, ri) => (
              <tr key={ri}>{row.map((cell, ci) => <td key={ci}>{cell}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── Section Quiz (inline, self-contained) ──
function SectionQuizInline({ questions, sectionId }) {
  const [answers, setAnswers] = useState({});
  const [showScore, setShowScore] = useState(false);

  const total = questions.length;
  const answeredCount = Object.keys(answers).length;
  const correctCount = Object.values(answers).filter(a => a.correct).length;

  const handleAnswer = (qi, letter) => {
    if (answers[qi]) return;
    const q = questions[qi];
    setAnswers(prev => ({ ...prev, [qi]: { letter, correct: letter === q.answer } }));
  };

  useEffect(() => {
    if (answeredCount === total && total > 0) setShowScore(true);
  }, [answeredCount, total]);

  const handleReset = () => { setAnswers({}); setShowScore(false); };

  return (
    <div className="review-quiz-section">
      <div className="review-quiz-header">
        <h3>📝 Section Quiz — {total} Questions</h3>
        {answeredCount > 0 && (
          <button className="btn btn-ghost btn-sm" onClick={handleReset}>↻ Reset</button>
        )}
      </div>

      {showScore && (
        <div className={`review-quiz-score ${correctCount / total >= 0.6 ? 'pass' : 'fail'}`}>
          {correctCount}/{total} correct ({Math.round(correctCount / total * 100)}%)
          {correctCount / total >= 0.6 ? ' ✓ Passed!' : ' — 60% needed to pass'}
        </div>
      )}

      {questions.map((q, qi) => (
        <QuestionCard
          key={`quiz-${sectionId}-${qi}`}
          question={q.question}
          options={q.options}
          answer={q.answer}
          explanation={q.explanation}
          selectedAnswer={answers[qi]?.letter || null}
          onAnswer={(letter) => handleAnswer(qi, letter)}
          compact={false}
        />
      ))}
    </div>
  );
}

// ── Flashcard Deck (simple flip cards) ──
function ReviewFlashcards({ flashcards }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const card = flashcards[currentIdx];
  const total = flashcards.length;

  const goNext = () => { setFlipped(false); setCurrentIdx(i => Math.min(i + 1, total - 1)); };
  const goPrev = () => { setFlipped(false); setCurrentIdx(i => Math.max(i - 1, 0)); };

  return (
    <div className="review-flashcard-deck">
      <div className="review-flashcard-counter">{currentIdx + 1} / {total}</div>
      <div className={`review-flashcard ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(f => !f)}>
        <div className="review-flashcard-inner">
          <div className="review-flashcard-front">{card.front}</div>
          <div className="review-flashcard-back">{card.back}</div>
        </div>
      </div>
      <div className="review-flashcard-nav">
        <button className="btn btn-ghost btn-sm" onClick={goPrev} disabled={currentIdx === 0}>← Prev</button>
        <button className="btn btn-ghost btn-sm" onClick={() => setFlipped(f => !f)}>Flip</button>
        <button className="btn btn-ghost btn-sm" onClick={goNext} disabled={currentIdx === total - 1}>Next →</button>
      </div>
    </div>
  );
}

// ── Main Component ──
export default function LectureReview({ mode, setMode }) {
  const { goHome } = useStudy();
  const sections = reviewData.sections;

  // Section navigation
  const [sectionIndex, setSectionIndex] = useState(0);
  const section = sections[sectionIndex];

  // Per-section persistent progress
  const [allProgress, setAllProgress] = useState(loadProgress);
  const sectionKey = section.id;
  const sp = allProgress[sectionKey] || {};

  // Progressive disclosure
  const learnItems = section.learnItems || [];
  const [revealedCount, setRevealedCount] = useState(sp.learnComplete ? learnItems.length : 1);
  const [showQuizCTA, setShowQuizCTA] = useState(!!sp.learnComplete);
  const [inlineAnswers, setInlineAnswers] = useState(sp.inlineAnswers || {});

  // Reset on section change
  useEffect(() => {
    const prog = loadProgress();
    setAllProgress(prog);
    const s = prog[section.id] || {};
    if (s.learnComplete) {
      setRevealedCount(section.learnItems.length);
      setShowQuizCTA(true);
    } else {
      setRevealedCount(1);
      setShowQuizCTA(false);
    }
    setInlineAnswers(s.inlineAnswers || {});
    setMode('learn');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [section.id]);

  // Save helpers
  const persistProgress = useCallback((update) => {
    setAllProgress(prev => {
      const next = { ...prev, [sectionKey]: { ...(prev[sectionKey] || {}), ...update } };
      saveProgress(next);
      return next;
    });
  }, [sectionKey]);

  // Build content flow (interleaves learn items + inline questions)
  function buildContentFlow() {
    const flow = [];
    let inlineIdx = 0;
    const inlineQs = section.inlineQuestions || [];

    for (let i = 0; i < learnItems.length; i++) {
      if (i >= revealedCount) break;
      flow.push({ type: 'content', index: i, data: learnItems[i] });

      if (inlineQs[inlineIdx]) {
        const interval = Math.max(2, Math.floor(learnItems.length / (inlineQs.length + 1)));
        if ((i + 1) % interval === 0 && i < revealedCount - 1) {
          flow.push({ type: 'inline-question', index: inlineIdx, data: inlineQs[inlineIdx] });
          inlineIdx++;
        }
      }
    }

    // Remaining inline questions when all content revealed
    while (inlineIdx < inlineQs.length && revealedCount >= learnItems.length) {
      flow.push({ type: 'inline-question', index: inlineIdx, data: inlineQs[inlineIdx] });
      inlineIdx++;
    }

    return flow;
  }

  function handleRevealNext() {
    const next = revealedCount + 1;
    setRevealedCount(next);
    if (next >= learnItems.length) {
      persistProgress({ learnComplete: true });
      setShowQuizCTA(true);
    }
    setTimeout(() => {
      const el = document.getElementById(`review-block-${next - 1}`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }

  function handleRevealAll() {
    setRevealedCount(learnItems.length);
    persistProgress({ learnComplete: true });
    setShowQuizCTA(true);
  }

  function handleInlineAnswer(qIndex, answer) {
    const updated = { ...inlineAnswers, [qIndex]: answer };
    setInlineAnswers(updated);
    persistProgress({ inlineAnswers: updated });
  }

  function goToSection(idx) {
    if (idx >= 0 && idx < sections.length) setSectionIndex(idx);
  }

  const contentFlow = buildContentFlow();

  // ── Quiz / Flashcard sub-views ──
  if (mode === 'quiz') {
    return (
      <div className="page-content">
        <button className="btn btn-ghost btn-sm" onClick={() => setMode('learn')} style={{ marginBottom: 'var(--space-md)' }}>
          ← Back to Reading
        </button>
        <div className="section-header animate-fade-up">
          <h2 className="section-title">{section.title} — Quiz</h2>
        </div>
        <SectionQuizInline questions={section.quiz} sectionId={section.id} />
      </div>
    );
  }

  if (mode === 'flashcards') {
    return (
      <div className="page-content">
        <button className="btn btn-ghost btn-sm" onClick={() => setMode('learn')} style={{ marginBottom: 'var(--space-md)' }}>
          ← Back to Reading
        </button>
        <div className="section-header animate-fade-up">
          <h2 className="section-title">{section.title} — Flashcards</h2>
        </div>
        <ReviewFlashcards flashcards={section.flashcards} />
      </div>
    );
  }

  // ── Main learn view ──
  return (
    <div className="page-content">
      {/* Back to Home */}
      <div className="review-hero animate-fade-up">
        <button className="review-back-btn" onClick={goHome}>← Home</button>
        <h1 className="review-page-title">📖 Lecture Review</h1>
        <p className="review-page-subtitle">
          Cross-topic exam prep — progressive learning from past test questions and key concepts.
        </p>
      </div>

      {/* Section Navigation */}
      <div className="section-nav">
        <button className="btn btn-ghost btn-sm" onClick={() => goToSection(sectionIndex - 1)} disabled={sectionIndex === 0}>
          ← Previous
        </button>
        <span className="section-indicator">
          Section {sectionIndex + 1} of {sections.length}
        </span>
        <button className="btn btn-ghost btn-sm" onClick={() => goToSection(sectionIndex + 1)} disabled={sectionIndex === sections.length - 1}>
          Next →
        </button>
      </div>

      {/* Section Step Dots */}
      <div className="section-steps">
        {sections.map((s, i) => {
          const prog = allProgress[s.id] || {};
          let cls = 'section-step';
          if (prog.learnComplete) cls += ' completed';
          else if (i === sectionIndex) cls += ' current';
          return (
            <div key={s.id} className={cls} onClick={() => goToSection(i)} title={`${s.title}${prog.learnComplete ? ' ✓' : ''}`} />
          );
        })}
      </div>

      {/* Section Header */}
      <div className="section-header animate-fade-up">
        <h2 className="section-title">{section.title}</h2>
        <div className="section-meta">
          <span>{section.pageRange}</span>
          <span>·</span>
          <span>{learnItems.length} topics</span>
          <span>·</span>
          <span>{section.quiz.length} quiz questions</span>
        </div>
      </div>

      {/* Content Flow */}
      {contentFlow.map((item, flowIdx) => {
        if (item.type === 'content') {
          return (
            <div
              key={`c-${item.index}`}
              id={`review-block-${item.index}`}
              className="content-block"
              style={{ animationDelay: `${flowIdx * 0.05}s` }}
            >
              <h3 className="content-block-title">
                <span style={{ color: 'var(--accent)', fontSize: 'var(--text-sm)' }}>
                  {item.index + 1}.
                </span>
                {item.data.title}
              </h3>
              <div className="content-block-body">
                {item.data.body.split('\n').map((p, pi) => (
                  <p key={pi}>{p}</p>
                ))}
              </div>
              {item.data.table && <ReviewTable table={item.data.table} />}
            </div>
          );
        }

        if (item.type === 'inline-question') {
          return (
            <QuestionCard
              key={`iq-${item.index}`}
              question={item.data.question}
              options={item.data.options}
              answer={item.data.answer}
              explanation={item.data.explanation}
              selectedAnswer={inlineAnswers[item.index] || null}
              onAnswer={(ans) => handleInlineAnswer(item.index, ans)}
              compact={true}
            />
          );
        }

        return null;
      })}

      {/* Continue Button */}
      {revealedCount < learnItems.length && (
        <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', margin: 'var(--space-xl) 0' }}>
          <button className="btn btn-primary btn-lg" onClick={handleRevealNext}>
            Continue Reading →
          </button>
          <button className="btn btn-ghost btn-sm" onClick={handleRevealAll}>
            Show All
          </button>
        </div>
      )}

      {/* Memory Aids */}
      {showQuizCTA && section.memoryAids && section.memoryAids.length > 0 && (
        <div className="animate-fade-up" style={{ marginTop: 'var(--space-xl)' }}>
          {section.memoryAids.map((aid, i) => (
            <div key={i} className="memory-aid">
              <span className="memory-aid-icon">💡</span>
              <span className="memory-aid-text">{aid}</span>
            </div>
          ))}
        </div>
      )}

      {/* Key Terms */}
      {showQuizCTA && section.keyTerms && section.keyTerms.length > 0 && (
        <div className="key-terms-section animate-fade-up">
          <h4 className="key-terms-title">Key Terms</h4>
          <div className="key-terms-grid">
            {section.keyTerms.map((kt, i) => (
              <span key={i} className="term-chip">
                {kt.term}
                <span className="term-chip-tooltip">{kt.definition}</span>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Section Complete CTA */}
      {showQuizCTA && (
        <div className="section-complete animate-fade-up">
          <div className="section-complete-icon">📚</div>
          <h3 className="section-complete-title">Section Reading Complete!</h3>
          <p className="section-complete-subtitle">
            You&apos;ve covered all {learnItems.length} topics in this section.
            Test your knowledge with a quiz or review with flashcards.
          </p>
          <div className="section-complete-actions">
            <button className="btn btn-primary btn-lg" onClick={() => setMode('quiz')}>
              Start Section Quiz ({section.quiz.length} questions)
            </button>
            <button className="btn btn-secondary btn-lg" onClick={() => setMode('flashcards')}>
              Flashcards ({section.flashcards?.length || 0} cards)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
