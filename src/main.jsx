import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'; // we use this instead of BrowserRouter bc Github Pages doesn't support server-side routing 
import './css/index.css';
import App from './App.jsx'

// This will inject the app at the div with id='root' in index.html

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
