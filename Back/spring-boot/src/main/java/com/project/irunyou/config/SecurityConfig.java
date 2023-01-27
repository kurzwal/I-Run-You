package com.project.irunyou.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.project.irunyou.security.JwtAuthenticationFilter;
import com.project.irunyou.security.TokenProvider;

import lombok.extern.slf4j.Slf4j;

// 2023-01-25 홍지혜
// HTTP 요청 이후의 설정
@Configuration
@EnableWebSecurity
@Slf4j
public class SecurityConfig {
	// WebSecurityConfigurerAdapter - deprecated 
	
	@Autowired private TokenProvider tokenProvider;
	
	@Bean
	public BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		return http.csrf().disable()	
				// cross site request forgery 사이트간 위조 요청 : 인증된 사용자의 토큰을 탈취해 위조된 요청을 보냈을 경우 파악해 방지
				// rest api에서는 권한이 필요한 요청을 위해서 인증 정보를 포함시켜야 한다. 서버에 인증정보를 저장하지 않기 때문에 필요 없음(JWT를 쿠키에 저장하지 않기 때문)
				.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
				//JWT를 사용하기 때문에 세션도 사용하지 않는다.
				.and()
				.formLogin().disable()	// HTTP Basic Authentication 사용안함
				.httpBasic().disable()	// Form Based Authentication 사용 안함
				.authorizeRequests()	
				.antMatchers("/irunyou/**","/irunyou/auth/**").permitAll() // 해당 요청에 관해서는 모두 접근 가능
				.anyRequest().authenticated()	// 그 외는 인증해야함
				.and()
				.addFilterBefore(new JwtAuthenticationFilter(tokenProvider), UsernamePasswordAuthenticationFilter.class)
				// UsernamePasswordAuthenticationFilter 전에 JwtAuthenticationFilter를 실행
				.build();
	}
	
	
	/*
	 * o.s.s.web.DefaultSecurityFilterChain     : Will secure any request with
	 * [org.springframework.security.web.session.DisableEncodeUrlFilter@69ee0861,
	 * org.springframework.security.web.context.request.async.WebAsyncManagerIntegrationFilter@5de6c7d7,
	 * org.springframework.security.web.context.SecurityContextPersistenceFilter@7f6936cc,
	 * org.springframework.security.web.header.HeaderWriterFilter@6e6bd43b,
	 * org.springframework.security.web.authentication.logout.LogoutFilter@9fd5dd0,
	 * com.project.irunyou.security.JwtAuthenticationFilter@69f55ea,
	 * org.springframework.security.web.savedrequest.RequestCacheAwareFilter@4ac26092,
	 * org.springframework.security.web.servletapi.SecurityContextHolderAwareRequestFilter@308e465b,
	 * org.springframework.security.web.authentication.AnonymousAuthenticationFilter@2b370ca9,
	 * org.springframework.security.web.session.SessionManagementFilter@35b38986,
	 * org.springframework.security.web.access.ExceptionTranslationFilter@62f3ad90,
	 * org.springframework.security.web.access.intercept.FilterSecurityInterceptor@30a79476]
	 */
	
	
}
