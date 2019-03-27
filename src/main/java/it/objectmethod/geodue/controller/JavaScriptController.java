package it.objectmethod.geodue.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class JavaScriptController {

	@RequestMapping("/javaScript")
	String prova() {
		return "prima-pagina-js";
	}
	
	@RequestMapping("/per-niente-contento")
	public String homeIvan() {
		return "home-ivan";
	}
}
