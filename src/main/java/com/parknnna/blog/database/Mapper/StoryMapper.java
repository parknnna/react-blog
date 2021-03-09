package com.parknnna.blog.database.Mapper;


import java.util.List;

import com.parknnna.blog.database.Entity.*;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;


@Mapper
@Repository
public interface StoryMapper {
    int insert(StoryEntity entity);
    int count();
    List<StoryEntity> List(PagingVO vo);
    StoryEntity get(int no);
}