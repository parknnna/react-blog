package com.parknnna.blog.database.Mapper;


import com.parknnna.blog.database.Entity.*;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface ADMapper {
    int ADdelete(ADEntity entity);
}