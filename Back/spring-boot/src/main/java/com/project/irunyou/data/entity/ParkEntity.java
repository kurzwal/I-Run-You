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
    @Id
    @NotNull
    private int parkIndex;
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
