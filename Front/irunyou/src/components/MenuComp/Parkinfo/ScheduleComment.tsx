import './parkinfo.css';
import axiosInstance from "../../../service/axiosInstance";
import { useState, useEffect } from 'react';

interface Comment {
    commentIndex: number;
    commentScheduleIndex: number;
    commentWriterIndex: number;
    commentContent: string;
    commentDatetime: string;
}

export default function ScheduleComment(runScheduleIndex: number) {

    const [commentArray, setCommentArray] = useState<Comment[]>([]);

    const getScheduleComment = (async () => {
        await axiosInstance.get(
            "irunyou/comment/", {
                params: {
                    runScheduleIndex,
                }
        })
        .then((response) => {
            setCommentArray(response.data.data);
        }).catch((error) => {
            alert(error.message);
        })}
    );

    useEffect(() => {
        getScheduleComment();
    }, [])


    const postScheduleComment = () => {

    }

    return (
        <div className='comment-wraper'>
            <div className='comment-read'></div>
            {/* {commentArray.length !== 0 ? 
                commentArray.map((commentArray: any, index: number) => (
                    <CommentItem />
                ))
                    :

            } */}
        </div>
    )
}