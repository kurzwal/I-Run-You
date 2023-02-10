import useStore from './Store';

import DialogHeader from './DialogHeader';
import DialogParkInfo from './DialogParkInfo';
import DialogParkSchedule from './DialogParkSchedule';



export default function ViewParkMain() {

    const { parkInfo } = useStore();

    return (
        <>
            <DialogHeader parkName={ parkInfo.parkName }></DialogHeader>
            <DialogParkInfo parkAddress={ parkInfo.parkAddress } parkArea={ parkInfo.parkArea }></DialogParkInfo>
            <DialogParkSchedule parkIndex={parkInfo.parkIndex}></DialogParkSchedule>
        </>
    )
}