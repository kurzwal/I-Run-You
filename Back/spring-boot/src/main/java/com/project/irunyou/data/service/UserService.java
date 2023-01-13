/* 작성자 : 문경원
 * 파일의 역할 : UserSerivce함수 담기
 * 작성날짜 : 2023-01-12
 * 
 * 업데이트 작성자 : -
 * 업데이트 날짜 : -
 * */


package com.project.irunyou.data.service;

import org.springframework.stereotype.Service;

import com.project.irunyou.data.dto.ResponseDto;

@Service
public class UserService {

	public ResponseDto signUpUser() {
		// email중복확인, 전화번호 중복확인해서 등록가능한 이메일 여부 확인
		
		return null;
	}

	public ResponseDto readUser() {
		// email, pw확인후 pw제외 정보제공
		return null;
	}

	public ResponseDto updateUser() {
		// email, pw확인후 정보수정가능하게 
		return null;
	}

	public ResponseDto deleteUser() {
		// email, pw확인 >> 삭제가능
		return null;
	}

	
	
}
