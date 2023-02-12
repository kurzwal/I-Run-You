import "./Comment.css";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { SvgIcon } from "@mui/material";
import axiosInstance from "../../../service/axiosInstance";
import { useEffect } from "react";

interface Props {
    comment: {
        commentIndex: number;
        commentScheduleIndex: number;
        commentWriter: string;
        commentContent: string;
        commentDatetime: string;
    }
}


//  commentWriterIndex로 Writer 불러오는 메소드를 백에서 Join으로 작성해야 할 것 같아요
//  망했다

export default function CommentItem({ comment }: Props) {
    
    const date = comment.commentDatetime.substring(0, 10);
    const time = comment.commentDatetime.substring(11, 19);
    
    // 댓글 삭제 함수
    const deleteComment = (async () => {

        let isCancel = window.confirm("정말 삭제하시겠습니까? (삭제한 댓글은 되돌릴 수 없습니다.)")
        
        if(isCancel) {
            await axiosInstance.delete("irunyou/comment/",{
                params : {
                    cmtIdx : comment.commentIndex,
                }
            })
            .then(response => {
                if(!response.data.status) {
                    return alert(response.data.message);
                }
                alert(response.data.message);
            })
            .catch(error => {
                alert(error.message);
            })
        }

    })

    return (
        <div className="comment-item-wraper">
            <div>{comment.commentWriter}</div>
            <div className="comment-content-container">{comment.commentContent}</div>
            <div className="comment-time-container">
                <div>{date}</div>
                <div>{time}</div>                
            </div>
            <div className="comment-ud-box">
                {/* <div onClick={()=>{}}>수정</div> */}
                <div onClick={()=> {deleteComment()}}>
                    <DeleteForeverIcon
                    fontSize="small" 
                    style={{
                        cursor:"pointer"
                    }}/>
                </div>
            </div>
        </div>
    )
}