package com.parknnna.blog.config;


import java.net.InetAddress;
import java.net.UnknownHostException;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**").allowedOrigins("http://localhost:81","http://localhost:8080")
        .allowedMethods("*");
        registry.addMapping("/*").allowedOrigins("http://localhost:81","http://localhost:8080")
        .allowedMethods("*");
        // InetAddress local;
        // String ip;
		// try { local = InetAddress.getLocalHost(); 
		// 	ip = local.getHostAddress(); 
		// 	System.out.println("local ip : "+ip);
        //     registry.addMapping("/**").allowedOrigins("http://"+ip+":81","http://"+ip+":8080")
        // .allowedMethods("*");
		// }catch (UnknownHostException e1) { e1.printStackTrace(); }
    }
}
