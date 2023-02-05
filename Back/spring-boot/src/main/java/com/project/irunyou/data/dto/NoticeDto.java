/* 작성자 : 황석민
 * 파일의 역할 : 공지사항 제목 + 내용 dto
 * 작성날짜 : 2023-01-17
 * 
 * 업데이트 작성자 : -
 * 업데이트 날짜 : -
 * */
package com.project.irunyou.data.dto;

import javax.validation.constraints.NotNull;

import com.project.irunyou.data.entity.NoticeBoardEntity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class NoticeDto {
	
	@NotNull
	private int noticeIndex;
	@NotNull
	private String noticeTitle;
	@NotNull
	private String noticeContent;
	
	public NoticeDto(NoticeBoardEntity noticeEntity) {
		this.noticeIndex = noticeEntity.getNoticeIndex();
		this.noticeTitle = noticeEntity.getNoticeTitle();
		this.noticeContent = noticeEntity.getNoticeContent();
	}
	
}
