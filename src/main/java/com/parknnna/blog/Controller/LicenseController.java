package com.parknnna.blog.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.*;

import com.parknnna.blog.database.Entity.*;
import com.parknnna.blog.Service.*;

@RestController
public class LicenseController {
	
	@Autowired
	private LicenseService LicenseService;

	@GetMapping("/License")
    public HashMap<String,List<LicenseEntity>> hello() {
		HashMap<String,List<LicenseEntity>> result = new HashMap<>();
		List<LicenseEntity> list = LicenseService.LicenseList();
        result.put("License", list);

        return result;
	}
}