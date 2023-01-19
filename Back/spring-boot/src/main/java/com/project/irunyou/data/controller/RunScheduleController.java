/* 작성자 : 황석민
 * 파일의 역할 : User RunSchedule Method Controller
 * 작성날짜 : 2023-01-16
 * 
 * 업데이트 작성자 : -
 * 업데이트 날짜 : -
 * */
package com.project.irunyou.data.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.irunyou.data.dto.ResponseDto;
import com.project.irunyou.data.dto.ResultResponseDto;
import com.project.irunyou.data.dto.RunScheduleDto;
import com.project.irunyou.data.service.RunScheduleService;

@RestController
@RequestMapping("schedule/")
public class RunScheduleController {

	@Autowired RunScheduleService scheduleService;
	//C (일정등록)
	@PostMapping("createschedule/")
	public ResponseDto<ResultResponseDto> registSchedule(@RequestBody RunScheduleDto requestBody) {
		return scheduleService.registSchedule(requestBody);
	}
	//R (일정조회)
	
	//U
	
	//D
	
}
