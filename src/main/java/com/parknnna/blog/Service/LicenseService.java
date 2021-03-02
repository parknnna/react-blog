package com.parknnna.blog.Service;

import com.parknnna.blog.database.Entity.*;
import com.parknnna.blog.database.Mapper.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;



@Service
public class LicenseService {

    @Autowired
    private LicenseMapper LicenseMapper;


    public  List<LicenseEntity> LicenseList() {
        List<LicenseEntity> result = LicenseMapper.LicenseList();
        return result;
    }


   
}