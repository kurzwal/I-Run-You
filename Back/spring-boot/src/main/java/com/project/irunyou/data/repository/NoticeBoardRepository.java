/* 작성자 : 홍지혜
 * 파일의 역할 : 공지사항 Repository
 * 작성날짜 : 2023-01-17
 * 
 * 업데이트 작성자 : 황석민
 * 업데이트 날짜 : 2023-01-18
 * */
package com.project.irunyou.data.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.irunyou.data.entity.NoticeBoardEntity;
import com.project.irunyou.data.entity.UserEntity;

@Repository
// JpaRepository<NoticeBoardEntity,-> 수정
public interface NoticeBoardRepository extends JpaRepository<NoticeBoardEntity, Integer>{

	// 메서드 추가
	public NoticeBoardEntity findByNoticeTitle(String title);
	
}