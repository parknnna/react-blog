package com.parknnna.blog.database.Mapper;


import com.parknnna.blog.database.Entity.*;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface ProjectMapper {
    int insert(ProjectEntity entity);
    int count();
    List<ProjectEntity> projectList(PagingVO vo);
    ProjectEntity getProject(int no);
}