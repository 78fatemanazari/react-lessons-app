import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Course } from './pages/Course';
import { Excuse } from './pages/Excuse';
import { Nav } from './components/Nav';
import { Profile } from './pages/Profile';
import './App.css';

export const ProfileContext = createContext();

function App() {
  const [username, setUsername] = useState("Fatema");
  return (
    <ProfileContext.Provider value={{username, setUsername}}>
    <Router>
      <Nav />
      <Routes>
        <Route path='/course' element={<Course />} />
        <Route path='/excuse' element={<Excuse />} />
        <Route path='/profile/:name?' element={<Profile />} />
      </Routes>
    </Router>
    </ProfileContext.Provider>
  )
}
export default App;
