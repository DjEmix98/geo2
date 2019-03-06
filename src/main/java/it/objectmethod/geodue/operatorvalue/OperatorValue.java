package it.objectmethod.geodue.operatorvalue;
public class OperatorValue {

	static public boolean controlloDati (String operatore)
	{
		boolean check = true;
		if(operatore.compareTo("minore")==0)
		{
			check=false;
		}
		return check;
	}

}
