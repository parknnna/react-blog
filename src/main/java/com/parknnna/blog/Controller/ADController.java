package com.parknnna.blog.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.parknnna.blog.database.Entity.*;
import com.parknnna.blog.Service.*;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class ADController {
	
	@Autowired
	private ADService ADService;


    @DeleteMapping("/AD")
    public int ADdelete(@RequestBody ADEntity entity){
        return ADService.ADdelete(entity);
    }
}