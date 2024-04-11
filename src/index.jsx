import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import './style.css';

import { HomePage } from './HomePage';
import { ProductPage } from './ProductPage';

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>XXXMuck</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<HomePage />} />
        <Route path="product/:id" element={<ProductPage />} />
      </Route>
    </Routes>
  </BrowserRouter>);