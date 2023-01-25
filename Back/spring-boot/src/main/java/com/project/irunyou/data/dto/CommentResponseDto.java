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
    private int schedulIndex;
    @NotNull
    private int writerIndex;
    @NotNull
    private String content;
    @NotNull
    private Timestamp datetime;
	
}
