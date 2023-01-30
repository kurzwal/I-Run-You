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
import org.springframework.util.StringUtils;

import com.project.irunyou.data.dto.FindPasswordDto;
import com.project.irunyou.data.dto.GetUserResponseDto;
import com.project.irunyou.data.dto.LoginTokenDto;
import com.project.irunyou.data.dto.LoginUserDto;
import com.project.irunyou.data.dto.PatchUserDto;
import com.project.irunyou.data.dto.PostUserDto;
import com.project.irunyou.data.dto.ResponseDto;
import com.project.irunyou.data.dto.ResultResponseDto;
import com.project.irunyou.data.entity.CodeEntity;
import com.project.irunyou.data.entity.UserEntity;
import com.project.irunyou.data.repository.CodeRepository;
import com.project.irunyou.data.repository.UserRepository;
import com.project.irunyou.security.TokenProvider;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class UserService {
	
	@Autowired private UserRepository userRepository;
	@Autowired private TokenProvider tokenProvider;
	@Autowired private ResgisterMailService mailService;
	@Autowired private CodeRepository codeRepository;
	@Autowired private PasswordEncoder passwordEncoder;
	
	
	// 2023-01-25 홍지혜
	// 유저 이메일, 비밀번호, password encoder 받음 -> 암호화된 비밀번호 매치 여부 확인
	public UserEntity getByCredentials(String email, String password, PasswordEncoder encoder) {
		/*
		 * BCryp어쩌구 인코더는 같은 값을 인코딩하더라도 할 떄마다 값이 다름 -> 의미 없는 값 랜덤 Salt -> Salting
		 * 유저에게 받은 패스워드를 인코딩해도 데이터베이스에 저장한 패스워드와는 다를 확률이 높음
		 * 전용 일치 여부 메서드 matches() : Salt고려 두 값 비교
		 */
		UserEntity originalUser = userRepository.findByUserEmail(email);	// 이메일로 유저 정보 찾음 (이때 유저의 패스워드는 암호화된 패스워드임)
		if(originalUser != null && encoder.matches(password, originalUser.getUserPassword())) {	
			return originalUser;	// 해당 이메일을 가진 유저가 존재하고, 해당 유저의 암호화된 패스워드와 입력된 패스워드가 일치하면 해당 유저 반환
		}
		return null;
	}
	
	
	// 홍지혜 2023-01-30
	// 회원가입 로직 수정
	public ResponseDto<?> signUpUser(PostUserDto dto) {
		
		boolean checkUserEmailDupe = userRepository.existsByUserEmail(dto.getUserEmail());
		// 이메일 중복여부 체크
		if(checkUserEmailDupe) {
			return ResponseDto.setFailed(String.format("'%s'는 이미 가입된 이메일 입니다.", dto.getUserEmail()));
		}
		
		boolean checkUserPhoneNumberDupe = userRepository.existsByUserPhoneNumber(dto.getUserPhoneNumber());
		// 휴대폰번호 중복여부 체크
		if(checkUserPhoneNumberDupe) {
			return ResponseDto.setFailed(String.format("'%s'는 이미 가입된 휴대폰 번호 입니다.", dto.getUserPhoneNumber()));
		}		
//		// email중복확인, 등록가능한 이메일 여부 확인
//		String email = dto.getUserEmail();
//		UserEntity user;
////		if (!existsByEmail(email)) 
////			return ResponseDto.setFailed("이미 가입된 email 입니다.");
//		if (userRepository.existsByUserEmail(email)) 
//			return ResponseDto.setFailed("이미 가입된 email 입니다.");
		
		String password = dto.getUserPassword();
		String password2 = dto.getUserPassword2();
		
		// 비밀번호 일치여부 확인
		if (!password.equals(password2)) {
			return ResponseDto.setFailed("비밀번호를 다시 확인해주세요");
		}
		
		// 비밀번호 암호화
		String encryptedPassword = passwordEncoder.encode(password);
		
		UserEntity user = UserEntity
				.builder()
				.userEmail(dto.getUserEmail())
				.userPassword(encryptedPassword)	// 암호화된 비밀번호로 저장
				.userAddress(dto.getUserAddress()) 
				.userAddressDetail(dto.getUserAddressDetail())
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
		user.setUserAddressDetail(dto.getUserAddressDetail());
		user.setUserPhoneNumber(dto.getUserPhoneNumber());
		
		userRepository.save(user);
		
		return ResponseDto.setSuccess("정보수정이 완료 되었습니다.", new GetUserResponseDto(user));
	}

	public ResponseDto<ResultResponseDto> deleteUser(String email, String password) {
		UserEntity user = getByCredentials(email, password, passwordEncoder);
		
		if (user == null) {
			return ResponseDto.setFailed("회원정보가 일치하지 않습니다.");
		} else {
			userRepository.delete(user);			
		}	
		
		return ResponseDto.setSuccess("탈퇴되었습니다.", new ResultResponseDto(true));
	}
	
	// id찾기
	public ResponseDto<GetUserResponseDto> findUserId(String phoneNum) {
		UserEntity user = findByPhoneNum(phoneNum);
		if (user == null)
			return ResponseDto.setFailed("가입된 정보가 없습니다.");
		
		return ResponseDto.setSuccess("회원님의 email 입니다.", new GetUserResponseDto(user));
	}
	
	private UserEntity findByEmail(String email) {
		UserEntity user;
		try {
			user = userRepository.findByUserEmail(email);
		} catch (Exception e) {
			return null;
		}
		return user;
	}
	
//	Phone_num 언더바 인식 못하므로 나중에 수정 요망
	private UserEntity findByPhoneNum(String phone) {
		UserEntity user;
		try {
			user = userRepository.findByUserPhoneNumber(phone);
		} catch (Exception e) {
			return null;
		}
		return user;
	}
	
	//// 홍지혜
//	public UserEntity create(UserEntity userEntity) {
//		if(userEntity == null || userEntity.getUserEmail() == null) {	// null값 확인
//			throw new RuntimeException("대충 오류라는 영어");
//		}
//		String email = userEntity.getUserEmail();
//		if(userRepository.existsByUserEmail(email)) {
//			throw new RuntimeException("대충 이메일 존재한다는 내용");
//		}
//		
//		return userRepository.save(userEntity);
//	}
	
	
	// 로그인 service
	public ResponseEntity<?> LoginUser(LoginUserDto dto) {
		
		UserEntity user = getByCredentials(dto.getUserEmail(), dto.getUserPassword(), passwordEncoder);
//		UserEntity user = userRepository.findByUserEmailAndUserPassword(dto.getUserEmail(), dto.getUserPassword());
		if (user == null) {	// 해당 유저 정보 없음
			return new ResponseEntity<String>("User information does not exist.", HttpStatus.BAD_REQUEST);
		} else { // 유저정보가 존재함
			String token = tokenProvider.create(user); 	// 토큰 생성
			long expiration = tokenProvider.GetExpiration(token);	// 토큰 유효기간
			
			LoginTokenDto tokenResponse = LoginTokenDto.builder()	
					.token(token)
					.expiration(expiration)
					.build();	// LoginTokenDto에 토큰과 토큰 유효기간 담아 response
			
			return new ResponseEntity<LoginTokenDto>(tokenResponse, HttpStatus.OK);
		}

	}
	
	// pw찾기 0126 황석민
		public ResponseDto<ResultResponseDto> findPw (FindPasswordDto dto) {
			// 전화번호 하고 이메일 입력 검증 
			String email = dto.getUserEmail();
			String phoneNumber = dto.getUserPhoneNumber();
			// 둘중 하나라도 정상이 아니면 ResponseDto Failed 반환
			if (!StringUtils.hasText(email) || !StringUtils.hasText(phoneNumber))
				return ResponseDto.setFailed("빈값입니다.");
			
			// 데이터베이스에서 해당 이메일과 전화번호를 조건으로 검색
			UserEntity userEntity = userRepository.findByUserEmailAndUserPhoneNumber(email, phoneNumber);
			// 존재하지 않으면 존재하지 않는 다는 ResponseDto 반환
			if (userEntity == null) 
				return ResponseDto.setFailed("입력정보가 존재하지 않습니다.");
			
			// sendMail 하고 결과로 받은 code를 데이터베이스에 저장
			try {
				String code = mailService.sendMail(email);
				// TODO : 보낸 코드를 데이터베이스에 저장
					// 1. Code Entity 생성 (email, code 기준으로)
				CodeEntity codeEtt = new CodeEntity(code, email);
					// 2. 생성된 Entity를 CodeRepository에 save
				codeRepository.save(codeEtt);
			} catch(Exception exception) {
				return ResponseDto.setFailed("코드 전송 또는 저장에 실패했습니다.");
			}
			// 성공하면 ResponseDto Successed 반환
			return ResponseDto.setSuccess("메일 전송에 성공했습니다.", new ResultResponseDto(true));
		}

}
