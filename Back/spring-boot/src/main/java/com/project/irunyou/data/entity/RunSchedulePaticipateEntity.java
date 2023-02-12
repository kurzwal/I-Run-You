// 2023-01-26 홍지혜
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
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity(name="run_schedule_participate")
@Table(name="run_schedule_participate")
public class RunSchedulePaticipateEntity { 
	
	// Run 일정참여 유저 관리 테이블인 run_schedule_paticipate 테이블과 매핑되는 RunSchedulePaticipateEntity입니다.
	
	@Id
	@NotNull
	private int runScheduleParticipateIndex; 	// run_schedule_paticipate 테이블의 인덱스입니다. 테이블에 값이 추가될 때 마다 자동으로 증가합니다.
	@NotNull
	private int runScheduleIndex;	// 유저가 참여한 Run 일정의 인덱스 입니다.
	@NotNull
	private String userEmail;	// 참여한 유저의 이메일입니다. uthenticationPrincipal로 값을 받습니다.
	
}
