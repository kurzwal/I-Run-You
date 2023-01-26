/* 작성자 : 문경원
 * 파일의 역할 : UserSerivce함수 담기
 * 작성날짜 : 2023-01-12
 * 
 * 업데이트 작성자 : 황석민
 * 업데이트 날짜 : 2023-01-15
 * 업데이트 내용 : signUp, read, deleteUser 메소드 업데이트
 * */

package com.project.irunyou.data.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.project.irunyou.data.dto.GetUserResponseDto;
import com.project.irunyou.data.dto.LoginUserDto;
import com.project.irunyou.data.dto.PatchUserDto;
import com.project.irunyou.data.dto.PostUserDto;
import com.project.irunyou.data.dto.ResponseDto;
import com.project.irunyou.data.dto.ResultResponseDto;
import com.project.irunyou.data.entity.UserEntity;
import com.project.irunyou.data.repository.UserRepository;
import com.project.irunyou.security.TokenProvider;

@Service
public class UserService {
	
	// 레파지토리 선언
	@Autowired UserRepository userRepository;
	@Autowired TokenProvider tokenProvider;
	
	private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
	
//	public boolean existsByEmail(String email) {
//		return true;
//	}
	
	public ResponseDto<ResultResponseDto> signUpUser(PostUserDto dto) {
		// email중복확인, 등록가능한 이메일 여부 확인
		String email = dto.getUserEmail();
		UserEntity user;
//		if (!existsByEmail(email)) 
//			return ResponseDto.setFailed("이미 가입된 email 입니다.");
		if (userRepository.existsByEmail(email)) 
			return ResponseDto.setFailed("이미 가입된 email 입니다.");
		
		String password = dto.getUserPassword();
		String password2 = dto.getUserPassword2();

		if (!password.equals(password2)) {
			return ResponseDto.setFailed("비밀번호를 다시 확인해주세요");
		}
		
		user = UserEntity
				.builder()
				.userEmail(dto.getUserEmail())
				.userPassword(dto.getUserPassword())
				.userAddress(dto.getUserAddress() + " " + dto.getUserAddressDetail())
				.userPhoneNumber(dto.getUserPhoneNumber())
				.build();
		
		
		userRepository.save(user);
		
		return ResponseDto.setSuccess("회원가입에 성공했습니다.", new ResultResponseDto(true));
	}

	// email, pw확인후 pw제외 정보제공
	public ResponseDto<GetUserResponseDto> readUser(String email) {
		UserEntity user = findByEmail(email);
		if (user == null)
			return ResponseDto.setFailed("Not Exist User");
		
		return ResponseDto.setSuccess("Get User Success", new GetUserResponseDto(user));
	}

	public ResponseDto<GetUserResponseDto> updateUser(PatchUserDto dto) {
		// email, pw확인후 정보수정가능하게
		String email = dto.getUserEmail();
		
		UserEntity user = findByEmail(email);
		if (user == null)
			return ResponseDto.setFailed("Not Exist User");
		
		user.setUserAddress(dto.getUserAddress());
		user.setUserPhoneNumber(dto.getUserPhoneNumber());
		
		userRepository.save(user);
		
		return ResponseDto.setSuccess("정보수정이 완료 되었습니다.", new GetUserResponseDto(user));
	}

	public ResponseDto<ResultResponseDto> deleteUser(String email) {
		// email, pw확인 >> 삭제가능
		UserEntity user = findByEmail(email);
		if (user == null)
			return ResponseDto.setFailed("Not Exist User");
		int userId = user.getUserIndex();
		userRepository.deleteById(userId);
		
		return ResponseDto.setSuccess("탈퇴되었습니다.", new ResultResponseDto(true));
	}
	
	// id찾기
	public ResponseDto<GetUserResponseDto> findUserId(String phoneNum) {
		UserEntity user = findByPhoneNum(phoneNum);
		if (user == null)
			return ResponseDto.setFailed("가입된 정보가 없습니다.");
		
		return ResponseDto.setSuccess("회원님의 email 입니다.", new GetUserResponseDto(user));
	}
	
	// pw찾기
	
	
	private UserEntity findByEmail(String email) {
		UserEntity user;
		try {
			user = userRepository.findByEmail(email);
		} catch (Exception e) {
			return null;
		}
		return user;
	}
	
//	Phone_num 언더바 인식 못하므로 나중에 수정 요망
	private UserEntity findByPhoneNum(String phone) {
		UserEntity user;
		try {
			user = userRepository.findByPhoneNumber(phone);
		} catch (Exception e) {
			return null;
		}
		return user;
	}
	
	//// 홍지혜
	public UserEntity create(UserEntity userEntity) {
		if(userEntity == null || userEntity.getUserEmail() == null) {	// null값 확인
			throw new RuntimeException("대충 오류라는 영어");
		}
		String email = userEntity.getUserEmail();
		if(userRepository.existsByEmail(email)) {
			throw new RuntimeException("대충 이메일 존재한다는 내용");
		}
		
		return userRepository.save(userEntity);
	}
	
	// 2023-01-25 홍지혜
	public UserEntity getByCredentials(String email, String password, PasswordEncoder encoder) {
		/*
		 * BCryp어쩌구 인코더는 같은 값을 인코딩하더라도 할 떄마다 값이 다름 -> 의미 없는 값 랜덤 Salt -> Salting
		 * 유저에게 받은 패스워드를 인코딩해도 데이터베이스에 저장한 패스워드와는 다를 확률이 높음
		 * 전용 일치 여부 메서드 matches() : Salt고려 두 값 비교
		 */
		UserEntity originalUser = userRepository.findByEmail(email);
		if(originalUser == null && !encoder.matches(password, originalUser.getUserPassword())) {
			return null;
		}
		return originalUser;
	}
	
	// 로그인 service
	public ResponseEntity<?> LoginUser(UserEntity user) {		
		if (user == null) {	// 해당 유저 정보 없음
			return new ResponseEntity<String>("login failed", HttpStatus.BAD_REQUEST);
		} else { // 유저정보가 존재함
			// 토큰 생성
			String token = tokenProvider.create(user);
			LoginUserDto responseUser = LoginUserDto.builder()
					.userEmail(user.getUserEmail())
					.userPassword(user.getUserPassword())
					.userToken(token).build();
			return new ResponseEntity<LoginUserDto>(responseUser, HttpStatus.OK);
		}

	}

}
