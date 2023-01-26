import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import LoginView from './components/Login/Login';
import SignupView from './components/Login/Signup';
import axios from 'axios';
import IDPWView from './components/Login/IDPW';
import EMverifyView from './components/Login/EMverify';
import EmailView from './components/Login/Email';
import SUSCView from './components/Login/SUSC';



function App() {
  
  // eclips -> vscode (GET)
  useEffect(() => {
    axios.get('http//localhost:4040/irunyou/').then((Response) => {
      const data = Response.data;
      const result = data.result;
      if (!result) {
        alert(data.message)
      }
    })
  }, []);

  // const User = {
  //   id,
  //   password,
  // }

  // useEffect(() => {
  //   axios.post('http//localhost:4040/irunyou/', {requestbody에 담아서 백으로 보낼 데이터}=> 데이터).then((response) => {
  //     const data = response.data;
  //     alert(data);
  //   })
  // }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/Signup" element={<SignupView />}  />
        <Route path="/Login" element={<LoginView />}  />
        <Route path="/IDPW" element={<IDPWView />}  />
        <Route path="/EMverify" element={<EMverifyView />}  />
        <Route path="/Email" element={<EmailView />} />
        <Route path="/SUSC" element={<SUSCView />} />
      </Routes>
    </div>
  );
}

export default App;
