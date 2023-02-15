// 2023-02-3 홍지혜
// axios 인터셉터 (토큰인증)

import axios from "axios";
import { useLocation } from "react-router";


const instance = axios.create({
    baseURL : "http://localhost:4040/"
})


// const authCtx = useContext(AuthContext);
// React Hook "useContext" cannot be called at the top level.
// React Hooks must be called in a React function component or a custom React Hook function

// 모든 요청의 헤더에 JWT토큰을 추가하는 인터셉터추가
instance.interceptors.request.use(
    config => {
        const storedToken = localStorage.getItem("token");
        
        if(storedToken) {
            config.headers.Authorization = `Bearer ${storedToken}`;
        } 
        
        return config;
    },
    error => {
        // Promise 객체는 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타냅니다.
        // Promise.reject(reason) 메서드는 주어진 이유(reason)로 거부된 Promise 객체를 반환합니다.
        return Promise.reject(error);
    }
    );

// 토큰이 만료되어 403 응답 에러가 발생할 경우, localStorage를 비우고 재 로그인 하게 한다.
instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        // 왜 403오류???
        // 401 : 클라이언트가 인증되지 않음
        // 403 : 클라이언트가 해당 요청에 대한 권한이 없음
        if(localStorage.getItem("token") === null) {
            alert("로그인 후 이용해 주세요.")
            window.location.href="/Login"
        } 

        if(localStorage.getItem("token") && error.response.status === 403) {
            localStorage.clear();
            alert("로그인 시간이 만료되었습니다. 다시 로그인 해 주세요.")
            window.location.href="/Login"
        }
        // return Promise.reject(error);
    }

);


export default instance;