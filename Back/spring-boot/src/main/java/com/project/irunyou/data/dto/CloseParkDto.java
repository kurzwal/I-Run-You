package com.project.irunyou.data.dto;

import javax.persistence.Access;

import com.project.irunyou.data.entity.ParkEntity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CloseParkDto {
	private String name;
	private String address;
	private int area;
	
	public CloseParkDto(ParkEntity p) {
		this.name = p.getName();
		this.address = p.getAddress();
		this.area = p.getArea();
	}
}
