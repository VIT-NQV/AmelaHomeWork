package com.example.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class HelloService {
    public String getName() {
        RestTemplate restTemplate = new RestTemplate();
        String url = "http://name:8081/name";
        return restTemplate.getForObject(url, String.class);
    }
}