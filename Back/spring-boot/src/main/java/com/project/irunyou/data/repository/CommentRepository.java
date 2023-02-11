/* 작성자 : 홍지혜
 * 파일의 역할 : 일정-댓글 Repository Class
 * 작성날짜 : 2023-01-12
 * 
 * 업데이트 작성자 : 유열림
 * 업데이트 날짜 : 2023-02-11
 * 업데이트 사항 : comment List 불러오는 메서드 작성
 * */
package com.project.irunyou.data.repository;

import com.project.irunyou.data.entity.CommentEntity;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends JpaRepository<CommentEntity,Integer> {
	public List<CommentEntity> findAllByCommentScheduleIndex(int CommentScheduleIndex);
}
