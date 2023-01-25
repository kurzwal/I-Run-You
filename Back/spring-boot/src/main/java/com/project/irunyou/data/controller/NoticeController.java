package com.project.irunyou.data.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.irunyou.data.dto.NoticeDto;
import com.project.irunyou.data.dto.ResponseDto;
import com.project.irunyou.data.dto.ResultResponseDto;
import com.project.irunyou.data.service.NoticeService;

@RestController
@RequestMapping("notice/")
public class NoticeController {

	@Autowired
	NoticeService noticeService;

	// 공지사항 등록
	@PostMapping("")
	public ResponseDto<NoticeDto> createNotice(@RequestBody NoticeDto requestBody) {
		return noticeService.createNotice(requestBody);
	}

	// 공지사항 조회
	@GetMapping("{noticeIdx}")
	public ResponseDto<NoticeDto> readNotice(@PathVariable("notice_idx") Integer noticeIdx) {
		return noticeService.readNotice(noticeIdx);
	}

	// 공지사항 수정
	@PatchMapping("")
	public ResponseDto<NoticeDto> updateNotice(@RequestBody NoticeDto requestBody) {
		return noticeService.updateNotice(requestBody);
	}

	// 공지사항 삭제
	@DeleteMapping("{noticeIdx}")
	public ResponseDto<ResultResponseDto> deleteNotice(@PathVariable("notice_idx")Integer noticeIdx) {
		return noticeService.deleteNotice(noticeIdx);
	}
}
