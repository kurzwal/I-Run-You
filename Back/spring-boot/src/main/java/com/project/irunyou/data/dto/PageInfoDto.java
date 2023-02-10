// 홍지혜
// 페이지네이션 처리에 필요한 DTO

package com.project.irunyou.data.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PageInfoDto {
	
	private int page;
	private int size;
	private int totalElements;
	private int totalPages;
	
}
