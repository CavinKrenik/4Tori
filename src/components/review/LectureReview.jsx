import { useState, useCallback } from 'react';
import { useStudy } from '../../context/StudyContext';
import reviewData from '../../data/reviewData';

const TABS = [
  { id: 'pathways', label: 'Pathway Review', icon: '🔬' },
  { id: 'tests', label: 'Test Review', icon: '📝' },
];

// ── Pathway Review Tab ──
function PathwayCard({ pathway }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="review-pathway-card" style={{ '--pathway-color': pathway.color }}>
      <button className="review-pathway-header" onClick={() => setExpanded(e => !e)}>
        <div className="review-pathway-icon" style={{ background: `${pathway.color}15`, color: pathway.color }}>
          {pathway.icon}
        </div>
        <div className="review-pathway-title-wrap">
          <span className="review-pathway-category">{pathway.category}</span>
          <span className="review-pathway-title">{pathway.title}</span>
        </div>
        <span className={`review-chevron ${expanded ? 'open' : ''}`}>▾</span>
      </button>

      {expanded && (
        <div className="review-pathway-body">
          {/* Tables */}
          {pathway.tables.map((table, ti) => (
            <div key={ti} className="review-table-wrap">
              <h4 className="review-table-title">{table.title}</h4>
              {table.subtitle && <p className="review-table-subtitle">{table.subtitle}</p>}
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
          ))}

          {/* Flow Steps */}
          {pathway.flowSteps.length > 0 && (
            <div className="review-flow-section">
              <h4 className="review-table-title">Step-by-Step Process</h4>
              <div className="review-flow-steps">
                {pathway.flowSteps.map((s) => (
                  <div key={s.step} className="review-flow-step">
                    <div className="review-flow-step-num" style={{ background: pathway.color }}>{s.step}</div>
                    <div className="review-flow-step-content">
                      <strong>{s.title}</strong>
                      <p>{s.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Points */}
          {pathway.keyPoints.length > 0 && (
            <div className="review-key-points">
              <h4 className="review-table-title">💡 Key Points</h4>
              <ul>
                {pathway.keyPoints.map((pt, i) => <li key={i}>{pt}</li>)}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── Test Review Tab ──
function TestReviewSection({ section }) {
  const [activeQ, setActiveQ] = useState(null); // index of question showing answer
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const totalQs = section.questions.length;
  const answeredCount = Object.keys(userAnswers).length;
  const correctCount = Object.values(userAnswers).filter((a, i) => {
    const qi = Object.keys(userAnswers)[Object.values(userAnswers).indexOf(a)];
    return section.questions[Number(qi)]?.answer === a;
  }).length;

  const computeCorrect = useCallback(() => {
    let correct = 0;
    for (const [qi, ans] of Object.entries(userAnswers)) {
      if (section.questions[Number(qi)]?.answer === ans) correct++;
    }
    return correct;
  }, [userAnswers, section.questions]);

  const handleAnswer = (qIndex, optIndex) => {
    if (userAnswers[qIndex] !== undefined) return; // already answered
    setUserAnswers(prev => ({ ...prev, [qIndex]: optIndex }));
    setActiveQ(qIndex);
  };

  const handleReset = () => {
    setUserAnswers({});
    setActiveQ(null);
    setShowResults(false);
  };

  return (
    <div className="review-test-section" style={{ '--test-color': section.color }}>
      <div className="review-test-header">
        <div className="review-test-icon" style={{ background: `${section.color}15`, color: section.color }}>
          {section.icon}
        </div>
        <div>
          <h3 className="review-test-title">{section.category}</h3>
          <span className="review-test-meta">{totalQs} questions</span>
        </div>
        {answeredCount > 0 && (
          <button className="btn btn-sm btn-ghost review-reset-btn" onClick={handleReset}>
            ↻ Reset
          </button>
        )}
      </div>

      {/* Progress bar */}
      {answeredCount > 0 && (
        <div className="review-test-progress">
          <div className="review-test-progress-bar">
            <div
              className="review-test-progress-fill"
              style={{ width: `${(answeredCount / totalQs) * 100}%`, background: section.color }}
            />
          </div>
          <span className="review-test-progress-text">
            {answeredCount}/{totalQs} answered
            {answeredCount === totalQs && ` — ${computeCorrect()}/${totalQs} correct (${Math.round(computeCorrect() / totalQs * 100)}%)`}
          </span>
        </div>
      )}

      {/* Questions */}
      <div className="review-questions-list">
        {section.questions.map((question, qi) => {
          const answered = userAnswers[qi] !== undefined;
          const isCorrect = answered && userAnswers[qi] === question.answer;

          return (
            <div
              key={qi}
              className={`review-question-card ${answered ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
            >
              <div className="review-question-num">Q{qi + 1}</div>
              <p className="review-question-text">{question.q}</p>
              <div className="review-options">
                {question.options.map((opt, oi) => {
                  let cls = 'review-option';
                  if (answered) {
                    if (oi === question.answer) cls += ' correct-answer';
                    else if (oi === userAnswers[qi] && !isCorrect) cls += ' wrong-answer';
                  }
                  return (
                    <button
                      key={oi}
                      className={cls}
                      onClick={() => handleAnswer(qi, oi)}
                      disabled={answered}
                    >
                      <span className="review-option-letter">{String.fromCharCode(65 + oi)}</span>
                      {opt}
                    </button>
                  );
                })}
              </div>
              {answered && (
                <div className={`review-feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
                  {isCorrect ? '✓ Correct!' : `✗ Incorrect — the answer is ${String.fromCharCode(65 + question.answer)}: ${question.options[question.answer]}`}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Main Component ──
export default function LectureReview() {
  const { goHome } = useStudy();
  const [activeTab, setActiveTab] = useState('pathways');
  const [filter, setFilter] = useState('all');

  const categories = activeTab === 'pathways'
    ? [...new Set(reviewData.pathways.map(p => p.category))]
    : [...new Set(reviewData.testReview.map(t => t.category))];

  const filteredPathways = filter === 'all'
    ? reviewData.pathways
    : reviewData.pathways.filter(p => p.category === filter);

  const filteredTests = filter === 'all'
    ? reviewData.testReview
    : reviewData.testReview.filter(t => t.category === filter);

  return (
    <div className="page-content">
      {/* Header */}
      <div className="review-hero animate-fade-up">
        <button className="review-back-btn" onClick={goHome}>← Back</button>
        <h1 className="review-page-title">📖 Lecture Review</h1>
        <p className="review-page-subtitle">
          Review key pathways, tables, and test yourself with past exam questions.
        </p>
      </div>

      {/* Tab Bar */}
      <div className="review-tabs animate-fade-up">
        {TABS.map(tab => (
          <button
            key={tab.id}
            className={`review-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => { setActiveTab(tab.id); setFilter('all'); }}
          >
            <span className="review-tab-icon">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Filter Pills */}
      <div className="review-filters animate-fade-up">
        <button
          className={`review-filter-pill ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        {categories.map(cat => (
          <button
            key={cat}
            className={`review-filter-pill ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="review-content animate-fade-up">
        {activeTab === 'pathways' && (
          <div className="review-pathways-list">
            {filteredPathways.map(pw => (
              <PathwayCard key={pw.id} pathway={pw} />
            ))}
          </div>
        )}

        {activeTab === 'tests' && (
          <div className="review-tests-list">
            {filteredTests.map(ts => (
              <TestReviewSection key={ts.id} section={ts} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
