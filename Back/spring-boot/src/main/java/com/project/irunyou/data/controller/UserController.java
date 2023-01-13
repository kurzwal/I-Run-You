/* 작성자 : 문경원
 * 파일의 역할 : 유저 CRUD
 * 작성날짜 : 2023-01-12
 * 
 * 업데이트 작성자 : -
 * 업데이트 날짜 : -
 * */

package com.project.irunyou.data.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.irunyou.data.dto.ResponseDto;
import com.project.irunyou.data.service.UserService;

@RestController
@RequestMapping("irunyou/")
public class UserController {
	
	@Autowired UserService userService;
	
	// Create (회원가입)
	public ResponseDto signUpUser () {
		return userService.signUpUser();
	}
	// Read (회원정보 읽기)
	public ResponseDto readUser () {
		return userService.readUser();
	}
	// Update (회원정보 수정)
	public ResponseDto updateUser () {
		return userService.updateUser();
	}
	// Delete (회원탈퇴)
	public ResponseDto deleteUser () {
		return userService.deleteUser();
	}
}
