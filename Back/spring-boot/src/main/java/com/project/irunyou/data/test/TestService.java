/* 작성자 : 유열림
 * 파일의 역할 : 테스트용 서비스 클래스
 * 작성날짜 : 2023-01-13
 * 
 * 업데이트 작성자 : -
 * 업데이트 날짜 : -
 * */
package com.project.irunyou.data.test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.irunyou.data.entity.ParkEntity;
import com.project.irunyou.data.repository.ParkRepository;

@Service
public class TestService {
	
	@Autowired ParkRepository parkRepository;
	
	public String getPark(Integer num) {
		
		ParkEntity park = parkRepository.findById(num).get();
		return park.getName();
	}
}
