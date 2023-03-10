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


@Repository
public interface UserRepository extends JpaRepository<UserEntity,Integer> {

	// 커스텀 ORM메소드 작성
//	@Query("select m from USER m where m.email = ?1")
	public UserEntity findByUserEmail(String email);	// 이메일로 userEntity찾기 
	
	public boolean existsByUserEmail(String email);	// 이메일 중복여부 체크	
	public boolean existsByUserPhoneNumber(String phoneNumber);	// 휴대폰번호 중복여부 체크
	public boolean existsByUserNickname(String nickname); // 닉네임 중복여부 체크 // 2023-02-08 홍지혜 수정
	
	public UserEntity findByUserEmailAndUserPassword(String email, String password);	
	// id 찾기용 메서드
	public UserEntity findByUserPhoneNumber(String userPhoneNumber);
	public UserEntity findByUserEmailAndUserPhoneNumber(String email, String phoneNumber);
	public UserEntity findByUserPhoneNumberAndUserName(String userPhoneNumber, String userName);
	
	// 2023-02-12 홍지혜
	// 유저 이메일 -> 유저 닉네임으로 반환
	@Query("select u.userNickname from user u where u.userEmail = ?1")
	public String findUserNicknameByUserEmail(String userEmail);
	
	// 코멘트 작성 유저 인덱스 -> 유저 닉네임으로 반환
	@Query("select u.userNickname from user u where u.userIndex = ?1")
	public String findUserNicknameByCommentWriterIndex(int CommentWriterIndex);
	
}
