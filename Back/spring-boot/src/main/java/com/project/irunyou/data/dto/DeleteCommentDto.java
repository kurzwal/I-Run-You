package com.project.irunyou.data.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class DeleteCommentDto {
	
	private int commentIndex;
	private int commentScheduleIndex;
	private int commentWriterIndex;

}
