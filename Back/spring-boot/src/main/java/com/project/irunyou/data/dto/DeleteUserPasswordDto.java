package com.project.irunyou.data.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
// 첫 실행 때 매개변수가 없는 생성자로 Dto 생성 후 setter메서드로 필드 주입함
// AllArgsConstructor 만 있을 경우 매개변수가 존재하는 생성자만 유효하므로 오류발생.
public class DeleteUserPasswordDto {
	private String userPassword;
}
