import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import LoginView from './components/Login/Login';
import SignupView from './components/Login/Signup';
import axios from 'axios';

// useEffect(() => {
//   axios.post('http://localhost:4040/irunyou/', {requsetbody에 들어갈 데이터}).then((response) => {
//     const data = response.data;
//     alert(data);
//   })
// }, []);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Signup" element={<SignupView />}  />
        <Route path="/Login" element={<LoginView />}  />
      </Routes>
    </div>
  );
}

export default App;
