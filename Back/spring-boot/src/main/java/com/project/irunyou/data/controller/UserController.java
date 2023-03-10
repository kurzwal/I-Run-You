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
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.irunyou.data.dto.DeleteUserPasswordDto;
import com.project.irunyou.data.dto.FindPasswordDto;
import com.project.irunyou.data.dto.GetUserResponseDto;
import com.project.irunyou.data.dto.PatchUserDto;
import com.project.irunyou.data.dto.ResponseDto;
import com.project.irunyou.data.dto.ResultResponseDto;
import com.project.irunyou.data.dto.UserNicknameDto;
import com.project.irunyou.data.dto.UserPhoneAndNameDto;
import com.project.irunyou.data.dto.UserRequestDto;
import com.project.irunyou.data.service.ResgisterMailService;
import com.project.irunyou.data.service.UserService;

// 로그인이 되어있는 경우 (JWT 토큰을 가지고 있는 상태)

@CrossOrigin(originPatterns = "http://localhost:3000")
@RestController
@RequestMapping("irunyou/")
public class UserController {

	@Autowired
	UserService userService;
	@Autowired
	ResgisterMailService mailService;

	// Read (회원정보 읽기)
	@GetMapping("mypage")
	public ResponseDto<GetUserResponseDto> readUser(@AuthenticationPrincipal String email) { // 로그인 되어있는 상태! -> 마이페이지
		return userService.readUser(email);
	}

	// Update (회원정보 수정)
	@PatchMapping("patchuser")
	public ResponseDto<GetUserResponseDto> updateUser(@RequestBody PatchUserDto requestBody) {
		return userService.updateUser(requestBody);
	}

	// 홍지혜
	// Delete (회원탈퇴)
	@PostMapping("dropuser") // deleteMapping의 경우 RequestBody를 받지 않기 때문에 Post로 처리함.
	public ResponseDto<ResultResponseDto> deleteUser(@AuthenticationPrincipal String email,
			@RequestBody DeleteUserPasswordDto dto) {
		// password의 경우 프론트에서 json형태가 아닌 text로 처리해야 합니다!
		return userService.deleteUser(email,dto.getUserPassword());
	}



}
