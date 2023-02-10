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

interface Marker {
    map: any;
    position: any;
    title : string;
    image : any;
}

interface LocationStoreInterface {
    userLocation: Location;

    closeParks: Array<Parks>;
    markers: Array<Marker>;

    setUserLocation: (userLocation: Location) => void;
    setCloseParks: (closeParks: Array<Parks>) => void;
    setMarkers: (markers: Array<Marker>) => void;
}



const useStore = create<LocationStoreInterface>((set) => ({
    userLocation: {
        UserLatitude: 0,
        UserLongitude: 0,
    },

    closeParks: [],
    markers: [],

    setUserLocation: (userLocation) => set((state) => ({ ...state, userLocation})),
    setCloseParks: (closeParks) => set((state) => ({ ...state, closeParks})),
    setMarkers: (markers) => set((state) => ({ ...state, markers})),

}))

export default useStore;

