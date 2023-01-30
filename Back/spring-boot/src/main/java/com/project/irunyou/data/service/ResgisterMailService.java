package com.project.irunyou.data.service;

import java.io.UnsupportedEncodingException;
import java.util.Random;

import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMessage.RecipientType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.project.irunyou.config.MailConfig;

@Service
public class ResgisterMailService {
	
	@Autowired	// MailConfig Bean
	private JavaMailSender mailSender;
	
	private String cerpw; // 메일로 날라갈 인증번호
	
	
	// 메일 내용 작성 : 받는 유저 이메일 지정, 메일 내용, 보내는 이메일 주소, 보내는 사람
	public MimeMessage createMail(String UserEmail) throws MessagingException, UnsupportedEncodingException {
		MimeMessage message = mailSender.createMimeMessage();
		
		message.addRecipients(RecipientType.TO,UserEmail);	// 메일 받을 사용자
		message.setSubject("[I Run You] 인증코드를 보내드립니다."); 	// 이메일 제목
		
		String msgg = "";
		msgg += "<h1>[I Run You] 인증코드 입니다.<h1>";
		msgg += "<br>";
		msgg += "<p> 아래의 인증코드로 인증해주세요.</p>";
		msgg += "<br>";
		msgg += "<p>" + cerpw + "<p>";
		msgg += "<br>";
		
		message.setText(msgg, "utf-8", "html");	// 메일 내용, charset 타입, subtype
		
		message.setFrom(new InternetAddress("projectirunyou@gmail.com", "IRunYou_Admin"));
		
		return message;
	}
	
	// 인증코드 생성
	// 랜덤한 8자리 인증코드 작성
	public String createKey() {
		StringBuffer key = new StringBuffer();
		Random rnd = new Random();

		for (int i = 0; i < 8; i++) { // 인증코드 8자리
			int index = rnd.nextInt(3); // 0~2 까지 랜덤, rnd 값에 따라서 아래 switch 문이 실행됨

			switch (index) {
			case 0:
				key.append((char) ((int) (rnd.nextInt(26)) + 97));
				// a~z (ex. 1+97=98 => (char)98 = 'b')
				break;
			case 1:
				key.append((char) ((int) (rnd.nextInt(26)) + 65));
				// A~Z
				break;
			case 2:
				key.append((rnd.nextInt(10)));
				// 0~9
				break;
			}
		}

		return key.toString();
	}
	
	// 실제로 메일 발송 메서드
	// bean 등록된 mailSender로 이메일 send
	public String sendMail(String userMail) throws Exception {	// 매개변수 userMail -> 이메일 주소
		
		cerpw = createKey();	// 인증코드 생성
		MimeMessage mail = createMail(userMail);	// 메일 내용 생성
	
		try {
			mailSender.send(mail); // 메일 발송
		} catch (MailException e) {
			return "발송중 오류가 발생했습니다.";
		}
		
		return cerpw; // 메일로 보냈던 인증 코드 서버로 반환
	}
	
	
}
