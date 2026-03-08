import { useState, useEffect, useCallback } from 'react';

const LETTERS = ['A', 'B', 'C', 'D'];

export default function QuestionCard({
  question,
  options,
  answer,
  explanation,
  selectedAnswer,
  onAnswer,
  showNumber,
  disabled = false,
  compact = false,
  allowRetry = true,
}) {
  const [firstWrongAttempt, setFirstWrongAttempt] = useState(null);
  const [finalAnswer, setFinalAnswer] = useState(selectedAnswer || null);

  const isFinalized = finalAnswer !== null;
  const isCorrect = finalAnswer === answer;
  const showTryAgain = firstWrongAttempt !== null && !isFinalized;

  // Reset state when question changes
  useEffect(() => {
    setFirstWrongAttempt(null);
    setFinalAnswer(selectedAnswer || null);
  }, [question, selectedAnswer]);

  const handleSelect = useCallback((letter) => {
    if (isFinalized || disabled) return;
    if (showTryAgain && letter === firstWrongAttempt) return;

    if (allowRetry && firstWrongAttempt === null && letter !== answer) {
      setFirstWrongAttempt(letter);
      return;
    }

    setFinalAnswer(letter);
    if (onAnswer) onAnswer(letter);
  }, [isFinalized, disabled, showTryAgain, firstWrongAttempt, allowRetry, answer, onAnswer]);

  // Keyboard handler (A/B/C/D)
  useEffect(() => {
    if (isFinalized || disabled) return;
    function handleKey(e) {
      const key = e.key.toUpperCase();
      if (LETTERS.includes(key)) handleSelect(key);
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isFinalized, disabled, handleSelect]);

  function getOptionClass(letter) {
    const classes = ['option-btn'];
    if (showTryAgain) {
      if (letter === firstWrongAttempt) classes.push('incorrect', 'disabled-option');
    } else if (isFinalized) {
      if (letter === answer) classes.push('correct');
      else if (letter === finalAnswer && letter !== answer) classes.push('incorrect');
      if (letter === firstWrongAttempt && letter !== answer && letter !== finalAnswer) classes.push('incorrect');
    }
    return classes.join(' ');
  }

  return (
    <div className={compact ? 'inline-question' : 'question-card'}>
      {compact && (
        <div className="inline-question-label">
          Quick Check
        </div>
      )}
      {showNumber && (
        <div className="question-number">Question {showNumber}</div>
      )}
      <div className={compact ? 'inline-question-text' : 'question-text'}>
        {question}
      </div>
      <div className="options-list">
        {LETTERS.map(letter => (
          <button
            key={letter}
            className={getOptionClass(letter)}
            onClick={() => handleSelect(letter)}
            disabled={isFinalized || disabled || (showTryAgain && letter === firstWrongAttempt)}
          >
            <span className="option-letter">{letter}</span>
            <span className="option-text">{options[letter]}</span>
          </button>
        ))}
      </div>
      {showTryAgain && (
        <div className="feedback-box feedback-tryagain">
          <strong>Not quite — try again!</strong>
        </div>
      )}
      {isFinalized && (
        <div className={`feedback-box ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}`}>
          <strong>
            {isCorrect
              ? (firstWrongAttempt ? 'Correct on second try!' : 'Correct!')
              : `Incorrect — Answer: ${answer}`}
          </strong>
          {explanation && <p style={{ marginTop: 4 }}>{explanation}</p>}
        </div>
      )}
    </div>
  );
}
