/* 작성자 : 황석민
 * 파일의 역할 : User RunSchedule Service page
 * 작성날짜 : 2023-01-16
 * 
 * 업데이트 작성자 : -
 * 업데이트 날짜 : -
 * */
package com.project.irunyou.data.service;

import java.sql.Timestamp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.irunyou.data.dto.ResponseDto;
import com.project.irunyou.data.dto.ResultResponseDto;
import com.project.irunyou.data.dto.RunScheduleDto;
import com.project.irunyou.data.entity.RunScheduleEntity;
import com.project.irunyou.data.entity.UserEntity;
import com.project.irunyou.data.repository.ParkRepository;
import com.project.irunyou.data.repository.RunScheduleRepository;

@Service
public class RunScheduleService {
	@Autowired
	RunScheduleRepository scheduleRepository;
	@Autowired
	ParkRepository parkRepository;
	
	
	// 일정 등록 (공원, 제목, 작성자, 시간, 내용)
	public ResponseDto<ResultResponseDto> registSchedule(RunScheduleDto dto){
//		parkRepository.get --작성중
		
		RunScheduleEntity schedule;
		
		Timestamp timestamp = new Timestamp(System.currentTimeMillis());
		
		schedule = RunScheduleEntity.builder()
				.sch_idx(0)
				.title(dto.getTitle())
				.writer_user(dto.getWriter_user())
				.content(dto.getContent())
				.datetime(timestamp)
				.build();
		
		scheduleRepository.save(schedule);
		
		return ResponseDto.setSuccess("일정 등록 성공", new ResultResponseDto(true)); 
	}	
	// 일정 조회
	
	
	// 일정 수정
	
	// 일정 삭제
	
}
