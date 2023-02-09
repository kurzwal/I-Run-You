import './UserDelete.css';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material';

export default function UserDelete() {

    const theme:any = createTheme({
        palette: {
            primary: {
                main: '#b6cf55'
            }
        }
    })

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
                <input type="checkbox" />
                위 내용을 숙지하였으며, 동의합니다.
            </div>
            <div className='userDelete-idpw'>
            <ThemeProvider theme={theme}>
                <TextField size='small' label="아이디 확인" sx={{width: "80%"}}  id="outlined-basic" variant="outlined" margin="normal" required/>
                <TextField size='small' label="비밀번호 확인" type="password" sx={{width: "80%"}} id="outlined-basic" variant="outlined" margin="normal" required/>
            </ThemeProvider>
            </div>
            <div className="userDelete-btn">
                <button className='user-btn back-btn' onClick={() => window.history.back()}>이전으로</button>
                <button className='user-btn delete-btn'>탈퇴하기</button>
            </div>
        </div>
    );
}