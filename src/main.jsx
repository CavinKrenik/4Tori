import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Design system styles (order matters)
import './styles/variables.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/learn.css';
import './styles/quiz.css';
import './styles/flashcards.css';
import './styles/home.css';
import './styles/labeling.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
