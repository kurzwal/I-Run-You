/* 작성자 : 문경원
 * 파일의 역할 : FAQ 컨트롤러 클래스
 * 작성날짜 : 2023-02-03
 * 
 * */

package com.project.irunyou.data.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.irunyou.data.dto.InquiryDto;
import com.project.irunyou.data.dto.ResponseDto;
import com.project.irunyou.data.dto.ResultResponseDto;
import com.project.irunyou.data.service.FAQService;

@CrossOrigin(originPatterns = "http://localhost:3000")
@RestController
@RequestMapping("irunyou/FAQ/")
public class FAQController {
	
	@Autowired FAQService faqService;
	
	// 문의받은사항 DB에 등록
	// Request : name, inquiry, email, title, content
	// Response : X
	@PostMapping("")
	public ResponseDto<ResultResponseDto> inquiryFAQ (@RequestBody InquiryDto requestBody) {
		return faqService.inquiryFAQ(requestBody);
	}

}
