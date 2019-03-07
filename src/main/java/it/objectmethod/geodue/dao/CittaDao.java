package it.objectmethod.geodue.dao;

import java.util.List;

import it.objectmethod.geodue.model.Citta;
import it.objectmethod.geodue.model.CityFind;

public interface CittaDao {

	List<Citta> findCittaByCode(String codiceNazione);
	List<Citta> findCittaByCityandFlag(CityFind city, boolean flagOperator);
	Citta findCittaById(int id);
	int eliminaCitta(int id);
	int modificaCitta(Citta city);
	int inserisciCitta(Citta city);
}
