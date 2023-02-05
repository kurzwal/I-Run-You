/* 작성자 : 홍지혜
 * 파일의 역할 : 유저 일정 정보 response DTO 
 * 작성날짜 : 2023-01-17
 * 
 * 업데이트 작성자 :
 * 업데이트 날짜 : 
 * 업데이트 내용 :
 * */
package com.project.irunyou.data.dto;

import java.time.LocalDateTime;

import com.project.irunyou.data.entity.RunScheduleEntity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GetUserRunScheduleDto {
	private int runSchedulePark;
	private String runScheduleTitle;
	private LocalDateTime runScheduleDatetime;
	
	// 일정 조회 서비스용 생성자
	public GetUserRunScheduleDto(RunScheduleEntity runSchedule) {
		this.runSchedulePark = runSchedule.getRunSchedulePark();
		this.runScheduleTitle = runSchedule.getRunScheduleTitle();
		this.runScheduleDatetime = runSchedule.getRunScheduleDatetime();
	}

	
}
