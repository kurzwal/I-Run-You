/* 작성자 : 홍지혜
 * 파일의 역할 : 일정-댓글 Entity Class
 * 작성날짜 : 2023-01-12
 * 
 * 업데이트 작성자 : 홍지혜
 * 업데이트 날짜 : 2023-01-17
 * 업데이트 내용 : datetime 자료형 변경
 * 
 * 업데이트 작성자 : 홍지혜
 * 업데이트 날짜 : 2023-01-25
 * 업데이트 내용 : 컬럼명 변경 (카멜케이스적용, 약자 표기 정자 표기로 변경)
 * */
package com.project.irunyou.data.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity(name="comment")
@Table(name="comment")
public class CommentEntity {
	
	// 댓글정보를 담는 comment 테이블과 매핑되는 CommentEntity입니다.
	
    @Id
    @NotNull
    private int commentIndex;	// comment 테이블의 인덱스입니다. 테이블에 값이 추가될 때 마다 자동으로 증가합니다.
    @NotNull
    private int commentScheduleIndex;	// 댓글이 달린 Run일정의 인덱스입니다.
    @NotNull
    private String commentWriter;	// 댓글 작성 유저의 정보입니다. AuthenticationPrincipal로 값을 받아 유저 이메일이 저장됩니다.
    @NotNull
    private String commentContent;	// 댓글의 내용입니다.
    @JsonFormat(shape=JsonFormat.Shape.STRING,pattern="yyyy-MM-dd'T'HH:mm:ss",timezone="Asia/Seoul" )
    @CreatedDate
    private LocalDateTime commentDatetime;	// 댓글의 작성 시간입니다. LocalDateTime.now() 함수로 입력됩니다.
    private int commentLikeUser;	// 댓글 좋아요가 눌려진 수 입니다.

}
