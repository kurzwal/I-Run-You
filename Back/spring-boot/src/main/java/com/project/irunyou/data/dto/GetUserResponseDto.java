/* 작성자 : 황석민
 * 파일의 역할 : PW제외 유저정보 받아오기
 * 작성날짜 : 2023-01-15
 *  
 * 업데이트 작성자 : -
 * 업데이트 날짜 : -
 * */
package com.project.irunyou.data.dto;

import com.project.irunyou.data.entity.UserEntity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class GetUserResponseDto {

	private int userIndex;
	private String userNickName;
	private String userEmail;
	private String userAddress;
	private String userAddressDetail;
	private String userName;
//	private String phone_num;
	private int userLevel;
	
	// 생성자 생성, 전화번호는 공개여부 곤란..(생성자 매개변수 명 확인요망)
	public GetUserResponseDto(UserEntity user) {
		this.userName = user.getUserName();
		this.userNickName = user.getUserNickname();
		this.userIndex = user.getUserIndex();
		this.userEmail = user.getUserEmail();
		this.userAddress = user.getUserAddress();
		this.userAddressDetail = user.getUserAddressDetail();
//		this.phone_num = user.getPhone_num();
	}
}
