/* 작성자 : 유열림
 * 파일의 역할 : 테스트용 컨트롤러 클래스
 * 작성날짜 : 2023-01-12
 * 
 * 업데이트 작성자 : -
 * 업데이트 날짜 : -
 * */

/* 테스트 방법 :
 * POSTMAN 실행해서
 * http://localhost:4040/test/ GET요청 보내보기
 * 		(response값 : good)
 * 
 * http://localhost:4040/test/3 GET요청 보내보기
 *  	(response값 : 교동2근린공원)
 *  */
package com.project.irunyou.data.test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("test/")
public class TestController {
	
	@Autowired TestService testService;
	
	@GetMapping("{num}")
	public String getPark(@PathVariable("num") Integer num) {
		return testService.getPark(num);
	}
	@GetMapping("")
	public String getNot() {
		return "good";
	}
}
