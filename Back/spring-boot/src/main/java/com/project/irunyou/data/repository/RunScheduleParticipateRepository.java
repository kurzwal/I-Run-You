// 2023-01-26 홍지혜
package com.project.irunyou.data.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.irunyou.data.entity.RunSchedulePaticipateEntity;

@Repository
public interface RunScheduleParticipateRepository extends JpaRepository<RunSchedulePaticipateEntity, Integer>{
	
	public List<RunSchedulePaticipateEntity> findAllByUserEmail(String userEmail);
	
	// 스케쥴 인덱스와 유저가 짝이 맞는 데이터를 가져옴
	public RunSchedulePaticipateEntity findByRunScheduleIndexAndUserEmail(int runScheduleIndex, String userEmail);
	
}
