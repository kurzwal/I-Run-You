package com.project.irunyou.data.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.irunyou.data.dto.CloseParkDto;
import com.project.irunyou.data.dto.ParkInfoDto;
import com.project.irunyou.data.dto.ResponseDto;
import com.project.irunyou.data.dto.UserLocationDto;
import com.project.irunyou.data.entity.ParkEntity;
import com.project.irunyou.data.repository.ParkRepository;

@Service
public class ParkService {
	
	@Autowired ParkRepository parkRepository;
	
	public ResponseDto<ParkInfoDto> searchParkById (Integer parkNum) {
		
		ParkEntity park = findById(parkNum);
		if (park == null) {
			return ResponseDto.setFailed("망했어요");
		}
	
		
		ParkInfoDto result;
		result = ParkInfoDto.builder()
				.address(park.getAddress())
				.area(park.getArea())
				.latitude(park.getLatitude())
				.longitude(park.getLongitude())
				.name(park.getName())
				.build();
		
		return ResponseDto.setSuccess("Load Success", result);
		
	}
	
	public ParkEntity findById(Integer parkNum) {
		ParkEntity park;
		try {
			park = parkRepository.findById(parkNum).get();
		} catch (Exception e) {
			return null;
		}
		return park;
	}
	
	// 가까운 공원 5개 가져오기
	// request 값 위도, 경도
	public ResponseDto<List<CloseParkDto>> findClosePark(UserLocationDto dto) {
		List<CloseParkDto> ClosePark = new ArrayList<>(); 
		try {
		List<ParkEntity> CloseDistancePark = parkRepository.findAllByDistance(dto.getLatitude(),dto.getLongitude());
		for(ParkEntity p : CloseDistancePark) {
			ClosePark.add(new CloseParkDto(p));
		}
		} catch(Exception e) {
			e.printStackTrace();
		}
		
		return ResponseDto.setSuccess("Load Success", ClosePark);
	}

}
