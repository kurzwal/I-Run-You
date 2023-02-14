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

import java.time.LocalDate;
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
	
	// 유저정보를 담는 user 테이블과 매핑되는 UserEntity입니다.
	
    @Id
    @NotNull
    private int userIndex;	// user 테이블의 인덱스입니다. 테이블에 값이 추가될 때 마다 자동으로 증가합니다.
    @NotNull
    private String userEmail;	// 유저의 이메일 입니다. 타 유저와 중복될 수 없습니다.
    @NotNull
    private String userPassword;	// 유저의 비밀번호 입니다. 암호화 되어 저장됩니다.
    private String postNumber;
    private String userAddress;		// 유저의 주소정보입니다. 우편번호와 함께 저장됩니다.
    private String userAddressDetail;	// 유저 주소정보의 세부 정보입니다. 
    @NotNull
    private String userPhoneNumber;	// 유저의 휴대폰 번호입니다. 타 유저와 중복될 수 없습니다.
    @JsonFormat(shape=JsonFormat.Shape.STRING,pattern="yyyy-MM-dd",timezone="Asia/Seoul")
    @CreatedDate
    private LocalDate userJoinDate;		// 유저가 회원가입을 한 날짜입니다. LocalDate.now() 함수로 입력됩니다.
    private String userName;	// 유저의 본명입니다.
    private String userNickname;	// 유저의 닉네임입니다. 타 유저와 중복될 수 없습니다.
}
