package it.objectmethod.geodue.dao.impl;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcDaoSupport;
import org.springframework.stereotype.Service;

import it.objectmethod.geodue.dao.CittaDao;
import it.objectmethod.geodue.model.Citta;
@Service
public class CittaDaoImpl extends NamedParameterJdbcDaoSupport implements CittaDao {

	@Autowired
	public CittaDaoImpl(DataSource dataSource)
	{
		super();
		setDataSource(dataSource);
	}
	@Override
	public List<Citta> findCittaByCode(String code) {
		List<Citta> listaCitta = null;
		String sql = "select id, name, population, countrycode, district from city where countrycode=?";
		BeanPropertyRowMapper<Citta> rmCitta = new BeanPropertyRowMapper<Citta>(Citta.class);
		listaCitta=getJdbcTemplate().query(sql, new Object[]{code},rmCitta);
		return listaCitta;
	}
	@Override
	public List<Citta> findCittaByCityandFlag(Citta city, boolean flagOperator) {
		List<Citta> listaCitta = null;
		String sql = null;
		if(flagOperator)
		{
			sql = "select id, name, population, countrycode, district from city where name like :nome and (population>:popolazione or :popolazione=0) and countrycode=:codiceNazione";
		}
		else
		{
			sql = "select id, name, population, countrycode, district from city where name like :nome and (population<:popolazione or :popolazione=0) and countrycode=:codiceNazione";
		}
		BeanPropertyRowMapper<Citta> rmCity = new BeanPropertyRowMapper<Citta>(Citta.class);
		MapSqlParameterSource parametriQuery = new MapSqlParameterSource();
		parametriQuery.addValue("nome", city.getName());
		parametriQuery.addValue("popolazione", city.getPopulation());
		parametriQuery.addValue("codiceNazione", city.getCountryCode());
		listaCitta = getNamedParameterJdbcTemplate().query(sql, parametriQuery,rmCity);
		return listaCitta;
	}

}
