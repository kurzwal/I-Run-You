/* 작성자 : 홍지혜
 * 파일의 역할 : 스케줄 삭제용 reqeust dto
 * 작성날짜 : 2023-01-18
 */
package com.project.irunyou.data.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FindRunScheduleDto {
	private int schdulIndex;
}
