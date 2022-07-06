import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CalculatorPage from './components/CalculatorPage';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="quotes" element={<CalculatorPage />} />
        <Route path="calculator" element={<HomePage />} />
      </Routes>     
    </div>
  );
}

export default App;
