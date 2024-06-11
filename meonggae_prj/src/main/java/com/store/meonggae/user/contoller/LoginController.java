package com.store.meonggae.user.contoller;

import java.util.HashMap;
import java.util.Map;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class LoginController {

	/*
	 * @Value("${kakao.client-id}") private String clientId;
	 * 
	 * @Value("${kakao.client-secret}") private String clientSecret;
	 * 
	 * @Value("${kakao.redirect-uri}") private String redirectUri;
	 * 
	 * @GetMapping(value = "/kakaologin", produces = "application/json") public
	 * String kakaoLogin(@RequestParam String code, RedirectAttributes
	 * redirectAttributes) { String tokenUrl =
	 * "https://kauth.kakao.com/oauth/token";
	 * 
	 * RestTemplate restTemplate = new RestTemplate();
	 * 
	 * Map<String, String> params = new HashMap<>(); params.put("grant_type",
	 * "authorization_code"); params.put("client_id", clientId);
	 * params.put("redirect_uri", redirectUri); params.put("code", code);
	 * params.put("client_secret", clientSecret);
	 * 
	 * HttpHeaders headers = new HttpHeaders();
	 * headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
	 * 
	 * HttpEntity<Map<String, String>> entity = new HttpEntity<>(params, headers);
	 * 
	 * ResponseEntity<String> response = restTemplate.exchange(tokenUrl,
	 * HttpMethod.POST, entity, String.class);
	 * 
	 * String responseBody = response.getBody();
	 * 
	 * if (responseBody != null) { JSONParser parser = new JSONParser(); try {
	 * JSONObject json = (JSONObject) parser.parse(responseBody); String accessToken
	 * = (String) json.get("access_token");
	 * 
	 * // �׼��� ��ū�� ����Ͽ� ����� ������ �������� ���� Map<String, Object> userInfo =
	 * getUserInfo(accessToken);
	 * 
	 * redirectAttributes.addFlashAttribute("userInfo", userInfo); return
	 * "redirect:/user/home"; // �����̷�Ʈ�� ��� ���� } catch (ParseException e) {
	 * e.printStackTrace(); return "redirect:/login?error"; } } else { // ���� ó�� ����
	 * �߰� return "redirect:/login?error"; } }
	 * 
	 * // �׼��� ��ū�� ����Ͽ� ����� ������ �������� �޼��� �߰� private Map<String, Object>
	 * getUserInfo(String accessToken) { String userInfoUrl =
	 * "https://kapi.kakao.com/v2/user/me";
	 * 
	 * RestTemplate restTemplate = new RestTemplate();
	 * 
	 * // HTTP ��û ��� ���� HttpHeaders headers = new HttpHeaders();
	 * headers.add("Authorization", "Bearer " + accessToken);
	 * 
	 * HttpEntity<String> entity = new HttpEntity<>(headers);
	 * 
	 * ResponseEntity<String> response = restTemplate.exchange(userInfoUrl,
	 * HttpMethod.GET, entity, String.class);
	 * 
	 * String responseBody = response.getBody();
	 * 
	 * if (responseBody != null) { JSONParser parser = new JSONParser(); try {
	 * JSONObject json = (JSONObject) parser.parse(responseBody); Map<String,
	 * Object> userInfo = new HashMap<>(); userInfo.put("id", json.get("id"));
	 * userInfo.put("nickname", ((JSONObject)
	 * json.get("properties")).get("nickname")); userInfo.put("email", ((JSONObject)
	 * json.get("kakao_account")).get("email")); return userInfo; } catch
	 * (ParseException e) { e.printStackTrace(); } }
	 * 
	 * return null; }
	 */
}
