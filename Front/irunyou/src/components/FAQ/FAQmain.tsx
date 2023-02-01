import './FAQmain.css'

export default function FAQmain() {
    return(
        <div className='FAQ-container'>
            <div className='FAQ-title'>
                <h1 className='FAQ-text'>고객지원센터</h1>
                <button className='FAQ-text-btn'>문의하기</button>
            </div>
            <div className='FAQ-contentmain'>
                <div className='FAQ-contenttitle'>
                    <button className='FAQ-box-btn FAQ-btn'>자주하는 질문</button>
                    <button className='FAQ-box-btn'>내가 한 질문</button>
                </div>
                <div className='FAQ-contentbox'>

                </div>
            </div>
        </div>
    );
}