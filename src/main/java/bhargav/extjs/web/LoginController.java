package bhargav.extjs.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;

@Controller
@RequestMapping("/login")
public class LoginController {

	@RequestMapping(value = "/authenticate.do", method = RequestMethod.POST)
	public @ResponseBody String login(@RequestParam("user") final String user,
			@RequestParam("password") final String password) {

		GenericResponse genericResponse = new GenericResponse();
		Gson gson = new Gson();

		if (user.equals("bhargav") && password.equals("password")) {
			genericResponse.setMsg("Login successful");
			genericResponse.setSuccess(true);
		} else {
			genericResponse.setMsg("Login failed!");
			genericResponse.setSuccess(false);
		}

		String json = gson.toJson(genericResponse);
		return json;

	}

}
