import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Routes, Route } from "react-router-dom";
import LoginView from './components/Login/Login';
import SignupView from './components/Login/Signup';
// import from "module";
import IDPWView from './components/Login/IDPW';
import EMverifyView from './components/Login/EMverify';
import EmailView from './components/Login/Email';
import SUSCView from './components/Login/SUSC';
import MainMenu from './components/MainMenu';

// 작성자 : 최예정
// 파일의 역할 : 링크 연결, 백 -> 프론트 GET
// 작성날짜 : 2023-01-25

// 업데이트 작성자 : 최예정
// 업데이트 날짜 : 2023-01-26

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

  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<MainMenu/>}/> */}
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
