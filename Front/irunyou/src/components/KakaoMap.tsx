import { useEffect, useState } from "react";
import useStore from './MenuComp/LocationStore';
import useToggleStore from './MenuComp/Parkinfo/Store';

declare global {
  interface Window {
    kakao: any;
  }
}

interface marker {
  map: any;
  position: any;
  title : string;
  image : any;
}

export default function Map() {

  const { userLocation, closeParks, } = useStore();
  const { setParkInfo, toggleParkInfo } = useToggleStore();


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
        // 마커 이미지의 이미지 크기 입니다
        const imageSize = new window.kakao.maps.Size(24, 35); 
        // 마커 이미지를 생성합니다    
        const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize); 
        
        for (var i = 0; i < closeParks.length; i ++) {
            
            
            
            const position = new window.kakao.maps.LatLng(closeParks[i].parkLatitude, closeParks[i].parkLongitude); // 마커를 표시할 위치
  
            // 마커를 생성합니다
            const marker = new window.kakao.maps.Marker({
              map: map, // 마커를 표시할 지도
              position: position,
              title: closeParks[i].parkName, // 마커의 타이틀, 마우스를 올리면 타이틀이 표시됩니다
              image: markerImage // 마커 이미지 
            });
            
            // 마커 누르면 공원상세정보로 이동하는 function
            // (생성된 마커에 index번호 할당해서 각각의 function 만들어주기)
            (function(index) {
              window.kakao.maps.event.addListener(marker, 'click', function() {
                setParkInfo(closeParks[index]);
                toggleParkInfo();
              });
            })(i);
          }

        setStartFirst(false); // 한번만 실행되도록 바꿈
      }
    }, [closeParks, userLocation])

    

    return (
        <div id="map" style={{ width: "100vw", height: "100vh" }} />
    );
}