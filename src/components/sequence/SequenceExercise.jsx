import { useState, useMemo } from 'react';
import { useStudy } from '../../context/StudyContext';
import { sequences } from '../../data/sequenceData';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function SequenceExercise() {
  const { navigate } = useStudy();
  const [seqIndex, setSeqIndex] = useState(0);
  const [clickOrder, setClickOrder] = useState([]); // step ids in the order user clicked
  const [checked, setChecked] = useState(false);

  const seq = sequences[seqIndex];
  // Reshuffle only when the sequence changes, not on retry
  const shuffled = useMemo(() => shuffle(seq.steps), [seqIndex]);

  function handleStepClick(stepId) {
    if (checked) return;
    if (clickOrder.includes(stepId)) {
      // Deselect: remove from order (and anything after it shifts)
      setClickOrder(prev => prev.filter(id => id !== stepId));
    } else {
      setClickOrder(prev => [...prev, stepId]);
    }
  }

  function handleCheck() {
    setChecked(true);
  }

  function handleReset() {
    setClickOrder([]);
    setChecked(false);
  }

  function handleNav(dir) {
    const next = (seqIndex + dir + sequences.length) % sequences.length;
    setSeqIndex(next);
    setClickOrder([]);
    setChecked(false);
  }

  const allSelected = clickOrder.length === seq.steps.length;

  const correctCount = checked
    ? clickOrder.filter((id, i) => id === seq.steps[i].id).length
    : 0;
  const isPerfect = checked && correctCount === seq.steps.length;

  return (
    <div className="page-content">
      <div className="seq-container">

        {/* Header */}
        <div className="seq-header">
          <div className="seq-category" style={{ color: seq.color }}>
            {seq.emoji} {seq.category}
          </div>
          <h2 className="seq-title">{seq.title}</h2>
          <p className="seq-description">{seq.description}</p>
          <div className="seq-nav">
            <button className="btn btn-ghost btn-sm" onClick={() => handleNav(-1)}>← Prev</button>
            <span className="seq-counter">{seqIndex + 1} of {sequences.length}</span>
            <button className="btn btn-ghost btn-sm" onClick={() => handleNav(1)}>Next →</button>
          </div>
        </div>

        {/* Hint */}
        <div className="seq-hint">
          💡 {seq.hint}
        </div>

        {/* Instructions */}
        {!checked && (
          <div className="seq-instructions">
            Click steps in the correct order. Click again to deselect.
            <span className="seq-instructions-count">
              {clickOrder.length}/{seq.steps.length} placed
            </span>
          </div>
        )}

        {/* Steps */}
        <div className="seq-steps">
          {shuffled.map((step) => {
            const clickPos = clickOrder.indexOf(step.id); // -1 if not selected
            const isSelected = clickPos !== -1;
            const correctPos = seq.steps.findIndex(s => s.id === step.id);
            const isCorrect = checked && isSelected && clickPos === correctPos;
            const isWrong = checked && isSelected && clickPos !== correctPos;
            const isUnselected = checked && !isSelected;

            let cls = 'seq-step';
            if (isSelected && !checked) cls += ' selected';
            if (isCorrect) cls += ' correct';
            if (isWrong) cls += ' wrong';
            if (isUnselected) cls += ' unselected';

            return (
              <div
                key={step.id}
                className={cls}
                onClick={() => handleStepClick(step.id)}
              >
                <div className="seq-step-badge">
                  {checked
                    ? (isSelected ? clickPos + 1 : '–')
                    : (isSelected ? clickPos + 1 : '?')}
                </div>
                <div className="seq-step-body">
                  <div className="seq-step-text">{step.text}</div>
                  {isWrong && (
                    <div className="seq-step-correction">
                      You placed: #{clickPos + 1} &nbsp;·&nbsp; Correct position: #{correctPos + 1}
                    </div>
                  )}
                  {isUnselected && (
                    <div className="seq-step-correction">
                      Not placed — correct position: #{correctPos + 1}
                    </div>
                  )}
                </div>
                {checked && (
                  <div className="seq-step-icon">
                    {isCorrect ? '✓' : '✗'}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Correct Order (shown after checking if not perfect) */}
        {checked && !isPerfect && (
          <div className="seq-answer-key">
            <div className="seq-answer-key-title">Correct Order:</div>
            {seq.steps.map((step, i) => (
              <div key={step.id} className="seq-answer-row">
                <span className="seq-answer-num">{i + 1}</span>
                <span className="seq-answer-text">{step.text}</span>
              </div>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="seq-actions">
          {!checked && (
            <button
              className="btn btn-primary btn-lg"
              onClick={handleCheck}
              disabled={!allSelected}
            >
              Check Order
            </button>
          )}
          {checked && (
            <>
              <div className={`seq-result ${isPerfect ? 'perfect' : 'partial'}`}>
                {isPerfect
                  ? '🎉 Perfect! You nailed it.'
                  : `${correctCount}/${seq.steps.length} correct — review and try again!`}
              </div>
              <div className="seq-result-actions">
                <button className="btn btn-secondary" onClick={handleReset}>
                  Try Again
                </button>
                <button className="btn btn-primary" onClick={() => handleNav(1)}>
                  Next Sequence →
                </button>
              </div>
            </>
          )}
        </div>

        <div className="seq-back">
          <button className="btn btn-ghost btn-sm" onClick={() => navigate('home')}>
            ← Back to Home
          </button>
        </div>

      </div>
    </div>
  );
}
