/* 작성자 : 황석민
 * 파일의 역할 : User RunSchedule Service page
 * 작성날짜 : 2023-01-16
 * 
 * 업데이트 작성자 : 홍지혜
 * 업데이트 날짜 : 2023-01-17
 * 업데이트 내용 : 일정 등록, 조회 서비스
 * 
 *  * 업데이트 작성자 : 홍지혜
 * 업데이트 날짜 : 2023-01-18
 * 업데이트 내용 : 일정 수정, 삭제 서비스
 * */
package com.project.irunyou.data.service;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.project.irunyou.data.dto.FindRunScheduleDto;
import com.project.irunyou.data.dto.GetUserRunScheduleDto;
import com.project.irunyou.data.dto.PatchScheduleDto;
import com.project.irunyou.data.dto.ResponseDto;
import com.project.irunyou.data.dto.ResultResponseDto;
import com.project.irunyou.data.dto.RunScheduleDto;
import com.project.irunyou.data.dto.ScheduleDto;
import com.project.irunyou.data.dto.UserRequestDto;
import com.project.irunyou.data.entity.RunScheduleEntity;
import com.project.irunyou.data.entity.UserEntity;
import com.project.irunyou.data.repository.ParkRepository;
import com.project.irunyou.data.repository.RunScheduleRepository;
import com.project.irunyou.data.repository.UserRepository;

@Service
public class RunScheduleService {
	
	@Autowired
	RunScheduleRepository scheduleRepository;
	@Autowired
	ParkRepository parkRepository;
	@Autowired
	UserRepository userRepository;
	
	
	// 일정 등록 (공원, 제목, 작성자, 시간, 내용)
	public ResponseDto<ResultResponseDto> registSchedule(RunScheduleDto dto){
		
		try {
//		scheduleEntity = RunScheduleEntity
//				.builder()
//				.park(dto.getPark())
//				.title(dto.getTitle())
//				.writer_user(dto.getWriter_user())
//				// "0000-00-00T00:00:00" 형식으로 request
//				.datetime(dto.getDatetime())
//				.content(dto.getContent())
//				.build();
		
		RunScheduleEntity runScheduleEntity = new RunScheduleEntity(dto);		
		scheduleRepository.save(runScheduleEntity);
		
		
		
	// 일정 조회
	
		} catch(Exception e) {
			return ResponseDto.setFailed("일정 등록중 오류가 발생했습니다.");
		}
		return ResponseDto.setSuccess("일정이 등록되었습니다.",new ResultResponseDto(true));
	}
	
	// 일정 조회 유저정보 -> (일정 있는 공원, 일정 제목, 일정 시간) 
	// 공원 이름으로 출력?
	public ResponseDto<List<GetUserRunScheduleDto>> readSchedule(UserRequestDto dto) {
		UserEntity user = userRepository.findByEmail(dto.getUserEmail());
		List<GetUserRunScheduleDto> data = new ArrayList<>();
		try {
			List<RunScheduleEntity> scheduleList = scheduleRepository.findAllByWriterIndex(user.getUserIndex());
			for(RunScheduleEntity r : scheduleList) {
				data.add(new GetUserRunScheduleDto(r));
			}
		}catch(Exception e) {
			e.printStackTrace();
			return ResponseDto.setFailed("일정 조회중 오류가 발생했습니다.");
		}
		return ResponseDto.setSuccess("일정 조회 완료",data);
	}
	
	// 일정 수정
	public ResponseDto<GetUserRunScheduleDto> patchSchedule(PatchScheduleDto dto) {
		int schIdx = dto.getSchedulIndex();
		RunScheduleEntity patchSchedule = null;
		try {
			patchSchedule = scheduleRepository.findById(schIdx).get();
		} catch(Exception e) {
			return ResponseDto.setFailed("해당 일정이 존재하지 않습니다.");
		}
		
		patchSchedule.setTitle(dto.getTitle());
		patchSchedule.setDatetime(dto.getDatetime());
		patchSchedule.setContent(dto.getContent());
		
		scheduleRepository.save(patchSchedule);
		
		return ResponseDto.setSuccess("일정 수정이 완료되었습니다.", new GetUserRunScheduleDto(patchSchedule));
	}
	
	
	// 일정 삭제
	public ResponseDto<ResultResponseDto> deleteSchedule(FindRunScheduleDto dto) {
		int schIdx = dto.getSchdulIndex();
		try {
			RunScheduleEntity deleteSchedule = scheduleRepository.findById(schIdx).get();
		} catch(Exception e) {
			return ResponseDto.setFailed("해당 일정이 존재하지 않습니다.");
		}
		try {
			scheduleRepository.deleteById(schIdx);
		} catch(Exception e) {
			return ResponseDto.setFailed("일정 삭제 중 오류가 발생했습니다.");
		}
		return ResponseDto.setSuccess("일정이 삭제되었습니다.", new ResultResponseDto(true));
	}
	
	// 일정에 사용자 등록
//	일정에 사용자를 등록해야하는데 일정 column에 사용자를 받을수 있는 column?
//	public ResponseDto<ResultResponseDto> enrollSchedule(ScheduleDto dto){
//		int schIdx = dto.getScheduleIndex();
//		
//		RunScheduleEntity enrollschedule = scheduleRepository.getById(dto.getUserIndex());
//		
//		
//		return ResponseDto.setSuccess("일정등록이 완료되었습니다.", new ResultResponseDto(true));
//	}
}
