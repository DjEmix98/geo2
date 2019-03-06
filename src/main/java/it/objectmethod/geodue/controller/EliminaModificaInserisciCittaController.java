package it.objectmethod.geodue.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import it.objectmethod.geodue.dao.CittaDao;
import it.objectmethod.geodue.dao.NazioniDao;
import it.objectmethod.geodue.model.Citta;
import it.objectmethod.geodue.model.Nazione;

@Controller
public class EliminaModificaInserisciCittaController {

	@Autowired
	CittaDao cittaDao;
	@Autowired
	NazioniDao nazioniDao;
	@RequestMapping("/elimina")
	public ModelAndView elimina (@PathParam("id") int id)
	{
		cittaDao.eliminaCitta(id);
		return new ModelAndView("forward:/citta");
	}
	@RequestMapping("/form")
	public String formInserimentoDati(@PathParam("id") int id,ModelMap model)
	{
		Citta city = new Citta();
		List<Nazione> listaNazioni = new ArrayList<Nazione>();
		if(id!=0)
		{
			city=cittaDao.findCittaById(id);
		}
		listaNazioni = nazioniDao.findAllNazioni();
		model.addAttribute("list",listaNazioni);
		model.addAttribute("citta",city);
		return "inserisci-citta";
	}
	@RequestMapping("/insert")
	public ModelAndView inserimentoDati(HttpServletRequest request,@PathParam("id") int id) {
		Citta city = new Citta();
		int popolazioneInt;
		try {
			popolazioneInt = Integer.parseInt(request.getParameter("popolazione"));
		}catch(NumberFormatException ex){
			popolazioneInt=0;
			ex.printStackTrace();
		}
		city.setId(id);
		city.setName(request.getParameter("cittaNome"));
		city.setPopulation(popolazioneInt);
		city.setDistrict(request.getParameter("regione"));
		city.setCountryCode(request.getParameter("codiceNazione"));
		if(id==0){
			cittaDao.inserisciCitta(city);
		}
		else {
			cittaDao.modificaCitta(city);
		}
		return new ModelAndView("forward:/citta");
	}
}
