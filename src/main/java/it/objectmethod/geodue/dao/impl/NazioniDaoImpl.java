package it.objectmethod.geodue.dao.impl;
import java.util.List;
import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcDaoSupport;
import org.springframework.stereotype.Service;
import it.objectmethod.geodue.dao.NazioniDao;
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
}
