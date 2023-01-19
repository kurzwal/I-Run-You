// 작성자 : 최예정
// 파일의 역할 : 아이디 저장 javascript
// 작성날짜 : 2023-01-13

// 업데이트 작성자 : -
// 업데이트 날짜 : -

window.onload = function() {
    if (getCookie("id")) {// getCookie함수로 id라는 이름의 쿠키를 불러와서 있을경우
        document.loginForm.userid.value = getCookie("id");//input 이름이 id인곳에 getCookie("id")값을 넣어줌
        document.loginForm.idsave.checked = true;// 체크는 체크됨으로
    }
}

function sendit() {
        if (document.loginForm.idsave.checked == true) { // 아이디 저장을 체크 하였을때
            setCookie("id", document.loginForm.userid.value, 7); //쿠키이름을 id로 아이디입력필드값을 7일동안 저장
        } else { // 아이디 저장을 체크 하지 않았을때
        setCookie("id", document.loginForm.userid.value, 0); //날짜를 0으로 저장하여 쿠키삭제
        }
    document.loginForm.submit(); //유효성 검사가 통과되면 서버로 전송.
}