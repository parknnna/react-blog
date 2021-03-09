package com.parknnna.blog.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.*;

import com.parknnna.blog.database.Entity.*;
import com.parknnna.blog.Service.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
//value를 통해 값이 있는 위치를 명시해준다.
@PropertySource(value = "classpath:application.yml")
@ConfigurationProperties(prefix = "upload")
@RestController
public class ProjectController {
	
	@Autowired
	private ProjectService ProjectService;

    @Value("${secret}")
    private String oing;



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

    @PostMapping(value="/ad")
    public boolean postMethodName(@RequestParam("PW") String adPW) {
        String ad=oing;
        if(ad.equals(adPW)) return true;
        return false;
    }
    
}