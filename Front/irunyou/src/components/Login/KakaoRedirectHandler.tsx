import React, { useEffect } from "react";
import axios from "axios";
import api from "./axios";

// 작성자 : 최예정
// 파일의 역할 : kakao api
// 작성날짜 : 2023-01-27

// 업데이트 작성자 : -
// 업데이트 날짜 : -

const { Kakao } = window;

const KakaoRedirectHandler = () => {
  useEffect(() => {
    let params = new URL(document.location.toString()).searchParams;
    let code = params.get("code");
    let grant_type = "authorization_code";
    let client_id = process.env.REACT_APP_KAKAO_CLIENT_ID;
    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${process.env.REACT_APP_FRONTEND_BASE_URL}/login/oauth&code=${code}`,
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      .then((res) => {
        console.log(res);
        Kakao.Auth.setAccessToken(res.data.access_token);
        Kakao.API.request({
          url: "/v2/user/me",
          success: function (response: any) {
            console.log(response);
          },
          fail: function (error: any) {
            console.log(error);
          },
        });
        api
          .post("/api/user/account/login/kakao", {
            accessToken: res.data.access_token,
          })
          .then((res) => {
            console.log(res);
            });
          });
  });
  return <div>kakao login 완료</div>;
}

export default KakaoRedirectHandler;