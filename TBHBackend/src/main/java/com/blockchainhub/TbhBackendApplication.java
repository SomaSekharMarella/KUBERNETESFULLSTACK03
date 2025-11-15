package com.blockchainhub;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class TbhBackendApplication extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(TbhBackendApplication.class, args);
        System.out.println("TBH Backend Application Started Successfully.....");
    }

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(TbhBackendApplication.class);
    }
}
