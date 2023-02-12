/* 작성자 : 홍지혜
 * 파일의 역할 : 공원정보 Entity Class
 * 작성날짜 : 2023-01-12

 * 업데이트 작성자 : 홍지혜
 * 업데이트 날짜 : 2023-01-25
 * 업데이트 내용 : 컬럼명 변경 (카멜케이스적용, 약자 표기 정자 표기로 변경)
 * */
package com.project.irunyou.data.entity;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity(name="park")
@Table(name="park")
public class ParkEntity {
	
	// 공원정보를 담는 park 테이블과 매핑되는 ParkEntity입니다.
	
    @Id
    @NotNull
    private int parkIndex;	// park 테이블의 인덱스입니다. 테이블에 값이 추가될 때마다 자동으로 증가합니다.
    @NotNull
    private String parkName;	// 공원의 이름입니다.
    @NotNull
    private String parkAddress;		// 공원의 주소 정보입니다.
    @NotNull
    private double parkLatitude;	// 공원의 위도입니다.
    @NotNull
    private double parkLongitude;	// 공원의 경도입니다.
    @NotNull
    private int parkArea;	// 공원의 면적입니다. 
    						// I-RUN-YOU는 달리기를 중점으로 하기 때문에,
    						// 공원에서 달릴말한 공간이 확보되는 30000㎡ 이상 면적을 가진 공원만을 다룹니다.
}
