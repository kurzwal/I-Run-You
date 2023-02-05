package com.project.irunyou.data.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.irunyou.data.dto.LoginUserDto;
import com.project.irunyou.data.dto.PostUserDto;
import com.project.irunyou.data.dto.ResponseDto;
import com.project.irunyou.data.dto.ResultResponseDto;
import com.project.irunyou.data.entity.UserEntity;
import com.project.irunyou.data.service.AuthService;
import com.project.irunyou.data.service.UserService;

//로그인이 되어있지 않은 경우 (JWT 토큰이 없는 경우)

// 2023-01-25 홍지혜
// 2023-01-27 login controller로직 -> 서비스에서 처리
@CrossOrigin(originPatterns = "http://localhost:3000/")
@RestController
@RequestMapping("auth/")
public class AuthController {
	
	@Autowired private AuthService authService;
	
	// 회원가입
	@PostMapping("signup")
	public ResponseDto<?> signUpUser (@RequestBody PostUserDto requestBody) {
		return authService.signUpUser(requestBody);
	}
	
	// 로그인
	@PostMapping("login")
	public ResponseDto<?> LoginUser(@RequestBody LoginUserDto requestBody) {
		return authService.LoginUser(requestBody);
	}
	
	
}
