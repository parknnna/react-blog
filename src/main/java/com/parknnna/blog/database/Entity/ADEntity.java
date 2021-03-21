package com.parknnna.blog.database.Entity;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility;

import lombok.*;

@Getter
@Setter
@JsonAutoDetect(fieldVisibility = Visibility.ANY)
public class ADEntity{
    private int no;
    private String table;
}

