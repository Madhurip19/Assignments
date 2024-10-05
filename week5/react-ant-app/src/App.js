import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductTable from './components/ProductTable';
import ProductForm from './components/ProductForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductTable />} />
        <Route path="/confirm" element={<ProductForm />} />
      </Routes>
    </Router>
  );
}

export default App;
