// 2023-01-26 홍지혜
package com.project.irunyou.data.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity(name="code")
@Table(name="code")
public class CodeEntity {
	
	// 임시 비밀번호 코드 정보를 저장하는 code 테이블과 매핑되는 CodeEntity입니다.
	
	@Id
	@NotNull
	private String code;	// Random 함수로 만들어진 임의의 8자리 코드가 저장됩니다. 
							// 해당 코드는 임시 비밀번호로 이용되며, 유저의 이메일로 발송됩니다.
	@NotNull
	private String userEmail;	// code를 발급받은 유저의 이메일입니다.
}
