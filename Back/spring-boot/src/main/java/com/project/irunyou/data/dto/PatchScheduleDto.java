/* 작성자 : 홍지혜
 * 파일의 역할 : 스케줄 수정 request dto
 * 작성날짜 : 2023-01-18
*/
package com.project.irunyou.data.dto;

import java.sql.Date;
import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PatchScheduleDto {
	private int scheduleIndex;
	private String title;
	private LocalDateTime datetime;
	private String content;
	
}
