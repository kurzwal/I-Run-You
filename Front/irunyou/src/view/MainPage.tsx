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
            <div className=""></div>
            {/* 기본그림 */}
            <Box sx={{...(mapOpen ? {display: 'none'} : {display: 'flex'})} }> {/* false되면 나옴 */}
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
                    width: '390px', // 2023-02-08 : 홍지혜 - 메뉴바 크기 고정 (카카오맵참조) 이하 동일
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
                    width: '390px',
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
                    width: '390px',
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
                    width: '390px',
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
                    width: '390px',
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