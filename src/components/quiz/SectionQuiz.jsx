import { useState, useEffect, useCallback } from 'react';
import { useStudy } from '../../context/StudyContext';
import QuestionCard from '../common/QuestionCard';
import ProgressRing from '../common/ProgressRing';

export default function SectionQuiz({ module, sectionIndex }) {
  const {
    progress,
    answerQuizQuestion,
    completeQuiz,
    resetSectionQuiz,
    getSectionProgress,
    goToSection,
    goToFlashcards,
    nextSection,
    navigate,
  } = useStudy();

  const section = module.sections[sectionIndex];
  const questions = section.quiz || [];
  const sectionProgress = getSectionProgress(module.id, section.id);

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState(sectionProgress.quizAnswers || {});
  const [showResults, setShowResults] = useState(sectionProgress.quizScore !== null);

  // Reset when section changes
  useEffect(() => {
    const sp = getSectionProgress(module.id, section.id);
    if (sp.quizScore !== null) {
      setAnswers(sp.quizAnswers || {});
      setShowResults(true);
      setCurrentQ(0);
    } else {
      setAnswers(sp.quizAnswers || {});
      setShowResults(false);
      setCurrentQ(Object.keys(sp.quizAnswers || {}).length);
    }
  }, [module.id, section.id]);

  // Keyboard navigation is handled by QuestionCard (try-again aware)

  function handleAnswer(answer) {
    const newAnswers = { ...answers, [currentQ]: answer };
    setAnswers(newAnswers);
    answerQuizQuestion(module.id, section.id, currentQ, answer);

    // Auto-advance after a delay
    setTimeout(() => {
      if (currentQ < questions.length - 1) {
        setCurrentQ(currentQ + 1);
      } else {
        // Calculate score
        let score = 0;
        for (let i = 0; i < questions.length; i++) {
          if (newAnswers[i] === questions[i].answer) score++;
        }
        completeQuiz(module.id, section.id, score, questions.length);
        setShowResults(true);
      }
    }, 1200);
  }

  function handleRetry() {
    resetSectionQuiz(module.id, section.id);
    setAnswers({});
    setCurrentQ(0);
    setShowResults(false);
  }

  function handleNextSection() {
    nextSection(module.id, [module]);
  }

  if (questions.length === 0) {
    return (
      <div className="page-content">
        <div className="empty-state">
          <div className="empty-state-icon">📝</div>
          <p>No quiz questions available for this section.</p>
          <button className="btn btn-primary" onClick={() => navigate('learn')}>
            Back to Learning
          </button>
        </div>
      </div>
    );
  }

  // Results View
  if (showResults) {
    const score = Object.keys(answers).reduce((sum, key) => {
      return sum + (answers[key] === questions[key]?.answer ? 1 : 0);
    }, 0);
    const percent = Math.round((score / questions.length) * 100);
    const passed = percent >= 60;

    let message, messageClass;
    if (percent >= 90) { message = 'Excellent! You\'ve mastered this section!'; messageClass = 'excellent'; }
    else if (percent >= 70) { message = 'Great job! You\'re on the right track.'; messageClass = 'good'; }
    else if (percent >= 60) { message = 'You passed! Review the missed questions to strengthen your knowledge.'; messageClass = 'good'; }
    else { message = 'Keep studying — review the content and try again.'; messageClass = 'needs-work'; }

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
            <div className="results-score">{score} / {questions.length}</div>
            <div className="results-label">{percent}% Correct</div>
            <div className={`results-message ${messageClass}`}>{message}</div>
          </div>

          <div className="results-breakdown">
            <h3 className="results-breakdown-title">Question Breakdown</h3>
            {questions.map((q, i) => {
              const userAnswer = answers[i];
              const isCorrect = userAnswer === q.answer;
              return (
                <div key={i} className={`result-item ${isCorrect ? 'correct' : 'incorrect'}`}>
                  <span className="result-icon">{isCorrect ? '✓' : '✗'}</span>
                  <div className="result-content">
                    <div className="result-question">{q.question}</div>
                    <div className="result-answer">
                      Your answer: {userAnswer} — {q.options[userAnswer]}
                      {!isCorrect && (
                        <span style={{ color: 'var(--success)', marginLeft: 8 }}>
                          Correct: {q.answer} — {q.options[q.answer]}
                        </span>
                      )}
                    </div>
                    {!isCorrect && q.explanation && (
                      <div className="result-explanation">{q.explanation}</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="results-actions">
            <button className="btn btn-secondary" onClick={handleRetry}>
              Retry Quiz
            </button>
            <button className="btn btn-secondary" onClick={goToFlashcards}>
              Review Flashcards
            </button>
            {passed && sectionIndex < module.sections.length - 1 && (
              <button className="btn btn-primary" onClick={handleNextSection}>
                Next Section →
              </button>
            )}
            {passed && sectionIndex === module.sections.length - 1 && (
              <button className="btn btn-success" onClick={() => navigate('home')}>
                Module Complete! 🎉
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Quiz in Progress
  const q = questions[currentQ];
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="page-content">
      <div className="quiz-container">
        <div className="quiz-header">
          <h2 className="quiz-title">{section.title} — Quiz</h2>
          <p className="quiz-subtitle">
            Answer each question to test your knowledge. 60% required to pass.
          </p>
        </div>

        <div className="quiz-progress">
          <span className="quiz-progress-text">
            {answeredCount}/{questions.length}
          </span>
          <div className="progress-bar quiz-progress-bar" style={{ flex: 1 }}>
            <div
              className="progress-bar-fill"
              style={{ width: `${(answeredCount / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <QuestionCard
          key={`quiz-${section.id}-${currentQ}`}
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
            onClick={() => setCurrentQ(Math.min(questions.length - 1, currentQ + 1))}
            disabled={currentQ >= questions.length - 1 || !answers[currentQ]}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
