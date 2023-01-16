/* 작성자 : 황석민
 * 파일의 역할 : User RunSchedule Service page
 * 작성날짜 : 2023-01-16
 * 
 * 업데이트 작성자 : -
 * 업데이트 날짜 : -
 * */
package com.project.irunyou.data.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.irunyou.data.dto.ResponseDto;
import com.project.irunyou.data.dto.ResultResponseDto;
import com.project.irunyou.data.dto.RunScheduleDto;
import com.project.irunyou.data.entity.RunScheduleEntity;
import com.project.irunyou.data.repository.ParkRepository;
import com.project.irunyou.data.repository.RunScheduleRepository;

@Service
public class RunScheduleService {
	@Autowired
	RunScheduleRepository scheduleRepository;
	@Autowired
	ParkRepository parkRepository;
	
	RunScheduleEntity scheduleEntity;
	
	// 일정 등록 (공원, 제목, 작성자, 시간, 내용)
	public ResponseDto<ResultResponseDto> registSchedule(RunScheduleDto dto){
//		parkRepository.get --작성중
		
		return null;
	}
	// 일정 조회
	
	// 일정 수정
	
	// 일정 삭제
	
	
}
