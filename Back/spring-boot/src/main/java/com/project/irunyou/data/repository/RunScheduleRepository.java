/* 작성자 : 홍지혜
 * 파일의 역할 : 일정 Repository Class
 * 작성날짜 : 2023-01-12
 * 
 * 업데이트 작성자 : 홍지혜
 * 업데이트 날짜 : 2023-01-17
 * 업데이트 내용 : findAllByWriterid() 유저 인덱스로 해당 유저의 일정 검색
 * */
package com.project.irunyou.data.repository;

import com.project.irunyou.data.entity.RunScheduleEntity;
import com.project.irunyou.data.entity.RunSchedulePaticipateEntity;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface RunScheduleRepository extends JpaRepository<RunScheduleEntity,Integer>{	
	public List<RunScheduleEntity> findAllByRunScheduleWriter(String userEmail);
	public List<RunScheduleEntity> findAllByRunScheduleIndex(int runScheduleIndex);
	
	public RunScheduleEntity findByRunScheduleIndex(int runScheduleIndex);
	
}
