package com.project.irunyou.data.dto;

import com.project.irunyou.data.entity.ParkEntity;
import com.sun.istack.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ParkListDto {

	@NotNull
    private int parkIndex;
	@NotNull
    private String parkName;
    @NotNull
    private String parkAddress;
    @NotNull
    private double distance;
	
    public ParkListDto (ParkEntity park, double dist) {
    	this.distance = dist;
    	this.parkIndex = park.getParkIndex();
    	this.parkName = park.getParkName();
    	this.parkAddress = park.getParkAddress();
    }
}
