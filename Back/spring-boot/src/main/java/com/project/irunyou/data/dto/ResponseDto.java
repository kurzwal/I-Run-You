/* 작성자 : 홍지혜
 * 파일의 역할 : 기본 Response DTO Class
 * 작성날짜 : 2023-01-12
 * 
 * 업데이트 작성자 : -
 * 업데이트 날짜 : -
 * */
package com.project.irunyou.data.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ResponseDto<D>{
	
    private boolean status;
    private String message;
    private D data;

    public static <D> ResponseDto<D> setSuccess(String message, D data) {
        return new ResponseDto<>(true,message,data);
    }

    public static <D> ResponseDto<D> setFailed(String message) {
        return new ResponseDto<>(false,message,null);
    }
}
