package com.project.irunyou.data.service;

import java.sql.Timestamp;
import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.irunyou.data.dto.CommentDto;
import com.project.irunyou.data.dto.CommentResponseDto;
import com.project.irunyou.data.dto.ResponseDto;
import com.project.irunyou.data.entity.CommentEntity;
import com.project.irunyou.data.repository.CommentRepository;

@Service
public class CommentService {

	@Autowired CommentRepository commentRepository;
	
	public ResponseDto<CommentResponseDto> registComment(CommentDto dto) {
		
		CommentEntity comment;
		
		int writerNum;
		writerNum = dto.getWriter_user();
		CommentResponseDto result;
		Timestamp timestamp = new Timestamp(System.currentTimeMillis());
		
		result = CommentResponseDto
				.builder()
				.com_idx(0)
				.sch_idx(0)
				.writer_user(dto.getWriter_user())
				.content(dto.getContent())
				.datetime(timestamp)
				.build();
		
		
		comment = CommentEntity
				.builder()
				.com_idx(0)
				.sch_idx(0)
				.writer_user(dto.getWriter_user())
				.content(dto.getContent())
//				.datetime(timestamp)
				.build();
				
		
		commentRepository.save(comment);
		
		return ResponseDto.setSuccess("댓글 등록에 성공하였습니다", result);
		
	}

}
