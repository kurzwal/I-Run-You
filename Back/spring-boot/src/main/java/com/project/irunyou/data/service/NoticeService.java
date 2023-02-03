package com.project.irunyou.data.service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import com.project.irunyou.data.dto.NoticeDto;
import com.project.irunyou.data.dto.NoticePageInfoDto;
import com.project.irunyou.data.dto.NoticePageResponseDto;
import com.project.irunyou.data.dto.ResponseDto;
import com.project.irunyou.data.dto.ResultResponseDto;
import com.project.irunyou.data.entity.NoticeBoardEntity;
import com.project.irunyou.data.repository.NoticeBoardRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class NoticeService {

	@Autowired
	NoticeBoardRepository noticeRepository;
	
	public Page<NoticeBoardEntity> findAllNotice(int page, int size) {
		PageRequest pageRequest = PageRequest.of(page, size);
		return noticeRepository.findAllByOrderByNoticeIndexDesc(pageRequest);
	}
	
	
	// 페이지네이션 처리 해서 데이터 불러오기
	public ResponseDto<NoticePageResponseDto<?>> getNoticeList(int page, int size) {
		Page<NoticeBoardEntity> noticePage = findAllNotice(page-1, size);
		
		NoticePageInfoDto noticePageInfo = NoticePageInfoDto.builder()
				.page(page).size(size)
				.totalElements((int)noticePage.getTotalElements())
				.totalPages(noticePage.getTotalPages())
				.build();
		
		List<NoticeBoardEntity> notices = noticePage.getContent();
		
		List<NoticeDto> data = new ArrayList<>();
		
		for(NoticeBoardEntity n : notices) {
			data.add(new NoticeDto(n));
		}
				
		return ResponseDto.setSuccess("date load Success",new NoticePageResponseDto(data,noticePageInfo));
	}
	
	
	// 공지사항 등록
	// 수정 2023-02-02 홍지혜
	public ResponseDto<ResultResponseDto> createNotice(NoticeDto dto) {
		try {
			String title = dto.getNoticeTitle();
			String content = dto.getNoticeContent();
			NoticeBoardEntity notice = NoticeBoardEntity.builder().noticeTitle(title).noticeContent(content).build();

			noticeRepository.save(notice);
		} catch (Exception e) {
			return ResponseDto.setFailed("공지사항 등록 중 오류가 발생했습니다.");
		}
			return ResponseDto.setSuccess("공지사항이 등록되었습니다.", new ResultResponseDto(true));
	}

	// 공지사항 조회
	public ResponseDto<NoticeDto> readNotice(Integer noticeIdx) {
		NoticeBoardEntity notice;
		try {
			notice = noticeRepository.findById(noticeIdx).get();
		} catch (Exception e) {
			return null;
		}
		return ResponseDto.setSuccess("공지사항 조회", new NoticeDto(notice));
	}

	// 공지사항 수정
	public ResponseDto<NoticeDto> updateNotice(NoticeDto dto) {
//		String title = dto.getTitle();
		int idx = dto.getNoticeIndex();
		NoticeBoardEntity notice = null;
		System.out.println(idx);
		try {
			notice = noticeRepository.findById(idx).get();
		} catch (Exception e) {
			if (notice == null)
				return ResponseDto.setFailed("찾으시는 사항이 없습니다.");
		}
		notice.setNoticeTitle(dto.getNoticeTitle());
		notice.setNoticeContent(dto.getNoticeContent());

		noticeRepository.save(notice);

		return ResponseDto.setSuccess("공지사항이 수정되었습니다.", new NoticeDto(notice));
	}

	// 공지사항 삭제
	public ResponseDto<ResultResponseDto> deleteNotice(int noticeIndex) {
		NoticeBoardEntity notice;
		try {
			notice = noticeRepository.findById(noticeIndex).get();
		} catch (Exception e) {
			return ResponseDto.setFailed("해당 공지사항이 없습니다.");
		}
		noticeRepository.delete(notice);
		return ResponseDto.setSuccess("삭제 되었습니다.", new ResultResponseDto(true));
	}

	public NoticeBoardEntity findByTitle(String title) {
		NoticeBoardEntity notice;
		try {
			notice = noticeRepository.findByNoticeTitle(title);
		} catch (Exception e) {
			return null;
		}
		return notice;
	}
	
	
	// 모든 공지사항
	public ResponseDto<List<NoticeDto>> getNoticeList() {	
		List<NoticeDto> data = new ArrayList<>();
		List<NoticeBoardEntity> AllNotice = new ArrayList<>(); 
		try {
			AllNotice = noticeRepository.findAll();
			
			for(NoticeBoardEntity n : AllNotice) {
				data.add(new NoticeDto(n));
			}
		} catch(Exception e) {
			return ResponseDto.setFailed("공지사항을 불러오는 중 오류가 발생했습니다.");
		}
		
		return ResponseDto.setSuccess("Success",data);
	}
}
