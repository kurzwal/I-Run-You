/* 작성자 : 황석민
 * 파일의 역할 : User RunSchedule Service page
 * 작성날짜 : 2023-01-16
 * 
 * 업데이트 작성자 : -
 * 업데이트 날짜 : -
 * */
package com.project.irunyou.data.service;

import java.time.LocalDateTime;

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
		
		try {
		scheduleEntity = RunScheduleEntity
				.builder()
				.park(dto.getPark())
				.title(dto.getTitle())
				.writer_user(dto.getWriter_user())
				// LocalDateTime.now() 현재 시간 등록
				.datetime(LocalDateTime.now())
				.content(dto.getContent())
				.build();
		scheduleRepository.save(scheduleEntity);
		
		} catch(Exception e) {
			return ResponseDto.setFailed("일정 등록중 오류가 발생했습니다.");
		}
		return ResponseDto.setSuccess("일정이 등록되었습니다.",new ResultResponseDto(true));
	}
	
	// 일정 조회
	
	// 일정 수정
	
	// 일정 삭제
	
	
}
