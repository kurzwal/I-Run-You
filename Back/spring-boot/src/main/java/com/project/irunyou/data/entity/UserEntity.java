/* 작성자 : 홍지혜
 * 파일의 역할 : 유저정보 Entity Class
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
    private String email;
    @NotNull
    private String password;
    private String address;
    @NotNull
    private String phone_num;
    private int level;
}
