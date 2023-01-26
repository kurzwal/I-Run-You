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
@Entity(name="run_schedule_like")
@Table(name="run_schedule_like")
public class RunScheduleLikeEntity {
	@Id
	@NotNull
	private int runScheduleLikeIndex;
	private int runScheduleIndex;
	private int userIndex;
}
