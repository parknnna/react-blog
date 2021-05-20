package com.parknnna.blog.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import java.io.File;
import java.io.IOException;
import java.util.*;

import com.parknnna.blog.database.Entity.*;
import com.parknnna.blog.Service.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
public class StoryController {
	
	@Autowired
	private StoryService storyService;

	@PostMapping("/storyfile")
    public int fileup( MultipartHttpServletRequest mtfRequest) {
        List<MultipartFile> fileList = mtfRequest.getFiles("file");
        String filePath = "C:/react-blog/frontend/web/src/components/story/myimg";
    
        for (MultipartFile mf : fileList) {
            File target = new File(filePath, mf.getOriginalFilename());
            try {
                mf.transferTo(target);
            } catch (IOException e) {
                System.out.println(e);
            }
        }


		
		return 0;
	}

	@PostMapping("/story")
    public int insert(@RequestBody StoryEntity entity) {
		return storyService.insert(entity);
	}

	@GetMapping("/story/{nowPage}/{cntPerPage}")
	public Map<String, Object> list(PagingVO vo
            , @PathVariable(value = "nowPage") String nowPage
            , @PathVariable(value = "cntPerPage") String cntPerPage) {

        int total = storyService.count();

        nowPage = nowPage.isEmpty() ? "1" : nowPage;
        cntPerPage = cntPerPage.isEmpty() ? "10" : cntPerPage;

        vo = new PagingVO(total, Integer.parseInt(nowPage), Integer.parseInt(cntPerPage));
        HashMap<String, Object> result = new HashMap<>();
        result.put("story", storyService.List(vo));
        result.put("page", vo);

        return result;
    }

    @GetMapping("/story/{no}")
    public HashMap<String,StoryEntity> getProject(@PathVariable("no") int no){
        HashMap<String, StoryEntity> result = new HashMap<>();
        result.put("story", storyService.get(no));

        return result;
    }
}