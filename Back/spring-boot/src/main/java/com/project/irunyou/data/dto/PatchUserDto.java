/* 작성자 : 황석민
 * 파일의 역할 : UpdateUser Dto
 * 작성날짜 : 2023-01-15
 * 
 * 업데이트 작성자 : -
 * 업데이트 날짜 : -
 * 업데이트 내용 : -
 * */
package com.project.irunyou.data.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PatchUserDto {
	private String userEmail;
	private String userAddress;
	private String userAddressDetail;
	private String userPhoneNumber;
}
