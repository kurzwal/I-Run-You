import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import LoginView from './components/Login';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/Signup" element={<LoginView />}  />
        <Route path="/Login" element={<LoginView />}  />
      </Routes>
    </div>
  );
}

export default App;
