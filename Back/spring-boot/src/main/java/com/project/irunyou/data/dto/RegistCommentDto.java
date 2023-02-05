package com.project.irunyou.data.dto;

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

		@javax.validation.constraints.NotNull
	    private String content;
	    @NotNull
	    @JsonFormat(shape=JsonFormat.Shape.STRING,pattern="yyyy-MM-dd'T'HH:mm:ss",timezone="Asia/Seoul" )
	    //@DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
	    private LocalDateTime datetime;
}
