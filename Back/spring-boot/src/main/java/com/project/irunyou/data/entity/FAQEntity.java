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
	
	// 유저가 문의한 내용의 데이터를 담는 faq 테이블과 매핑되는 FAQEntity입니다.
	
	@Id
	private int faqIndex;	// faq 테이블의 인덱스입니다. 테이블에 값이 추가될 때 마다 자동으로 증가합니다.
	@NotNull
	private String faqTitle;	// 문의사항의 제목입니다.
	@NotNull
	private String faqUserName;		// 문의한 유저의 이름입니다.
	@NotNull
	private String faqInquiryType;	// 문의 유형입니다. 계정관리/공원찾기/기타 세 가지 유형 중 유저가 선택한 정보가 담깁니다.
	@NotNull
	private String faqUserEmail;	// 문의한 유저의 이메일입니다.
	@NotNull
	private String faqContent;	// 유저가 문의한 내용입니다.

}
