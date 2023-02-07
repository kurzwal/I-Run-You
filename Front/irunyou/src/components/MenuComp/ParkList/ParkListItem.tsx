import "./parklist.css";
import thumbnail from "../../../assets/images/mainPhoto.jpg"

interface props {
    park: {
        parkName: string;
        parkAddress: string;
        parkLatitude: number;
        parkLongitude: number;
        parkArea: number;
    }
}

export default function ParkListItem({ park }: props) {
    return (
        <div className="park-list-item">
            <img className="park-list-img" src={ thumbnail } alt="" />
            <div className="park-list-desc-container">
                <div className="park-list-title">{ park.parkName }</div>
                <div className="park-list-desc">{ park.parkAddress }</div>
                <div className="park-list-area">면적 : { park.parkArea }㎡</div>
            </div>
        </div>
    )
}