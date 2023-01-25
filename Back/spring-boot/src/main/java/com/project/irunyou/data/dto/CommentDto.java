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
    private int writerIndex;
	@NotNull
    private int scheduleIndex;
	@NotNull
    private String content;
	
}
