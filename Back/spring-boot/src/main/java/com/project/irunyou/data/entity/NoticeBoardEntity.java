/* 작성자 : 홍지혜
 * 파일의 역할 : 공지사항 Entity
 * 작성날짜 : 2023-01-17
 * 
 * 업데이트 작성자 : 홍지혜
 * 업데이트 날짜 : 2023-01-25
 * 업데이트 내용 : 컬럼명 변경 (카멜케이스적용, 약자 표기 정자 표기로 변경)
 * */
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
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity(name="notice_board")
@Table(name="notice_board")
public class NoticeBoardEntity {
	
	// 공지사항을 다루는 notice_board 테이블과 매핑되는 NoticeBoardEntity입니다.
	
	@Id
	@NotNull
	private int noticeIndex;	// notice_board 테이블의 인덱스 입니다. 테이블에 값이 추가될 떄 마다 자동으로 증가합니다. 
	@NotNull
	private String noticeTitle;	// 공지사항의 제목입니다.
	@NotNull
	private String noticeContent;	// 공지사항의 내용입니다.
	
	// 공지사항은 관리자만이 작성할 수 있으므로, 따로 작성자의 정보가 제공하지 않게 설정했습니다.
	
}
