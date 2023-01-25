/* 작성자 : 문경원
 * 파일의 역할 : 유저 CRUD
 * 작성날짜 : 2023-01-12
 * 
 * 업데이트 작성자 : 황석민
 * 업데이트 날짜 : 2023-01-15
 * 업데이트 내용 : signUp, read, deleteUser() 구조 추가
 * */

package com.project.irunyou.data.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.irunyou.data.dto.GetUserResponseDto;
import com.project.irunyou.data.dto.PatchUserDto;
import com.project.irunyou.data.dto.PostUserDto;
import com.project.irunyou.data.dto.ResponseDto;
import com.project.irunyou.data.dto.ResultResponseDto;
import com.project.irunyou.data.service.ResgisterMailService;
import com.project.irunyou.data.service.UserService;

@RestController
@RequestMapping("irunyou/")
public class UserController {
	
	@Autowired UserService userService;
	@Autowired ResgisterMailService mailService;
	
	// Create (회원가입)
	@PostMapping("")
	public ResponseDto<ResultResponseDto> signUpUser (@RequestBody PostUserDto requestBody) {
		return userService.signUpUser(requestBody);
	}
	
	// Read (회원정보 읽기)
	@GetMapping("{email}")
	public ResponseDto<GetUserResponseDto> readUser (@PathVariable("email") String email) {
		return userService.readUser(email);
	}
	
	// Update (회원정보 수정)
	@PatchMapping("")
	public ResponseDto<GetUserResponseDto> updateUser (@RequestBody PatchUserDto requestBody) {
		return userService.updateUser(requestBody);
	}
	
	// Delete (회원탈퇴)
	@DeleteMapping("{email}")
	public ResponseDto<ResultResponseDto> deleteUser (@PathVariable("email") String email) {
		return userService.deleteUser(email);
	}
	
	// id찾기
	@GetMapping("phone/{phoneNum}")
	public ResponseDto<GetUserResponseDto> findUserId(@PathVariable("phoneNum")String phoneNum) {
		return userService.findUserId(phoneNum);
	}

	// 이메일 인증
	@PostMapping("mailConfirm")	
	public ResponseDto<String> mailConfirm(@RequestParam("email") String email){
		String code = null;
		try {
		// 인증코드 발송 
		code = mailService.sendMail(email);
		} catch (Exception e) {
			return ResponseDto.setFailed("error");
		}	
		// 보내진 코드 프론트로 return
		return ResponseDto.setSuccess("Success", code);
	}
	
	// pw찾기
	
}
