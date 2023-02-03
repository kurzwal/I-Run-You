/* 작성자 : 문경원
 * 파일의 역할 : FAQ 서비스 클래스
 * 작성날짜 : 2023-02-03
 * 
 * */

package com.project.irunyou.data.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.project.irunyou.data.dto.InquiryDto;
import com.project.irunyou.data.dto.ResponseDto;
import com.project.irunyou.data.dto.ResultResponseDto;
import com.project.irunyou.data.entity.FAQEntity;
import com.project.irunyou.data.repository.FAQRepository;

@Service
public class FAQService {

	@Autowired FAQRepository faqRepository;
	
	public ResponseDto<ResultResponseDto> inquiryFAQ (@RequestBody InquiryDto dto) {

		ResultResponseDto result;
		
		FAQEntity faq = FAQEntity.builder()
				.faqTitle(dto.getFaqTitle())
				.faqUserName(dto.getFaqUserName())
				.faqInquiryType(dto.getFaqInquiryType())
				.faqUserEmail(dto.getFaqUserEmail())
				.faqContent(dto.getFaqContent())
				.build();
		
		result = new ResultResponseDto(true);	
		
		faqRepository.save(faq);
		
		return ResponseDto.setSuccess("문의등록성공", result);
		
	}
	
}
