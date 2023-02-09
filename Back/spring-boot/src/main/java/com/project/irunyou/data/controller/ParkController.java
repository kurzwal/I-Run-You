/* 
 * 업데이트 작성자 : 홍지혜
 * 업데이트 날짜 : 사용자 위치 기반 가장 가까운 공원 5개 respose 기능
 * */
package com.project.irunyou.data.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.irunyou.data.dto.PageResponseDto;
import com.project.irunyou.data.dto.ParkInfoDto;
import com.project.irunyou.data.dto.ParkRunScheduleDto;
import com.project.irunyou.data.dto.ResponseDto;
import com.project.irunyou.data.dto.UserLocationDto;
import com.project.irunyou.data.service.ParkService;

@CrossOrigin(originPatterns = "http://localhost:3000")
@RestController
@RequestMapping("irunyou/park/")
public class ParkController {

	@Autowired ParkService parkService;
	
//	@GetMapping("runSchedule")
//	public ResponseDto<List<ParkRunScheduleDto>> getRunScheduleList(@RequestParam int parkNum){
//		return parkService.getRunScheduleList(parkNum);
//	}
	
	// 사용자 위치기반 가까운 공원 5개
	@PostMapping("")
	public ResponseDto<List<ParkInfoDto>> findClosePark(@RequestBody UserLocationDto dto) {
		return parkService.findClosePark(dto);
	}
	
	// 2023-02-09 홍지혜
	// 공원에 등록된 런스케쥴 리스트 가져오기 (페이지네이션 처리)
	@GetMapping("runSchedule")
	public ResponseDto<PageResponseDto<ParkRunScheduleDto>> getParkRunScheduleList(@RequestParam int parkIndex, int page) {
		return parkService.getParkRunScheduleList(page,5,parkIndex);
	}

}
