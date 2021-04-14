package com.parknnna.blog.database.Entity;


import lombok.*;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility;

@Getter
@Setter
@JsonAutoDetect(fieldVisibility = Visibility.ANY)
public class ProjectEntity{
    private int no;
    private String title;
    private String personnel;
    private String contents;
    private String filename;
    private String startDay;
    private String endDay;
    private String url;
    private String apk;
}

