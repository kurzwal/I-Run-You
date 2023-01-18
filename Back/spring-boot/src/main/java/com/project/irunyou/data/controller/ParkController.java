package com.project.irunyou.data.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.irunyou.data.dto.MyLocationDto;
import com.project.irunyou.data.dto.ParkInfoDto;
import com.project.irunyou.data.dto.ParkListDto;
import com.project.irunyou.data.dto.ResponseDto;
import com.project.irunyou.data.service.ParkService;

import antlr.collections.List;

@RequestMapping("parkNum/")
@RestController
public class ParkController {
	
	@Autowired ParkService parkService;
	
	@PostMapping("{parkNum}")
	public ResponseDto<ParkInfoDto> searchParkById(@PathVariable("parkNum") int parkNum){
		return parkService.searchParkById(parkNum);
	}

	@GetMapping("parklist/")
	public ResponseDto<java.util.List<ParkListDto>> searchParkByLocation(@RequestBody MyLocationDto requestBody) {
		return parkService.searchParkByLocation(requestBody);
	}
	
	
}
