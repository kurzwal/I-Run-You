import { useEffect, useState } from "react";
import useStore from './MenuComp/LocationStore';

declare global {
  interface Window {
    kakao: any;
  }
}

interface location {
  userLatitude: number;
  userLongitude: number;
}

interface marker {
  title: string;
  latlng: any;
}

export default function Map() {

  const { userLocation, closeParks } = useStore();

  const [startFirst, setStartFirst] = useState<boolean>(true);


    useEffect(() => {
      
      if ( closeParks.length !== 0 && userLocation.UserLatitude !== 0 && startFirst ) {
        const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        let options = { //지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(userLocation.UserLatitude, userLocation.UserLongitude), //지도의 중심좌표.
          level: 3 //지도의 레벨(확대, 축소 정도)
        };


        let map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

        const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
        const imageSize = new window.kakao.maps.Size(24, 35); 
        const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize); 
        
        for (var i = 0; i < closeParks.length; i ++) {
            
            // 마커 이미지의 이미지 크기 입니다
            
            // 마커 이미지를 생성합니다    
            
            const position = new window.kakao.maps.LatLng(closeParks[i].parkLatitude, closeParks[i].parkLongitude); // 마커를 표시할 위치
  
            // 마커를 생성합니다
            const marker = new window.kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: position,
                title : closeParks[i].parkName, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image : markerImage // 마커 이미지 
            });
          }

        setStartFirst(false); // 한번만 실행되도록 바꿈
      }
    }, [closeParks])

    useEffect(() => {
      // 

      // 
    },[])


    return (
        <div id="map" style={{ width: "100vw", height: "100vh" }} />
    );
}