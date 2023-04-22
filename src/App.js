import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Dives from './pages/Dives';
import Logs from './pages/Logs';
import Me from "./pages/Me";
import Post from './pages/Post';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dives" element={<Dives />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/me" element={<Me />} />
          <Route path="/post/:postId" element={<Post />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
