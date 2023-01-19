/* 작성자 : 홍지혜
 * 파일의 역할 : 일정 Entity Class
 * 작성날짜 : 2023-01-12
 * 
 * 업데이트 작성자 : -
 * 업데이트 날짜 : -
 * */
package com.project.irunyou.data.entity;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Timestamp;

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
    private int writer_user;
    @NotNull
    private Timestamp datetime;
    @NotNull
    private String content;

}
