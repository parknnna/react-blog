package com.parknnna.blog.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.*;

import javax.servlet.http.HttpServletRequest;

import com.parknnna.blog.database.Entity.*;
import com.parknnna.blog.Service.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;


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
        String ip="";
        try{
            ip=getUserIp();
            params.setIp(ip);
        }catch(Exception e){
            System.out.print(e);
        }
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



    public String getUserIp() throws Exception {
		
        String ip = null;
        HttpServletRequest request = 
        ((ServletRequestAttributes)RequestContextHolder.currentRequestAttributes()).getRequest();

        ip = request.getHeader("X-Forwarded-For");
        String un="unknown";
        
        if (ip == null || ip.length() == 0 || un.equalsIgnoreCase(ip)) { 
            ip = request.getHeader("Proxy-Client-IP"); 
        } 
        if (ip == null || ip.length() == 0 || un.equalsIgnoreCase(ip)) { 
            ip = request.getHeader("WL-Proxy-Client-IP"); 
        } 
        if (ip == null || ip.length() == 0 || un.equalsIgnoreCase(ip)) { 
            ip = request.getHeader("HTTP_CLIENT_IP"); 
        } 
        if (ip == null || ip.length() == 0 || un.equalsIgnoreCase(ip)) { 
            ip = request.getHeader("HTTP_X_FORWARDED_FOR"); 
        }
        if (ip == null || ip.length() == 0 || un.equalsIgnoreCase(ip)) { 
            ip = request.getHeader("X-Real-IP"); 
        }
        if (ip == null || ip.length() == 0 || un.equalsIgnoreCase(ip)) { 
            ip = request.getHeader("X-RealIP"); 
        }
        if (ip == null || ip.length() == 0 || un.equalsIgnoreCase(ip)) { 
            ip = request.getHeader("REMOTE_ADDR");
        }
        if (ip == null || ip.length() == 0 || un.equalsIgnoreCase(ip)) { 
            ip = request.getRemoteAddr(); 
        }
		
		return ip;
	}
    
}