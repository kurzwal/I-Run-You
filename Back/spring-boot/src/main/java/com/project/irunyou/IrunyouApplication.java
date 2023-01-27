/* 작성자 : 홍지혜
 * 파일의 역할 : App Main Class
 * 작성날짜 : 2023-01-12
 * 
 * 업데이트 작성자 : -
 * 업데이트 날짜 : -
 * */
package com.project.irunyou;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
@EnableJpaAuditing
@SpringBootApplication
public class IrunyouApplication {

	public static void main(String[] args) {
		SpringApplication.run(IrunyouApplication.class, args);
	}

}
