package com.parknnna.blog.Service;

import com.parknnna.blog.database.Entity.*;
import com.parknnna.blog.database.Mapper.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;



@Service
public class BoardService {
    @Autowired
    private BoardMapper BoardMapper;

    public List<BoardEntity> BoardList(PagingVO vo) {
        List<BoardEntity> result = BoardMapper.BoardList(vo);
        return result;
    }

    public int count(){
        int result = BoardMapper.count();
        return result;
    }

    public BoardEntity getBoard(int no){
        BoardEntity result = BoardMapper.getBoard(no);
        return result;
    }

    public int deleteBoard(BoardEntity entity){
        int result = BoardMapper.deleteBoard(entity);
        return result;
    }

    public int selectID(BoardEntity entity){
        return BoardMapper.selectID(entity);
    }

    public int selectPW(BoardEntity entity){
        return BoardMapper.selectPW(entity);
    }

    public int insertBoard(BoardEntity entity){
        return BoardMapper.insertBoard(entity);
    }

    public int updateBoard(BoardEntity entity){
        return BoardMapper.updateBoard(entity);
    }
}