package com.project.irunyou.data.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.irunyou.data.dto.LoginUserDto;
import com.project.irunyou.data.entity.UserEntity;
import com.project.irunyou.data.service.UserService;
import com.project.irunyou.security.TokenProvider;

// 2023-01-25 홍지혜
@RestController
@RequestMapping("irunyou/auth/")
public class AuthController {
	private UserService userService;
	private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
	
	@Autowired
	public AuthController(UserService userService) {
		this.userService = userService;
	}
	
	// login 요청을 받는 메소드
	// 요청을 받으면 email과 password를 서비스단의 login 메소드로 넘김
	@PostMapping("login")
	public ResponseEntity<?> LoginUser(@RequestBody LoginUserDto dto) {
		UserEntity user = null;
		try {
			user = userService.getByCredentials(dto.getEmail(), dto.getPassword(), passwordEncoder);
		} catch (Exception e) {
			// 해당 유저가 존재하지 않음
			return new ResponseEntity<String>("User information does not exist.", HttpStatus.BAD_REQUEST);
		}
		return userService.LoginUser(user);
	}
	
}
