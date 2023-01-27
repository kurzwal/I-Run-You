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
@Entity(name="user_address_detail")
@Table(name="user_address_detail")
public class UserAddressDetailEntity {
	@Id
	@NotNull
	private int userAddressDetailIndex;
	@NotNull
	private int userIndex;
	private String userAddressDetail;
	private String userPoastalCode;
}
