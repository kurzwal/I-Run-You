import "./myinfo.css";
import InfoItem from "./InfoItem";
import Button from '@mui/material/Button';

export default function MyInfoBody() {
    return (
        <div className="info-container">
            <div className="grayline"></div>
            <InfoItem label="이름" value="ddd" />
            <div className="lightgrayline"></div>
            <InfoItem label="닉네임" value="ddd" />
            <div className="lightgrayline"></div>
            <InfoItem label="주소" value="ddd" />
            <div className="lightgrayline"></div>
            <InfoItem label="전화번호" value="ddd" />
            <div className="lightgrayline"></div>
            <div className="user-info-btn-container">
                <Button variant="outlined">비밀번호 수정</Button>
                <Button variant="outlined">정보 수정</Button>
            </div>
            <Button variant="contained" color="error">회원 탈퇴</Button>
        </div>
    )
}