/* 작성자 : 문경원
 * 파일의 역할 : 댓글 작성 컨트롤러 클래스
 * 작성날짜 : 2023-01-16
 * 
 * */
package com.project.irunyou.data.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.irunyou.data.dto.RegistCommentDto;
import com.project.irunyou.data.dto.ResponseDto;
import com.project.irunyou.data.dto.ResultResponseDto;
import com.project.irunyou.data.service.CommentService;

@RestController
@RequestMapping("irunyou/comment/")
public class CommentController {

	@Autowired CommentService commentService;
	
	// Create (댓글작성)
	@PostMapping("")
	public ResponseDto<ResultResponseDto> registComment (@RequestBody RegistCommentDto requestBody){
		return commentService.registComment(requestBody);
	}
	

}
