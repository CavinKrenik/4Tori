import { useState, useMemo, useCallback, useEffect } from 'react';
import { useStudy } from '../../context/StudyContext';
import QuestionCard from '../common/QuestionCard';
import ProgressRing from '../common/ProgressRing';

const MODULE_ICONS = {
  endocrine: '⚗️',
  heart: '❤️',
  blood: '🩸',
  vessels: '🌊',
  lymphatic: '🛡️',
};

function shuffle(arr, seed) {
  const a = [...arr];
  let s = seed;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function FinalQuiz({ modules }) {
  const { progress, navigate } = useStudy();
  const STORAGE_KEY = '4-tori-final-quiz';

  // Build question pool from all modules/sections quiz arrays
  const allQuestions = useMemo(() => {
    const pool = [];
    modules.forEach(mod => {
      mod.sections.forEach(sec => {
        (sec.quiz || []).forEach(q => {
          pool.push({
            ...q,
            _module: mod.title,
            _moduleIcon: mod.icon,
            _section: sec.title,
          });
        });
      });
    });
    return pool;
  }, [modules]);

  // Load saved state or create fresh shuffle
  const [seed] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (saved && saved.seed != null) return saved.seed;
    } catch {}
    return Date.now();
  });

  const shuffled = useMemo(() => shuffle(allQuestions, seed), [allQuestions, seed]);

  const [currentQ, setCurrentQ] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (saved && saved.currentQ != null) return saved.currentQ;
    } catch {}
    return 0;
  });

  const [answers, setAnswers] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (saved && saved.answers) return saved.answers;
    } catch {}
    return {};
  });

  const [showResults, setShowResults] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return saved?.showResults || false;
    } catch {}
    return false;
  });

  // Persist state
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      seed, currentQ, answers, showResults,
    }));
  }, [seed, currentQ, answers, showResults]);

  const handleAnswer = useCallback((answer) => {
    const newAnswers = { ...answers, [currentQ]: answer };
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentQ < shuffled.length - 1) {
        setCurrentQ(currentQ + 1);
      } else {
        setShowResults(true);
      }
    }, 1200);
  }, [answers, currentQ, shuffled.length]);

  function handleRetry() {
    const newSeed = Date.now();
    localStorage.removeItem(STORAGE_KEY);
    setAnswers({});
    setCurrentQ(0);
    setShowResults(false);
    // Force re-mount by navigating
    navigate('home');
    setTimeout(() => navigate('finalQuiz'), 0);
  }

  if (shuffled.length === 0) {
    return (
      <div className="page-content">
        <div className="empty-state">
          <div className="empty-state-icon">📝</div>
          <p>No quiz questions available yet.</p>
          <button className="btn btn-primary" onClick={() => navigate('home')}>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  // Results
  if (showResults) {
    const score = Object.keys(answers).reduce((sum, key) => {
      return sum + (answers[key] === shuffled[key]?.answer ? 1 : 0);
    }, 0);
    const percent = Math.round((score / shuffled.length) * 100);
    const passed = percent >= 60;

    let message, messageClass;
    if (percent >= 90) { message = 'Outstanding! You\'ve mastered all the material!'; messageClass = 'excellent'; }
    else if (percent >= 70) { message = 'Great work! Strong grasp across all modules.'; messageClass = 'good'; }
    else if (percent >= 60) { message = 'You passed! Review missed topics to solidify your knowledge.'; messageClass = 'good'; }
    else { message = 'Keep studying — review the modules you missed and try again.'; messageClass = 'needs-work'; }

    // Group missed by module
    const missed = [];
    shuffled.forEach((q, i) => {
      if (answers[i] !== q.answer) {
        missed.push({ ...q, index: i, userAnswer: answers[i] });
      }
    });

    const missedByModule = {};
    missed.forEach(q => {
      if (!missedByModule[q._module]) missedByModule[q._module] = [];
      missedByModule[q._module].push(q);
    });

    return (
      <div className="page-content">
        <div className="quiz-container results-container">
          <div className="results-header">
            <div className="results-score-ring">
              <ProgressRing
                percent={percent}
                size={100}
                strokeWidth={8}
                color={passed ? 'var(--success)' : 'var(--warning)'}
              />
            </div>
            <div className="results-score">{score} / {shuffled.length}</div>
            <div className="results-label">{percent}% Correct</div>
            <div className={`results-message ${messageClass}`}>{message}</div>
          </div>

          <div className="results-breakdown">
            <h3 className="results-breakdown-title">
              {missed.length === 0 ? 'Perfect Score! 🎉' : `Missed Questions (${missed.length})`}
            </h3>
            {Object.entries(missedByModule).map(([modTitle, qs]) => (
              <div key={modTitle} className="final-quiz-module-group">
                <h4 className="final-quiz-module-heading">
                  {MODULE_ICONS[qs[0]._moduleIcon] || '📚'} {modTitle}
                </h4>
                {qs.map((q, i) => (
                  <div key={i} className="result-item incorrect">
                    <span className="result-icon">✗</span>
                    <div className="result-content">
                      <div className="result-question">{q.question}</div>
                      <div className="result-meta" style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginBottom: 4 }}>
                        {q._section}
                      </div>
                      <div className="result-answer">
                        Your answer: {q.userAnswer} — {q.options[q.userAnswer]}
                        <span style={{ color: 'var(--success)', marginLeft: 8 }}>
                          Correct: {q.answer} — {q.options[q.answer]}
                        </span>
                      </div>
                      {q.explanation && (
                        <div className="result-explanation">{q.explanation}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="results-actions">
            <button className="btn btn-secondary" onClick={handleRetry}>
              Retry Final Quiz
            </button>
            <button className="btn btn-primary" onClick={() => navigate('home')}>
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Quiz in progress
  const q = shuffled[currentQ];
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="page-content">
      <div className="quiz-container">
        <div className="quiz-header">
          <h2 className="quiz-title">🏆 Final Quiz</h2>
          <p className="quiz-subtitle">
            {shuffled.length} questions from all modules — mixed & shuffled. 60% to pass.
          </p>
        </div>

        <div className="quiz-progress">
          <span className="quiz-progress-text">
            {answeredCount}/{shuffled.length}
          </span>
          <div className="progress-bar quiz-progress-bar" style={{ flex: 1 }}>
            <div
              className="progress-bar-fill"
              style={{ width: `${(answeredCount / shuffled.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="final-quiz-source-tag">
          {MODULE_ICONS[q._moduleIcon] || '📚'} {q._module} — {q._section}
        </div>

        <QuestionCard
          key={`final-${currentQ}`}
          question={q.question}
          options={q.options}
          answer={q.answer}
          explanation={q.explanation}
          selectedAnswer={answers[currentQ] || null}
          onAnswer={handleAnswer}
          showNumber={currentQ + 1}
        />

        <div className="quiz-actions">
          <button
            className="btn btn-ghost btn-sm"
            onClick={() => setCurrentQ(Math.max(0, currentQ - 1))}
            disabled={currentQ === 0}
          >
            ← Previous
          </button>
          <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
            Use A, B, C, D keys to answer
          </span>
          <button
            className="btn btn-ghost btn-sm"
            onClick={() => setCurrentQ(Math.min(shuffled.length - 1, currentQ + 1))}
            disabled={currentQ >= shuffled.length - 1 || !answers[currentQ]}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
