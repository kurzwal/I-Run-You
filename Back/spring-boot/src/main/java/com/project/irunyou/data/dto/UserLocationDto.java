package com.project.irunyou.data.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserLocationDto {
	private double UserLatitude;
	private double UserLongitude;
}
