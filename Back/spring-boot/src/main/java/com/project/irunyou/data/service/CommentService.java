package com.project.irunyou.data.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.irunyou.data.dto.CommentDto;
import com.project.irunyou.data.dto.CommentResponseDto;
import com.project.irunyou.data.dto.DeleteCommentDto;
import com.project.irunyou.data.dto.ResponseDto;
import com.project.irunyou.data.dto.ResultResponseDto;
import com.project.irunyou.data.entity.CommentEntity;
import com.project.irunyou.data.repository.CommentRepository;

@Service
public class CommentService {

	@Autowired CommentRepository commentRepository;
	
	public ResponseDto<CommentResponseDto> registComment(CommentDto dto) {
		
		CommentEntity comment;
		
		CommentResponseDto result;
		
//	 	0131 result 빌더 -> 생성자로 대체 - 황석민
		
//		result = CommentResponseDto
//				.builder()
//				.commentIndex(0)
//				.commentScheduleIndex(0)
//				.commentWriterIndex(dto.getCommentWriterIndex())
//				.commentContent(dto.getCommentContent())
//				.commentDatetime(timestamp)
//				.build();
		
		comment = CommentEntity
				.builder()
				.commentIndex(0)
				.commentScheduleIndex(0)
				.commentWriterIndex(dto.getCommentWriterIndex())
				.commentContent(dto.getCommentContent())
//				.datetime(timestamp) -> entity에서 설정
				.build();
		
		result = new CommentResponseDto(comment);		
		
		commentRepository.save(comment);
		
		return ResponseDto.setSuccess("댓글 등록에 성공하였습니다", result);
		
	}
	
	public ResponseDto<ResultResponseDto> deleteComment(DeleteCommentDto dto) {
		
		CommentEntity comment;
		
		comment = commentRepository.findById(dto.getCommentIndex()).get();
		
		int comIdx = comment.getCommentIndex();
		int schIdx = comment.getCommentScheduleIndex();
		int writerUser = comment.getCommentWriterIndex();
		
		int delcomIdx = dto.getCommentIndex();
		int delschIdx = dto.getCommentScheduleIndex();
		int delwriterUser = dto.getCommentWriterIndex();
		
		if((comIdx == delcomIdx) & (schIdx == delschIdx) & (writerUser == delwriterUser)) {
			commentRepository.deleteById(delcomIdx);
		} else {
			return ResponseDto.setFailed("작성자, 댓글번호, 일정번호를 확인하세요");
		}
		
		return ResponseDto.setSuccess("댓글이 삭제되었습니다", new ResultResponseDto(true));
	}

}
