import './parkinfo.css';
import axiosInstance from "../../../service/axiosInstance";
import { useState, useEffect } from 'react';
import './Comment.css';
import CommentItem from './CommentItem';

interface Props {
    runScheduleIndex: number;
}

interface Comment {
    commentIndex: number;
    commentScheduleIndex: number;
    commentWriter: string;
    commentContent: string;
    commentDatetime: string;
}

export default function ScheduleComment({ runScheduleIndex }: Props) {

    const [commentArray, setCommentArray] = useState<Comment[]>([]);

    const getScheduleComment = (async () => {
        await axiosInstance.get(
            "irunyou/comment/", {
            params: {
                schIdx: runScheduleIndex,
            }
        })
            .then((response) => {
                // if (!response.data.state) {
                //     return alert(response.data.message);
                // }
                setCommentArray(response.data.data);
            }).catch((error) => {
                alert(error.message);
            })
    }
    );

    useEffect(() => {
        getScheduleComment();
    }, [runScheduleIndex])  // 스케쥴 인덱스가 바뀔때마다 실행되게 하기


    const postScheduleComment = () => {

    }

    return (
        <div className='comment-wraper'>
            <div className='comment-header-bar'>
                <div>전체 댓글</div>
                <div>{commentArray.length} 개</div>
            </div>
            <div className='comment-read'></div>
            {commentArray.length !== 0 ?
                commentArray.map((commentArray: any) => (
                    <CommentItem comment={commentArray}/>
                ))
                : (
                    <div className='comment-empty'>댓글이 없습니다.</div>
                )
            }
        </div>
    )
}