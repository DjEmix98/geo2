package it.objectmethod.geodue.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;

import it.objectmethod.geodue.dao.NazioniDao;
import it.objectmethod.geodue.dao.impl.NazioniDaoImpl;

@Controller
public class ContinentiNazioniController {
	@Autowired
	private NazioniDao nazioniDao;
	 @GetMapping("/continenti")
	public String continenti(ModelMap model)
	{
		List<String> listaNazioni = new ArrayList<String>(); 
		listaNazioni = nazioniDao.findContinenti();
		model.addAttribute("lista",listaNazioni);
		return "continenti";
	}
}
