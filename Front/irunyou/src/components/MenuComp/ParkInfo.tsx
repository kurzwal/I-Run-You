import "./menucomp.css";
import useStore from "./Parkinfo/Store";

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import ViewParkMain from "./Parkinfo/ViewParkMain";
import ViewSceduleInfo from "./Parkinfo/ViewSceduleInfo";
import ViewSceduleReg from "./Parkinfo/ViewSceduleReg";
import ViewScheduleUpdate from "./Parkinfo/ViewScheduleUpdate";


export default function ParkInfo() {

    const { parkInfoOpen, parkInfoState } = useStore();

  
    return (
        <Dialog
            open={ parkInfoOpen }
            PaperProps={{ style:{ borderRadius: "25px", width: "100%", height: "100%", backgroundColor: "#c5ce9f" } }}>
            <DialogContent 
                style=
                {{overflow: "hidden", flexDirection: "column",}} 
                sx={{...((parkInfoOpen && parkInfoState === 0) ? {display: 'flex'} : {display: 'none'})}}>
                <ViewParkMain />
            </DialogContent>
            <DialogContent 
                style=
                {{overflow: "hidden", flexDirection: "column"}} 
                sx={{...((parkInfoOpen && parkInfoState === 1) ? {display: 'flex'} : {display: 'none'})}}>
                <ViewSceduleInfo />
            </DialogContent>
            <DialogContent 
                style=
                {{overflow: "hidden", flexDirection: "column"}} 
                sx={{...((parkInfoOpen && parkInfoState === 2) ? {display: 'flex'} : {display: 'none'})}}>
                <ViewSceduleReg />
            </DialogContent>
            <DialogContent 
                style=
                {{overflow: "hidden", flexDirection: "column"}} 
                sx={{...((parkInfoOpen && parkInfoState === 3) ? {display: 'flex'} : {display: 'none'})}}>
                <ViewScheduleUpdate />
            </DialogContent>

        </Dialog>
    );
  }