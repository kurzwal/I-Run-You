/* 작성자 : 황석민
 * 파일의 역할 : 회원가입용 PostUser DTO
 * 작성날짜 : 2023-01-15
 * 
 * 업데이트 작성자 : -
 * 업데이트 날짜 : -
 * */
package com.project.irunyou.data.dto;

import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PostUserDto {
	@NotNull
	private String userEmail;
	@NotNull
	private String userPassword;
	@NotNull
	private String userPassword2;
	@NotNull
	private String userAddress;
	@NotNull
	private String userAddressDetail;
	@NotNull
	private String userPhoneNumber;
	@NotNull
	private String userName;
	@NotNull
	private String userNickname;
	@NotNull
	private String postNumber;
	
}
