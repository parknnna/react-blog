package com.parknnna.blog;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BlogApplication {
	static{
		System.setProperty("spring.config.location", "classpath:/application.yml");
	}
	public static void main(String[] args) {
		SpringApplication.run(BlogApplication.class, args);
	}

}
