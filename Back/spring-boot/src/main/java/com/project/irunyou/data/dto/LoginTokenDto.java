package com.project.irunyou.data.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class LoginTokenDto {
	private String token;
	private long expiration;
}
