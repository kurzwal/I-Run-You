package com.project.irunyou.data.dto;

import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserLocationDto {
	@NotNull
	private double latitude;
	@NotNull
	private double longitude;
}
