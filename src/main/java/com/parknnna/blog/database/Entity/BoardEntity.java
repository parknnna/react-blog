package com.parknnna.blog.database.Entity;


import lombok.*;

@Getter
@Setter
public class BoardEntity{
    private int no;
    private String name;
    private String pw;
    private String title;
    private String contents;
    private String day;    
}

