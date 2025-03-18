import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { CssBaseline } from '@mui/material';

import './index.css';
import M3 from './theme/M3/M3.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <M3>
      <CssBaseline />
      <App />
    </M3>
  </StrictMode>
);
