/* 작성자 : 홍지혜
 * 파일의 역할 : 유저정보 Entity Class
 * 작성날짜 : 2023-01-12
 * 
 * 업데이트 작성자 : 홍지혜
 * 업데이트 날짜 : 2023-01-25
 * 업데이트 내용 : 컬럼명 변경 (카멜케이스적용, 약자 표기 정자 표기로 변경)
 * */
package com.project.irunyou.data.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity(name="user")
@Table(name="user")
@EntityListeners(AuditingEntityListener.class)
public class UserEntity {
    @Id
    @NotNull
    private int userIndex;
    @NotNull
    private String userEmail;
    @NotNull
    private String userPassword;
    private String userAddress;
    private String userAddressDetail;
    @NotNull
    private String userPhoneNumber;
    @JsonFormat(shape=JsonFormat.Shape.STRING,pattern="yyyy-MM-dd",timezone="Asia/Seoul")
    @CreatedDate
    private LocalDateTime userJoinDate;
    private String userName;
    private String userNickname;
}
