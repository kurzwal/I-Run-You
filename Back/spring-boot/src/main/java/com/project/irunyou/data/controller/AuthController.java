package com.project.irunyou.data.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.irunyou.data.dto.LoginUserDto;
import com.project.irunyou.data.dto.PostUserDto;
import com.project.irunyou.data.dto.ResponseDto;
import com.project.irunyou.data.dto.ResultResponseDto;
import com.project.irunyou.data.entity.UserEntity;
import com.project.irunyou.data.service.UserService;

// 2023-01-25 홍지혜
// 2023-01-27 login controller로직 -> 서비스에서 처리
//@CrossOrigin(originPatterns = "http://localhost:3000")
@RestController
@RequestMapping("irunyou/auth/")
public class AuthController {
	@Autowired private UserService userService;
	
	
	// login 요청을 받는 메소드
	// 요청을 받으면 email과 password를 서비스단의 login 메소드로 넘김
	@PostMapping("login")
	public ResponseEntity<?> LoginUser(@RequestBody LoginUserDto dto) {
		return userService.LoginUser(dto);
	}
	
	
	
}
