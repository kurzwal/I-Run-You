package com.project.irunyou.data.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.irunyou.data.dto.RegistCommentDto;
import com.project.irunyou.data.dto.ResponseDto;
import com.project.irunyou.data.dto.ResultResponseDto;
import com.project.irunyou.data.entity.CommentEntity;
import com.project.irunyou.data.repository.CommentRepository;

@Service
public class CommentService {

	@Autowired CommentRepository commentRepository;
	
	public ResponseDto<ResultResponseDto> registComment(RegistCommentDto dto) {
		CommentEntity comment;

		comment = CommentEntity.builder()
					.writer_user(dto.getWriter_user())
					.content(dto.getContent())
					.build();
		
		commentRepository.save(comment); 
		// comment Repository 
		
		

		return ResponseDto.setSuccess("댓글 등록 성공", null);
		
		
	}

}
