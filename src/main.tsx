import React from 'react';

import QueryProvider from 'services';
import ReactDOM from 'react-dom/client';
import SessionProvider from 'context/session';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundryWrapper from 'layouts/error-boundry';

import App from './App';

import 'assets/styles/styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryProvider>
      <BrowserRouter>
        <ErrorBoundryWrapper>
          <SessionProvider>
            <App />
          </SessionProvider>
        </ErrorBoundryWrapper>
      </BrowserRouter>
    </QueryProvider>
  </React.StrictMode>
);
