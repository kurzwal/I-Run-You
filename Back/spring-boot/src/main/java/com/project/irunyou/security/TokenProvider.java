package com.project.irunyou.security;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.project.irunyou.data.entity.UserEntity;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

//2023-01-25 홍지혜
//유저 정보 -> JWT 생성 클래스
@Service
public class TokenProvider {
	
	private static final String SECRET_KEY = "vpvjfhslv1wksms5aktdlTek7";
	
	public String create(UserEntity userEntity) {
		// 만료 기한 = Instant.now() : 현재시간  ChronoUnit.DAYS : 하루 단위
		// 로그인 시점부터 1일
		Date expiryDate = Date.from(Instant.now().plus(30, ChronoUnit.SECONDS));

		// 토큰 생성
		return Jwts.builder()
				// header 내용, 서명 SECRET_KEY
				// JWT 기본 서명 알고리즘 (대칭 알고리즘-1개의 SECRET KEY) HS512 : HMAC using SHA-512
				.signWith(SignatureAlgorithm.HS512, SECRET_KEY)
				// payload
				.claim("Role", "USER")	// 일반 유저
				// subject : 토큰의 주인 유일한 식별자
				.setSubject(userEntity.getUserEmail())
				// Issuer : 토큰 발행 주체
				.setIssuer("I Run You")
				// Issued at : 토큰 발행 시간 
				.setIssuedAt(new Date())
				// expiration : 토큰 만료 시간
				.setExpiration(expiryDate)
				.compact();
	}

	
	// 토큰 디코딩. 파싱, 위조여부 확인
	public String CheckAndGetUserEmail(String token) {
		// JWT - Claim기반 웹 토큰
		Claims claims = Jwts.parser()	// 파싱
				.setSigningKey(SECRET_KEY)
				.parseClaimsJws(token)
				.getBody();
		return claims.getSubject();	// getSubject -> userEmail 돌려줌
	}
	
	// 토큰 디코딩. 유효기간 리턴
	public long GetExpiration(String token) {
		Claims claims = Jwts.parser()
				.setSigningKey(SECRET_KEY)
				.parseClaimsJws(token)
				.getBody();
		return claims.getExpiration().getTime();
	}
		
}
