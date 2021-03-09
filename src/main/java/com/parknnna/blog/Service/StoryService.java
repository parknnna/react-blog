package com.parknnna.blog.Service;

import com.parknnna.blog.database.Entity.*;
import com.parknnna.blog.database.Mapper.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;



@Service
public class StoryService {

    @Autowired
    private StoryMapper StoryMapper;

    public int insert(StoryEntity entity) {
        return StoryMapper.insert(entity);
    }

    
    public int count(){
        return StoryMapper.count();
    }

    public List<StoryEntity> List(PagingVO vo) {
        List<StoryEntity> result = StoryMapper.List(vo);
        return result;
    }

    public StoryEntity get(int no){
        StoryEntity result = StoryMapper.get(no);
        return result;
    }
   


}