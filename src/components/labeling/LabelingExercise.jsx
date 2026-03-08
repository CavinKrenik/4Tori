import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { useStudy } from '../../context/StudyContext';
import { LABELS, REGIONS } from '../../data/labelingData';
import StructureCard from './StructureCard';

const SVG_URL = '/Circulatory_System_en%20labeld.svg';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function LabelingExercise() {
  const { goHome } = useStudy();
  const [rawSvg, setRawSvg] = useState('');
  const [mode, setMode] = useState('study');       // 'study' | 'test'
  const [region, setRegion] = useState('all');
  const [answers, setAnswers] = useState({});       // id -> chosen value
  const [locked, setLocked] = useState({});          // id -> true (correct & locked)
  const [wrong, setWrong] = useState({});            // id -> true (last attempt was wrong)
  const [activeMarker, setActiveMarker] = useState(null);
  const answerListRef = useRef(null);

  // Fetch SVG once on mount (trusted local asset)
  useEffect(() => {
    fetch(SVG_URL).then(r => r.text()).then(setRawSvg);
  }, []);

  // Produce SVG HTML — always hide text layer (labels shown via numbered markers + side panel)
  const svgHtml = useMemo(() => {
    if (!rawSvg) return '';
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(rawSvg, 'image/svg+xml');
      const layer4 = doc.getElementById('layer4');
      if (layer4) layer4.style.display = 'none';
      return new XMLSerializer().serializeToString(doc.documentElement);
    } catch {
      return rawSvg;
    }
  }, [rawSvg]);

  // Filter by region
  const activeLabels = useMemo(() => {
    if (region === 'all') return LABELS;
    return LABELS.filter(l => l.region === region);
  }, [region]);

  // Shuffle options for the dropdown (re-shuffled when region or mode changes)
  const options = useMemo(
    () => shuffle(activeLabels.map(l => l.label)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeLabels, mode],
  );

  // Reset answers when region / mode changes
  useEffect(() => {
    setAnswers({});
    setLocked({});
    setWrong({});
    setActiveMarker(null);
  }, [region, mode]);

  const handleAnswer = useCallback((id, value, correctLabel) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
    if (!value) {
      // cleared selection
      setWrong(prev => ({ ...prev, [id]: false }));
      return;
    }
    if (value === correctLabel) {
      // Correct — lock it
      setLocked(prev => ({ ...prev, [id]: true }));
      setWrong(prev => ({ ...prev, [id]: false }));
    } else {
      // Wrong — mark it, don't lock
      setWrong(prev => ({ ...prev, [id]: true }));
    }
  }, []);

  const handleReset = () => {
    setAnswers({});
    setLocked({});
    setWrong({});
    setActiveMarker(null);
  };

  const scrollToAnswer = useCallback((id) => {
    setActiveMarker(id);
    const el = document.getElementById(`label-answer-${id}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, []);

  // Score — computed live
  const score = useMemo(() => {
    const correctCount = Object.keys(locked).length;
    return { correct: correctCount, total: activeLabels.length };
  }, [locked, activeLabels]);

  const allCorrect = score.correct === score.total;

  // Active structure for the card (study mode)
  const activeLabel = useMemo(() => {
    if (activeMarker === null) return null;
    return LABELS.find(l => l.id === activeMarker) || null;
  }, [activeMarker]);

  return (
    <div className={`labeling-page page-content ${mode === 'study' && activeMarker !== null ? 'labeling-focus-active' : ''}`}>
      {/* Header */}
      <div className="labeling-header animate-fade-up">
        <button className="btn btn-ghost btn-sm" onClick={goHome}>&larr; Home</button>
        <h1 className="labeling-title">Circulatory System — Diagram Labeling</h1>
      </div>

      {/* Controls */}
      <div className="labeling-controls animate-fade-up">
        <div className="labeling-mode-toggle">
          <button
            className={`btn btn-sm ${mode === 'study' ? 'btn-primary' : 'btn-ghost'}`}
            onClick={() => setMode('study')}
          >
            Study
          </button>
          <button
            className={`btn btn-sm ${mode === 'test' ? 'btn-primary' : 'btn-ghost'}`}
            onClick={() => setMode('test')}
          >
            Test
          </button>
        </div>

        <div className="labeling-region-selector">
          {REGIONS.map(r => (
            <button
              key={r.id}
              className={`btn btn-sm ${region === r.id ? 'btn-secondary' : 'btn-ghost'}`}
              onClick={() => setRegion(r.id)}
            >
              {r.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main body */}
      <div className={`labeling-body animate-fade-up labeling-body--split`}>
        {/* Diagram */}
        <div className="labeling-diagram-wrap">
          <div className="labeling-diagram-container">
            {/* SVG rendered inline (trusted local asset from /public) */}
            <div
              className="labeling-svg"
              dangerouslySetInnerHTML={{ __html: svgHtml }}
            />

            {/* Numbered markers overlay */}
            {(mode === 'test' || activeMarker !== null || mode === 'study') && activeLabels.map((label, idx) => {
              const num = idx + 1;
              let statusClass = '';
              if (mode === 'test') {
                if (locked[label.id]) {
                  statusClass = 'marker--correct';
                } else if (wrong[label.id]) {
                  statusClass = 'marker--wrong';
                } else if (answers[label.id]) {
                  statusClass = 'marker--answered';
                }
              } else {
                statusClass = activeMarker === label.id
                  ? 'marker--study marker--focused'
                  : activeMarker !== null
                    ? 'marker--study-dim'
                    : 'marker--study';
              }
              return (
                <button
                  key={label.id}
                  className={`label-marker ${statusClass} ${activeMarker === label.id ? 'marker--active' : ''}`}
                  style={{ left: `${label.x}%`, top: `${label.y}%` }}
                  onClick={() => {
                    if (mode === 'test') {
                      scrollToAnswer(label.id);
                    } else {
                      setActiveMarker(prev => prev === label.id ? null : label.id);
                    }
                  }}
                  title={mode === 'study' || locked[label.id] ? label.label : `#${num}`}
                >
                  {num}
                </button>
              );
            })}
          </div>
        </div>

        {/* Answer panel (test mode) */}
        {mode === 'test' && (
          <div className="labeling-answers" ref={answerListRef}>
            <div className="labeling-answers-header">
              <h3>Identify Each Structure</h3>
              <div className={`labeling-score ${allCorrect ? 'labeling-score--perfect' : ''}`}>
                {score.correct} / {score.total}
              </div>
            </div>

            {/* Live progress bar */}
            <div className="labeling-progress-bar">
              <div
                className="labeling-progress-fill"
                style={{ width: `${(score.correct / score.total) * 100}%` }}
              />
            </div>

            {allCorrect && (
              <div className="labeling-complete-msg">
                Perfect! You identified all structures correctly!
              </div>
            )}

            <div className="labeling-answer-list">
              {activeLabels.map((label, idx) => {
                const num = idx + 1;
                const userAnswer = answers[label.id] || '';
                const isLocked = locked[label.id];
                const isWrong = wrong[label.id] && !isLocked;
                let rowClass = '';
                if (isLocked) rowClass = 'answer-row--correct';
                else if (isWrong) rowClass = 'answer-row--wrong';
                return (
                  <div
                    key={label.id}
                    id={`label-answer-${label.id}`}
                    className={`answer-row ${rowClass} ${activeMarker === label.id ? 'answer-row--active' : ''}`}
                  >
                    <span className="answer-num">{num}</span>
                    {isLocked ? (
                      <span className="answer-locked-text">
                        <span className="answer-feedback-icon correct">✔</span>
                        {label.label}
                      </span>
                    ) : (
                      <>
                        <select
                          className={`answer-select ${isWrong ? 'answer-select--wrong' : ''}`}
                          value={userAnswer}
                          onChange={e => handleAnswer(label.id, e.target.value, label.label)}
                        >
                          <option value="">— select —</option>
                          {options.filter(opt => {
                            // Hide options already locked by other rows
                            if (opt === userAnswer) return true;
                            return !Object.entries(locked).some(
                              ([lockedId, v]) => v && answers[lockedId] === opt
                            );
                          }).map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                        {isWrong && (
                          <span className="answer-feedback-icon wrong">✖</span>
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="labeling-actions">
              <button className="btn btn-ghost" onClick={handleReset}>
                Reset
              </button>
            </div>
          </div>
        )}

        {/* Study info panel */}
        {mode === 'study' && (
          <div className="labeling-answers">
            {activeLabel ? (
              <StructureCard
                label={activeLabel}
                onClose={() => setActiveMarker(null)}
              />
            ) : (
              <>
                <div className="labeling-answers-header">
                  <h3>Structure Reference</h3>
                </div>
                <p className="labeling-study-hint" style={{ margin: '0 0 var(--space-sm)' }}>
                  Click a numbered marker or a structure below to see detailed info.
                </p>
            <div className="labeling-answer-list">
              {activeLabels.map((label, idx) => {
                const num = idx + 1;
                const typeClass = `answer-row--type-${label.type}`;
                return (
                  <div
                    key={label.id}
                    className={`answer-row ${typeClass} ${activeMarker === label.id ? 'answer-row--active' : ''}`}
                    onClick={() => setActiveMarker(prev => prev === label.id ? null : label.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    <span className="answer-num">{num}</span>
                    <span className="answer-label-text">{label.label}</span>
                    <span className={`answer-type-badge type-${label.type}`}>{label.type}</span>
                  </div>
                );
              })}
            </div>
            <div className="labeling-legend" style={{ marginTop: 'var(--space-md)' }}>
              <span className="legend-item legend-artery">Arteries (red)</span>
              <span className="legend-item legend-vein">Veins (blue)</span>
              <span className="legend-item legend-both">Both a.&nbsp;&amp;&nbsp;v. (purple)</span>
            </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
