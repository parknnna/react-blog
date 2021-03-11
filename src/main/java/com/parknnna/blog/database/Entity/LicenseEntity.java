package com.parknnna.blog.database.Entity;


import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility;

import lombok.*;

@Getter
@Setter
@JsonAutoDetect(fieldVisibility = Visibility.ANY)
public class LicenseEntity{
    private int no;
    private String name;
    private String home;
    private String day;
    private int tt;
}

