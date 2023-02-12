package com.project.irunyou.data.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import com.mysql.cj.protocol.a.LocalDateTimeValueEncoder;
import com.project.irunyou.data.dto.CommentDto;
import com.project.irunyou.data.dto.CommentResponseDto;
import com.project.irunyou.data.dto.PatchCommentDto;
import com.project.irunyou.data.dto.ResponseDto;
import com.project.irunyou.data.dto.ResultResponseDto;
import com.project.irunyou.data.entity.CommentEntity;
import com.project.irunyou.data.repository.CommentRepository;
import com.project.irunyou.data.repository.UserRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class CommentService {

	@Autowired CommentRepository commentRepository;
	@Autowired UserRepository userRepository;
	
	// 2023-02-12 수정 : 홍지혜
	//	댓글 리스트 불러오는 메서드
	public ResponseDto<List<CommentResponseDto>> getCommentList (int schIndx) {
		
		List<CommentEntity> commentEntityList;	// 코멘트 엔티티 리스트 생성
		List<CommentResponseDto> commentListResult = new ArrayList<>();	// response될 Dto 생성
		
		try {
			commentEntityList = commentRepository.findAllByCommentScheduleIndex(schIndx);	// 스케줄 인덱스로 댓글 정보 가져오기
			
			// dto 로 변환
			for(CommentEntity c : commentEntityList) {
				commentListResult.add(CommentResponseDto.builder()
						.commentIndex(c.getCommentIndex())
						.commentScheduleIndex(c.getCommentScheduleIndex())
						.commentWriter(userRepository.findUserNicknameByUserEmail(c.getCommentWriter()))
						.commentContent(c.getCommentContent())
						.commentDatetime(c.getCommentDatetime())
						.build());
			}
						
		} catch(Exception e) {
			return ResponseDto.setFailed("데이터베이스 조회 실패");
		}
//		for (int i = 0; i < commentEntityList.size(); i++) {
//			commentListResult.add(new CommentResponseDto(commentEntityList.get(i)));
//		}
		return ResponseDto.setSuccess("댓글 조회에 성공했습니다.", commentListResult);
	}
	
	// 댓글 작성
	public ResponseDto<ResultResponseDto> registComment(String email, CommentDto dto) {	// 토큰에 담긴 유저 이메일, request 필요 자료 (댓글 단 스케쥴 인덱스, 댓글 내용)
		
		try {
		CommentEntity comment;
		
//		CommentResponseDto result;
		
//	 	0131 result 빌더 -> 생성자로 대체 - 황석민
		
//		result = CommentResponseDto
//				.builder()
//				.commentIndex(0)
//				.commentScheduleIndex(0)
//				.commentWriterIndex(dto.getCommentWriterIndex())
//				.commentContent(dto.getCommentContent())
//				.commentDatetime(timestamp)
//				.build();
		
		
		if(dto.getCommentContent().isEmpty()) {	// 내용이 비어있지 않은지 먼저 검토
			return ResponseDto.setFailed("내용을 입력하세요.");
		}
		
		comment = CommentEntity
				.builder()
//				.commentIndex(0)	// 인덱스는 autoIncreament이므로 넣을 필요 없음
				.commentScheduleIndex(dto.getCommentScheduleIndex())
				.commentWriter(email)	// 유저 이메일
				.commentContent(dto.getCommentContent())
				.commentDatetime(LocalDateTime.now())	// 현재 시간
				.build();
		
//		result = new CommentResponseDto(comment);		
		
		commentRepository.save(comment);
		
		} catch(Exception e) {
			e.printStackTrace();
			return ResponseDto.setFailed("댓글 등록 중 오류가 발생했습니다.");
		}
		
		return ResponseDto.setSuccess("댓글이 등록되었습니다.", new ResultResponseDto(true));
	}
	
	// 2023-02-12 로직 수정 홍지혜
	// 댓글 삭제
	public ResponseDto<ResultResponseDto> deleteComment(String email,int cmtIdx) {
		
		CommentEntity comment;
				
		comment = commentRepository.findById(cmtIdx).get();	// 댓글 인덱스로 댓글 엔티티 가져옴
		
//		int comIdx = comment.getCommentIndex();
//		int schIdx = comment.getCommentScheduleIndex();
//		String writerUser = comment.getCommentWriter();
//		
//		int delcomIdx = dto.getCommentIndex();
//		int delschIdx = dto.getCommentScheduleIndex();
//		String delwriterUser = dto.getCommentWriter();
		
		if(!email.equals(comment.getCommentWriter())) {	// 댓글의 유저 이메일과 삭제 요청한 유저의 이메일이 동일한지 확인
			return ResponseDto.setFailed("자신이 작성한 댓글만 삭제 가능합니다.");
		}
		
//		if((comIdx == delcomIdx) & (schIdx == delschIdx) & (writerUser == delwriterUser)) {
//			commentRepository.deleteById(delcomIdx);
//		} else {
//			return ResponseDto.setFailed("작성자, 댓글번호, 일정번호를 확인하세요");
//		}
		commentRepository.delete(comment); 	// 해당 엔티티 제거
		
		return ResponseDto.setSuccess("댓글이 삭제되었습니다", new ResultResponseDto(true));
	}
	
	
	// 2023-02-12 홍지혜
	// 댓글 수정
	public ResponseDto<ResultResponseDto> modifyComment(String email,PatchCommentDto dto) {
		
		try {
			CommentEntity comment = commentRepository.findById(dto.getCommentIndex()).get(); // 댓글 인덱스로 댓글 엔티티 가져옴

			if (!email.equals(comment.getCommentWriter())) { // 댓글의 유저 이메일과 수정 요청한 유저의 이메일이 동일한지 확인
				return ResponseDto.setFailed("자신이 작성한 댓글만 수정 가능합니다.");
			}

			comment.setCommentContent(dto.getCommentContent()); // request받은 데이터로 댓글 내용 수정

			commentRepository.save(comment); // 저장
		} catch (Exception e) {
			return ResponseDto.setFailed("modifyComment Error");
		}
		
		return ResponseDto.setSuccess("수정이 완료되었습니다.", new ResultResponseDto(true));
		
	}
}
