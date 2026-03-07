import { useState } from 'react';

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
}) {
  const [localSelected, setLocalSelected] = useState(selectedAnswer || null);
  const selected = selectedAnswer || localSelected;
  const answered = selected !== null;
  const isCorrect = selected === answer;

  function handleSelect(letter) {
    if (answered || disabled) return;
    setLocalSelected(letter);
    if (onAnswer) onAnswer(letter);
  }

  function getOptionClass(letter) {
    const classes = ['option-btn'];
    if (!answered) {
      if (selected === letter) classes.push('selected');
    } else {
      if (letter === answer) classes.push('correct');
      else if (letter === selected && letter !== answer) classes.push('incorrect');
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
            disabled={answered || disabled}
          >
            <span className="option-letter">{letter}</span>
            <span className="option-text">{options[letter]}</span>
          </button>
        ))}
      </div>
      {answered && (
        <div className={`feedback-box ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}`}>
          <strong>{isCorrect ? 'Correct!' : `Incorrect - Answer: ${answer}`}</strong>
          {explanation && <p style={{ marginTop: 4 }}>{explanation}</p>}
        </div>
      )}
    </div>
  );
}
