/* 작성자 : 홍지혜
 * 파일의 역할 : 유저정보 Repository Class
 * 작성날짜 : 2023-01-12
 * 
 * 업데이트 작성자 : 황석민
 * 업데이트 날짜 : 2023-01-15
 * 업데이트 내용 : delete, exists, find ByEmail 메소드, @Query 추가
 * */
package com.project.irunyou.data.repository;

import com.project.irunyou.data.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<UserEntity,Integer> {

	// 커스텀 ORM메소드 작성
//	@Query("select m from USER m where m.email = ?1")
	public UserEntity findByUserEmail(String email);	// 이메일로 userEntity찾기 
	public boolean existsByUserEmail(String email);		
	public UserEntity findByUserEmailAndUserPassword(String email, String password);	
	// id 찾기용 메서드
	public UserEntity findByUserPhoneNumber(String phoneNumber);
	
	
	
}
