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
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.irunyou.data.dto.FindRunScheduleDto;
import com.project.irunyou.data.dto.GetUserRunScheduleDto;
import com.project.irunyou.data.dto.PatchScheduleDto;
import com.project.irunyou.data.dto.ResponseDto;
import com.project.irunyou.data.dto.ResultResponseDto;
import com.project.irunyou.data.dto.RunScheduleDto;
import com.project.irunyou.data.service.RunScheduleService;

@CrossOrigin(originPatterns = "http://localhost:3000")
@RestController
@RequestMapping("/irunyou/runschedule/")
public class RunScheduleController {

	@Autowired RunScheduleService scheduleService;
	
	//유저가 직접 일정 생성
	@PostMapping("create")
	public ResponseDto<ResultResponseDto> registSchedule(@AuthenticationPrincipal String writer, @RequestBody RunScheduleDto requestBody) {
		return scheduleService.registSchedule(writer,requestBody);
	}
	
	// 유저가 직접 생성한 일정 수정
	@PatchMapping("modify")
	ResponseDto<ResultResponseDto> patchSchedule(@RequestBody PatchScheduleDto requestBody) {
		return scheduleService.patchSchedule(requestBody);
	}
	
	// 유저가 직접 생성한 일정 삭제
	@PatchMapping("delete")
	public ResponseDto<ResultResponseDto> deleteSchedule(@RequestBody FindRunScheduleDto requestBody) {
		return scheduleService.deleteSchedule(requestBody);
	}
	
	
	// 유저가 기존에 존재하는 일정에 참여
	@PostMapping("participate")
	public ResponseDto<ResultResponseDto> participateRunSchedule(@AuthenticationPrincipal String user, @RequestBody FindRunScheduleDto requestBody) {
		return scheduleService.participateRunSchedule(user, requestBody);
	}
	
	// 일정 참여 취소
	@PatchMapping("cancel")
	public ResponseDto<ResultResponseDto> cancelRunSchedule(@AuthenticationPrincipal String user, @RequestBody FindRunScheduleDto requestBody) {
		return scheduleService.cancelRunSchedule(user, requestBody);
	}
	
	//R (일정조회(유저가 직접 만든 일정, 참여하는 일정 모두)
	@GetMapping("list")
	public ResponseDto<Map<String,List<GetUserRunScheduleDto>>> readSchedule(@AuthenticationPrincipal String userEmail) {
		return scheduleService.readSchedule(userEmail);
	}
	
	// 로그인한 유저의 일정 참여 여부
	@GetMapping("isParticipate")
	public ResponseDto<ResultResponseDto> isParticipate(@AuthenticationPrincipal String userEmail, @RequestParam int schIdx) {
		return scheduleService.getIsParticipate(userEmail, schIdx);
	}

}
	
	

