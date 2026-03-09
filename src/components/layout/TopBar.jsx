import { useState } from 'react';
import { useStudy } from '../../context/StudyContext';

export default function TopBar({ module, section, onMenuClick, reviewMode, setReviewMode }) {
  const { progress, navigate, goHome, resetSection } = useStudy();
  const [confirmReset, setConfirmReset] = useState(false);
  const view = progress.currentView;

  // Standalone view labels
  const standaloneLabels = {
    labeling: 'Diagram Labeling',
    finalQuiz: 'Final Quiz',
    review: 'Lecture Review',
  };
  const standaloneLabel = standaloneLabels[view];

  // Tabs: module views get Learn/Quiz/Flashcards; review gets its own set
  const tabs = module ? [
    { id: 'learn', label: 'Learn' },
    { id: 'quiz', label: 'Quiz' },
    { id: 'flashcards', label: 'Flashcards' },
  ] : view === 'review' ? [
    { id: 'learn', label: 'Learn' },
    { id: 'quiz', label: 'Quiz' },
    { id: 'flashcards', label: 'Flashcards' },
  ] : [];

  const isReview = view === 'review';
  const activeTab = isReview ? reviewMode : view;

  return (
    <header className="topbar">
      <button className="mobile-menu-btn" onClick={onMenuClick} aria-label="Open menu">
        &#9776;
      </button>

      <nav className="topbar-breadcrumb">
        <span className={!module && !standaloneLabel ? 'current' : ''} onClick={goHome} style={{ cursor: 'pointer' }}>
          Home
        </span>
        {module && (
          <>
            <span>&rsaquo;</span>
            <span
              className={!section ? 'current' : ''}
              onClick={() => navigate('learn', module.id, progress.currentSectionIndex)}
              style={{ cursor: 'pointer' }}
            >
              {module.title}
            </span>
          </>
        )}
        {section && (
          <>
            <span>&rsaquo;</span>
            <span className="current">{section.title}</span>
          </>
        )}
        {standaloneLabel && !module && (
          <>
            <span>&rsaquo;</span>
            <span className="current">{standaloneLabel}</span>
          </>
        )}
      </nav>

      {tabs.length > 0 && (
        <div className="topbar-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`topbar-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => isReview ? setReviewMode(tab.id) : navigate(tab.id)}
            >
              {tab.label}
            </button>
          ))}
          {section && (
            confirmReset ? (
              <span className="topbar-reset-confirm">
                <span style={{ fontSize: '0.75rem', marginRight: 4 }}>Reset section?</span>
                <button
                  className="topbar-tab topbar-reset-btn topbar-reset-yes"
                  onClick={() => {
                    resetSection(module.id, section.id);
                    setConfirmReset(false);
                    navigate('learn');
                  }}
                >
                  Yes
                </button>
                <button
                  className="topbar-tab topbar-reset-btn"
                  onClick={() => setConfirmReset(false)}
                >
                  No
                </button>
              </span>
            ) : (
              <button
                className="topbar-tab topbar-reset-btn"
                onClick={() => setConfirmReset(true)}
                title="Reset all progress for this section"
              >
                Reset
              </button>
            )
          )}
        </div>
      )}
    </header>
  );
}
