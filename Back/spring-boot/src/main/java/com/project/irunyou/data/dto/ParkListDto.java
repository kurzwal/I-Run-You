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
    private String name;
    @NotNull
    private String address;
    @NotNull
    private double distance;
	
    public ParkListDto (ParkEntity park, double dist) {
    	this.distance = dist;
    	this.parkIndex = park.getParkIndex();
    	this.name = park.getName();
    	this.address = park.getAddress();
    }
}
