import { create } from 'zustand';

interface Location {
    UserLatitude: number;
    UserLongitude: number;
}

interface Parks {
    parkIndex: number;
    parkName: string;
    parkAddress: string;
    parkLatitude: number;
    parkLongitude: number;
    parkArea: number;
}

interface LocationStoreInterface {
    userLocation: Location;

    closeParks: Array<Parks>;

    setUserLocation: (userLocation: Location) => void;
    setCloseParks: (closeParks: Array<Parks>) => void;
}



const useStore = create<LocationStoreInterface>((set) => ({
    userLocation: {
        UserLatitude: 0,
        UserLongitude: 0,
    },

    closeParks: [],

    setUserLocation: (userLocation) => set((state) => ({ ...state, userLocation})),
    setCloseParks: (closeParks) => set((state) => ({ ...state, closeParks})),

}))

export default useStore;

