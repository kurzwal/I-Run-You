import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function PostSchedule() {
    return (
        <div className="post-schedule-container">
            <h2>일정 추가</h2>
            <TextField
                id="outlined-multiline-static"
                label="일정 세부내용"
                multiline
                rows={5}
                style={{ 
                    width: '90%',
                    height: '50%'
                 }}
            />
            <Button variant="contained">작성하기</Button>
        </div>
    )
}