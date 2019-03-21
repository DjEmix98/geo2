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
import it.objectmethod.geodue.model.CityFind;
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
	public List<Citta> findCitta(CityFind city){
		List<Citta> listaCitta = null;
		String sql = "select id,name,countrycode,population,district "
				+ "from city "
				+ "where name like :nome "
				+ "and (population>:popolazioneMin "
				+ "or :popolazioneMin=0) "
				+"and (population<:popolazioneMax or :popolazioneMax=0)"
				+ "and (CountryCode= :codiceNazione or CountryCode like :codiceNazione)";
		BeanPropertyRowMapper<Citta> rmCity = new BeanPropertyRowMapper<Citta>(Citta.class);
		MapSqlParameterSource parametriQuery = new MapSqlParameterSource();
		parametriQuery.addValue("nome", city.getName());
		parametriQuery.addValue("popolazioneMin", city.getPopulationMin());
		parametriQuery.addValue("popolazioneMax", city.getPopulationMax());
		parametriQuery.addValue("codiceNazione", city.getCountryCode());
		listaCitta = getNamedParameterJdbcTemplate().query(sql, parametriQuery,rmCity);
		return listaCitta;
	}
	@Override
	public int eliminaCitta(int id) {
		String sql="delete from city where id=?";
		int ret = getJdbcTemplate().update(sql,new Object[]{id});
		return ret;
	}
	@Override
	public int modificaCitta(Citta city) {
		String sql="update city set name=:nome, countrycode=:codiceNazione, district=:regione, population=:popolazione where id=:id";
		MapSqlParameterSource param = new MapSqlParameterSource();
		param.addValue("nome", city.getName());
		param.addValue("codiceNazione", city.getCountryCode());
		param.addValue("regione", city.getDistrict());
		param.addValue("popolazione", city.getPopulation());
		param.addValue("id", city.getId());
		int ret = getNamedParameterJdbcTemplate().update(sql, param);
		return ret;
	}
	@Override
	public Citta findCittaById(int id) {
		Citta citta = null;
		String sql = "select name,countrycode,id,district,population from city where id=? ";
		BeanPropertyRowMapper <Citta>rmCitta = new BeanPropertyRowMapper<Citta>(Citta.class);
		citta = getJdbcTemplate().queryForObject(sql, new Object[]{id} ,rmCitta);
		return citta;
	}
	@Override
	public int inserisciCitta(Citta city) {
		String sql = "insert into city(name,countrycode,district,population) values(:nome,:codiceNazione,:regione,:popolazione)";
		MapSqlParameterSource insert = new MapSqlParameterSource();
		insert.addValue("nome", city.getName());
		insert.addValue("codiceNazione", city.getCountryCode());
		insert.addValue("regione", city.getDistrict());
		insert.addValue("popolazione", city.getPopulation());
		int ret = getNamedParameterJdbcTemplate().update(sql,insert);

		return ret;
	}

}
