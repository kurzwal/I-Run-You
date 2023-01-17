package com.project.irunyou.data.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.irunyou.data.dto.ParkInfoDto;
import com.project.irunyou.data.dto.ResponseDto;
import com.project.irunyou.data.service.ParkService;

@RequestMapping("parkNum/")
@RestController
public class ParkController {
	
	@Autowired ParkService parkService;
	
	@PostMapping("{parkNum}")
	public ResponseDto<ParkInfoDto> searchParkById(@PathVariable("parkNum") int parkNum){
		return parkService.searchParkById(parkNum);
	}

}
