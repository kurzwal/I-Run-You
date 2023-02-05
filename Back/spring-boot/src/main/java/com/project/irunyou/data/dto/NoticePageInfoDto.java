package com.project.irunyou.data.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class NoticePageInfoDto {
	
	private int page;
	private int size;
	private int totalElements;
	private int totalPages;
	
}
