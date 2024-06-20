package com.store.meonggae.user.contoller;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.store.meonggae.user.login.domain.LoginDomain;
import com.store.meonggae.user.login.service.LoginService;

@Controller
public class SocialLoginController {
	@Autowired
	private LoginService loginService;
	
	@GetMapping("/login_page/kakao_test.do")
	public String kakaoLogin(@RequestParam("code") String code, HttpServletRequest request, RedirectAttributes redirectAttributes) throws Exception {
		Map<String, Object> tokenResponse = loginService.getKaKaoAccessToken(code);
		String accessToken = (String) tokenResponse.get("access_token");
		Map<String, Object> userResponse = loginService.getKaKaoUserInfo(accessToken);
		
		LoginDomain user = new LoginDomain();
		user.setId(String.valueOf(userResponse.get("id")));
		
		Map<String, Object> properties = (Map<String, Object>) userResponse.get("properties");
		if (properties != null) {
			user.setNick((String) properties.get("nickname"));
			user.setProfile((String) properties.get("profile_image"));
		}
		
		HttpSession session = request.getSession();
		session.setAttribute("user", user);
		session.setAttribute("user_nick", user.getNick());
		
		redirectAttributes.addFlashAttribute("user", user);
		
		return "redirect:/index.do";
	}
}
