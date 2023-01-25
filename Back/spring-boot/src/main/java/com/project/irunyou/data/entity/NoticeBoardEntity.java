/* 작성자 : 홍지혜
 * 파일의 역할 : 공지사항 Entity
 * 작성날짜 : 2023-01-17
 * 
 * 업데이트 작성자 : 홍지혜
 * 업데이트 날짜 : 2023-01-25
 * 업데이트 내용 : 컬럼명 변경 (카멜케이스적용, 약자 표기 정자 표기로 변경)
 * */
package com.project.irunyou.data.entity;

import java.sql.Timestamp;

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
	@Id
	private int noticeIndex;
	@NotNull
	private String title;
	@NotNull
	private String content;
//	@NotNull
//	private Timestamp datetime;
}
