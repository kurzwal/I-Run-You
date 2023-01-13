/* 작성자 : 홍지혜
 * 파일의 역할 : 일정-댓글 Entity Class
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
@Entity(name="comment")
@Table(name="comment")
public class CommentEntity {
    @Id
    @NotNull
    private int com_idx;
    @NotNull
    private int sch_idx;
    @NotNull
    private int writer_user;
    @NotNull
    private String content;
    @NotNull
    private Timestamp datetime;

}
