package it.objectmethod.geodue.controller.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.objectmethod.geodue.dao.CittaDao;
import it.objectmethod.geodue.dao.NazioniDao;
import it.objectmethod.geodue.model.Citta;
import it.objectmethod.geodue.model.CityFind;
/* Quando si lavora backEnd non bisogna pensare a come il servizio verrà usato devi soltato produrlo e basta*/
@RestController
@RequestMapping("/api/citta") //univocità nei servizi rest
public class CittaControllerRest {

	@Autowired
	CittaDao cittaDao;

	@Autowired
	NazioniDao nazioniDao;

	@PostMapping("/ricerca")
	public List<Citta> trovaCitta(@RequestBody CityFind city){
		city.setName("%"+city.getName()+"%");
		System.out.println("countryCode: "+city.getCountryCode());
		System.out.println("Min: "+city.getPopulationMin());
		if(city.getCountryCode()==null)
		{
			city.setCountryCode("%%");
		}
		List<Citta> listaCitta = cittaDao.findCitta(city); //TODO Cambiare nome del metodo
		return listaCitta;
	}

	@GetMapping("/{codiceNazione}/list") //Quando ci sono poche variabili e l'utente finale non è lui a scrivere direttamente usa pathVariable
	public List<Citta> citta(@PathVariable("codiceNazione") String codiceNazione){
		List<Citta> listaCitta = cittaDao.findCittaByCode(codiceNazione);
		return listaCitta;
	}

	@GetMapping("/{id}/find")
	public Citta setInformazioni(@PathVariable("id") int id){
		Citta city = cittaDao.findCittaById(id);
		return city;
	}

	@PostMapping("/insert")
	public Integer inserimento(@RequestBody Citta city){
		return cittaDao.inserisciCitta(city);
	}

	@PostMapping("/{id}/elimina")
	public Integer elimina(@PathVariable("id") int id){
		return cittaDao.eliminaCitta(id);
	}

	@PostMapping("/modifica") //Utilizza chiamate più specifiche (GetMapping, PostMapping)
	public Integer modifica(@RequestBody Citta city){
		return cittaDao.modificaCitta(city);
	}
}
