package com.project.irunyou.security;

import java.io.IOException;
import java.util.Enumeration;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.util.StringUtils;

//2023-01-25
// 홍지혜
// 인증 구현 필터
@Slf4j
@Component
@AllArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter{
	
	@Autowired private TokenProvider tokenProvider;

	// request {header} 파싱, Bearer 토큰 리턴
	private String parseBearerToken(HttpServletRequest request) {
		Enumeration<?> requestHeader = request.getHeaderNames();
		while(requestHeader.hasMoreElements()) {
			String requestNames = (String)requestHeader.nextElement();
//			log.info("헤더목록" + requestNames);
		}
//		log.info("리퀘스트헤더 " + request.getHeader("access-control-request-headers"));
		String bearerToken = request.getHeader("Authorization");
		if(StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
			return bearerToken.substring(7);
		}
		return null;
	}
	
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
//		boolean isOptions = request.getMethod().equals("OPTIONS");
//		
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.setHeader("Access-Control-Allow-Methods", "*");
		response.setHeader("Access-Control-Allow-Headers", "x-requested-with, content-type, Authorization");
//		
//		if(isOptions) {
//			response.setStatus(200);
//			filterChain.doFilter(request,response);		
//		} else {
		try {			
			log.info("필터실행중");
			String token = parseBearerToken(request);
			log.info("request토큰확인 " + token);// request에서 토큰 가져오기
			
			if(token != null && !token.equalsIgnoreCase("null")) {	// 토큰 검사
				String userEmail = tokenProvider.CheckAndGetUserEmail(token);	// 이메일 가져오기
				log.info("인증 유저 이메일 확인용 : " + userEmail);
				// SecurityContextHolder에 등록해야 인증된 사용자
				AbstractAuthenticationToken abstractAuthenticationToken
					// 사용자 인증정보 저장
					= new UsernamePasswordAuthenticationToken(userEmail, null, AuthorityUtils.NO_AUTHORITIES);
				abstractAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
				SecurityContext securityContext = SecurityContextHolder.createEmptyContext();	// 컨텍스트 생성
				securityContext.setAuthentication(abstractAuthenticationToken);	// 컨텍스트에 인증정보 넣기
				SecurityContextHolder.setContext(securityContext);	// 다시 컨텍스트로 등록				
			} else {
				logger.error("token is null");;
			}
			// 서버가 요청이 끝나기 전까지 인증한 사용자의 정보를 갖고 있어야 한다. 
		} catch(Exception e) {
			logger.error("token error",e);
//			filterChain.doFilter(request, response);
		}
		filterChain.doFilter(request, response);
		}
//	}
	// ContextHolder -> ThreadLocal ? 몰?루
}
