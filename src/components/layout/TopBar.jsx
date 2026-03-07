import { useStudy } from '../../context/StudyContext';

export default function TopBar({ module, section, onMenuClick }) {
  const { progress, navigate, goHome } = useStudy();
  const view = progress.currentView;

  const tabs = module ? [
    { id: 'learn', label: 'Learn' },
    { id: 'quiz', label: 'Quiz' },
    { id: 'flashcards', label: 'Flashcards' },
  ] : [];

  return (
    <header className="topbar">
      <button className="mobile-menu-btn" onClick={onMenuClick} aria-label="Open menu">
        &#9776;
      </button>

      <nav className="topbar-breadcrumb">
        <span className="current" onClick={goHome} style={{ cursor: 'pointer' }}>
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
      </nav>

      {tabs.length > 0 && (
        <div className="topbar-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`topbar-tab ${view === tab.id ? 'active' : ''}`}
              onClick={() => navigate(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
