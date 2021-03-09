package com.parknnna.blog.Service;

import com.parknnna.blog.database.Entity.*;
import com.parknnna.blog.database.Mapper.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;



@Service
public class ProjectService {

    @Autowired
    private ProjectMapper ProjectMapper;

    public int insert(ProjectEntity entity) {
        return ProjectMapper.insert(entity);
    }

    public int count(){
        return ProjectMapper.count();
    }

    public List<ProjectEntity> projectList(PagingVO vo) {
        List<ProjectEntity> result = ProjectMapper.projectList(vo);
        return result;
    }

    public ProjectEntity getProject(int no){
        ProjectEntity result = ProjectMapper.getProject(no);
        return result;
    }
   
}