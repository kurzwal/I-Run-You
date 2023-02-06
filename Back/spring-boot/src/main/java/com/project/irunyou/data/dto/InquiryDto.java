package com.project.irunyou.data.dto;

import javax.validation.constraints.NotNull;

import com.project.irunyou.data.entity.FAQEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class InquiryDto {
	
	@NotNull
	private String faqTitle;
	@NotNull
	private String faqUserName;
	@NotNull
	private String faqInquiryType;
	@NotNull
	private String faqUserEmail;
	@NotNull
	private String faqContent;

	public InquiryDto(FAQEntity faq) {
		
		this.faqTitle = faq.getFaqTitle();
		this.faqUserEmail = faq.getFaqUserEmail();
		this.faqUserName = faq.getFaqUserName();
		this.faqUserEmail = faq.getFaqUserEmail();
		this.faqContent = faq.getFaqContent();
		
	}

}
