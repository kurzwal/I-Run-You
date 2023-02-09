// 홍지혜
// 페이지네이션 처리에 필요한 DTO

package com.project.irunyou.data.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PageResponseDto<T> {
	private T data;
	private PageInfoDto pageInfoDto;
}
