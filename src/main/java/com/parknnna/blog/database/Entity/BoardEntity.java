package com.parknnna.blog.database.Entity;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility;

import lombok.*;

@Getter
@Setter
@JsonAutoDetect(fieldVisibility = Visibility.ANY)
public class BoardEntity{
    private int no;
    private String name;
    private String pw;
    private String title;
    private String contents;
    private String day;    
}

