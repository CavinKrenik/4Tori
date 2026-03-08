# 4 Tori -- Anatomy & Physiology Study Platform

A structured, section-by-section study web app for Anatomy & Physiology. Content is extracted from nine university-level PDF slide decks and lab manuals, then organized into digestible learning blocks with inline review questions, section quizzes, flashcards, key terms, memory aids, clinical scenarios, a 48-structure circulatory diagram labeling exercise, and a cumulative final quiz.

Built with React 18 + Vite. No backend required -- runs entirely in the browser with progress saved to localStorage.

---

## Table of Contents

- [How It Works](#how-it-works)
- [Study Modes](#study-modes)
- [Modules](#modules)
- [Diagram Labeling](#diagram-labeling)
- [Final Quiz](#final-quiz)
- [Content at a Glance](#content-at-a-glance)
- [Source Material](#source-material)
- [Getting Started](#getting-started)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)

---

## How It Works

Each module is split into **3 sections** that follow a consistent study flow:

1. **Learn** -- Content is revealed progressively in short blocks. Inline multiple-choice review questions appear between blocks to check understanding as you read (spaced ~every 3 items).
2. **Quiz** -- A section quiz tests everything covered in that section. Questions are presented one at a time with try-again on first wrong answer, immediate feedback, explanations for missed items, and a score summary. 60% required to pass.
3. **Flashcards** -- Flip cards for term review with keyboard navigation, shuffle, and progress tracking.

After completing a section, advance to the next. Each module also provides **key terms** with definitions and **memory aids** to reinforce retention. Two modules (Heart, Blood Vessels) include **clinical scenario quizzes** that test applied reasoning.

Beyond individual modules, the app includes a **Diagram Labeling** exercise with 48 circulatory structures and a **Final Quiz** that pulls 20 random questions from across all modules.

Progress is saved automatically to your browser -- pick up where you left off at any time. Dark mode is available via the sidebar toggle.

---

## Study Modes

| Mode | Description | Available In |
|------|-------------|--------------|
| **Learn** | Progressive content blocks with inline review questions | All 5 modules (15 sections) |
| **Section Quiz** | Per-section assessment with score tracking | All 5 modules (15 sections) |
| **Flashcards** | Flip cards with shuffle & keyboard nav | Heart, Blood |
| **Scenario Quiz** | Clinical case-based reasoning | Heart (8 scenarios), Blood Vessels (10 scenarios) |
| **Diagram Labeling** | Interactive circulatory anatomy | Standalone (48 structures) |
| **Final Quiz** | 20 random questions from all modules, reshufflable | Standalone |

---

## Modules

### 1. Endocrine System

> Source: *6. Endocrine systemPDF.pdf* + *BI232 Exercise 13 - Endocrine & Blood*

| Section | Title | Learn Items | Inline Qs | Quiz Qs |
|---------|-------|:-----------:|:---------:|:-------:|
| 1 | Endocrine Basics, Hormone Chemistry & Mechanisms | 15 | 5 | 12 |
| 2 | Glands & Hormones: Hypothalamus, Pituitary, Thyroid, Adrenals, Pancreas | 17 | 6 | 15 |
| 3 | Stress (GAS), Aging & Endocrine Disorders | 14 | 4 | 15 |

**42** section quiz Qs -- **15** inline review Qs -- **37** key terms -- **19** memory aids

---

### 2. The Heart

> Source: *8. heartPDF.pdf* + *Exercise 14 - The Heart*

| Section | Title | Learn Items | Inline Qs | Quiz Qs |
|---------|-------|:-----------:|:---------:|:-------:|
| 1 | Heart Anatomy, Chambers & Valves | 9 | 3 | 17 |
| 2 | Conduction System, ECG, Cardiac Cycle & Cardiac Output | 10 | 3 | 22 |
| 3 | Autonomic HR Control, Stroke Volume, CHF & Risk Factors | 11 | 3 | 26 |

**65** section quiz Qs -- **9** inline review Qs -- **50** flashcards -- **47** key terms -- **15** memory aids -- **8** scenario questions

---

### 3. Blood

> Source: *the blood is the lifePDF.pdf* + *BI232 Exercise 13 - Endocrine & Blood*

| Section | Title | Learn Items | Inline Qs | Quiz Qs |
|---------|-------|:-----------:|:---------:|:-------:|
| 1 | Blood Overview, Plasma & Hemopoiesis | 12 | 3 | 10 |
| 2 | RBCs, Hemoglobin & Anemia | 12 | 3 | 10 |
| 3 | WBCs, Clotting & Blood Types | 29 | 9 | 20 |

**40** section quiz Qs -- **15** inline review Qs -- **38** flashcards -- **45** key terms -- **17** memory aids

---

### 4. Blood Vessels

> Source: *9. VesselsPDF.pdf* + *Exercise 15 - Blood Vessels* + *Exercise 16 - Blood Pressure & Lymphatic*

| Section | Title | Learn Items | Inline Qs | Quiz Qs |
|---------|-------|:-----------:|:---------:|:-------:|
| 1 | Vessel Anatomy, Types & Circulatory Routes | 12 | 3 | 12 |
| 2 | Capillary Exchange, Hemodynamics & Blood Pressure | 15 | 5 | 12 |
| 3 | Venous Return, Shock & Blood Pressure Regulation | 18 | 5 | 15 |

**39** section quiz Qs -- **13** inline review Qs -- **42** key terms -- **16** memory aids -- **10** scenario questions

---

### 5. Lymphatic & Immune System

> Source: *10 Lymphatic and Immune SystemsPDF.pdf* + *Exercise 16 - Blood Pressure & Lymphatic*

| Section | Title | Learn Items | Inline Qs | Quiz Qs |
|---------|-------|:-----------:|:---------:|:-------:|
| 1 | Lymphatic System: Vessels, Flow, Cells, Tissues & Organs | 13 | 3 | 10 |
| 2 | Nonspecific Resistance: Barriers, Phagocytosis, Inflammation & Fever | 12 | 3 | 12 |
| 3 | Specific Immunity: T Cells, B Cells, Antibodies & Disorders | 24 | 9 | 15 |

**37** section quiz Qs -- **15** inline review Qs -- **43** key terms -- **19** memory aids

---

## Diagram Labeling

An interactive circulatory system labeling exercise with **48 anatomical structures** across 5 body regions:

| Region | Structures |
|--------|:----------:|
| Head & Neck | 8 |
| Upper Limb | 10 |
| Heart & Great Vessels | 6 |
| Abdomen & Pelvis | 11 |
| Lower Limb | 13 |

Each structure card includes: function, origin, region supplied, branches, and clinical significance. Structures are classified as artery, vein, or both.

---

## Final Quiz

A cumulative assessment that randomly selects **20 questions** from the combined quiz pools of all 5 modules (223 total questions). Features:

- Questions are shuffled with a seeded PRNG for reproducibility
- Each question shows which module and section it came from
- Results screen groups missed questions by module for targeted review
- **"New Random 20"** button reshuffles the entire pool for a fresh round
- Progress is saved to localStorage so you can resume mid-quiz
- 60% required to pass

---

## Content at a Glance

| Content Type | Count |
|:-------------|------:|
| Modules | 5 |
| Sections | 15 |
| Learn items | 223 |
| Inline review questions | 67 |
| Section quiz questions | 223 |
| Flashcards | 88 |
| Key terms | 214 |
| Memory aids | 86 |
| Scenario questions | 18 |
| Labeling structures | 48 |
| CourseData question bank | 133 |
| **Total assessment items** | **589** |

---

## Source Material

All content is derived from scraped university PowerPoint lecture slides and lab manuals stored in `public/AllModulesallTXT/`:

| File | Module |
|------|--------|
| `6. Endocrine systemPDF.txt` | Endocrine System |
| `8. heartPDF.txt` | The Heart |
| `the blood is the lifePDF.txt` | Blood |
| `9. VesselsPDF.txt` | Blood Vessels |
| `10 Lymphatic and Immune SystemsPDF.txt` | Lymphatic & Immune System |
| `BI232_Exercise 13 - Endocrine & Blood.txt` | Endocrine + Blood (lab) |
| `Exercise 14 - The Heart.txt` | Heart (lab) |
| `Exercise 15 - Blood Vessels.txt` | Blood Vessels (lab) |
| `Exercise 16 - Blood Pressure & Lymphatic.txt` | Blood Vessels + Lymphatic (lab) |

All quiz questions, inline questions, and learn content have been verified against these original source documents.

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Open `http://localhost:5173` in your browser. No account or backend needed.

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| **React 18** | Component framework |
| **Vite 5** | Dev server & bundler |
| **CSS custom properties** | Theming (light/dark) |
| **localStorage** | Progress persistence |

Zero runtime dependencies beyond React. Pure client-side SPA -- deploy anywhere that serves static files.

---

## Project Structure

```
src/
  App.jsx                      # Root component & view routing (7 views)
  main.jsx                     # React entry point
  courseData.js                 # Module blueprints & question banks (133 Qs)
  fullDataOverrides.js          # Enriched learn content from source texts
  styles.css                    # Global styles import
  components/
    common/
      ProgressRing.jsx          # Circular progress indicator
      QuestionCard.jsx          # Reusable MC question with try-again
    flashcards/
      FlashcardDeck.jsx         # Flip-card review deck
    home/
      HomeView.jsx              # Dashboard with module cards
    labeling/
      LabelingExercise.jsx      # Circulatory diagram labeling
      StructureCard.jsx         # Anatomy info card
    layout/
      Sidebar.jsx               # Navigation sidebar
      TopBar.jsx                # Top navigation bar
    learn/
      LearnView.jsx             # Progressive learn mode with inline Qs
    quiz/
      FinalQuiz.jsx             # 20-question cumulative final
      ScenarioQuiz.jsx          # Clinical scenario quiz
      SectionQuiz.jsx           # Per-section quiz
  context/
    StudyContext.jsx             # Global state, progress, navigation
  data/
    blood.js                    # Blood module data
    endocrine.js                # Endocrine module data
    heart.js                    # Heart module data
    labelingData.js             # 48 labeling structures
    lymphatic.js                # Lymphatic module data
    vessels.js                  # Blood Vessels module data
  styles/
    components.css
    flashcards.css
    home.css
    labeling.css
    layout.css
    learn.css
    quiz.css
    variables.css
```
