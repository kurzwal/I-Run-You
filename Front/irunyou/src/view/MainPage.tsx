import React from 'react';
import { useEffect } from 'react';
import './views.css';
import useToggleStore from './Store';
import axiosInstance from '../service/axiosInstance';

import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import Drawer from '@mui/material/Drawer';
import Dialog from '@mui/material/Dialog';

import MenuImg from '../assets/bars-solid.svg';
import Xmark from '../assets/xmark-solid.svg';
import KakaoMap from '../components/KakaoMap';
import MainMenu from '../components/MenuComp/MainMenu';
import MyInfo from '../components/MenuComp/MyInfo';
import ParkList from '../components/MenuComp/ParkList';
import ParkInfo from '../components/MenuComp/ParkInfo';
import MySchedule from '../components/MenuComp/MySchedule';



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
        mapOpen, menuOpen, menuState, popRegist, popUpdate, userNickname, 
        // 지도와 메뉴 여닫기
        openMap, toggleMenu,
        // 메뉴 종류 정하기
        setMenuMain, setMenuMyInfo, setMenuParkList,
        setMenuParkInfo, setMenuMySchedule,
        // 일정 생성/수정창 여닫기
        togglePopRegist, togglePopUpdate, setUserNickname,
    } = useToggleStore();

    const setMainImageNone:() => void = () => {
        const mainImg = document.getElementById("home-main-img");
        if (mainImg) {
            mainImg.style.display = "none";
        }
    }

    useEffect(() => {
        if (mapOpen) {
            setMainImageNone();
        }
    },[mapOpen])

    const getUserNickname = async () => {
        await axiosInstance
            .get('irunyou/mypage')
            .then(response => {
                const nicknameInstance = response.data.data.userNickName;
                setUserNickname(nicknameInstance);
            }).catch(error => {
                alert(error.message)
            })
    }

    useEffect(() => {
        if (!userNickname) {
            const nicknameInstance = getUserNickname();
        }
    }, [userNickname])

    return (
        <div className="main-page-wraper">
            <div className=""></div>

            {/* 기본그림 */}

            {/* <div id="home-main-img" className="home-main-img"></div> */}

            {/* 지도 */}

            <KakaoMap></KakaoMap>

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


            {/* 공원 상세정보 팝업 */}
            <ParkInfo></ParkInfo>


        </div>
    )
}