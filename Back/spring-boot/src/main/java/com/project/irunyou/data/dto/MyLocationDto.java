package com.project.irunyou.data.dto;

import com.sun.istack.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MyLocationDto {

    @NotNull
    private double userLatitude;
    @NotNull
    private double userLongitude;
	
}
