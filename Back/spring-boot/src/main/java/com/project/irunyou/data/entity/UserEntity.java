/* 작성자 : 홍지혜
 * 파일의 역할 : 유저정보 Entity Class
 * 작성날짜 : 2023-01-12
 * 
 * 업데이트 작성자 : 문경원
 * 업데이트 날짜 : 2023-01-16
 * 업데이트 내용 : 유효성 검사 추가
 */
package com.project.irunyou.data.entity;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity(name="user")
@Table(name="user")
public class UserEntity {
    @Id
    @NotNull
    private int user_idx;
    @NotNull
    @NotBlank(message = "이메일은 필수로 입력하여야 합니다.")
    private String email;
    @NotNull
    @NotBlank(message = "비밀번호는 필수로 입력하여야 합니다.")
    @Pattern(regexp = "(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\\W)(?=\\S+$).{8,16}", message = "비밀번호는 8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.")
    private String password;
    private String address;
    @NotNull
    private String phone_num;
    private int level;
}
