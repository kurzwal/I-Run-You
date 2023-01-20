/* 
 * 업데이트 작성자 : 홍지혜
 * 업데이트 날짜 : 2023-01-20 
 * 업데이트 내용 : parkEntity 매개변수 생성자 추가
 * */
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
	    
	    public ParkInfoDto(ParkEntity parkEntity) {
	    	this.park_idx = parkEntity.getPark_idx();
	    	this.name = parkEntity.getName();
	    	this.address = parkEntity.getAddress();
	    	this.latitude = parkEntity.getLatitude();
	    	this.longitude = parkEntity.getLongitude();
	    	this.area = parkEntity.getArea();
	    }
	    
}
