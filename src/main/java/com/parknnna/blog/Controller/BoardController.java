package com.parknnna.blog.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.*;

import com.parknnna.blog.database.Entity.*;
import com.parknnna.blog.Service.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class BoardController {
	
	@Autowired
	private BoardService BoardService;

	@GetMapping("/board/{nowPage}/{cntPerPage}")
    public Map<String, Object> boardGet(PagingVO vo
            , @PathVariable(value = "nowPage") String nowPage
            , @PathVariable(value = "cntPerPage") String cntPerPage) {

        int total = BoardService.count();

        nowPage = nowPage.isEmpty() ? "1" : nowPage;
        cntPerPage = cntPerPage.isEmpty() ? "10" : cntPerPage;

        vo = new PagingVO(total, Integer.parseInt(nowPage), Integer.parseInt(cntPerPage));
        HashMap<String, Object> result = new HashMap<>();
        result.put("board", BoardService.BoardList(vo));
        result.put("page", vo);

        return result;
    }

    @GetMapping("/board/{no}")
    public HashMap<String,BoardEntity> getBoard(@PathVariable("no") int no){
        HashMap<String, BoardEntity> result = new HashMap<>();
        result.put("board", BoardService.getBoard(no));

        return result;
    }

    @DeleteMapping("/board")
    public int deleteBoard(@RequestBody BoardEntity entity){
        if(BoardService.selectID(entity)<1) return -1;
        if(BoardService.selectPW(entity)<1) return -2;
        return BoardService.deleteBoard(entity);
    }

    @PostMapping("/board")
    public int insertBoard(@RequestBody BoardEntity params){
        int result = BoardService.insertBoard(params);
        return result;
    }

    @PutMapping("/board")
    public int updateBoard(@RequestBody BoardEntity params){
        int result = BoardService.updateBoard(params);
        return result;
    }

    @PostMapping("/board2")
    public int insertBoard2(@RequestBody BoardEntity entity){
        if(BoardService.selectID(entity)<1) return -1;
        if(BoardService.selectPW(entity)<1) return -2;
        return 1;
    }
    
}