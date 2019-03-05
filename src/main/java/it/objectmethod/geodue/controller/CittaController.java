package it.objectmethod.geodue.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import it.objectmethod.geodue.dao.CittaDao;
import it.objectmethod.geodue.model.Citta;
@Controller
public class CittaController {

	@Autowired
	CittaDao cittaDao;
	@RequestMapping("/citta")
	public String citta(@RequestParam("codiceNazione") String codiceNazione, ModelMap model)
	{
		List<Citta> listaCitta = new ArrayList<Citta>();
		listaCitta = cittaDao.findCittaByCode(codiceNazione);
		model.addAttribute("lista", listaCitta);
		return "citta";
	}
}
