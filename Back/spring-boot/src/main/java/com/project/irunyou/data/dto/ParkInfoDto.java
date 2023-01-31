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
    	private int parkIndex;
	    @NotNull
	    private String parkName;
	    @NotNull
	    private String parkAddress;
	    @NotNull
	    private double parkLatitude;
	    @NotNull
	    private double parkLongitude;
	    @NotNull
	    private int parkArea;
	    
//	 	0131 parkService 빌더 -> 생성자로 수정 - 황석민
	    public ParkInfoDto(ParkEntity parkEntity) {
//	    	this.parkIndex = parkEntity.getParkIndex();
	    	this.parkName = parkEntity.getParkName();
	    	this.parkAddress = parkEntity.getParkAddress();
	    	this.parkLatitude = parkEntity.getParkLatitude();
	    	this.parkLongitude = parkEntity.getParkLongitude();
	    	this.parkArea = parkEntity.getParkArea();
	    }
	    
}
