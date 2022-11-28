import React from 'react';
import './App.css';
import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import FormPage from './pages/FormPage';
import HomePage from './pages/HomePage';
import TransferPage from './pages/TransferPage';
import NGCashProvider from './context/NGCashProvider';
import TransactionsPage from './pages/TransactionsPage';
import DependentsPage from './pages/DependentsPage';

function App() {
  return (
    <BrowserRouter>
      <NGCashProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<FormPage />} />
          <Route path="/register" element={<FormPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/dependents" element={<DependentsPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/transactions/:id" element={<TransactionsPage />} />
          <Route path="/transfer" element={<TransferPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </NGCashProvider>
    </BrowserRouter>
  );
}

export default App;
