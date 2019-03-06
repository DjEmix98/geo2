package it.objectmethod.geodue.dao;

import java.util.List;

import it.objectmethod.geodue.model.Nazione;

public interface NazioniDao{
	List<String> findContinenti();
	List<Nazione> findNazioniByContinent(String continent);
	List<Nazione> findAllNazioni();
}
