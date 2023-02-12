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
@Entity(name="comment_like")
@Table(name="comment_like")
public class CommentLikeEntity {
	@Id
	@NotNull
	private int commentLikeIndex;
	@NotNull
	private int commentIndex;
	@NotNull
	private String userEmail;
}
