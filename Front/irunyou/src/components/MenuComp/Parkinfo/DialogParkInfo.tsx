import "./parkinfo.css"
import Thumbnail from "../../../assets/images/mainPhoto.jpg"

interface props {
    parkAddress: string;
    parkArea: number;
}

export default function DialogParkInfo({ parkAddress, parkArea }:props) {
    return (
        <div className="dialog-parkinfo">
            <img className="dialog-parkinfo-img" src={ Thumbnail }></img>
            <div className="dialog-parkinfo-contents">주소 : { parkAddress }</div>
            <div className="dialog-parkinfo-contents">면적 : { parkArea }㎡</div>
        </div>
    )
}