import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



// 작성자 : 최예정
// 파일의 역할 : Link태그를 쓰기 위한 연결
// 작성날짜 : 2023-01-25


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);

// react strict모드 
// 애플리케이션 내의 잠재적인 문제를 알아내기 위한 도구입니다.
// Fragment와 같이 UI를 렌더링하지 않으며, 
// 자손들에 대한 부가적인 검사와 경고를 활성화합니다.
// Strict 모드는 개발 모드에서만 활성화되기 때문에, 프로덕션 빌드에는 영향을 끼치지 않습니다.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
