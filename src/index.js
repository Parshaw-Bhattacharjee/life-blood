import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { LoaderProvider } from './contexts/loader-context';
import { AuthProvider } from './contexts/auth-context';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoaderProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </LoaderProvider>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root')
);
