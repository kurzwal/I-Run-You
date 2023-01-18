import React from 'react';
import logo from './logo.svg';
import './App.css';
import KakaoMap from './components/KakaoMap';
import MainMenu from './components/MainMenu'

function App() {
  return (
    <div className="App">
      <KakaoMap></KakaoMap>
      <MainMenu></MainMenu>
    </div>
  );
}

export default App;
