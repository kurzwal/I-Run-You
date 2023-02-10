package com.project.irunyou.data.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class SliceResponseDto<T> {
	private T data;
	private boolean isLast;
	
}
