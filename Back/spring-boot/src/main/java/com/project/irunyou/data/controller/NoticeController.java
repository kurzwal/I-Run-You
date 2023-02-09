package com.project.irunyou.data.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.irunyou.data.dto.NoticeDto;
import com.project.irunyou.data.dto.PageResponseDto;
import com.project.irunyou.data.dto.PageResponseDto;
import com.project.irunyou.data.dto.ResponseDto;
import com.project.irunyou.data.dto.ResultResponseDto;
import com.project.irunyou.data.service.NoticeService;

@CrossOrigin(originPatterns = "http://localhost:3000")
@RestController
@RequestMapping("irunyou/notice")
public class NoticeController {

	@Autowired NoticeService noticeService;

	// 공지사항 등록
	// 수정 2023-02-02 홍지혜
	@PostMapping("")
	public ResponseDto<ResultResponseDto> createNotice(@RequestBody NoticeDto requestBody) {
		return noticeService.createNotice(requestBody);
	}

//	// 공지사항 조회
//	@GetMapping("{noticeIdx}")
//	public ResponseDto<NoticeDto> readNotice(@PathVariable("noticeIndex") Integer noticeIndex) {
//		return noticeService.readNotice(noticeIndex);
//	}	--> 사용 안함!

	// 공지사항 수정
	@PatchMapping("")
	public ResponseDto<NoticeDto> updateNotice(@RequestBody NoticeDto requestBody) {
		return noticeService.updateNotice(requestBody);
	}

	// 공지사항 삭제
	@DeleteMapping("")
	public ResponseDto<ResultResponseDto> deleteNotice(@RequestParam("noticeIndex")int noticeIndex) {
		return noticeService.deleteNotice(noticeIndex);
	}
	
	// 2023-02-02 홍지혜
	// 공지사항 페이지에서 공지사항 목록 전체 불러오기
//	@GetMapping("")
//	public ResponseDto<List<NoticeDto>> getNoticeList() {
//		return noticeService.getNoticeList();
//	}
	
	// 공지사항 목록 페이징처리 해서 불러오기
	//?page=()
	@GetMapping("")
	public ResponseDto<PageResponseDto<NoticeDto>> getNoticeList(@RequestParam int page) {
		return noticeService.getNoticeList(page,6);	// 한 페이지당 6개 씩 뜨게 고정
	}
	
}
