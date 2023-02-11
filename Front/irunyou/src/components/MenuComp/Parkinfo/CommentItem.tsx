import "./Comment.css";

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

    return (
        <div className="comment-item-wraper">
            <div>{comment.commentWriter}</div>
            <div className="comment-content-container">{comment.commentContent}</div>
            <div className="comment-time-container">
                <div>{date}</div>
                <div>{time}</div>
            </div>
        </div>
    )
}