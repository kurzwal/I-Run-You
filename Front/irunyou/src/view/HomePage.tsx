// 첫 홈화면 (로그인이 안 된 상태)
import React from 'react';
import './views.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Button from '@mui/material/Button';
import { Link } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#b6cf55',
    },
    secondary: {
      // 나중에 바꿀 색깔
      main: '#11cb5f',
    },
  },
});


export default function HomePage() {
  return (
    <div className="home-main-img">
      <div className="home-container">
        <div className="txt-container">
          <div className="home-title">I Run You는 당신의 달리기를 응원합니다</div>
          <br />
          <div className="home-desc">
            우리 서비스는 아무튼 좀 좋고 다른 사람이랑 같이 달릴 수 있고<br />
            이러저러해서 꼭 사용하기를 바랍니다 예<br />
          </div>
        <div className="btn-container">
          <ThemeProvider theme={theme}>
            <Button className="btn" 
              variant="contained" color="primary" size="large" 
                sx={{fontSize: 24}}
                href="/Login"
              >로그인</Button>
            <Button className="btn" 
              variant="contained" color="primary" size="large" 
                sx={{fontSize: 24}}
                href="/Signup"
              >회원가입</Button>
          </ThemeProvider>
        </div>
        </div>
      </div>
      <div className="home-footer">
        <div className="copyrights">© 2023. 우리조 All rights reserved.</div>
        <div className="contact-us">Contact Us</div>
      </div>
    </div>
  )
}