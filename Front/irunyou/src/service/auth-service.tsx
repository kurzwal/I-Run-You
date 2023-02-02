import axios from "axios";
import { create } from "domain";
import { useState } from "react";
import { useNavigate } from "react-router";

const createTokenHeader = (token: string) => {
  return {
    headers: {
      Authorization: "Bearer " + token
    }
  };
};

const calculateRemainingTime = (expiration: number) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expiration).getTime();
  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
};

export const loginTokenHandler = (token: string, expiration: number) => {
  localStorage.setItem("token", token);
  localStorage.setItem("expirationTime", String(expiration));

  const remainingTime = calculateRemainingTime(expiration);

  return remainingTime;
};

export const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationDate = localStorage.getItem("expirationTime") || "0";
  const remaingTime = calculateRemainingTime(+storedExpirationDate);

  if (remaingTime <= 1000) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");

    return null;
  }

  return {
    token: storedToken,
    duration: remaingTime
  };
};

export const LoginAction = (userEmail: string, userPassword: string, movePage: any) => {
  return axios
    .post("http://localhost:4040/irunyou/auth/login", {
      userEmail,
      userPassword
    })
    .then((response) => {

      const tokendata = response.data;

      // if (!tokendata.result) {
      //   alert("token error");
      //   return;
      // }

      loginTokenHandler(tokendata.token, tokendata.expiration);

      if(!response.data.status) {
        alert(response.data.message);
        movePage("/Login");
      
      } else {
        alert(response.data.message);
        movePage("/MainPage");
      }

    })
    .catch((error) => {
      alert(error.response.message);
      movePage("/Login");
    });
};
