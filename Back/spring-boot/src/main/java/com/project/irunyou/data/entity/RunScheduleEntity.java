/* 작성자 : 홍지혜
 * 파일의 역할 : 일정 Entity Class
 * 작성날짜 : 2023-01-12
 * 
 * 업데이트 작성자 : 홍지혜
 * 업데이트 날짜 : datetime 자료형 변경, Dto 생성자 추가
 * 작성날짜 : 2023-01-17
 * */
package com.project.irunyou.data.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.project.irunyou.data.dto.RunScheduleDto;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity(name="run_schedule")
@Table(name="run_schedule")
public class RunScheduleEntity {

    @Id
    @NotNull
    private int sch_idx;
    private int park;
    @NotNull
    private String title;
    @NotNull
    private int writerid;
    @NotNull
    @JsonFormat(shape=JsonFormat.Shape.STRING,pattern="yyyy-MM-dd'T'HH:mm:ss",timezone="Asia/Seoul" )
    //@DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    private LocalDateTime datetime;
    @NotNull
    private String content;
    
    // 일정 등록용 생성자
    public RunScheduleEntity(RunScheduleDto dto) {
    	this.park = dto.getPark();
    	this.title = dto.getTitle();
    	this.writerid = dto.getWriterId();
    	this.datetime = dto.getDatetime();
    	this.content = dto.getContent();
    }

}
