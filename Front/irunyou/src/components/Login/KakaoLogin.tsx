import { useLocation, useNavigate } from "react-router";
import { REST_API_KEY, REDIRECT_URI } from "./Kakao";
import { useEffect } from "react";

export default function KaKaoLogin() {
  const location = useLocation();
  const navigate = useNavigate();
  const KAKAO_CODE = location.search.split('=')[1];

  // 토큰 저장
  const getKakaoToken = () => {
    fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
    })
      .then(res => res.json())
      .then(data => {
        if(data.access_token) {
          localStorage.setIten('token', data.access_token);
        } else {
          navigate('/');
        }
      });
  };
  
  useEffect(() => {
    if(!location.search) return;
    getKakaoToken();
  }, []);
  
  return <div>KakaoLogin</div>;
}
