/* 작성자 : 황석민
 * 파일의 역할 : User RunSchedule DTO
 * 작성날짜 : 2023-01-16
 * 
 * 업데이트 작성자 : -
 * 업데이트 날짜 : -
 * */
package com.project.irunyou.data.dto;

import java.sql.Timestamp;

import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RunScheduleDto {
	@NotNull
	private int park;
	@NotNull
	private String title;
	@NotNull
	private int writer_user;
	@NotNull
    private Timestamp datetime;
    @NotNull
    private String content;
}
