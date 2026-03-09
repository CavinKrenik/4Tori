import { useStudy } from '../../context/StudyContext';
import ProgressRing from '../common/ProgressRing';

const MODULE_COLORS = {
  endocrine: '#8b5cf6',
  heart: '#ef4444',
  blood: '#dc2626',
  vessels: '#3b82f6',
  lymphatic: '#10b981',
};

const MODULE_EMOJIS = {
  endocrine: '\u2697\uFE0F',
  heart: '\u2764\uFE0F',
  blood: '\uD83E\uDE78',
  vessels: '\uD83C\uDF0A',
  lymphatic: '\uD83D\uDEE1\uFE0F',
};

export default function HomeView({ modules }) {
  const { openModule, goToMasterQuiz, goToLabeling, goToReview, getModuleProgress, getOverallProgress } = useStudy();
  const overall = getOverallProgress();

  return (
    <div className="page-content">
      <div className="welcome-section animate-fade-up">
        <h1 className="welcome-title">Welcome to 4 Tori</h1>
        <p className="welcome-subtitle">
          Master Anatomy & Physiology one section at a time. Each module breaks down
          complex topics into digestible chunks with quizzes and flashcards to lock in your knowledge.
        </p>
      </div>

      <div className="home-stats animate-fade-up">
        <div className="stat-grid">
          <div className="stat-card">
            <div className="stat-value">{modules.length}</div>
            <div className="stat-label">Modules</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{overall.totalSections}</div>
            <div className="stat-label">Sections</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{overall.completedSections}</div>
            <div className="stat-label">Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{overall.totalQuestions}</div>
            <div className="stat-label">Questions</div>
          </div>
        </div>
      </div>

      {overall.completedSections > 0 && (
        <div className="motivation-banner animate-fade-up" style={{ marginBottom: 'var(--space-xl)' }}>
          {overall.percent === 100
            ? "You've completed all modules! Take the Master Quiz to test your knowledge."
            : `You're ${overall.percent}% through the course. Keep going!`
          }
          {overall.completedSections >= 3 && (
            <button
              className="btn btn-secondary btn-sm"
              style={{ marginLeft: 'var(--space-md)', background: 'rgba(255,255,255,0.2)', border: 'none', color: 'white' }}
              onClick={goToMasterQuiz}
            >
              Master Quiz
            </button>
          )}
        </div>
      )}

      <div className="standalone-cards animate-fade-up" style={{ marginBottom: 'var(--space-xl)' }}>
        <div className="standalone-card" onClick={goToLabeling} style={{ '--card-color': '#e11d48' }}>
          <div className="standalone-card-icon">{"\uD83E\uDEC0"}</div>
          <div className="standalone-card-body">
            <h3 className="standalone-card-title">Diagram Labeling</h3>
            <p className="standalone-card-desc">Circulatory system — 48 structures</p>
          </div>
        </div>
        <div className="standalone-card" onClick={goToMasterQuiz} style={{ '--card-color': '#f59e0b' }}>
          <div className="standalone-card-icon">{"\uD83C\uDFC6"}</div>
          <div className="standalone-card-body">
            <h3 className="standalone-card-title">Final Quiz</h3>
            <p className="standalone-card-desc">All modules mixed — 20 random Qs</p>
          </div>
        </div>
        <div className="standalone-card" onClick={goToReview} style={{ '--card-color': '#6366f1' }}>
          <div className="standalone-card-icon">{"\uD83D\uDCD6"}</div>
          <div className="standalone-card-body">
            <h3 className="standalone-card-title">Lecture Review</h3>
            <p className="standalone-card-desc">Pathways & test review — 5 sections</p>
          </div>
        </div>
      </div>

      <div className="module-grid">
        {modules.map((mod, i) => {
          const modProgress = getModuleProgress(mod.id);
          const color = MODULE_COLORS[mod.icon] || '#6366f1';
          const emoji = MODULE_EMOJIS[mod.icon] || '\uD83D\uDCDA';
          const totalQuestions = mod.sections.reduce((sum, s) => sum + s.quiz.length + s.inlineQuestions.length, 0);

          return (
            <div
              key={mod.id}
              className={`module-card ${modProgress.percent === 100 ? 'completed' : ''} animate-fade-up`}
              style={{ animationDelay: `${i * 0.05}s` }}
              onClick={() => openModule(mod.id)}
            >
              <div className="module-card-stripe" style={{ background: color }} />
              <div className="module-card-top">
                <div className="module-card-icon" style={{ background: `${color}15`, color }}>
                  {emoji}
                </div>
                <ProgressRing percent={modProgress.percent} size={40} strokeWidth={3} color={color} />
              </div>

              <h3 className="module-card-title">{mod.title}</h3>
              <p className="module-card-desc">{mod.description}</p>

              <div className="module-card-stats">
                <span className="module-card-stat">{mod.sections.length} sections</span>
                <span className="module-card-stat">{totalQuestions} questions</span>
              </div>

              <div className="module-card-progress">
                <div className="progress-bar" style={{ flex: 1 }}>
                  <div className="progress-bar-fill" style={{ width: `${modProgress.percent}%`, background: color }} />
                </div>
                <span className="module-card-progress-text">
                  {modProgress.completed}/{modProgress.total}
                </span>
              </div>

              <div className="module-card-actions">
                <span className="btn btn-primary btn-sm" style={{ background: color }}>
                  {modProgress.percent === 0 ? 'Start Learning' : modProgress.percent === 100 ? 'Review' : 'Continue'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
