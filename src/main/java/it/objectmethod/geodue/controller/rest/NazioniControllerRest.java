package it.objectmethod.geodue.controller.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import it.objectmethod.geodue.dao.NazioniDao;
import it.objectmethod.geodue.model.Nazione;

@RestController
@RequestMapping("/api/nazioni")
public class NazioniControllerRest {

	@Autowired
	NazioniDao nazioniDao;
	
	@GetMapping("/continenti")
	public List<String> continenti(){
		List<String> listaContinenti = nazioniDao.findContinenti();
		return listaContinenti;
	}
	
	@GetMapping("/list-all")
	public List<Nazione> getAllNazioni(){
		List<Nazione> listaNazioni = nazioniDao.findAllNazioni(); 
		return listaNazioni;
	}
	
	@GetMapping("/by-continent")
	public List<Nazione> nazioniByContinent(@RequestParam("continente") String continente){
		List<Nazione> listaNazioni = nazioniDao.findNazioniByContinent(continente);
		return listaNazioni;
		
	}
	
	
}
