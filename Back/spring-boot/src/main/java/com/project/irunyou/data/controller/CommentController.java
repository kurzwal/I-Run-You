/* 작성자 : 문경원
 * 파일의 역할 : 댓글 작성 컨트롤러 클래스
 * 작성날짜 : 2023-01-16
 * 
 * */
package com.project.irunyou.data.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.irunyou.data.dto.CommentDto;
import com.project.irunyou.data.dto.CommentResponseDto;
import com.project.irunyou.data.dto.DeleteCommentDto;
import com.project.irunyou.data.dto.ResponseDto;
import com.project.irunyou.data.dto.ResultResponseDto;
import com.project.irunyou.data.service.CommentService;

import lombok.extern.slf4j.Slf4j;

//@CrossOrigin(originPatterns = "http://localhost:3000")
@RestController
@RequestMapping("irunyou/comment/")
public class CommentController {

	@Autowired CommentService commentService;
	
	// Create (댓글작성)
	@PutMapping("")
	public ResponseDto<CommentResponseDto> registComment (@RequestBody CommentDto requestBody){
		return commentService.registComment(requestBody);
	}
	
	// Delete (댓글삭제)
	@DeleteMapping("")
	public ResponseDto<ResultResponseDto> deleteComment (@RequestBody DeleteCommentDto requestBody){
		return commentService.deleteComment(requestBody);
	}
	
}
