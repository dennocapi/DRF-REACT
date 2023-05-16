import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import { createRoot } from 'react-dom/client';

const routing = (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
    <Footer />
  </Router>
);

createRoot(document.getElementById('root')).render(routing);
