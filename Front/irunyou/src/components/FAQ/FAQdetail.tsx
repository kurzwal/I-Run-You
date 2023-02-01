import './FAQdetail.css'
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material';



const theme:any = createTheme({
    palette: {
        primary: {
            main: '#000000'
        }
    }
})

export default function FAQdetail(){
    return (
        <div className='FAQ-detail-con'>
            <div className='FAQ-d-title'>문의입력</div>
            <ThemeProvider theme={theme}>
                <div className='FAQ-d-fir'>
                <div>문의유형</div>
                <div><TextField size='small' label="" sx={{width: "80%"}} margin="normal"/></div>
                <div>이름</div>
                <div><TextField size='small' label="이름을 입력해주세요" sx={{width: "80%"}} margin="normal"/></div>
            </div>
            <div className='FAQ-d-email'>
                <div>이메일주소</div>
                <div><TextField size='small' label="email주소를 입력해주세요" sx={{width: "80%"}} margin="normal"/></div>
            </div>
            <div className='FAQ-d-titleblank'>
                <div className='FAQ-d-titleclass'>제목</div>
                <div><TextField size='small' label="제목을 입력하세요" sx={{width: "80%"}} margin="normal"/></div>
            </div>
            <div><textarea className='FAQ-d-content' name="" id="" ></textarea></div>
            <div>
                <button className='FAQ-submit-btn'>제출하기</button>
            </div>
            </ThemeProvider>
        </div>
    );
}