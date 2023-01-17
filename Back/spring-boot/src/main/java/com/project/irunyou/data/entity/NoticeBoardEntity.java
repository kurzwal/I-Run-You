/* 작성자 : 홍지혜
 * 파일의 역할 : 공지사항 Entity
 * 작성날짜 : 2023-01-17
 * 
 * 업데이트 작성자 : -
 * 업데이트 날짜 : -
 * */
package com.project.irunyou.data.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity(name="notice_board")
@Table(name="notice_board")
public class NoticeBoardEntity {
	@Id
	@NotNull
	private int notice_idx;
	@NotNull
	private String title;
	@NotNull
	private String content;
}
