package com.project.irunyou.data.dto;

import com.project.irunyou.data.entity.UserEntity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

// 작성자 : 최예정
// 파일의 역할 : EmailDto
// 작성날짜 : 2023-02-02

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserRequestDto {
	private String userEmail;
	
	public UserRequestDto(UserEntity user) {
		this.userEmail = user.getUserEmail();
	}
}
