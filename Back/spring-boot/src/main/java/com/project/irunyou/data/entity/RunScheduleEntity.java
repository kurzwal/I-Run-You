/* 작성자 : 홍지혜
 * 파일의 역할 : 일정 Entity Class
 * 작성날짜 : 2023-01-12
 * 
 * 업데이트 작성자 : 홍지혜
 * 업데이트 날짜 : datetime 자료형 변경, Dto 생성자 추가
 * 작성날짜 : 2023-01-17
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

import org.springframework.security.core.annotation.AuthenticationPrincipal;

import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity(name="run_schedule")
@Table(name="run_schedule")
public class RunScheduleEntity {
	
	// Run일정 정보를 담는 run_Schedule과 매핑되는 RunScheduleEntity입니다.

    @Id
    @NotNull
    private int runScheduleIndex;	// run_Schedule 테이블의 인덱스입니다. 테이블에 값이 추가될 때 매다 자동으로 증가합니다.
    @NotNull
    private int runSchedulePark;	// Run일정이 잡혀있는 공원의 인덱스 번호 입니다. 
    @NotNull
    private String runScheduleTitle;	// Run 일정의 제목입니다.
    @NotNull
    private String runScheduleWriter;	// Run 일정의 작성자입니다. @AuthenticationPrincipal로 값을 받아 유저 이메일이 저장됩니다.
    @NotNull
    @JsonFormat(shape=JsonFormat.Shape.STRING,pattern="yyyy-MM-dd'T'HH:mm:ss",timezone="Asia/Seoul" )
    //@DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    private LocalDateTime runScheduleDateTime;	// Run일정이 열릴 시간입니다. 유저가 직접 설정합니다.
    @NotNull
    private String runScheduleContent;	// Run일정의 내용입니다.
    

}
