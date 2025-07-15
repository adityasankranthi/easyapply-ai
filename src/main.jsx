import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'; // Import the provider


const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ThemeProvider> {/* Wrap the App with the ThemeProvider */}
        <App />
      </ThemeProvider>
    </StrictMode>,
  );
}
