package com.project.irunyou.data.dto;

import java.sql.Timestamp;

import com.project.irunyou.data.entity.CommentEntity;
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
    
// 	0131 commentService 빌더 -> 생성자로 대체 - 황석민
    public CommentResponseDto(CommentEntity comment) {
    	this.commentIndex = comment.getCommentIndex();
    	this.commentScheduleIndex = comment.getCommentIndex();
    	this.commentWriterIndex = comment.getCommentWriterIndex();
    	this.commentContent = comment.getCommentContent();
    }
    
}
