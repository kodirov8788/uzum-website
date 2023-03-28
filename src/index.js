import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Single from './pages/SinglePage/Single';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='product/:id' element={<Single />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

