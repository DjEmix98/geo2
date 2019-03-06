package it.objectmethod.geodue.dao;

import java.util.List;

import it.objectmethod.geodue.model.Citta;

public interface CittaDao {

	List<Citta> findCittaByCode(String code);
	List<Citta> findCittaByCityandFlag(Citta city, boolean flagOperator);
}
