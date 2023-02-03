import { useState } from 'react';

import './FAQdetail.css'
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material';
import { Link } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Box from '@mui/material/Box';
import FAQmodal from './FAQmodal';


const theme:any = createTheme({
    palette: {
        primary: {
            main: '#b6cf55'
        }
    }
})


// const modal = document.getElementById("modal")
// const btnModal = document.getElementById("btn-modal")
// btnModal.addEventListener("click", e => {
//     modal.style.display = "flex"
// })

export default function FAQdetail(){

    // 창을 띄웠을 때 뜨지않기 위해 false
    const [modal, setModal] = useState<boolean>(false);

    return (
        <div className='FAQ-detail-con'>
            <div className='FAQ-d-title'>문의입력</div>
            <ThemeProvider theme={theme}>
                <div className='FAQ-d-inquiry'>
                    <div className='FAQ-d-inquirybox'>
                        <Box sx={{ minWidth: 250 }}>
                            <FormControl fullWidth>
                                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                    문의유형
                                </InputLabel>
                                <NativeSelect
                                    defaultValue={30}
                                    inputProps={{
                                        name: 'inquiry',
                                        id: 'uncontrolled-native',
                                    }}
                                    >
                                    <option value={10}>계정관리</option>
                                    <option value={20}>공원찾기</option>
                                    <option value={30}>기타</option>
                                </NativeSelect>
                            </FormControl>
                        </Box>
                    </div>
                    <div>
                        <div><TextField size='small' label="이름" sx={{width: "250px"}} margin="normal"/></div>
                    </div>
            </div>
            <div className='FAQ-d-email'>
                <div><TextField size='small' label="회신받을 email주소" sx={{width: "600px"}} margin="normal"/></div>
            </div>
            <div className='FAQ-d-titleblank'>
                <div><TextField size='small' label="제목" sx={{width: "600px"}} margin="normal"/></div>
            </div>
            <div><textarea className='FAQ-d-content' name="" id="" ></textarea></div>
            <div className='FAQdetail-btn'> 
                <button className='FAQ-submit-btn' onClick={() => setModal(true)}>이전으로</button>
                <Link to ="/FAQmain">
                    <button className='FAQ-submit-btn'>제출하기</button>
                </Link>
            </div>
            </ThemeProvider>
            { modal && (<FAQmodal setModal={setModal} />) }
        </div>
    );
}