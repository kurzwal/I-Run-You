// 작성자 : 유열림
// 파일의 역할 : zustand 기반 변수 저장 파일
// 작성날짜 : 2023-01-30

// 업데이트 작성자 : -
// 업데이트 날짜 : -

import { create } from 'zustand';

interface MapStoreInterface {
    mapOpen: boolean;
    menuOpen: boolean;
    menuState: number;
    popRegist: boolean;
    popUpdate: boolean;
    openMap: () => void;
    toggleMenu: () => void;
    setMenuMain: () => void;
    setMenuMyInfo: () => void;
    setMenuParkList: () => void;
    setMenuParkInfo: () => void;
    setMenuMySchedule: () => void;
    togglePopRegist: () => void;
    togglePopUpdate: () => void;

}

interface ParkInfoInterface {
    parkIdx: number;
    setParkIdx: (by:number) => void;
}

const useStore = create<MapStoreInterface>((set) => ({
    mapOpen: false,    // 맵 열기
    menuOpen: true,    // 메뉴 여닫기
    menuState: 0,      // 메뉴 종류
// 0: 메인, 1: 내 정보, 2: 공원 리스트, 3: 공원 상세보기, 4: 내 일정
    popRegist: false,  // 일정 생성
    popUpdate: false,  // 일정 수정
    
    // 지도 열기
    openMap: () => set((state) => ({ ...state, mapOpen : true })),
    // 메뉴 여닫기
    toggleMenu: () => set((state) => ({ ...state, menuOpen : !state.menuOpen })),
    // 메뉴 이동
    setMenuMain: () => set((state) => ({...state, menuState : 0})),
    setMenuMyInfo: () => set((state) => ({...state, menuState : 1})),
    setMenuParkList: () => set((state) => ({...state, menuState : 2})),
    setMenuParkInfo: () => set((state) => ({...state, menuState : 3})),
    setMenuMySchedule: () => set((state) => ({...state, menuState : 4})),

    // 일정 생성 창 여닫기
    togglePopRegist: () => set((state) => ({...state, popRegist : !state.popRegist})),
    // 일정 수정 창 여닫기
    togglePopUpdate: () => set((state) => ({...state, popUpdate : !state.popUpdate})),
}))

export default useStore;

