import { useEffect, useMemo, useState } from 'react';
import { courseData } from './courseData';

const STORAGE_KEY = '4-tori-progress-v3';

function createFallback(modules) {
  const activeSectionByModule = {};
  modules.forEach((module) => {
    activeSectionByModule[module.id] = 0;
  });

  return {
    activeModuleId: modules[0]?.id || null,
    activeSectionByModule,
    sectionQuizState: {},
    mixedQuizState: { currentIndex: 0, answers: {}, complete: false }
  };
}

function loadProgress(modules) {
  const fallback = createFallback(modules);

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;

    const parsed = JSON.parse(raw);
    return {
      ...fallback,
      ...parsed,
      activeSectionByModule: {
        ...fallback.activeSectionByModule,
        ...(parsed.activeSectionByModule || {})
      }
    };
  } catch {
    return fallback;
  }
}

function getSectionState(progress, moduleId, sectionId) {
  return (
    progress.sectionQuizState[moduleId]?.[sectionId] || {
      currentIndex: 0,
      answers: {},
      complete: false
    }
  );
}

function getSectionScore(section, state) {
  const correct = section.quiz.reduce(
    (count, question, index) => count + (state.answers[index] === question.answer ? 1 : 0),
    0
  );

  return { correct, total: section.quiz.length };
}

function getModuleCompletion(module, progress) {
  let completed = 0;
  module.sections.forEach((section) => {
    if (progress.sectionQuizState[module.id]?.[section.id]?.complete) completed += 1;
  });
  return { completed, total: module.sections.length };
}

