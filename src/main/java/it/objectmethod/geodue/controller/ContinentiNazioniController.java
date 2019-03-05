package it.objectmethod.geodue.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import it.objectmethod.geodue.dao.NazioniDao;
import it.objectmethod.geodue.dao.impl.NazioniDaoImpl;
import it.objectmethod.geodue.model.Nazione;

@Controller
public class ContinentiNazioniController {
	@Autowired
	private NazioniDao nazioniDao;
	 @GetMapping("/continenti")
	public String continenti(ModelMap model)
	{
		List<String> listaContinenti = new ArrayList<String>(); 
		listaContinenti = nazioniDao.findContinenti();
		model.addAttribute("lista",listaContinenti);
		return "continenti";
	}
	 @GetMapping("/nazioni/{continente}")
	 public String nazioni(ModelMap model,@PathVariable("continente")String continente)
	 {
		List<Nazione> listaNazioni = new ArrayList<Nazione>();
		listaNazioni = nazioniDao.findNazioniByContinent(continente);
		model.addAttribute("lista",listaNazioni);
		return "nazioni";
		 
	 }
}
