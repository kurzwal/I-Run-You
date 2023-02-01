/* 작성자 : 황석민
 * 파일의 역할 : User RunSchedule DTO
 * 작성날짜 : 2023-01-16
 * 
 * 업데이트 작성자 : 홍지혜
 * 업데이트 날짜 : 2023-01-17
 * 업데이트 내용 : datetime 자료형 변경
 * */
package com.project.irunyou.data.dto;

import java.sql.Timestamp;
import java.time.LocalDateTime;

import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.security.core.annotation.AuthenticationPrincipal;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RunScheduleDto {
	// 일정 만든 유저 -> @AuthenticationPrincipal로 받아옴
	
	@NotNull
	private int runSchedulePark;
	@NotNull
	private String runScheduleTitle;
	@JsonFormat(shape=JsonFormat.Shape.STRING,pattern="yyyy-MM-dd'T'HH:mm",timezone="Asia/Seoul" )
	//@DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
	private LocalDateTime runScheduleDatetime;
    @NotNull
    private String runScheduleContent;
}