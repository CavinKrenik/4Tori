import { useStudy } from '../../context/StudyContext';
import ProgressRing from '../common/ProgressRing';

const MODULE_ICONS = {
  endocrine: { emoji: '\u2697\uFE0F', bg: '#ede9fe', color: '#8b5cf6' },
  heart: { emoji: '\u2764\uFE0F', bg: '#fee2e2', color: '#ef4444' },
  blood: { emoji: '\uD83E\uDE78', bg: '#fce4ec', color: '#dc2626' },
  vessels: { emoji: '\uD83C\uDF0A', bg: '#dbeafe', color: '#3b82f6' },
  lymphatic: { emoji: '\uD83D\uDEE1\uFE0F', bg: '#d1fae5', color: '#10b981' },
};

export default function Sidebar({ modules, isOpen, onClose }) {
  const { progress, openModule, goHome, goToLabeling, goToFinalQuiz, goToReview, goToSequence, toggleTheme, getModuleProgress, getOverallProgress } = useStudy();
  const overall = getOverallProgress();

  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? 'visible' : ''}`} onClick={onClose} />
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-brand">
            4 Tori
          </div>
          <div className="sidebar-subtitle">Anatomy & Physiology</div>
        </div>

        <div className="sidebar-progress-summary">
          <div className="sidebar-progress-text">
            <span>Overall Progress</span>
            <span>{overall.percent}%</span>
          </div>
          <div className="sidebar-progress-bar">
            <div className="sidebar-progress-fill" style={{ width: `${overall.percent}%` }} />
          </div>
        </div>

        <div className="sidebar-scroll">
          <div className="sidebar-section-label">Modules</div>
          <nav>
            {modules.map(mod => {
              const modProgress = getModuleProgress(mod.id);
              const iconData = MODULE_ICONS[mod.icon] || MODULE_ICONS.endocrine;
              const isActive = progress.currentModuleId === mod.id && progress.currentView !== 'home';

              return (
                <button
                  key={mod.id}
                  className={`sidebar-module-btn ${isActive ? 'active' : ''}`}
                  onClick={() => { openModule(mod.id); onClose?.(); }}
                >
                  <div
                    className="sidebar-module-icon"
                    style={{ background: iconData.bg, color: iconData.color }}
                  >
                    {iconData.emoji}
                  </div>
                  <div className="sidebar-module-info">
                    <div className="sidebar-module-title">{mod.title}</div>
                    <div className="sidebar-module-meta">
                      {mod.sections.length} sections &middot; {modProgress.percent}%
                    </div>
                  </div>
                  {modProgress.percent === 100 ? (
                    <div className="sidebar-module-check" style={{ background: '#d1fae5', color: '#047857' }}>
                      &#10003;
                    </div>
                  ) : modProgress.percent > 0 ? (
                    <ProgressRing percent={modProgress.percent} size={26} strokeWidth={3} />
                  ) : null}
                </button>
              );
            })}
          </nav>

          <div className="sidebar-section-label" style={{ marginTop: 'var(--space-sm)' }}>Tools</div>
          <div>
            <button
              className={`sidebar-module-btn ${progress.currentView === 'labeling' ? 'active' : ''}`}
              onClick={() => { goToLabeling(); onClose?.(); }}
            >
              <div className="sidebar-module-icon" style={{ background: '#fce4ec', color: '#d32f2f' }}>
                {"\uD83E\uDEC0"}
              </div>
              <div className="sidebar-module-info">
                <div className="sidebar-module-title">Diagram Labeling</div>
                <div className="sidebar-module-meta">Circulatory system</div>
              </div>
            </button>
            <button
              className={`sidebar-module-btn ${progress.currentView === 'finalQuiz' ? 'active' : ''}`}
              onClick={() => { goToFinalQuiz(); onClose?.(); }}
            >
              <div className="sidebar-module-icon" style={{ background: '#fef3c7', color: '#d97706' }}>
                {"🏆"}
              </div>
              <div className="sidebar-module-info">
                <div className="sidebar-module-title">Final Quiz</div>
                <div className="sidebar-module-meta">All modules mixed</div>
              </div>
            </button>
            <button
              className={`sidebar-module-btn ${progress.currentView === 'review' ? 'active' : ''}`}
              onClick={() => { goToReview(); onClose?.(); }}
            >
              <div className="sidebar-module-icon" style={{ background: '#ede9fe', color: '#7c3aed' }}>
                {"📖"}
              </div>
              <div className="sidebar-module-info">
                <div className="sidebar-module-title">Lecture Review</div>
                <div className="sidebar-module-meta">Pathways & test review</div>
              </div>
            </button>
            <button
              className={`sidebar-module-btn ${progress.currentView === 'sequence' ? 'active' : ''}`}
              onClick={() => { goToSequence(); onClose?.(); }}
            >
              <div className="sidebar-module-icon" style={{ background: '#e0f2fe', color: '#0284c7' }}>
                {"🔢"}
              </div>
              <div className="sidebar-module-info">
                <div className="sidebar-module-title">Sequence Ordering</div>
                <div className="sidebar-module-meta">Pathways & process steps</div>
              </div>
            </button>
          </div>
        </div>

        <div className="sidebar-theme-toggle">
          <button className="theme-btn" onClick={toggleTheme}>
            {progress.theme === 'light' ? '\uD83C\uDF19' : '\u2600\uFE0F'}
            <span>{progress.theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
          </button>
        </div>
      </aside>
    </>
  );
}
