package com.project.irunyou.data.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity(name="faq")
@Table(name="faq")
public class FAQEntity {
	
	@Id
	private int faqIndex;
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

}
