package com.project.irunyou.data.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
public class LoginTokenDto {
	private String token;
	private long expiration;
}
