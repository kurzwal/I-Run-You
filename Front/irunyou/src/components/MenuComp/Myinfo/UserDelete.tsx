import './UserDelete.css';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';

import axiosInstance from "../../../service/axiosInstance";

// 작성자 : 최예정
// 파일의 역할 : 회원탈퇴 html
// 작성날짜 : 2023-02-09

// 작성자 : 최예정 
// 업데이트 날짜 : 2023-02-10

export default function UserDelete() {

    const theme:any = createTheme({
        palette: {
            primary: {
                main: '#b6cf55'
            }
        }
    })

    const [userPassword, setUserPassword] = useState<string>('');
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
    }

    const userDelete = async () => {
    
        // 체크박스를 하지 않을 경우 회원 탈퇴가 되지 않게
        if (!isChecked) {
            alert('동의하기를 눌러주세요.');
            return;
        }

        // 회원탈퇴 기능
        let isDelete = window.confirm("정말 삭제하시겠습니까?");

        if (isDelete) {
            await axiosInstance
                .post("irunyou/dropuser", {
                    userPassword : userPassword
                })
                .then(response => {
                    if(!response.data.status) {
                        return alert(response.data.message);
                    }
                    alert(response.data.message);
                    window.location.reload();
                }).catch(error => {
                    alert(error.message)
                })

            }
        }

    return(
        <div className="userDelete-contaier">
            <div className="userDelete-header">
                <h1 className="userDelete-title">회원탈퇴</h1>
            </div>
            <div className="userDelete-main">
                <p className='main-text'>
                    지금까지 IRUNYOU 서비스를 이용해주셔서 감사합니다.
                </p>
                <p className='main-text'>
                    탈퇴 하시면 IRUNYOU 서비스 내 계정 정보 및 IRUNYOU에서 지원하는 모든 데이터는 삭제되고 복구할 수 없습니다.
                    <br />
                    정말로 탈퇴를 원하신다면 아래에 아이디와 비밀번호를 입력하시고 탈퇴 버튼을 눌러주세요.
                </p>
            </div>
            <div className="userDelete-check">
                <input type="checkbox" onChange={handleCheckboxChange}  />
                위 내용을 숙지하였으며, 동의합니다.
            </div>
            <div className='userDelete-idpw'>
            <ThemeProvider theme={theme}>
                <TextField size='small' label="비밀번호 확인" type="password" sx={{width: "80%"}} id="outlined-basic" variant="outlined" margin="normal" onChange={(event) => setUserPassword(event.target.value)} required/>
            </ThemeProvider>
            </div>
            <div className="userDelete-btn">
                <button className='user-btn back-btn' onClick={() => window.history.back()}>이전으로</button>
                <button className='user-btn delete-btn' onClick={() => userDelete()}>탈퇴하기</button>
            </div>
        </div>
    );
}