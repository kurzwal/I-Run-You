// 2023-01-26 홍지혜
package com.project.irunyou.data.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.irunyou.data.entity.CommentLikeEntity;

@Repository
public interface CommentLikeRepository extends JpaRepository<CommentLikeEntity, Integer>{
	public boolean existsByCommentIndexAndUserEmail(int commentIndex, String userEmail);
	public CommentLikeEntity findByCommentIndexAndUserEmail(int commentIndex, String userEmail);
	public int countByCommentIndex(int commentIndex);
//	public void deleteByCommentIndexAndUserEmail(int commentIndex, String userEmail);
}
