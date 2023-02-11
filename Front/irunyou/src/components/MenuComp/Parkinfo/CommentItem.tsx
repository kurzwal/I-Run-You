interface Props {
    comment: {
        commentIndex: number;
        commentScheduleIndex: number;
        commentWriterIndex: number;
        commentContent: string;
        commentDatetime: string;
    }
}


//  commentWriterIndex로 Writer 불러오는 메소드를 백에서 Join으로 작성해야 할 것 같아요
//  망했다

export default function CommentItem({ comment }: Props) {
    return (
        <div className="comment-item-wraper">
        </div>
    )
}