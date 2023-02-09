package com.project.irunyou.data.dto;

import java.time.LocalDateTime;

import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.project.irunyou.data.entity.RunScheduleEntity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
public class ParkRunScheduleDto {
		@NotNull
		private int runScheduleIndex;
		@NotNull
		private int runSchedulePark;
		@NotNull
		private String runScheduleTitle;
		@NotNull
		private String runScheduleWriter;
		@NotNull
		private LocalDateTime runScheduleDatetime;
	    @NotNull
	    private String runScheduleContent;
	    
	    public ParkRunScheduleDto(RunScheduleEntity runScheduleEntity) {
	    	this.runScheduleIndex = runScheduleEntity.getRunScheduleIndex();
	    	this.runSchedulePark = runScheduleEntity.getRunSchedulePark();
	    	this.runScheduleTitle = runScheduleEntity.getRunScheduleTitle();
	    	this.runScheduleWriter = runScheduleEntity.getRunScheduleWriter();
	    	this.runScheduleDatetime = runScheduleEntity.getRunScheduleDateTime();
	    	this.runScheduleContent = runScheduleEntity.getRunScheduleContent();
	    }
}
