package com.parknnna.blog.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.*;

import com.parknnna.blog.database.Entity.*;
import com.parknnna.blog.Service.*;

@RestController
public class ProjectController {
	
	@Autowired
	private ProjectService ProjectService;

	@PostMapping("/projectfile")
    public int fileup( @RequestParam("file") MultipartFile file) {
		String filePath = System.getProperty("user.dir")+"/frontend/web/src/components/project/projects/";

		File target = new File(filePath, file.getOriginalFilename());
		try {
            file.transferTo(target);
        } catch (IOException e) {
            System.out.println(e);
        }
		return 0;
	}

	@PostMapping("/project")
    public int insert( @RequestBody ProjectEntity entity) {
		return ProjectService.insert(entity);
	}

	@GetMapping("/project/{nowPage}/{cntPerPage}")
	public Map<String, Object> list(PagingVO vo
            , @PathVariable(value = "nowPage") String nowPage
            , @PathVariable(value = "cntPerPage") String cntPerPage) {

        int total = ProjectService.count();

        nowPage = nowPage.isEmpty() ? "1" : nowPage;
        cntPerPage = cntPerPage.isEmpty() ? "10" : cntPerPage;

        vo = new PagingVO(total, Integer.parseInt(nowPage), Integer.parseInt(cntPerPage));
        HashMap<String, Object> result = new HashMap<>();
        result.put("projects", ProjectService.projectList(vo));
        result.put("page", vo);

        return result;
    }

    @GetMapping("/project/{no}")
    public HashMap<String,ProjectEntity> getProject(@PathVariable("no") int no){
        HashMap<String, ProjectEntity> result = new HashMap<>();
        result.put("project", ProjectService.getProject(no));

        return result;
    }
}