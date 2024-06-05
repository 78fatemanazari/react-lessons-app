import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Course } from './pages/Course';
import { Excuse } from './pages/Excuse';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/course' element={<Course />} />
        <Route path='/excuse' element={<Excuse />} />
      </Routes>
    </Router>
  )
}
export default App;
