import { useState, useEffect } from 'react';
import "./parklist.css";
import ParkListItem from "./ParkListItem";
import axios from 'axios';
import useStore from '../Parkinfo/Store';
import ParkInfo from '../ParkInfo';

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


export default function ParkListBody() {

  const { parkInfo, setParkInfo } = useStore();

  const [location, setLocation] = useState<Location>({
    UserLatitude: 0,
    UserLongitude: 0,
  });

  const [parks, setParks] = useState<Parks[]>([])

  const fetchData = async (locale: any) => {
    const parksData = await getParks(locale);
    console.log(parksData[1].parkIndex)
    setParks(parksData);
  };

  const getUserLocation = () => {
    const locale: Location = {UserLatitude : 0, UserLongitude: 0}
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          locale.UserLatitude = position.coords.latitude;
          locale.UserLongitude = position.coords.longitude;
          
          fetchData(locale);
          // setLocation({
          //     UserLatitude: position.coords.latitude,
          //     UserLongitude: position.coords.longitude,
          // });
        },
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
    return locale;
  };
  
  const getParks = async (userLocation: Location): Promise<Parks[]> => {
    try {
      const response = await axios.post('http://localhost:4040/irunyou/park/', userLocation);
      return response.data.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  


  useEffect(() => {

    getUserLocation();
  }, []);

  return (
    <div className="park-list-container">
      {parks ? parks.map((park) => (
        <ParkListItem key={park.parkName} park={park} />
      )) : null}
    </div>
  );
  
}