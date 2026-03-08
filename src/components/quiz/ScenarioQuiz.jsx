import { useState, useEffect } from 'react';
import { useStudy } from '../../context/StudyContext';
import ProgressRing from '../common/ProgressRing';

export default function ScenarioQuiz({ module }) {
  const { navigate } = useStudy();

  const questions = module.scenarioQuestions || [];
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    setCurrentQ(0);
    setAnswers({});
    setShowExplanation(false);
    setShowResults(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [module.id]);

  if (questions.length === 0) {
    return (
      <div className="page-content">
        <div className="empty-state">
          <div className="empty-state-icon">🧠</div>
          <p>No scenario questions available for this module yet.</p>
          <button className="btn btn-primary" onClick={() => navigate('learn')}>
            Back to Learning
          </button>
        </div>
      </div>
    );
  }

  function handleAnswer(answer) {
    if (answers[currentQ] !== undefined) return;
    setAnswers(prev => ({ ...prev, [currentQ]: answer }));
    setShowExplanation(true);
  }

  function handleNext() {
    setShowExplanation(false);
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResults(true);
    }
  }

  function handleRetry() {
    setCurrentQ(0);
    setAnswers({});
    setShowExplanation(false);
    setShowResults(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Results view
  if (showResults) {
    const score = Object.keys(answers).reduce((sum, key) => {
      return sum + (answers[key] === questions[key]?.answer ? 1 : 0);
    }, 0);
    const percent = Math.round((score / questions.length) * 100);

    let message, messageClass;
    if (percent >= 90) { message = 'Outstanding clinical reasoning!'; messageClass = 'excellent'; }
    else if (percent >= 70) { message = 'Strong critical thinking — review the missed scenarios.'; messageClass = 'good'; }
    else if (percent >= 50) { message = 'Decent start — revisit the content and try again.'; messageClass = 'good'; }
    else { message = 'Keep studying — these scenarios require deep understanding.'; messageClass = 'needs-work'; }

    return (
      <div className="page-content">
        <div className="quiz-container results-container">
          <div className="results-header">
            <div className="results-score-ring">
              <ProgressRing
                percent={percent}
                size={100}
                strokeWidth={8}
                color={percent >= 60 ? 'var(--success)' : 'var(--warning)'}
              />
            </div>
            <div className="results-score">{score} / {questions.length}</div>
            <div className="results-label">{percent}% Correct</div>
            <div className={`results-message ${messageClass}`}>{message}</div>
          </div>

          <div className="results-breakdown">
            <h3 className="results-breakdown-title">Scenario Breakdown</h3>
            {questions.map((q, i) => {
              const userAnswer = answers[i];
              const isCorrect = userAnswer === q.answer;
              return (
                <div key={i} className={`result-item ${isCorrect ? 'correct' : 'incorrect'}`}>
                  <span className="result-icon">{isCorrect ? '✓' : '✗'}</span>
                  <div className="result-content">
                    <div className="result-question">{q.scenario}</div>
                    <div className="result-answer">
                      Your answer: {userAnswer} — {q.options[userAnswer]}
                      {!isCorrect && (
                        <span className="correct-label"> | Correct: {q.answer} — {q.options[q.answer]}</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="results-actions">
            <button className="btn btn-primary btn-lg" onClick={handleRetry}>
              Try Again
            </button>
            <button className="btn btn-secondary btn-lg" onClick={() => navigate('learn')}>
              Back to Learning
            </button>
          </div>
        </div>
      </div>
    );
  }

  const q = questions[currentQ];
  const userAnswer = answers[currentQ];
  const isCorrect = userAnswer === q.answer;

  return (
    <div className="page-content">
      {/* Progress */}
      <div className="scenario-progress">
        <span className="scenario-progress-text">
          Scenario {currentQ + 1} of {questions.length}
        </span>
        <div className="scenario-progress-bar">
          <div
            className="scenario-progress-fill"
            style={{ width: `${((currentQ + (userAnswer !== undefined ? 1 : 0)) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Scenario Card */}
      <div className="scenario-card animate-fade-up">
        <div className="scenario-badge">🧠 Clinical Scenario</div>

        <div className="scenario-text">{q.scenario}</div>

        <div className="scenario-question">{q.question}</div>

        <div className="options-list">
          {Object.entries(q.options).map(([letter, text]) => {
            let cls = 'option-btn';
            if (userAnswer !== undefined) {
              if (letter === q.answer) cls += ' correct';
              else if (letter === userAnswer && !isCorrect) cls += ' incorrect';
            } else {
              cls += '';
            }

            return (
              <button
                key={letter}
                className={cls}
                onClick={() => handleAnswer(letter)}
                disabled={userAnswer !== undefined}
              >
                <span className="option-letter">{letter}</span>
                <span className="option-text">{text}</span>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className={`scenario-explanation ${isCorrect ? 'correct' : 'incorrect'}`}>
            <div className="scenario-explanation-header">
              <span className="scenario-explanation-icon">{isCorrect ? '✓' : '✗'}</span>
              <span>{isCorrect ? 'Correct!' : 'Not quite — here\'s the reasoning:'}</span>
            </div>
            <p className="scenario-explanation-text">{q.explanation}</p>
            <button className="btn btn-primary" onClick={handleNext}>
              {currentQ < questions.length - 1 ? 'Next Scenario →' : 'See Results'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
