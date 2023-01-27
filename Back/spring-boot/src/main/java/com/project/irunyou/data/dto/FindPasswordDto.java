package com.project.irunyou.data.dto;

import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class FindPasswordDto {
	@NotNull
	private String userEmail;
	@NotNull
	private String userPhoneNumber;
	
}
