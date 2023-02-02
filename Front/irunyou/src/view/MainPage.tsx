import React from 'react';
import { useState, useEffect } from 'react';
import './views.css';
import useToggleStore from './Store';
import axios from 'axios';

import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import Drawer from '@mui/material/Drawer';

import MenuImg from '../assets/bars-solid.svg';
import Xmark from '../assets/xmark-solid.svg';
import KakaoMap from '../components/KakaoMap';
import MainMenu from '../components/MenuComp/MainMenu';
import MyInfo from '../components/MenuComp/MyInfo';
import ParkList from '../components/MenuComp/ParkList';
import ParkInfo from '../components/MenuComp/ParkInfo';
import MySchedule from '../components/MenuComp/MySchedule';
import { useLocation } from 'react-router';




function MenuIcon() {
    return (
      <div className="speed-dial-container">
        <img className="speed-dial-icon" src={ MenuImg } />
      </div>
    )
  }
  


export default function MainPage(){

    interface locationType {
        loaded: boolean;
        coordinates?: { lat: number; lng: number };
        error?: { code: number; message: string };
    }

    // 좌표(위도, 경도) 받아오는 메서드
    const useGeolocation = () => {
        const [location, setLocation] = useState<locationType>({
          loaded: false,
          coordinates: { lat: 0, lng: 0, }
        })
      
        // 성공에 대한 로직
        const onSuccess = (location: { coords: { latitude: number; longitude: number; }; }) => {
          setLocation({
            loaded: true,
            coordinates: {
              lat: location.coords.latitude,
              lng: location.coords.longitude,
            }
          })
        }
      
        // 에러에 대한 로직
        const onError = (error: { code: number; message: string; }) => {
          setLocation({
            loaded: true,
            error,
          })
        }
      
        useEffect(() => {
          // navigator 객체 안에 geolocation이 없다면
          // 위치 정보가 없는 것.
          if (!("geolocation" in navigator)) {
            onError({
              code: 0,
              message: "Geolocation not supported",
            })
          }
          navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }, [])
      
        return location;
    }

    // 좌표로 axios get요청 보내는 메서드
    const getParkList = () => {
        // 유저 좌표 받아오기
        const userLocation = useGeolocation();

    };
            


    const { 
        // 변수값
        mapOpen, menuOpen, menuState, popRegist, popUpdate,
        // 지도와 메뉴 여닫기
        openMap, toggleMenu,
        // 메뉴 종류 정하기
        setMenuMain, setMenuMyInfo, setMenuParkList,
        setMenuParkInfo, setMenuMySchedule,
        // 일정 생성/수정창 여닫기
        togglePopRegist, togglePopUpdate,
    } = useToggleStore();
    return (
        <div>
            {/* 기본그림 */}
            <Box sx={{...(mapOpen ? {display: 'none'} : {display: 'flex'})}}> {/* false되면 나옴 */}
                <div className="home-main-img"></div>
            </Box>
            {/* 지도 */}
            <Box sx={{...(!mapOpen ? {display: 'none'} : {display: 'flex'})}}> {/* true되면 나옴 */}
                {/* <KakaoMap></KakaoMap> */}
            </Box>
            {/* 공지사항 alert창 */}
            <></>
            {/* 메뉴버튼 */}
            <SpeedDial
                ariaLabel="Menu btn"
                onClick={() => toggleMenu()}
                sx={{ position: 'absolute', top: 16, right: 16,
                ...(menuOpen && {display: 'none'})}}
                icon={<SpeedDialIcon 
                    
                    icon={<MenuIcon />}
                />}>
            </SpeedDial>
            {/* 메인메뉴 */}
            <Drawer
                sx={{
                width: 0,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    borderTopLeftRadius: '10px',
                    borderBottomLeftRadius: '10px',
                    width: '25%',
                    boxSizing: 'border-box',
                },
                }}
                variant="persistent"
                anchor="right"
                open={menuOpen}
            >
                <MainMenu></MainMenu>
                <Box>
                <img className='x-icon' src={ Xmark }
                    onClick={() => toggleMenu()} />
                </Box>
            </Drawer>

            {/* 내 정보 */}
            <Drawer
                sx={{
                width: 0,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    borderRadius: '10px',
                    width: '25%',
                    boxSizing: 'border-box',
                },
                }}
                variant="persistent"
                anchor="right"
                open={menuOpen && menuState == 1}
            >
                <MyInfo></MyInfo>
                <Box>
                <img className='x-icon' src={ Xmark }
                    onClick={() => toggleMenu()} />
                </Box>
            </Drawer>

            {/* 공원 찾기(리스트) */}
            <Drawer
                sx={{
                width: 0,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    borderRadius: '10px',
                    width: '25%',
                    boxSizing: 'border-box',
                },
                }}
                variant="persistent"
                anchor="right"
                open={menuOpen && (menuState == 2 || menuState == 3)}
            >
                <ParkList></ParkList>
                <Box>
                <img className='x-icon' src={ Xmark }
                    onClick={() => toggleMenu()} />
                </Box>
            </Drawer>

            {/* 공원 찾기(리스트) */}
            <Drawer
                sx={{
                width: 0,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    borderRadius: '10px',
                    width: '25%',
                    boxSizing: 'border-box',
                },
                }}
                variant="persistent"
                anchor="right"
                open={menuOpen && menuState == 3}
            >
                <ParkInfo></ParkInfo>
                <Box>
                <img className='x-icon' src={ Xmark }
                    onClick={() => toggleMenu()} />
                </Box>
            </Drawer>

            {/* 내 일정 */}
            <Drawer
                sx={{
                width: 0,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    borderRadius: '10px',
                    width: '25%',
                    boxSizing: 'border-box',
                },
                }}
                variant="persistent"
                anchor="right"
                open={menuOpen && menuState == 4}
            >
                <MySchedule></MySchedule>
                <Box>
                <img className='x-icon' src={ Xmark }
                    onClick={() => toggleMenu()} />
                </Box>
            </Drawer>
        </div>
    )
}