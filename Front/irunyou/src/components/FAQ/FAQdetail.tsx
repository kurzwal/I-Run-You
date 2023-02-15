import axios from 'axios';
import { useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import axiosInstance from '../../service/axiosInstance';

import './FAQdetail.css'
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Box from '@mui/material/Box';
import FAQmodal from './FAQmodal';
import MenuLogo from '../MenuComp/Mainmenu/MenuLogo';

// 작성자 : 문경원
// 파일의 역할 : 문의하기 html
// 작성날짜 : 2023-02-03

// 업데이트 작성자 : 최예정
// 업데이트 날짜 : 2023-02-07

// 업데이트 작성자 : 문경원
// 업데이트 날짜 : 2023-02-07

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

    const [faqTitle, setFaqTitle] = useState<string>('');
    const [faqUserName, setFaqUserName] = useState<string>('');
    const [faqInquiryType, setFaqInquiryType] = useState<string>('');
    const [faqUserEmail, setFaqUserEmail] = useState<string>('');
    const [faqContent, setFaqContent] = useState<string>('');

    const movePage = useNavigate();

    const onSubmitHandler = () => {
        const data = {
            faqTitle,
            faqUserName,
            faqInquiryType,
            faqUserEmail,
            faqContent
        }

        axiosInstance.post('irunyou/FAQ/', data).then((response) => {
            const faqInformation = response.data.faq;
            movePage('/MainPage');
        })
    }


    return (
        <div className='FAQ-detail-con'>
            <div onClick={() => { movePage("/MainPage") }} style={{ cursor: "pointer", width: "100%" }}>
                <MenuLogo />
            </div>
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
                                    onChange={(e) => setFaqInquiryType(e.currentTarget.value)}
                                    >
                                    <option value={'계정관리'}>계정관리</option>
                                    <option value={'공원찾기'}>공원찾기</option>
                                    <option value={'기타'}>기타</option>
                                </NativeSelect>
                            </FormControl>
                        </Box>
                    </div>
                    <div>
                        <div><TextField size='small' label="이름" sx={{width: "250px"}} margin="normal" onChange={(e) => setFaqUserName(e.target.value)}/></div>
                    </div>
            </div>
            <div className='FAQ-d-email'>
                <div><TextField size='small' label="회신받을 email주소" sx={{width: "600px"}} margin="normal" onChange={(e) => setFaqUserEmail(e.target.value)}/></div>
            </div>
            <div className='FAQ-d-titleblank'>
                <div><TextField size='small' label="제목" sx={{width: "600px"}} margin="normal" onChange={(e) => setFaqTitle(e.target.value)}/></div>
            </div>
            <div><textarea className='FAQ-d-content' name="" id="" onChange={(e) => setFaqContent(e.target.value)}></textarea></div>
            <div className='FAQdetail-btn'> 
                <button className='FAQ-submit-btn' onClick={() => setModal(true)}>이전으로</button>
                <button className='FAQ-submit-btn' onClick={() => onSubmitHandler()}>제출하기</button>
            </div>
            </ThemeProvider>
            { modal && (<FAQmodal setModal={setModal} />) }
        </div>
    );
}