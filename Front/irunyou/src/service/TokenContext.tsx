import React, { FC, useEffect } from "react";
import axios from "axios";
import { create } from "domain";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router";

let logoutTimer: NodeJS.Timeout;

type LoginToken = {
  grantType: string;
  accessToken: string;
  tokenExpiresIn: number;
};

const TokenContext = React.createContext({
  token: "",
  isLogin: false,
  isAdmin: true
});

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

const loginTokenHandler = (token: string, expiration: number) => {
  localStorage.setItem("token", token);
  localStorage.setItem("expirationTime", String(expiration));

  const remainingTime = calculateRemainingTime(expiration);

  return remainingTime;
};

const retrieveStoredToken = () => {
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

const LogoutAction = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationTime");
};

export const TokenContextProvider = (props: React.PropsWithChildren) => {
  const tokenData = retrieveStoredToken();

  let initialToken: any;
  if (tokenData) {
    initialToken = tokenData.token!;
  }

  const [token, setToken] = useState(initialToken);

  const [isAdmin, setIsAdmin] = useState(true);

  const isLoginCheck = !!token;

  const autoLogout = useCallback(() => {
    setToken("");
    LogoutAction();
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  useEffect(() => {
    if (tokenData) {
      console.log(tokenData.duration);
      logoutTimer = setTimeout(autoLogout, tokenData.duration);
    }
  }, [tokenData, autoLogout]);

  const contextValue = {
    token,
    isLogin: isLoginCheck,
    isAdmin
  };

  return (
    <TokenContext.Provider value={contextValue}>
      {props.children}
    </TokenContext.Provider>
  );
};


export default TokenContext;
