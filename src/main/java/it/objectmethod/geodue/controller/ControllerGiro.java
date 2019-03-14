package it.objectmethod.geodue.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ControllerGiro {

	@RequestMapping("/javaScript")
	String prova() {
		return "prima-pagina-js";
	}
}
