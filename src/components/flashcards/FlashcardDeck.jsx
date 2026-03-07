import { useState, useEffect } from 'react';
import { useStudy } from '../../context/StudyContext';

export default function FlashcardDeck({ module, sectionIndex }) {
  const { goToQuiz, navigate } = useStudy();
  const section = module.sections[sectionIndex];
  const cards = section.flashcards || [];

  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [seenCards, setSeenCards] = useState(new Set());

  // Reset when section changes
  useEffect(() => {
    setCurrentCard(0);
    setIsFlipped(false);
    setSeenCards(new Set());
  }, [module.id, section.id]);

  // Keyboard navigation
  useEffect(() => {
    function handleKey(e) {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        handleFlip();
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        handlePrev();
      }
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [currentCard, isFlipped, cards.length]);

  function handleFlip() {
    setIsFlipped(prev => !prev);
    setSeenCards(prev => new Set([...prev, currentCard]));
  }

  function handleNext() {
    if (currentCard < cards.length - 1) {
      setCurrentCard(prev => prev + 1);
      setIsFlipped(false);
    }
  }

  function handlePrev() {
    if (currentCard > 0) {
      setCurrentCard(prev => prev - 1);
      setIsFlipped(false);
    }
  }

  function handleShuffle() {
    // Just pick a random card that isn't the current one
    if (cards.length <= 1) return;
    let next;
    do { next = Math.floor(Math.random() * cards.length); } while (next === currentCard);
    setCurrentCard(next);
    setIsFlipped(false);
  }

  if (cards.length === 0) {
    return (
      <div className="page-content">
        <div className="empty-state">
          <div className="empty-state-icon">🃏</div>
          <p>No flashcards available for this section.</p>
          <button className="btn btn-primary" onClick={() => navigate('learn')}>
            Back to Learning
          </button>
        </div>
      </div>
    );
  }

  const card = cards[currentCard];

  return (
    <div className="page-content">
      <div className="flashcard-header">
        <h2 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--weight-semibold)' }}>
          {section.title} — Flashcards
        </h2>
        <div className="flashcard-controls">
          <button className="btn btn-ghost btn-sm" onClick={handleShuffle}>
            🔀 Shuffle
          </button>
          <button className="btn btn-secondary btn-sm" onClick={goToQuiz}>
            Take Quiz
          </button>
        </div>
      </div>

      <div className="flashcard-counter">
        Card {currentCard + 1} of {cards.length}
        {seenCards.size > 0 && (
          <span style={{ marginLeft: 'var(--space-md)', color: 'var(--text-muted)' }}>
            · {seenCards.size} reviewed
          </span>
        )}
      </div>

      <div className="flashcard-stage">
        <div
          className={`flip-card ${isFlipped ? 'flipped' : ''}`}
          onClick={handleFlip}
          role="button"
          tabIndex={0}
          aria-label={isFlipped ? 'Click to see question' : 'Click to see answer'}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="flip-card-label">Question</div>
              <div className="flip-card-text">{card.front}</div>
              <div className="flip-card-hint">Click or press Space to flip</div>
            </div>
            <div className="flip-card-back">
              <div className="flip-card-label">Answer</div>
              <div className="flip-card-text">{card.back}</div>
              <div className="flip-card-hint">Click or press Space to flip back</div>
            </div>
          </div>
        </div>

        <div className="flashcard-nav">
          <button
            className="flashcard-nav-btn"
            onClick={handlePrev}
            disabled={currentCard === 0}
            aria-label="Previous card"
          >
            ←
          </button>

          <div className="flashcard-dots">
            {cards.map((_, i) => (
              <div
                key={i}
                className={`flashcard-dot ${i === currentCard ? 'active' : ''} ${seenCards.has(i) ? 'seen' : ''}`}
                onClick={() => { setCurrentCard(i); setIsFlipped(false); }}
              />
            ))}
          </div>

          <button
            className="flashcard-nav-btn"
            onClick={handleNext}
            disabled={currentCard === cards.length - 1}
            aria-label="Next card"
          >
            →
          </button>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: 'var(--space-lg)', color: 'var(--text-muted)', fontSize: 'var(--text-xs)' }}>
        Keyboard: Space/Enter = flip · Arrow keys = navigate
      </div>

      {seenCards.size === cards.length && (
        <div className="section-complete animate-fade-up" style={{ marginTop: 'var(--space-xl)' }}>
          <div className="section-complete-icon">🎉</div>
          <h3 className="section-complete-title">All Cards Reviewed!</h3>
          <p className="section-complete-subtitle">
            You&apos;ve seen all {cards.length} flashcards. Ready to test yourself?
          </p>
          <div className="section-complete-actions">
            <button className="btn btn-primary" onClick={goToQuiz}>
              Take Section Quiz
            </button>
            <button className="btn btn-ghost" onClick={() => { setSeenCards(new Set()); setCurrentCard(0); setIsFlipped(false); }}>
              Review Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
