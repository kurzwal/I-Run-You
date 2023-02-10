import useStore from './Store';

import DialogHeader from './DialogHeader';
import DialogParkInfo from './DialogParkInfo';
import DialogParkSchedule from './DialogParkSchedule';



export default function ViewParkMain() {

    const { parkInfo } = useStore();

    return (
        <>
            <DialogHeader parkName={ parkInfo.parkName }/>
            <DialogParkInfo parkAddress={ parkInfo.parkAddress } parkArea={ parkInfo.parkArea }/>
            <DialogParkSchedule parkIndex={ parkInfo.parkIndex }/>
        </>
    )
}