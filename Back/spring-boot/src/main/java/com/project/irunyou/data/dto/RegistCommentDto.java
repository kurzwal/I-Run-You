package com.project.irunyou.data.dto;

import java.sql.Timestamp;
import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.sun.istack.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RegistCommentDto {

	    @NotNull
	    private int com_idx;
	    @NotNull
	    private int sch_idx;
	    @NotNull
	    private int writer_user;
	    @NotNull
	    private String content;
	    @NotNull
	    @JsonFormat(shape=JsonFormat.Shape.STRING,pattern="yyyy-MM-dd'T'HH:mm:ss",timezone="Asia/Seoul" )
	    //@DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
	    private LocalDateTime datetime;
}
