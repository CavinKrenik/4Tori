import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { useStudy } from '../../context/StudyContext';
import { LABELS, REGIONS } from '../../data/labelingData';

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
  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState(false);
  const [activeMarker, setActiveMarker] = useState(null);
  const answerListRef = useRef(null);

  // Fetch SVG once on mount (trusted local asset)
  useEffect(() => {
    fetch(SVG_URL).then(r => r.text()).then(setRawSvg);
  }, []);

  // Produce SVG HTML — hide text layer in test mode
  const svgHtml = useMemo(() => {
    if (!rawSvg) return '';
    if (mode === 'study') return rawSvg;
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(rawSvg, 'image/svg+xml');
      const layer4 = doc.getElementById('layer4');
      if (layer4) layer4.style.display = 'none';
      return new XMLSerializer().serializeToString(doc.documentElement);
    } catch {
      return rawSvg;
    }
  }, [rawSvg, mode]);

  // Filter by region
  const activeLabels = useMemo(() => {
    if (region === 'all') return LABELS;
    return LABELS.filter(l => l.region === region);
  }, [region]);

  // Shuffle options for the dropdown (re-shuffled when region or mode changes)
  const options = useMemo(
    () => shuffle(activeLabels.map(l => l.label)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeLabels, mode, checked],
  );

  // Reset answers when region / mode changes
  useEffect(() => {
    setAnswers({});
    setChecked(false);
    setActiveMarker(null);
  }, [region, mode]);

  const handleAnswer = useCallback((id, value) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  }, []);

  const handleCheck = () => setChecked(true);

  const handleReset = () => {
    setAnswers({});
    setChecked(false);
    setActiveMarker(null);
  };

  const scrollToAnswer = useCallback((id) => {
    setActiveMarker(id);
    const el = document.getElementById(`label-answer-${id}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, []);

  // Score
  const score = useMemo(() => {
    if (!checked) return null;
    let correct = 0;
    activeLabels.forEach(l => {
      if (answers[l.id] === l.label) correct++;
    });
    return { correct, total: activeLabels.length };
  }, [checked, answers, activeLabels]);

  const allAnswered = activeLabels.every(l => answers[l.id]);

  return (
    <div className="labeling-page page-content">
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
            {(mode === 'test' || activeMarker !== null) && activeLabels.map((label, idx) => {
              const num = idx + 1;
              let statusClass = '';
              if (mode === 'test') {
                if (checked) {
                  statusClass = answers[label.id] === label.label ? 'marker--correct' : 'marker--wrong';
                } else if (answers[label.id]) {
                  statusClass = 'marker--answered';
                }
              } else {
                statusClass = activeMarker === label.id ? 'marker--study' : 'marker--study-dim';
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
                  title={mode === 'study' || checked ? label.label : `#${num}`}
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
              {score && (
                <div className={`labeling-score ${score.correct === score.total ? 'labeling-score--perfect' : ''}`}>
                  {score.correct} / {score.total}
                </div>
              )}
            </div>

            <div className="labeling-answer-list">
              {activeLabels.map((label, idx) => {
                const num = idx + 1;
                const userAnswer = answers[label.id] || '';
                let rowClass = '';
                if (checked) {
                  rowClass = userAnswer === label.label ? 'answer-row--correct' : 'answer-row--wrong';
                }
                return (
                  <div
                    key={label.id}
                    id={`label-answer-${label.id}`}
                    className={`answer-row ${rowClass} ${activeMarker === label.id ? 'answer-row--active' : ''}`}
                  >
                    <span className="answer-num">{num}</span>
                    <select
                      className="answer-select"
                      value={userAnswer}
                      onChange={e => handleAnswer(label.id, e.target.value)}
                      disabled={checked}
                    >
                      <option value="">— select —</option>
                      {options.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    {checked && userAnswer !== label.label && (
                      <span className="answer-correct-label">{label.label}</span>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="labeling-actions">
              <button
                className="btn btn-primary"
                onClick={handleCheck}
                disabled={checked || !allAnswered}
              >
                Check Answers
              </button>
              <button className="btn btn-ghost" onClick={handleReset}>
                Reset
              </button>
            </div>
          </div>
        )}

        {/* Study info panel */}
        {mode === 'study' && (
          <div className="labeling-answers">
            <div className="labeling-answers-header">
              <h3>Structure Reference</h3>
            </div>
            <p className="labeling-study-hint" style={{ margin: '0 0 var(--space-sm)' }}>
              Click a numbered marker to highlight it here.
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
          </div>
        )}
      </div>
    </div>
  );
}
