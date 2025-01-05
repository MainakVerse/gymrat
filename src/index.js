import React from 'react';
import { createRoot } from 'react-dom/client'; // Correct import for React 18
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Select the root element from the DOM
const rootElement = document.getElementById('root');

// Create a React root using React 18's createRoot API
const root = createRoot(rootElement);

// Render the application wrapped in BrowserRouter for routing
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
