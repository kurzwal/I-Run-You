/* 작성자 : 문경원
 * 파일의 역할 : UserSerivce함수 담기
 * 작성날짜 : 2023-01-12
 * 
 * 업데이트 작성자 : 황석민
 * 업데이트 날짜 : 2023-01-15
 * 업데이트 내용 : signUp, read, deleteUser 메소드 업데이트
 * */

package com.project.irunyou.data.service;

import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import javax.validation.constraints.Pattern;

import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;

import com.project.irunyou.data.dto.GetUserResponseDto;
import com.project.irunyou.data.dto.PatchUserDto;
import com.project.irunyou.data.dto.PostUserDto;
import com.project.irunyou.data.dto.ResponseDto;
import com.project.irunyou.data.dto.ResultResponseDto;
import com.project.irunyou.data.entity.UserEntity;
import com.project.irunyou.data.repository.UserRepository;

@Service
public class UserService {
	// 레파지토리 선언
	@Autowired UserRepository userRepository;
	
	UserEntity user;
	
//	public boolean existsByEmail(String email) {
//		return true;
//	}
	
	public ResponseDto<ResultResponseDto> signUpUser(PostUserDto dto) {
		// email중복확인, 등록가능한 이메일 여부 확인
		String email = dto.getEmail();
		UserEntity user;
//		if (!existsByEmail(email)) 
//			return ResponseDto.setFailed("이미 가입된 email 입니다.");
		try {
			if (userRepository.existsByEmail(email)) {
				return ResponseDto.setFailed("이미 가입된 email 입니다.");
			}
		} catch (Exception e) {
			return ResponseDto.setFailed("DataBase Error");
		}
		
		String password = dto.getPassword();
		String password2 = dto.getPassword2();

		if (!password.equals(password2)) {
			return ResponseDto.setFailed("비밀번호를 다시 확인해주세요");
		}
		
		user = UserEntity
				.builder()
				.email(dto.getEmail())
				.password(dto.getPassword())
				.address(dto.getAddress() + " " + dto.getAddressDetail())
				.phone_num(dto.getPhone_num())
				.build();
		
		
		userRepository.save(user);
		
		return ResponseDto.setSuccess("회원가입에 성공했습니다.", new ResultResponseDto(true));
	}

	// email, pw확인후 pw제외 정보제공
	public ResponseDto<GetUserResponseDto> readUser(String email) {
		
		try {
			// (email).get() 구현 안됨
			user = userRepository.findByEmail(email);
			
		} catch (Exception e) {
			return ResponseDto.setFailed("Not Exist User");
		}
		return ResponseDto.setSuccess("Get User Success", new GetUserResponseDto(user));
	}

	public ResponseDto<GetUserResponseDto> updateUser(PatchUserDto dto) {
		// email, pw확인후 정보수정가능하게
		String email = dto.getEmail();
		UserEntity user = null;
		
		try {
			// (email).get() 구현 안됨
			user = userRepository.findByEmail(email);
		} catch (Exception e) {
			return ResponseDto.setFailed("Not Exist User");
		}
		user.setAddress(dto.getAddress());
		user.setPhone_num(dto.getPhone_num());
		
		userRepository.save(user);
		
		return ResponseDto.setSuccess("정보수정이 완료 되었습니다.", new GetUserResponseDto(user));
	}

	public ResponseDto<ResultResponseDto> deleteUser(String email) {
		// email, pw확인 >> 삭제가능
		int userId = userRepository.findByEmail(email).getUser_idx();
		userRepository.deleteById(userId);
		
		return ResponseDto.setSuccess("탈퇴되었습니다.", new ResultResponseDto(true));
	}
	
	// 아이디,비밀번호 찾기 기능

}
