package com.project.irunyou.data.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class NoticePageResponseDto<T> {
	private T data;
	private NoticePageInfoDto pageInfoDto;
}
