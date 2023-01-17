/* 작성자 : 홍지혜
 * 파일의 역할 : 일정-댓글 Repository Class
 * 작성날짜 : 2023-01-12
 * 
 * 업데이트 작성자 : -
 * 업데이트 날짜 : -
 * */
package com.project.irunyou.data.repository;

import com.project.irunyou.data.entity.CommentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends JpaRepository<CommentEntity,Integer> {

	
}
