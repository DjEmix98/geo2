package it.objectmethod.geodue.dao.impl;
import java.util.List;
import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcDaoSupport;
import org.springframework.stereotype.Service;
import it.objectmethod.geodue.dao.NazioniDao;
import it.objectmethod.geodue.model.Nazione;
@Service
public class NazioniDaoImpl extends NamedParameterJdbcDaoSupport implements NazioniDao {

	@Autowired 
	public NazioniDaoImpl(DataSource dataSource) {
	    super();
	    setDataSource(dataSource);
	}


	@Override 
	public List<String> findContinenti() {
		List <String> listaContinenti = null;
		String sql = "select distinct continent from country";
		listaContinenti =  getJdbcTemplate().queryForList(sql,String.class);
		return listaContinenti;
	}


	@Override
	public List<Nazione> findNazioniByContinent(String continent) {
		List<Nazione> listaNazioni = null;
		String sql = "select name, code, continent, population from country where continent = ?";
		BeanPropertyRowMapper<Nazione> rmNazioni = new BeanPropertyRowMapper<Nazione>(Nazione.class);
		listaNazioni=getJdbcTemplate().query(sql,new Object[]{continent},rmNazioni);
		return listaNazioni;
	}


	@Override
	public List<Nazione> findAllNazioni() {
		List<Nazione> listaNazioni = null;
		String sql = "select name, code, continent, population from country";
		BeanPropertyRowMapper<Nazione> rmNazioni = new BeanPropertyRowMapper<Nazione>(Nazione.class);
		listaNazioni = getNamedParameterJdbcTemplate().query(sql,rmNazioni);
		return listaNazioni;
	}
	
}
