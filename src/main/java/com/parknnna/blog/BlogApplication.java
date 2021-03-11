package com.parknnna.blog;


import java.net.InetAddress;
import java.net.UnknownHostException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BlogApplication {
	static{
		System.setProperty("spring.config.location", "classpath:/application.yml");
	}
	public static void main(String[] args) {
		SpringApplication.run(BlogApplication.class, args);
		InetAddress local;
        String ip;
		try { local = InetAddress.getLocalHost(); 
			ip = local.getHostAddress(); 
			System.out.print(ip);
		}catch (UnknownHostException e1) { e1.printStackTrace(); }
	}

}
