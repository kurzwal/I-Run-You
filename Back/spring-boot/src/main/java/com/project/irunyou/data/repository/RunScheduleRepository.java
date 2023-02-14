/* 작성자 : 홍지혜
 * 파일의 역할 : 일정 Repository Class
 * 작성날짜 : 2023-01-12
 * 
 * 업데이트 작성자 : 홍지혜
 * 업데이트 날짜 : 2023-01-17
 * 업데이트 내용 : findAllByWriterid() 유저 인덱스로 해당 유저의 일정 검색
 * */
package com.project.irunyou.data.repository;

import com.project.irunyou.data.entity.NoticeBoardEntity;
import com.project.irunyou.data.entity.RunScheduleEntity;

import java.util.List;

import java.awt.print.Pageable;
import java.time.LocalDateTime;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface RunScheduleRepository extends JpaRepository<RunScheduleEntity,Integer>{	
	public List<RunScheduleEntity> findAllByRunScheduleWriter(String userEmail);
	public List<RunScheduleEntity> findAllByRunScheduleIndex(int runScheduleIndex);
	public List<RunScheduleEntity> findAllByRunSchedulePark(int parkIndex);
	
	public RunScheduleEntity findByRunScheduleIndex(int runScheduleIndex);
	
	// 공원 인덱스에 해당하는 RunSchedule 불러온 후 시간 순 정렬, 반환형 Slice
	// Slice : limit(size) + 1 된 값을 가져옴
	public Slice<RunScheduleEntity> findAllByRunScheduleParkOrderByRunScheduleDateTime(int runSchedulePark, PageRequest pageRequest);
	
	@Query(nativeQuery = true, value = "delete from run_schedule r where run_schedule_date_time < DATE_ADD(now(),INTERVAL -1 DAY)")
	public void deleteByRunScheduleDateTime(LocalDateTime now);
	
}
