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
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
@EnableJpaAuditing
@SpringBootApplication
public class IrunyouApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(IrunyouApplication.class, args);
	}
	
	// CORS 설정
	@Bean
	public WebMvcConfigurer corsConfig() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/*").allowedOriginPatterns("http://localhost:3000");
			}
		};
	}
}
