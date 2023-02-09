import { create } from 'zustand';

interface Park {
    parkIndex: number;
    parkName: string;
    parkAddress: string;
    parkLatitude: number;
    parkLongitude: number;
    parkArea: number;
}

interface Schedule {
    runSchedulePark: number;
    runScheduleTitle: string;
    runScheduleDatetime: Date;
}

interface MapStoreInterface {
    parkInfoOpen: boolean;
    parkInfoState: number;

    parkInfo: Park;

    scheduleInfoArray: Array<Schedule>;

    toggleParkInfo: () => void;
    setStateParkInfo: () => void;
    setStateScheduleInfo: () => void;   // 스케쥴 자세히보기
    setStateScheduleRegist: () => void;   // 스케쥴 생성하기

    setParkInfo: (park:Park) => void;
    setScheduleInfoArray: (scheduleInfoArray:Array<Schedule>) => void;
}



const useStore = create<MapStoreInterface>((set) => ({
    // 공원 상세정보 여닫는 boolean
    parkInfoOpen: false,
    // 상세정보창 종류 정하는 number
    // 0 : 공원정보, 1 : 스케쥴 자세히보기, 2 : 스케쥴 생성하기
    parkInfoState: 0,

    // 클릭하면 띄울 공원정보 저장
    parkInfo: {
        parkIndex: 0,
        parkName: "",
        parkAddress: "",
        parkLatitude: 0,
        parkLongitude: 0,
        parkArea: 0,
    },

    scheduleInfoArray: [],

    // 상세정보 여닫기
    toggleParkInfo: () => set((state) => ({ ...state, parkInfoOpen : !state.parkInfoOpen })),
    // 공원정보 보기
    setStateParkInfo: () => set((state) => ({...state, parkInfoState : 0})),
    setStateScheduleInfo: () => set((state) => ({...state, parkInfoState : 1})),
    setStateScheduleRegist: () => set((state) => ({...state, parkInfoState : 2})),

    setParkInfo: (parkInfo) => set((state) => ({ ...state, parkInfo})),
    setScheduleInfoArray: (scheduleInfoArray) => set((state) => ({ ...state, scheduleInfoArray})),
}))

export default useStore;

