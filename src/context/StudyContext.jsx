import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const StudyContext = createContext(null);
const STORAGE_KEY = '4-tori-progress-v4';

const defaultProgress = () => ({
  modules: {},
  currentModuleId: null,
  currentSectionIndex: 0,
  currentView: 'home', // home | learn | quiz | flashcards | masterQuiz
  theme: 'light',
});

function initModuleProgress(moduleData) {
  const modules = {};
  moduleData.forEach(mod => {
    modules[mod.id] = {
      currentSectionIndex: 0,
      sections: {},
    };
    mod.sections.forEach((sec, i) => {
      modules[mod.id].sections[sec.id] = {
        learnComplete: false,
        inlineAnswers: {},
        quizAnswers: {},
        quizScore: null,
        quizTotal: sec.quiz.length,
        complete: false,
      };
    });
  });
  return modules;
}

export function StudyProvider({ children, modules }) {
  const [progress, setProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Merge with any new modules that might have been added
        const existing = parsed.modules || {};
        modules.forEach(mod => {
          if (!existing[mod.id]) {
            existing[mod.id] = {
              currentSectionIndex: 0,
              sections: {},
            };
          }
          mod.sections.forEach(sec => {
            if (!existing[mod.id].sections[sec.id]) {
              existing[mod.id].sections[sec.id] = {
                learnComplete: false,
                inlineAnswers: {},
                quizAnswers: {},
                quizScore: null,
                quizTotal: sec.quiz.length,
                complete: false,
              };
            }
          });
        });
        return { ...defaultProgress(), ...parsed, modules: existing };
      }
    } catch (e) { /* ignore */ }
    return { ...defaultProgress(), modules: initModuleProgress(modules) };
  });

  // Save to localStorage on every change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', progress.theme);
  }, [progress.theme]);

  const update = useCallback((fn) => {
    setProgress(prev => {
      const next = typeof fn === 'function' ? fn(prev) : { ...prev, ...fn };
      return next;
    });
  }, []);

  // Navigation
  const navigate = useCallback((view, moduleId = null, sectionIndex = null) => {
    update(prev => ({
      ...prev,
      currentView: view,
      ...(moduleId !== null && { currentModuleId: moduleId }),
      ...(sectionIndex !== null && { currentSectionIndex: sectionIndex }),
    }));
  }, [update]);

  const goHome = useCallback(() => navigate('home'), [navigate]);

  const openModule = useCallback((moduleId) => {
    navigate('learn', moduleId, 0);
  }, [navigate]);

  const goToSection = useCallback((sectionIndex) => {
    update(prev => ({ ...prev, currentSectionIndex: sectionIndex, currentView: 'learn' }));
  }, [update]);

  const goToQuiz = useCallback(() => {
    update(prev => ({ ...prev, currentView: 'quiz' }));
  }, [update]);

  const goToFlashcards = useCallback(() => {
    update(prev => ({ ...prev, currentView: 'flashcards' }));
  }, [update]);

  const goToScenarios = useCallback(() => {
    update(prev => ({ ...prev, currentView: 'scenarios' }));
  }, [update]);

  const goToMasterQuiz = useCallback(() => {
    update(prev => ({ ...prev, currentView: 'masterQuiz', currentModuleId: null }));
  }, [update]);

  const goToLabeling = useCallback(() => {
    update(prev => ({ ...prev, currentView: 'labeling', currentModuleId: null }));
  }, [update]);

  const goToFinalQuiz = useCallback(() => {
    update(prev => ({ ...prev, currentView: 'finalQuiz', currentModuleId: null }));
  }, [update]);

  const goToReview = useCallback(() => {
    update(prev => ({ ...prev, currentView: 'review', currentModuleId: null }));
  }, [update]);

  // Learn progress
  const markLearnComplete = useCallback((moduleId, sectionId) => {
    update(prev => ({
      ...prev,
      modules: {
        ...prev.modules,
        [moduleId]: {
          ...prev.modules[moduleId],
          sections: {
            ...prev.modules[moduleId].sections,
            [sectionId]: {
              ...prev.modules[moduleId].sections[sectionId],
              learnComplete: true,
            }
          }
        }
      }
    }));
  }, [update]);

  // Inline question answer
  const answerInlineQuestion = useCallback((moduleId, sectionId, questionIndex, answer) => {
    update(prev => ({
      ...prev,
      modules: {
        ...prev.modules,
        [moduleId]: {
          ...prev.modules[moduleId],
          sections: {
            ...prev.modules[moduleId].sections,
            [sectionId]: {
              ...prev.modules[moduleId].sections[sectionId],
              inlineAnswers: {
                ...prev.modules[moduleId].sections[sectionId].inlineAnswers,
                [questionIndex]: answer,
              }
            }
          }
        }
      }
    }));
  }, [update]);

  // Quiz answer
  const answerQuizQuestion = useCallback((moduleId, sectionId, questionIndex, answer) => {
    update(prev => ({
      ...prev,
      modules: {
        ...prev.modules,
        [moduleId]: {
          ...prev.modules[moduleId],
          sections: {
            ...prev.modules[moduleId].sections,
            [sectionId]: {
              ...prev.modules[moduleId].sections[sectionId],
              quizAnswers: {
                ...prev.modules[moduleId].sections[sectionId].quizAnswers,
                [questionIndex]: answer,
              }
            }
          }
        }
      }
    }));
  }, [update]);

  // Complete quiz
  const completeQuiz = useCallback((moduleId, sectionId, score, total) => {
    update(prev => ({
      ...prev,
      modules: {
        ...prev.modules,
        [moduleId]: {
          ...prev.modules[moduleId],
          sections: {
            ...prev.modules[moduleId].sections,
            [sectionId]: {
              ...prev.modules[moduleId].sections[sectionId],
              quizScore: score,
              quizTotal: total,
              complete: score / total >= 0.6,
            }
          }
        }
      }
    }));
  }, [update]);

  // Reset section quiz
  const resetSectionQuiz = useCallback((moduleId, sectionId) => {
    update(prev => ({
      ...prev,
      modules: {
        ...prev.modules,
        [moduleId]: {
          ...prev.modules[moduleId],
          sections: {
            ...prev.modules[moduleId].sections,
            [sectionId]: {
              ...prev.modules[moduleId].sections[sectionId],
              quizAnswers: {},
              quizScore: null,
              complete: false,
            }
          }
        }
      }
    }));
  }, [update]);

  // Fully reset a section (learn + quiz + inline)
  const resetSection = useCallback((moduleId, sectionId) => {
    update(prev => ({
      ...prev,
      modules: {
        ...prev.modules,
        [moduleId]: {
          ...prev.modules[moduleId],
          sections: {
            ...prev.modules[moduleId].sections,
            [sectionId]: {
              learnComplete: false,
              inlineAnswers: {},
              quizAnswers: {},
              quizScore: null,
              quizTotal: prev.modules[moduleId].sections[sectionId].quizTotal,
              complete: false,
            }
          }
        }
      }
    }));
  }, [update]);

  // Advance to next section
  const nextSection = useCallback((moduleId, moduleData) => {
    const mod = moduleData.find(m => m.id === moduleId);
    if (!mod) return;
    update(prev => {
      const nextIdx = prev.currentSectionIndex + 1;
      if (nextIdx < mod.sections.length) {
        return { ...prev, currentSectionIndex: nextIdx, currentView: 'learn' };
      }
      // Module complete - go home
      return { ...prev, currentView: 'home' };
    });
  }, [update]);

  // Toggle theme
  const toggleTheme = useCallback(() => {
    update(prev => ({
      ...prev,
      theme: prev.theme === 'light' ? 'dark' : 'light',
    }));
  }, [update]);

  // Computed helpers
  const getModuleProgress = useCallback((moduleId) => {
    const mod = progress.modules[moduleId];
    if (!mod) return { completed: 0, total: 0, percent: 0 };
    const sections = Object.values(mod.sections);
    const completed = sections.filter(s => s.complete).length;
    return {
      completed,
      total: sections.length,
      percent: sections.length ? Math.round((completed / sections.length) * 100) : 0,
    };
  }, [progress]);

  const getOverallProgress = useCallback(() => {
    let totalSections = 0;
    let completedSections = 0;
    let totalQuestions = 0;
    let answeredQuestions = 0;

    Object.values(progress.modules).forEach(mod => {
      Object.values(mod.sections).forEach(sec => {
        totalSections++;
        if (sec.complete) completedSections++;
        totalQuestions += sec.quizTotal || 0;
        answeredQuestions += Object.keys(sec.quizAnswers || {}).length;
      });
    });

    return {
      totalSections,
      completedSections,
      totalQuestions,
      answeredQuestions,
      percent: totalSections ? Math.round((completedSections / totalSections) * 100) : 0,
    };
  }, [progress]);

  const getSectionProgress = useCallback((moduleId, sectionId) => {
    return progress.modules[moduleId]?.sections[sectionId] || {
      learnComplete: false,
      inlineAnswers: {},
      quizAnswers: {},
      quizScore: null,
      quizTotal: 0,
      complete: false,
    };
  }, [progress]);

  const value = {
    progress,
    navigate,
    goHome,
    openModule,
    goToSection,
    goToQuiz,
    goToFlashcards,
    goToScenarios,
    goToMasterQuiz,
    goToLabeling,
    goToFinalQuiz,
    goToReview,
    markLearnComplete,
    answerInlineQuestion,
    answerQuizQuestion,
    completeQuiz,
    resetSectionQuiz,
    resetSection,
    nextSection,
    toggleTheme,
    getModuleProgress,
    getOverallProgress,
    getSectionProgress,
  };

  return (
    <StudyContext.Provider value={value}>
      {children}
    </StudyContext.Provider>
  );
}

export function useStudy() {
  const ctx = useContext(StudyContext);
  if (!ctx) throw new Error('useStudy must be used within StudyProvider');
  return ctx;
}
