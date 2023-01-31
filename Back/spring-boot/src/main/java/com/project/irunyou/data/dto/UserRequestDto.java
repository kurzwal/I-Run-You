package com.project.irunyou.data.dto;

import com.project.irunyou.data.entity.UserEntity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserRequestDto {
	private String userEmail;
	
	public UserRequestDto(UserEntity user) {
		this.userEmail = user.getUserEmail();
	}
}
