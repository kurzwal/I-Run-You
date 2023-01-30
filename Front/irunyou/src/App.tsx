import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Routes, Route } from "react-router-dom";

import LoginView from './components/Login/Login';
import SignupView from './components/Login/Signup';
import IDPWView from './components/Login/IDPW';
import EMverifyView from './components/Login/EMverify';
import EmailView from './components/Login/Email';
import SUSCView from './components/Login/SUSC';
import KakaoRedirectHandler from './components/Login/KakaoRedirectHandler';
import KakaoMap from './components/KakaoMap';
import HomePage from './view/HomePage';
import MainPage from './view/MainPage';

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
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/MainPage" element={<MainPage />}></Route>
        <Route path="/Signup" element={<SignupView />}  />
        <Route path="/Login" element={<LoginView />}  />
        <Route path="/IDPW" element={<IDPWView />}  />
        <Route path="/EMverify" element={<EMverifyView />}  />
        <Route path="/Email" element={<EmailView />} />
        <Route path="/SUSC" element={<SUSCView />} />
        <Route path="/Login/kakao" element={<KakaoRedirectHandler />} />
        {/* <Route path="*" element={<NotFound />} /> */}

        {/* <Route path='/' element={< Autehntication />}/> */}
        <Route  />
      </Routes>
    </div>
  );
}

export default App;
