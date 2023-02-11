import "./parkinfo.css"
import Xmark from '../../../assets/xmark-solid.svg'
import BackIcon from '../../../assets/chevron-left-solid.svg'
import useStore from "./Store";

interface props {
    parkName: string;
}

export default function DialogHeaderBack({ parkName }: props) {

    const { toggleParkInfo, setStateParkInfo } = useStore();
    const closeDialogHandler = () => {
        toggleParkInfo();
        setStateParkInfo();
    }

    return (
        <div className="dialog-header">
            <div className="dialog-header-pull-left">
                <img className="dialog-back" src={ BackIcon } onClick={ setStateParkInfo }></img>
                <div className="dialog-header-parkname">{ parkName }</div>
            </div>
            <img className="dialog-xmark" src={ Xmark } onClick={ closeDialogHandler }></img>
        </div>
    )
}