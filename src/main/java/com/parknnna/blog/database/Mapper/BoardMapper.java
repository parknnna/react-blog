package com.parknnna.blog.database.Mapper;


import com.parknnna.blog.database.Entity.*;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface BoardMapper {
    List<BoardEntity> BoardList(PagingVO vo);
    int count();
    BoardEntity getBoard(int no);
    int deleteBoard(BoardEntity entity);
    int selectID(BoardEntity entity);
    int selectPW(BoardEntity entity);
    int insertBoard(BoardEntity entity);
    int updateBoard(BoardEntity entity);
}