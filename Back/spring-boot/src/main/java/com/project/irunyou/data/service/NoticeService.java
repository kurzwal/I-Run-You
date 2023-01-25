package com.project.irunyou.data.service;

import java.sql.Timestamp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.irunyou.data.dto.NoticeDto;
import com.project.irunyou.data.dto.ResponseDto;
import com.project.irunyou.data.dto.ResultResponseDto;
import com.project.irunyou.data.entity.NoticeBoardEntity;
import com.project.irunyou.data.repository.NoticeBoardRepository;

@Service
public class NoticeService {

	@Autowired
	NoticeBoardRepository noticeRepository;

	// 공지사항 등록
	public ResponseDto<NoticeDto> createNotice(NoticeDto dto) {

		String title = dto.getTitle();
		String content = dto.getContent();
		Timestamp timestamp = new Timestamp(System.currentTimeMillis());

		NoticeBoardEntity notice = NoticeBoardEntity.builder().title(title).content(content).build();

		noticeRepository.save(notice);

		return ResponseDto.setSuccess("공지사항이 등록되었습니다.", new NoticeDto(notice));
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
		notice.setTitle(dto.getTitle());
		notice.setContent(dto.getContent());

		noticeRepository.save(notice);

		return ResponseDto.setSuccess("내용수정 완료", new NoticeDto(notice));
	}

	// 공지사항 삭제
	public ResponseDto<ResultResponseDto> deleteNotice(Integer noticeIdx) {
		NoticeBoardEntity notice;
		try {
			notice = noticeRepository.findById(noticeIdx).get();
		} catch (Exception e) {
			return ResponseDto.setFailed("해당 공지사항이 없습니다.");
		}
		noticeRepository.deleteById(notice.getNoticeIndex());
		return ResponseDto.setSuccess("삭제 되었습니다.", new ResultResponseDto(true));
	}

	public NoticeBoardEntity findByTitle(String title) {
		NoticeBoardEntity notice;
		try {
			notice = noticeRepository.findByTitle(title);
		} catch (Exception e) {
			return null;
		}
		return notice;
	}
}
