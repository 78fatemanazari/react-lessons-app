import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Course } from './pages/Course';
import { Excuse } from './pages/Excuse';
import { Nav } from './components/Nav';
import { Profile } from './pages/Profile';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';

export const ProfileContext = createContext();

function App() {
  const [username, setUsername] = useState("Fatema");
  const client = new QueryClient({defaultOptions : {
    queries: {refetchOnWindowFocus: false},
  }});
  return (
    <ProfileContext.Provider value={{username, setUsername}}>
      <QueryClientProvider client={client}>
    <Router>
      <Nav />
      <Routes>
        <Route path='/course' element={<Course />} />
        <Route path='/excuse' element={<Excuse />} />
        <Route path='/profile/:name?' element={<Profile />} />
      </Routes>
    </Router>
      </QueryClientProvider>
    </ProfileContext.Provider>
  )
}
export default App;
