import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import FireBase from './components/FirebaseImageUpload';

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/createPost" element={<CreatePost />} />
      </Routes>
      <FireBase />
    </div>
  );
}

export default App;
