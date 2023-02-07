// 작성자 : 유열림
// 파일의 역할 : zustand 기반 공원 변수 저장 파일
// 작성날짜 : 2023-02-06

// 업데이트 작성자 : -
// 업데이트 날짜 : -

import { create } from 'zustand';

interface ParkStoreInterface {
  parks: Array<{
    parkName: string,
    parkAddress: string,
    parkLatitude: number,
    parkLongitude: number,
    parkArea: number
  }>;
  addPark: (park: {
    parkName: string,
    parkAddress: string,
    parkLatitude: number,
    parkLongitude: number,
    parkArea: number
  }) => void;
}

const useStore = create<ParkStoreInterface>((set) => ({
  parks: [],
  addPark: (park) =>
    set((state) => ({
      ...state,
      parks: [...state.parks, park],
    })),
}));

export default useStore;