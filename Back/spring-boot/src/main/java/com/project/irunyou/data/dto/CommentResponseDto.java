package com.project.irunyou.data.dto;

import java.sql.Timestamp;

import com.sun.istack.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class CommentResponseDto {
	
	@NotNull
    private int commentIndex;
    @NotNull
    private int commentScheduleIndex;
    @NotNull
    private int commentWriterIndex;
    @NotNull
    private String commentContent;
    @NotNull
    private Timestamp commentDatetime;
	
}
