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
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.project.irunyou.data.dto.FindRunScheduleDto;
import com.project.irunyou.data.dto.GetUserResponseDto;
import com.project.irunyou.data.dto.GetUserRunScheduleDto;
import com.project.irunyou.data.dto.PatchScheduleDto;
import com.project.irunyou.data.dto.ResponseDto;
import com.project.irunyou.data.dto.ResultResponseDto;
import com.project.irunyou.data.dto.RunScheduleDto;
import com.project.irunyou.data.dto.ScheduleDto;
import com.project.irunyou.data.dto.UserRequestDto;
import com.project.irunyou.data.entity.RunScheduleEntity;
import com.project.irunyou.data.entity.RunSchedulePaticipateEntity;
import com.project.irunyou.data.entity.UserEntity;
import com.project.irunyou.data.repository.ParkRepository;
import com.project.irunyou.data.repository.RunScheduleRepository;
import com.project.irunyou.data.repository.UserRepository;
import com.project.irunyou.data.repository.RunScheduleParticipateRepository;


@Service
public class RunScheduleService {
	
	@Autowired RunScheduleRepository runScheduleRepository;
	@Autowired ParkRepository parkRepository;
	@Autowired UserRepository userRepository;
	@Autowired RunScheduleParticipateRepository runScheduleParticipatieRepository;
	
	
	// 유저가 직접 일정 등록 (공원, 제목, 작성자, 시간, 내용)
	public ResponseDto<ResultResponseDto> registSchedule(String writer, RunScheduleDto dto){
		try {
			RunScheduleEntity runShedule = RunScheduleEntity.builder()
					.runSchedulePark(dto.getRunSchedulePark())
					.runScheduleTitle(dto.getRunScheduleTitle())
					.runScheduleWriter(writer)
					.runScheduleDatetime(dto.getRunScheduleDatetime())
					.runScheduleContent(dto.getRunScheduleContent())
					.build();
			runScheduleRepository.save(runShedule);
			
		} catch (Exception e) {
			return ResponseDto.setFailed("일정 등록중 오류가 발생했습니다.");
		}
		return ResponseDto.setSuccess("일정이 등록되었습니다.",new ResultResponseDto(true));
	}
	
	// 유저가 자신이 등록한 일정 삭제
	public ResponseDto<ResultResponseDto> deleteSchedule(FindRunScheduleDto dto) {
		
		int schIdx = dto.getRunScheduleIndex();
		
		try {
			RunScheduleEntity deleteSchedule = runScheduleRepository.findById(schIdx).get();		
			runScheduleRepository.delete(deleteSchedule);
			
		}catch (Exception e) {
			return ResponseDto.setFailed("일정 삭제 중 오류가 발생했습니다.");
		}
		return ResponseDto.setSuccess("일정이 삭제되었습니다.", new ResultResponseDto(true));
	}
	
	// 유저가 자신이 등록한 일정 수정
	public ResponseDto<ResultResponseDto> patchSchedule(PatchScheduleDto dto) {
		
		int schIdx = dto.getRunScheduleIndex();
		
		try {
		RunScheduleEntity patchSchedule = runScheduleRepository.findById(schIdx).get();
		
		patchSchedule.setRunScheduleTitle(dto.getRunScheduleTitle());
		patchSchedule.setRunScheduleDatetime(dto.getRunScheduleDatetime());
		patchSchedule.setRunScheduleContent(dto.getRunScheduleContent());
		
		runScheduleRepository.save(patchSchedule);
		
		}catch (Exception e) {
			return ResponseDto.setFailed("일정 수정 중 오류가 발생했습니다.");
		}
		
		return ResponseDto.setSuccess("일정 수정이 완료되었습니다.", new ResultResponseDto(true));
	}
	
	
	// 유저가 이미 존재하는 일정에 참여
	public ResponseDto<ResultResponseDto> participateRunSchedule(String user, FindRunScheduleDto dto) {
		try {
			RunSchedulePaticipateEntity participateRunSchedule = RunSchedulePaticipateEntity.builder()
					.runScheduleIndex(dto.getRunScheduleIndex())
					.userEmail(user)
					.build();
			
			runScheduleParticipatieRepository.save(participateRunSchedule);
			
		} catch (Exception e) {
			return ResponseDto.setFailed("일정 참여 중 오류가 발생했습니다.");
		}
		
		return ResponseDto.setSuccess("일정 참여가 완료되었습니다.", new ResultResponseDto(true));
	}
	
	// 유저가 이미 존재하는 일정에 참여했다가 참여 취소
	public ResponseDto<ResultResponseDto> cancelRunSchedule(String user, FindRunScheduleDto dto) {
		try {
			RunSchedulePaticipateEntity cancelRunSchedule = runScheduleParticipatieRepository.findByRunScheduleIndexAndUserEmail(dto.getRunScheduleIndex(), user);
			runScheduleParticipatieRepository.delete(cancelRunSchedule);
		} catch(Exception e) {
			return ResponseDto.setFailed("일정 참여 취소 중 오류가 발생했습니다.");
		}
		
		return ResponseDto.setSuccess("일정 참여가 취소되었습니다.", new ResultResponseDto(true));
	}
	
	
	// 유저가 직접 생성한 일정 리스트 불러오기
	public List<GetUserRunScheduleDto> readMyRunSchedule(String userEmail) {
		List<GetUserRunScheduleDto> myRunScheduleList = new ArrayList<>();
		try {
			List<RunScheduleEntity> myRunScheduleEntityList = runScheduleRepository.findAllByRunScheduleWriter(userEmail);
			
			for(RunScheduleEntity r : myRunScheduleEntityList) {
				myRunScheduleList.add(new GetUserRunScheduleDto(r));
			}
			
		}catch (Exception e) {
			myRunScheduleList = null;
		}
		
		return myRunScheduleList;
	}
	
	
	// 유저가 참여한 일정 리스트 불러오기
	public List<GetUserRunScheduleDto> readParticipateRunSchedule(String userEmail) {
		List<RunScheduleEntity> participateRunScheduleEntities = new ArrayList<>();

		List<GetUserRunScheduleDto> participateRunScheduleList = new ArrayList<>();

		try {

			List<RunSchedulePaticipateEntity> myParticipateRunScheduleEntityList = runScheduleParticipatieRepository
					.findAllByUserEmail(userEmail);

			List<Integer> runScheduleIndex = new ArrayList<>();

			for (RunSchedulePaticipateEntity r : myParticipateRunScheduleEntityList) {
				runScheduleIndex.add(r.getRunScheduleIndex());
			}

			for (Integer i : runScheduleIndex) {
				participateRunScheduleEntities.add(runScheduleRepository.findByRunScheduleIndex(i));
			}

			for (RunScheduleEntity r : participateRunScheduleEntities) {
				participateRunScheduleList.add(new GetUserRunScheduleDto(r));
			}
		} catch (Exception e) {
			participateRunScheduleList = null;
		}

		return participateRunScheduleList;

	}
	
	// 유저 일정 조회 (내가 만든 일정, 내가 참여한 일정 나눠서 출력됨)
	public ResponseDto<Map<String,List<GetUserRunScheduleDto>>> readSchedule(String email) {
		Map<String, List<GetUserRunScheduleDto>> data = new HashMap<>();
		try {
			data.put("내가 만든 일정", readMyRunSchedule(email));
			data.put("내가 참여한 일정", readParticipateRunSchedule(email));
		} catch (Exception e) {
			return ResponseDto.setFailed("일정을 불러오던 중 오류가 발생했습니다.");
		}
		
		return ResponseDto.setSuccess("Success",data);
		
		}
	
}
