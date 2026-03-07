import { useState, useEffect } from 'react';
import { useStudy } from '../../context/StudyContext';
import QuestionCard from '../common/QuestionCard';

export default function LearnView({ module, sectionIndex }) {
  const {
    progress,
    markLearnComplete,
    answerInlineQuestion,
    getSectionProgress,
    goToSection,
    goToQuiz,
    goToFlashcards,
  } = useStudy();

  const section = module.sections[sectionIndex];
  const sectionProgress = getSectionProgress(module.id, section.id);
  const totalSections = module.sections.length;

  // Track which content blocks have been revealed (progressive disclosure)
  const [revealedCount, setRevealedCount] = useState(
    sectionProgress.learnComplete ? section.learnItems.length : 1
  );
  const [showQuizCTA, setShowQuizCTA] = useState(sectionProgress.learnComplete);

  // Reset when section changes
  useEffect(() => {
    const sp = getSectionProgress(module.id, section.id);
    if (sp.learnComplete) {
      setRevealedCount(section.learnItems.length);
      setShowQuizCTA(true);
    } else {
      setRevealedCount(1);
      setShowQuizCTA(false);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [module.id, section.id]);

  // Build interleaved content: learn items + inline questions
  function buildContentFlow() {
    const flow = [];
    let inlineIdx = 0;

    for (let i = 0; i < section.learnItems.length; i++) {
      if (i >= revealedCount) break;

      flow.push({ type: 'content', index: i, data: section.learnItems[i] });

      // Check if there's an inline question after this block
      if (section.inlineQuestions && section.inlineQuestions[inlineIdx]) {
        // Spread inline questions evenly: roughly every N content blocks
        const interval = Math.max(2, Math.floor(section.learnItems.length / (section.inlineQuestions.length + 1)));
        if ((i + 1) % interval === 0 && i < revealedCount - 1) {
          flow.push({
            type: 'inline-question',
            index: inlineIdx,
            data: section.inlineQuestions[inlineIdx],
          });
          inlineIdx++;
        }
      }
    }

    // Any remaining inline questions at the end
    while (inlineIdx < (section.inlineQuestions?.length || 0) && revealedCount >= section.learnItems.length) {
      flow.push({
        type: 'inline-question',
        index: inlineIdx,
        data: section.inlineQuestions[inlineIdx],
      });
      inlineIdx++;
    }

    return flow;
  }

  function handleRevealNext() {
    const next = revealedCount + 1;
    setRevealedCount(next);
    if (next >= section.learnItems.length) {
      markLearnComplete(module.id, section.id);
      setShowQuizCTA(true);
    }
    // Smooth scroll to new content
    setTimeout(() => {
      const el = document.getElementById(`content-block-${next - 1}`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }

  function handleRevealAll() {
    setRevealedCount(section.learnItems.length);
    markLearnComplete(module.id, section.id);
    setShowQuizCTA(true);
  }

  function handleInlineAnswer(qIndex, answer) {
    answerInlineQuestion(module.id, section.id, qIndex, answer);
  }

  const contentFlow = buildContentFlow();

  return (
    <div className="page-content">
      {/* Section Navigation */}
      <div className="section-nav">
        <button
          className="btn btn-ghost btn-sm"
          onClick={() => goToSection(sectionIndex - 1)}
          disabled={sectionIndex === 0}
        >
          ← Previous
        </button>
        <span className="section-indicator">
          Section {sectionIndex + 1} of {totalSections}
        </span>
        <button
          className="btn btn-ghost btn-sm"
          onClick={() => goToSection(sectionIndex + 1)}
          disabled={sectionIndex === totalSections - 1}
        >
          Next →
        </button>
      </div>

      {/* Section Steps Progress */}
      <div className="section-steps">
        {module.sections.map((s, i) => {
          const sp = getSectionProgress(module.id, s.id);
          let cls = 'section-step';
          if (sp.complete) cls += ' completed';
          else if (i === sectionIndex) cls += ' current';
          return (
            <div
              key={s.id}
              className={cls}
              onClick={() => goToSection(i)}
              title={`${s.title}${sp.complete ? ' ✓' : ''}`}
            />
          );
        })}
      </div>

      {/* Section Header */}
      <div className="section-header animate-fade-up">
        <h2 className="section-title">{section.title}</h2>
        <div className="section-meta">
          <span>{section.pageRange}</span>
          <span>·</span>
          <span>{section.learnItems.length} topics</span>
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
              id={`content-block-${item.index}`}
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
              selectedAnswer={sectionProgress.inlineAnswers?.[item.index] || null}
              onAnswer={(ans) => handleInlineAnswer(item.index, ans)}
              compact={true}
            />
          );
        }

        return null;
      })}

      {/* Continue Button */}
      {revealedCount < section.learnItems.length && (
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
            You&apos;ve covered all {section.learnItems.length} topics in this section.
            Test your knowledge with a quiz or review with flashcards.
          </p>
          <div className="section-complete-actions">
            <button className="btn btn-primary btn-lg" onClick={goToQuiz}>
              Start Section Quiz ({section.quiz.length} questions)
            </button>
            <button className="btn btn-secondary btn-lg" onClick={goToFlashcards}>
              Flashcards ({section.flashcards?.length || 0} cards)
            </button>
          </div>

          {sectionProgress.quizScore !== null && (
            <div style={{ marginTop: 'var(--space-lg)' }}>
              <div className={`badge ${sectionProgress.complete ? 'badge-success' : 'badge-warning'}`}>
                Previous Quiz: {sectionProgress.quizScore}/{sectionProgress.quizTotal}
                ({Math.round((sectionProgress.quizScore / sectionProgress.quizTotal) * 100)}%)
                {sectionProgress.complete ? ' ✓' : ' — 60% needed to pass'}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
