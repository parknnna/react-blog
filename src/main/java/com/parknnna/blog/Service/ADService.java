package com.parknnna.blog.Service;

import com.parknnna.blog.database.Entity.*;
import com.parknnna.blog.database.Mapper.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;



@Service
public class ADService {
    @Autowired
    private ADMapper ADMapper;

    public int ADdelete(ADEntity entity){
        int result = ADMapper.ADdelete(entity);
        return result;
    }
}