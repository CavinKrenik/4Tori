import { useState } from 'react';
import { StudyProvider, useStudy } from './context/StudyContext';

// Data
import endocrine from './data/endocrine';
import heart from './data/heart';
import blood from './data/blood';
import vessels from './data/vessels';
import lymphatic from './data/lymphatic';

// Layout
import Sidebar from './components/layout/Sidebar';
import TopBar from './components/layout/TopBar';

// Views
import HomeView from './components/home/HomeView';
import LearnView from './components/learn/LearnView';
import SectionQuiz from './components/quiz/SectionQuiz';
import ScenarioQuiz from './components/quiz/ScenarioQuiz';
import FlashcardDeck from './components/flashcards/FlashcardDeck';
import LabelingExercise from './components/labeling/LabelingExercise';
import FinalQuiz from './components/quiz/FinalQuiz';

const ALL_MODULES = [endocrine, heart, blood, vessels, lymphatic];

function AppShell() {
  const { progress } = useStudy();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentModule = progress.currentModuleId
    ? ALL_MODULES.find(m => m.id === progress.currentModuleId)
    : null;

  const currentSection = currentModule
    ? currentModule.sections[progress.currentSectionIndex] || null
    : null;

  function renderView() {
    switch (progress.currentView) {
      case 'learn':
        return currentModule ? (
          <LearnView module={currentModule} sectionIndex={progress.currentSectionIndex} />
        ) : (
          <HomeView modules={ALL_MODULES} />
        );
      case 'quiz':
        return currentModule ? (
          <SectionQuiz module={currentModule} sectionIndex={progress.currentSectionIndex} />
        ) : (
          <HomeView modules={ALL_MODULES} />
        );
      case 'flashcards':
        return currentModule ? (
          <FlashcardDeck module={currentModule} sectionIndex={progress.currentSectionIndex} />
        ) : (
          <HomeView modules={ALL_MODULES} />
        );
      case 'scenarios':
        return currentModule ? (
          <ScenarioQuiz module={currentModule} />
        ) : (
          <HomeView modules={ALL_MODULES} />
        );
      case 'labeling':
        return <LabelingExercise />;
      case 'finalQuiz':
        return <FinalQuiz modules={ALL_MODULES} />;
      case 'home':
      default:
        return <HomeView modules={ALL_MODULES} />;
    }
  }

  return (
    <div className="app-shell">
      <Sidebar
        modules={ALL_MODULES}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <main className="main-content">
        <TopBar
          module={currentModule}
          section={currentSection}
          onMenuClick={() => setSidebarOpen(prev => !prev)}
        />
        {renderView()}
      </main>
    </div>
  );
}

export default function App() {
  return (
    <StudyProvider modules={ALL_MODULES}>
      <AppShell />
    </StudyProvider>
  );
}

