package it.objectmethod.geodue.model;

public class Nazione {

	private String name;
	private String code;
	private String continent;
	private String surfaceArea;
	private int population;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getContinent() {
		return continent;
	}
	public void setContinent(String continent) {
		this.continent = continent;
	}
	public int getPopulation() {
		return population;
	}
	public void setPopulation(int population) {
		this.population = population;
	}
	public String getSurfaceArea() {
		return surfaceArea;
	}
	public void setSurfaceArea(String surfaceArea) {
		this.surfaceArea = surfaceArea;
	}
}

