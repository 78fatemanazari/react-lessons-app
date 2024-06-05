import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Course } from './Course';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/course' element={<Course />} />
      </Routes>
    </Router>
  )
}
export default App;
