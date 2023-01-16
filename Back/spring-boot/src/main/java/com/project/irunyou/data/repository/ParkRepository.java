/* 작성자 : 홍지혜
 * 파일의 역할 : 공원정보 Repository Class
 * 작성날짜 : 2023-01-12
 * 
 * 업데이트 작성자 : 황석민
 * 업데이트 날짜 : 2023-01-16
 * 업데이트 내용 : 메서드 추가
 * */
package com.project.irunyou.data.repository;

import com.project.irunyou.data.entity.ParkEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;



@Repository
public interface ParkRepository extends JpaRepository<ParkEntity, Integer> {

//    @Query("select park_idx from park p where p.name = ?1")
//    public Integer findParkName(String parkName);
	public ParkEntity findByName(String name);

}
