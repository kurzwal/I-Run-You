import { useState, useEffect } from 'react';
import "./parklist.css";
import ParkListItem from "./ParkListItem";
import useParkStore from "./parkStore";
import axios from 'axios';

interface Location {
    UserLatitude: number;
    UserLongitude: number;
}

export default function ParkListBody() {
  const [location, setLocation] = useState<Location>({
    UserLatitude: 0,
    UserLongitude: 0,
  });

  useEffect(() => {
    const getUserLocation = async () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              setLocation({
                  UserLatitude: position.coords.latitude,
                  UserLongitude: position.coords.longitude,
              });
              const parks = await getParks(location);
              parks.forEach((park) => {
                addPark(park);
              });
            },
          );
        } else {
          console.error('Geolocation is not supported by this browser.');
        }
      };
    getUserLocation();
  }, []);

  const { parks, addPark } = useParkStore();

  const getParks = async (userLocation: Location): Promise<Array<{
    parkName: string;
    parkAddress: string;
    parkLatitude: number;
    parkLongitude: number;
    parkArea: number;
  }>> => {
    try {
      const response = await axios.post('http://localhost:4040/irunyou/park/', userLocation);
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const storeParks = async (userLocation: Location): Promise<void> => {
    const parks = await getParks(userLocation);
    parks.forEach((park) => {
      addPark(park);
    });
  };

  return (
    <div className="park-list-container">
      {parks.map((park) => (
        <ParkListItem key={park.parkName} park={park} />
      ))}
    </div>
  );
}
