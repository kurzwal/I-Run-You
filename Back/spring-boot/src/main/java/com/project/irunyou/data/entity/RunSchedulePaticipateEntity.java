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
public class RunSchedulePaticipateEntity { // 일정참여 유저 관리 테이블
	@Id
	@NotNull
	private int runScheduleParticipateIndex;
	@NotNull
	private int runScheduleIndex;
	@NotNull
	private String userEmail;
}
