import "./parklist.css";
import thumbnail from "../../../assets/images/mainPhoto.jpg";

import useStore from "../Parkinfo/Store";

interface props {
    park: {
        parkIndex: number;
        parkName: string;
        parkAddress: string;
        parkLatitude: number;
        parkLongitude: number;
        parkArea: number;
    }
}

export default function ParkListItem({ park }: props) {

    const { toggleParkInfo, setParkInfo } = useStore();


    const openDialog = (selectedPark: props["park"]) => {
        setParkInfo(selectedPark);
        toggleParkInfo();
    }
    

    return (
        <div className="park-list-item" onClick={ () => {openDialog(park)} }>
            <img className="park-list-img" src={ thumbnail } alt="" />
            <div className="park-list-desc-container">
                <div className="park-list-title">{ park.parkName }</div>
                <div className="park-list-desc">{ park.parkAddress }</div>
                <div className="park-list-area">면적 : { park.parkArea }㎡</div>
            </div>
        </div>
    )
}