function App() {
  const [progress, setProgress] = useState(() => loadProgress(courseData.modules));
  const [tab, setTab] = useState('home');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const activeModule =
    courseData.modules.find((module) => module.id === progress.activeModuleId) || courseData.modules[0];

  const activeSectionIndex = progress.activeSectionByModule[activeModule.id] || 0;
  const safeSectionIndex = Math.min(activeSectionIndex, activeModule.sections.length - 1);
  const activeSection = activeModule.sections[safeSectionIndex];
  const activeSectionState = getSectionState(progress, activeModule.id, activeSection.id);

  const stats = useMemo(() => {
    const totalSections = courseData.modules.reduce((sum, module) => sum + module.sections.length, 0);
    let completedSections = 0;
    let completedModules = 0;
    let answeredQuestions = Object.keys(progress.mixedQuizState.answers || {}).length;

    courseData.modules.forEach((module) => {
      const completion = getModuleCompletion(module, progress);
      completedSections += completion.completed;
      if (completion.completed === completion.total) completedModules += 1;

      const moduleState = progress.sectionQuizState[module.id] || {};
      Object.values(moduleState).forEach((sectionState) => {
        answeredQuestions += Object.keys(sectionState.answers || {}).length;
      });
    });

    return { totalSections, completedSections, completedModules, answeredQuestions };
  }, [progress]);

  function selectModule(moduleId) {
    setProgress((current) => ({ ...current, activeModuleId: moduleId }));
    setTab('learn');
  }

  function setSectionIndex(moduleId, index) {
    setProgress((current) => {
      const module = courseData.modules.find((item) => item.id === moduleId);
      const bounded = Math.max(0, Math.min(index, module.sections.length - 1));
      return {
        ...current,
        activeSectionByModule: {
          ...current.activeSectionByModule,
          [moduleId]: bounded
        }
      };
    });
  }

  function stepSection(step) {
    setSectionIndex(activeModule.id, safeSectionIndex + step);
  }

  function setSectionAnswer(moduleId, sectionId, questionIndex, answer) {
    setProgress((current) => {
      const moduleState = current.sectionQuizState[moduleId] || {};
      const sectionState = moduleState[sectionId] || { currentIndex: 0, answers: {}, complete: false };

      return {
        ...current,
        sectionQuizState: {
          ...current.sectionQuizState,
          [moduleId]: {
            ...moduleState,
            [sectionId]: {
              ...sectionState,
              answers: {
                ...sectionState.answers,
                [questionIndex]: answer
              }
            }
          }
        }
      };
    });
  }

  function nextSectionQuestion(module, section) {
    setProgress((current) => {
      const moduleState = current.sectionQuizState[module.id] || {};
      const sectionState = moduleState[section.id] || { currentIndex: 0, answers: {}, complete: false };

      const nextIndex = sectionState.currentIndex + 1;
      const complete = nextIndex >= section.quiz.length;

      return {
        ...current,
        sectionQuizState: {
          ...current.sectionQuizState,
          [module.id]: {
            ...moduleState,
            [section.id]: {
              ...sectionState,
              currentIndex: complete ? sectionState.currentIndex : nextIndex,
              complete
            }
          }
        }
      };
    });
  }

  function resetSectionQuiz(moduleId, sectionId) {
    setProgress((current) => {
      const moduleState = current.sectionQuizState[moduleId] || {};
      return {
        ...current,
        sectionQuizState: {
          ...current.sectionQuizState,
          [moduleId]: {
            ...moduleState,
            [sectionId]: {
              currentIndex: 0,
              answers: {},
              complete: false
            }
          }
        }
      };
    });
  }

  function continueToNextBlock() {
    if (safeSectionIndex < activeModule.sections.length - 1) {
      setSectionIndex(activeModule.id, safeSectionIndex + 1);
      setTab('learn');
      return;
    }

    const moduleIndex = courseData.modules.findIndex((module) => module.id === activeModule.id);
    const nextModule = courseData.modules[moduleIndex + 1];

    if (nextModule) {
      setProgress((current) => ({ ...current, activeModuleId: nextModule.id }));
      setSectionIndex(nextModule.id, 0);
      setTab('learn');
    } else {
      setTab('finalQuiz');
    }
  }

  function setMixedAnswer(questionIndex, answer) {
    setProgress((current) => ({
      ...current,
      mixedQuizState: {
        ...current.mixedQuizState,
        answers: {
          ...current.mixedQuizState.answers,
          [questionIndex]: answer
        }
      }
    }));
  }

  function nextMixedQuestion() {
    setProgress((current) => {
      const nextIndex = current.mixedQuizState.currentIndex + 1;
      const complete = nextIndex >= courseData.mixedQuiz.length;

      return {
        ...current,
        mixedQuizState: {
          ...current.mixedQuizState,
          currentIndex: complete ? current.mixedQuizState.currentIndex : nextIndex,
          complete
        }
      };
    });
  }

  function resetMixedQuiz() {
    setProgress((current) => ({
      ...current,
      mixedQuizState: { currentIndex: 0, answers: {}, complete: false }
    }));
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-card">
          <p className="eyebrow">Anatomy and Physiology</p>
          <h1>{courseData.appName}</h1>
          <p>{courseData.subtitle}</p>
        </div>

        <div className="stats-grid">
          <StatCard label="Modules" value={String(courseData.modules.length)} />
          <StatCard label="Sections" value={`${stats.completedSections}/${stats.totalSections}`} />
          <StatCard label="Module complete" value={String(stats.completedModules)} />
          <StatCard label="Answers logged" value={String(stats.answeredQuestions)} />
        </div>

        <div className="sidebar-section">
          <div className="section-header-row">
            <h2>Module Path</h2>
            <span className="mini-badge">6-8 pages per section</span>
          </div>
          <div className="module-list">
            {courseData.modules.map((module, index) => {
              const completion = getModuleCompletion(module, progress);
              return (
                <button
                  key={module.id}
                  className={`module-button ${module.id === activeModule.id ? 'active' : ''}`}
                  onClick={() => selectModule(module.id)}
                >
                  <div>
                    <span className="module-step">Module {index + 1}</span>
                    <strong>{module.title}</strong>
                    <small>{module.source}</small>
                  </div>
                  <div className="module-meta">
                    <span>{completion.completed}/{completion.total} sections</span>
                    <span>{module.pageCount} pages</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <p className="eyebrow">Current module</p>
            <h2>{activeModule.title}</h2>
            <p className="topbar-text">{activeSection.title} - {activeSection.pages}</p>
          </div>

          <div className="tab-row">
            <TabButton active={tab === 'home'} onClick={() => setTab('home')}>Home</TabButton>
            <TabButton active={tab === 'learn'} onClick={() => setTab('learn')}>Learn</TabButton>
            <TabButton active={tab === 'flashcards'} onClick={() => setTab('flashcards')}>Flip Cards</TabButton>
            <TabButton active={tab === 'sectionQuiz'} onClick={() => setTab('sectionQuiz')}>Section Quiz</TabButton>
            <TabButton active={tab === 'finalQuiz'} onClick={() => setTab('finalQuiz')}>Final Quiz</TabButton>
          </div>
        </header>

        {tab === 'home' && <HomeView onOpenModule={selectModule} progress={progress} />}

        {tab === 'learn' && (
          <LearnView
            module={activeModule}
            section={activeSection}
            sectionIndex={safeSectionIndex}
            onSelectSection={(index) => setSectionIndex(activeModule.id, index)}
            onPrev={() => stepSection(-1)}
            onNext={() => stepSection(1)}
            onStartQuiz={() => setTab('sectionQuiz')}
            onStartFlashcards={() => setTab('flashcards')}
          />
        )}

        {tab === 'flashcards' && <FlashcardsView module={activeModule} section={activeSection} />}

        {tab === 'sectionQuiz' && (
          <SectionQuizView
            module={activeModule}
            section={activeSection}
            state={activeSectionState}
            onAnswer={setSectionAnswer}
            onNext={nextSectionQuestion}
            onReset={resetSectionQuiz}
            onContinue={continueToNextBlock}
          />
        )}

        {tab === 'finalQuiz' && (
          <MixedQuizView
            questions={courseData.mixedQuiz}
            state={progress.mixedQuizState}
            onAnswer={setMixedAnswer}
            onNext={nextMixedQuestion}
            onReset={resetMixedQuiz}
          />
        )}
      </main>
    </div>
  );
}

function HomeView({ onOpenModule, progress }) {
  return (
    <div className="content-grid home-grid">
      <section className="panel hero-panel span-2">
        <p className="eyebrow">Welcome</p>
        <h3>4 Tori Study Home</h3>
        <p>
          A fun offline study app: section-by-section lessons, flip cards, quick quizzes, and a big final mixed quiz.
        </p>
        <div className="chip-row">
          <span className="chip">No API needed</span>
          <span className="chip">One question at a time</span>
          <span className="chip">A/B/C/D options</span>
        </div>
      </section>

      {courseData.modules.map((module) => {
        const completion = getModuleCompletion(module, progress);
        return (
          <section key={module.id} className="panel home-card">
            <h3>{module.title}</h3>
            <p>{module.source}</p>
            <p>{module.objective}</p>
            <div className="chip-row">
              <span className="chip">{module.pageCount} pages</span>
              <span className="chip">{module.sections.length} sections</span>
              <span className="chip">{completion.completed}/{completion.total} done</span>
            </div>
            <button className="primary-button" onClick={() => onOpenModule(module.id)}>
              Open module
            </button>
          </section>
        );
      })}
    </div>
  );
}

function LearnView({
  module,
  section,
  sectionIndex,
  onSelectSection,
  onPrev,
  onNext,
  onStartQuiz,
  onStartFlashcards
}) {
  return (
    <div className="content-grid">
      <section className="panel hero-panel">
        <p className="eyebrow">Section navigation</p>
        <h3>{section.title}</h3>
        <p>{section.pages}</p>
        <p>{section.focus}</p>

        <div className="button-row">
          <button className="secondary-button" onClick={onPrev} disabled={sectionIndex === 0}>
            Previous 6-8 pages
          </button>
          <button className="secondary-button" onClick={onNext} disabled={sectionIndex === module.sections.length - 1}>
            Next 6-8 pages
          </button>
          <button className="secondary-button" onClick={onStartFlashcards}>Flip cards</button>
          <button className="primary-button" onClick={onStartQuiz}>Section quiz</button>
        </div>
      </section>

      <section className="panel">
        <h3>Module map</h3>
        <div className="outline-list">
          {module.sections.map((item, index) => (
            <button
              key={item.id}
              className={`outline-button ${index === sectionIndex ? 'active' : ''}`}
              onClick={() => onSelectSection(index)}
            >
              <strong>{item.title}</strong>
              <span>{item.pages}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="panel span-2">
        <h3>Learn something</h3>
        <ul className="clean-list">
          {(section.learn || []).map((line, index) => (
            <li key={`${section.id}-learn-${index}`}>{line}</li>
          ))}
        </ul>
      </section>

      <section className="panel span-2">
        <h3>Topics in this section</h3>
        <ul className="clean-list">
          {section.topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </section>

      <section className="panel">
        <h3>Key terms</h3>
        <div className="chip-row">
          {section.keyTerms.map((term) => (
            <span className="chip" key={term}>{term}</span>
          ))}
        </div>
      </section>

      <section className="panel">
        <h3>Memory anchors</h3>
        <ul className="clean-list">
          {module.memoryAids.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="panel span-2">
        <h3>{module.table.title}</h3>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                {module.table.columns.map((col) => (
                  <th key={col}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {module.table.rows.map((row, rowIndex) => (
                <tr key={`${module.id}-${rowIndex}`}>
                  {row.map((cell, cellIndex) => (
                    <td key={`${module.id}-${rowIndex}-${cellIndex}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function FlashcardsView({ module, section }) {
  const [flipped, setFlipped] = useState({});

  const cards = useMemo(() => {
    if (section.flashcards?.length) {
      return section.flashcards;
    }

    const topicCards = section.topics.map((topic, index) => ({
      id: `topic-${index}`,
      front: `Topic ${index + 1}`,
      back: topic
    }));

    const termCards = section.keyTerms.map((term, index) => ({
      id: `term-${index}`,
      front: term,
      back: `Key term from ${section.title}`
    }));

    const memoryCards = module.memoryAids.map((tip, index) => ({
      id: `memory-${index}`,
      front: 'Memory aid',
      back: tip
    }));

    return [...topicCards, ...termCards, ...memoryCards].slice(0, 12);
  }, [module.memoryAids, section.flashcards, section.keyTerms, section.title, section.topics]);

  useEffect(() => {
    setFlipped({});
  }, [module.id, section.id]);

  function toggleCard(cardId) {
    setFlipped((current) => ({ ...current, [cardId]: !current[cardId] }));
  }

  return (
    <section className="panel">
      <p className="eyebrow">Flip cards</p>
      <h3>{module.title} - {section.title}</h3>
      <p>Tap a card to flip it.</p>

      <div className="flashcard-grid">
        {cards.map((card) => (
          <button
            key={card.id}
            className={`flip-card ${flipped[card.id] ? 'flipped' : ''}`}
            onClick={() => toggleCard(card.id)}
          >
            <div className="flip-card-inner">
              <span className="flip-face front">{card.front}</span>
              <span className="flip-face back">{card.back}</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

function SectionQuizView({ module, section, state, onAnswer, onNext, onReset, onContinue }) {
  const currentQuestion = section.quiz[state.currentIndex];
  const selected = state.answers[state.currentIndex];
  const score = getSectionScore(section, state);

  if (state.complete) {
    return (
      <section className="panel quiz-panel">
        <p className="eyebrow">Section complete</p>
        <h3>{module.title} - {section.title}</h3>
        <p>
          Score: <strong>{score.correct}</strong> / <strong>{score.total}</strong>
        </p>
        <div className="results-stack">
          {section.quiz.map((item, index) => {
            const answer = state.answers[index];
            const correct = answer === item.answer;
            return (
              <div key={item.id} className={`result-card ${correct ? 'correct' : 'incorrect'}`}>
                <strong>Q{index + 1}. {item.question}</strong>
                <p>Your answer: {answer || '-'} | Correct: {item.answer}</p>
                <p>{item.explanation}</p>
              </div>
            );
          })}
        </div>
        <div className="button-row">
          <button className="primary-button" onClick={onContinue}>Continue to next 6-8 pages</button>
          <button className="secondary-button" onClick={() => onReset(module.id, section.id)}>Retry section</button>
        </div>
      </section>
    );
  }

  return (
    <section className="panel quiz-panel">
      <div className="quiz-topbar">
        <div>
          <p className="eyebrow">One question at a time</p>
          <h3>{module.title}</h3>
          <p>{section.title} - {section.pages}</p>
        </div>
        <div className="progress-pill">Question {state.currentIndex + 1} / {section.quiz.length}</div>
      </div>

      <div className="question-card">
        <h4>{currentQuestion.question}</h4>
        <div className="option-grid">
          {Object.entries(currentQuestion.options).map(([key, value]) => (
            <button
              key={key}
              className={`option-button ${selected === key ? 'selected' : ''}`}
              onClick={() => onAnswer(module.id, section.id, state.currentIndex, key)}
            >
              <span>{key}</span>
              <strong>{value}</strong>
            </button>
          ))}
        </div>

        {selected && (
          <div className={`feedback-box ${selected === currentQuestion.answer ? 'correct' : 'incorrect'}`}>
            <p>
              <strong>{selected === currentQuestion.answer ? 'Correct.' : 'Not quite.'}</strong> Correct answer: {currentQuestion.answer}
            </p>
            <p>{currentQuestion.explanation}</p>
          </div>
        )}

        <div className="button-row">
          <button className="primary-button" disabled={!selected} onClick={() => onNext(module, section)}>
            {state.currentIndex + 1 === section.quiz.length ? 'Finish section quiz' : 'Next question'}
          </button>
          <button className="secondary-button" onClick={() => onReset(module.id, section.id)}>Reset</button>
        </div>
      </div>
    </section>
  );
}

function MixedQuizView({ questions, state, onAnswer, onNext, onReset }) {
  const currentQuestion = questions[state.currentIndex];
  const selected = state.answers[state.currentIndex];

  const score = questions.reduce(
    (count, question, index) => count + (state.answers[index] === question.answer ? 1 : 0),
    0
  );

  if (state.complete) {
    return (
      <section className="panel quiz-panel">
        <p className="eyebrow">Final mixed quiz complete</p>
        <h3>Across all subjects</h3>
        <p>
          Score: <strong>{score}</strong> / <strong>{questions.length}</strong>
        </p>
        <div className="results-stack">
          {questions.map((question, index) => {
            const answer = state.answers[index];
            const correct = answer === question.answer;
            return (
              <div className={`result-card ${correct ? 'correct' : 'incorrect'}`} key={question.id}>
                <strong>Q{index + 1}. [{question.sourceModule}] {question.question}</strong>
                <p>Your answer: {answer || '-'} | Correct: {question.answer}</p>
                <p>{question.explanation}</p>
              </div>
            );
          })}
        </div>
        <button className="primary-button" onClick={onReset}>Restart final quiz</button>
      </section>
    );
  }

  return (
    <section className="panel quiz-panel">
      <div className="quiz-topbar">
        <div>
          <p className="eyebrow">Final mixed quiz</p>
          <h3>Cross-subject review</h3>
          <p>{currentQuestion.sourceModule}</p>
        </div>
        <div className="progress-pill">Question {state.currentIndex + 1} / {questions.length}</div>
      </div>

      <div className="question-card">
        <h4>{currentQuestion.question}</h4>
        <div className="option-grid">
          {Object.entries(currentQuestion.options).map(([key, value]) => (
            <button
              key={key}
              className={`option-button ${selected === key ? 'selected' : ''}`}
              onClick={() => onAnswer(state.currentIndex, key)}
            >
              <span>{key}</span>
              <strong>{value}</strong>
            </button>
          ))}
        </div>

        {selected && (
          <div className={`feedback-box ${selected === currentQuestion.answer ? 'correct' : 'incorrect'}`}>
            <p>
              <strong>{selected === currentQuestion.answer ? 'Correct.' : 'Not quite.'}</strong> Correct answer: {currentQuestion.answer}
            </p>
            <p>{currentQuestion.explanation}</p>
          </div>
        )}

        <div className="button-row">
          <button className="primary-button" disabled={!selected} onClick={onNext}>
            {state.currentIndex + 1 === questions.length ? 'Finish final quiz' : 'Next question'}
          </button>
          <button className="secondary-button" onClick={onReset}>Reset final quiz</button>
        </div>
      </div>
    </section>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="stat-card">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function TabButton({ active, children, onClick }) {
  return (
    <button className={`tab-button ${active ? 'active' : ''}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default App;

