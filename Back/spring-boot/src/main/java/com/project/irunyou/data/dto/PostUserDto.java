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
	private String email;
	@NotNull
	private String password;
	@NotNull
	private String password2;
	@NotNull
	private String address;
	@NotNull
	private String addressDetail;
	@NotNull
	private String phone_num;
}
