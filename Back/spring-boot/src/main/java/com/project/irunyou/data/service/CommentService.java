package com.project.irunyou.data.service;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.irunyou.data.dto.CommentDto;
import com.project.irunyou.data.dto.CommentResponseDto;
import com.project.irunyou.data.dto.DeleteCommentDto;
import com.project.irunyou.data.dto.ResponseDto;
import com.project.irunyou.data.dto.ResultResponseDto;
import com.project.irunyou.data.entity.CommentEntity;
import com.project.irunyou.data.repository.CommentRepository;
import com.project.irunyou.data.repository.UserRepository;

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
				.datetime(timestamp)
				.build();
				
		
		commentRepository.save(comment);
		
		return ResponseDto.setSuccess("댓글 등록에 성공하였습니다", result);
		
	}
	
	public ResponseDto<ResultResponseDto> deleteComment(DeleteCommentDto dto) {
		
		CommentEntity comment;
		
		comment = commentRepository.getById(dto.getWriter_user());
		
		int com_idx = comment.getCom_idx();
		int sch_idx = comment.getSch_idx();
		int writer_user = comment.getWriter_user();
		
		int delcom_idx = dto.getCom_idx();
		int delsch_idx = dto.getSch_idx();
		int delwriter_user = dto.getWriter_user();
		
		if((com_idx == delcom_idx) & (sch_idx == delsch_idx) & (writer_user == delwriter_user)) {
			commentRepository.deleteById(delcom_idx);
		} else {
			return ResponseDto.setFailed("작성자, 댓글번호, 일정번호를 확인하세요");
		}
		
		return ResponseDto.setSuccess("댓글이 삭제되었습니다", new ResultResponseDto(true));
	}

}
