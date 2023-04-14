import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dives from './pages/Dives';
import Library from './pages/Library';
import Post from './pages/Post';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dives" element={<Dives />} />
          <Route path="/library" element={<Library />} />
          <Route path="/post/:postId" element={<Post />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
