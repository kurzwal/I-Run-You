package com.project.irunyou.data.dto;

import com.sun.istack.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ParkInfoDto {

		@NotNull
    	private int park_idx;
	    @NotNull
	    private String name;
	    @NotNull
	    private String address;
	    @NotNull
	    private double latitude;
	    @NotNull
	    private double longitude;
	    @NotNull
	    private int area;
	
}
