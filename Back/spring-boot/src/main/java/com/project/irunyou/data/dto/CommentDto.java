package com.project.irunyou.data.dto;

import com.sun.istack.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class CommentDto {

	@NotNull
    private int commentWriterIndex;
	@NotNull
    private int commentScheduleIndex;
	@NotNull
    private String commentContent;
	
}
