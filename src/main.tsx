import React from 'react';

import ReactDOM from 'react-dom/client';
import QueryProvider from 'services';

import App from './App';

import 'assets/styles/styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryProvider>
      <App />
    </QueryProvider>
  </React.StrictMode>
);
