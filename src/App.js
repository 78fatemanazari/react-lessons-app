import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Course } from './pages/Course';
import { Excuse } from './pages/Excuse';
import { Nav } from './components/Nav';
import { Profile } from './pages/Profile';
import './App.css';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/course' element={<Course />} />
        <Route path='/excuse' element={<Excuse />} />
        <Route path='/profile/:name?' element={<Profile />} />
      </Routes>
    </Router>
  )
}
export default App;
