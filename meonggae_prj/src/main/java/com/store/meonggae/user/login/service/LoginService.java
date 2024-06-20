package com.store.meonggae.user.login.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.store.meonggae.user.login.dao.LoginDAO;
import com.store.meonggae.user.login.domain.LoginDomain;
import com.store.meonggae.user.login.vo.LoginVO;

@Service
public class LoginService {
    @Autowired
    private LoginDAO lDAO;
    
    private final String CLIENT_ID = "0738d40e4912047a5dbb57d8ca06a869";
    private final String REDIRECT_URI = "http://localhost/meonggae_prj/login_page/kakao_test.do";

    public LoginDomain selectOneUser(LoginVO lVO) {
        return lDAO.login(lVO);
    }

    public Map<String, Object> getKaKaoAccessToken(String code) throws Exception {
        System.out.println("getKaKaoAccessToken method called");  // 메서드 호출 확인

        // 1. 토큰 받아오는 url 설정
        String url = "https://kauth.kakao.com/oauth/token";
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        
        
        // 2. 필수 파라미터 map으로 값 넣기
        MultiValueMap<String, String> params = new LinkedMultiValueMap<String, String>();
        params.add("grant_type", "authorization_code");
        params.add("client_id", CLIENT_ID);
        params.add("redirect_uri", REDIRECT_URI);
        params.add("code", code);
        
        HttpEntity<MultiValueMap<String, String>> entity = new HttpEntity<MultiValueMap<String,String>>(params, headers);
        ResponseEntity<Map> response = restTemplate.exchange(url, HttpMethod.POST, entity, Map.class);
        
        // 3. REST-API 호출
        return response.getBody();
         }

    public Map<String, Object> getKaKaoUserInfo(String accessToken) throws Exception {
        System.out.println("getKaKaoUserInfo method called");  // 메서드 호출 확인

        // 1. 카카오 로그인 시 유저 정보를 가져오기 위한 url
        String url = "https://kapi.kakao.com/v2/user/me";
        
        // 2. REST-API 호출
        RestTemplate restTemplate = new RestTemplate();

        // 3. headers 값 설정
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + accessToken);

        HttpEntity<String> entity = new HttpEntity<String>(headers);

        ResponseEntity<Map> response = restTemplate.exchange(url, HttpMethod.GET, entity, Map.class);
        
        
        
        // 5. LoginDomain에 추가

        return response.getBody();
    }
}
