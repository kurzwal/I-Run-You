/* 작성자 : 황석민
 * 파일의 역할 : User RunSchedule Method Controller
 * 작성날짜 : 2023-01-16
 * 
 * 업데이트 작성자 : 홍지혜
 * 업데이트 날짜 : 2023-01-17
 * 업데이트 내용 : 일정 등록, 일정 조회 컨트롤러
 * 
 * 업데이트 작성자 : 홍지혜
 * 업데이트 날짜 : 2023-01-18
 * 업데이트 내용 : 일정 수정, 삭제 컨트롤러
 * */
package com.project.irunyou.data.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.irunyou.data.dto.FindRunScheduleDto;
import com.project.irunyou.data.dto.GetUserRunScheduleDto;
import com.project.irunyou.data.dto.PatchScheduleDto;
import com.project.irunyou.data.dto.ResponseDto;
import com.project.irunyou.data.dto.ResultResponseDto;
import com.project.irunyou.data.dto.RunScheduleDto;
import com.project.irunyou.data.dto.UserRequestDto;
import com.project.irunyou.data.repository.UserRepository;
import com.project.irunyou.data.service.RunScheduleService;

@RestController
@RequestMapping
public class RunScheduleController {

	@Autowired RunScheduleService scheduleService;
	
	//C (일정등록)
	public ResponseDto<ResultResponseDto> registSchedule(@RequestBody RunScheduleDto requestBody) {
		return scheduleService.registSchedule(requestBody);
	}
	//R (일정조회)
	@GetMapping("schedule_info")
	public ResponseDto<List<GetUserRunScheduleDto>> readSchedule(@RequestBody UserRequestDto dto) {
		return scheduleService.readSchedule(dto);
	}
	
	//U
	@PatchMapping("")
	public ResponseDto<GetUserRunScheduleDto> patchSchedule(@RequestBody PatchScheduleDto dto) {
		return scheduleService.patchSchedule(dto);
	}
		
	//D (일정삭제)
	@DeleteMapping("")
	public ResponseDto<ResultResponseDto> deleteSchedule(@RequestBody FindRunScheduleDto dto) {
		return scheduleService.deleteSchedule(dto);
	}
	
}
