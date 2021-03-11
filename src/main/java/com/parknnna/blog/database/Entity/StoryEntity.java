package com.parknnna.blog.database.Entity;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility;


import lombok.*;

@Getter
@Setter
@JsonAutoDetect(fieldVisibility = Visibility.ANY)
public class StoryEntity{
    private int no;
    private String title;
    private String contents;
    private String filename;
    private String day;
}

