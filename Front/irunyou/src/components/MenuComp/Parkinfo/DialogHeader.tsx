import "./parkinfo.css"
import Xmark from '../../../assets/xmark-solid.svg'
import useStore from "./Store";

interface props {
    parkName: string;
}

export default function DialogHeader({ parkName }: props) {

    const { toggleParkInfo, setStateParkInfo } = useStore();
    const closeDialogHandler = () => {
        toggleParkInfo();
        setStateParkInfo();
    }

    return (
        <div className="dialog-header">
            <div className="dialog-header-parkname">{ parkName }</div>
            <img className="dialog-xmark" src={ Xmark } onClick={ closeDialogHandler }></img>
        </div>
    )
}