package it.objectmethod.geodue.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import it.objectmethod.geodue.dao.CittaDao;
import it.objectmethod.geodue.model.Citta;
@Controller
public class CittaController {

	private static final String ERROR = "Errore, non puoi inserire un numero negativo o una lettera";
	@Autowired
	CittaDao cittaDao;
	@RequestMapping("/citta")
	public String citta(@PathParam("codiceNazione") String codiceNazione, ModelMap model, HttpServletRequest request)
	{
		HttpSession session = request.getSession();
		if(codiceNazione==null)
		{
			codiceNazione = (String) session.getAttribute("codiceNazione");
		}
		List<Citta> listaCitta = new ArrayList<Citta>();
		listaCitta = cittaDao.findCittaByCode(codiceNazione);
		session.setAttribute("codiceNazione", codiceNazione);
		model.addAttribute("lista", listaCitta);
		return "citta";
	}
	//	@RequestMapping("/ricerca")
	//	public String ricercaCitta(@RequestParam("operatore") String operatore,@RequestParam("popolazione") String popolazioneString,HttpServletRequest request, ModelMap model)
	//	{
	//		Citta city = new Citta();
	//		List<Citta> listaCitta = new ArrayList<Citta>();
	//		String error=null;
	//		int popolazioneInt;
	//		if(popolazioneString.isEmpty())
	//		{
	//			popolazioneInt=0;
	//		}
	//		else {
	//		try {
	//			popolazioneInt = Integer.parseInt(popolazioneString);
	//		}catch( NumberFormatException ex){
	//			ex.printStackTrace();
	//			popolazioneInt = 0;
	//		}
	//		}
	//		if(popolazioneInt<0)
	//		{
	//			error=ERROR;
	//		}
	//		else {
	//			city.setName("%"+request.getParameter("nomeCitta")+"%");
	//			city.setCountryCode(request.getParameter("codiceNazione"));
	//			city.setPopulation(popolazioneInt);
	//			boolean bOperatore = OperatorValue.controlloDati(operatore);
	//			listaCitta = cittaDao.findCittaByCityandFlag(city,bOperatore);
	//		}
	//		model.addAttribute("error", error);
	//		model.addAttribute("list", listaCitta);
	//		return "ricerca-citta";
	//	}
}
