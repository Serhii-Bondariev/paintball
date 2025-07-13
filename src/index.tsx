import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
// import './index.css';
// import { createRoot } from 'react-dom/client';
// import App from './App';

// const container = document.getElementById('root');
// if (container) {
//   const root = createRoot(container);
//   root.render(<App />);
// } else {
//   throw new Error("Root container not found");
// }