import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Single from './pages/SinglePage/Single';
import UzumAdmin from './pages/admin/UzumAdmin';
import Navbar from './components/navbar/Navbar';
import NavBottom from './components/nav_bottom/NavBottom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <NavBottom />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='product/:id' element={<Single />} />
        <Route path='admin' element={<UzumAdmin />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

