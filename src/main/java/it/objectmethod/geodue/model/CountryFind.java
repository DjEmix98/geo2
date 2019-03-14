package it.objectmethod.geodue.model;

public class CountryFind {

	private String name;
	private String code;
	private String continent;
	private int population;
	private int populationMin;
	private int populationMax;
	private float surfaceArea;
	private float surfaceAreaMax;
	private float surfaceAreaMin;

	public float getSurfaceAreaMax() {
		return surfaceAreaMax;
	}
	public void setSurfaceAreaMax(float surfaceAreaMax) {
		this.surfaceAreaMax = surfaceAreaMax;
	}
	public float getSurfaceAreaMin() {
		return surfaceAreaMin;
	}
	public void setSurfaceAreaMin(float surfaceAreaMin) {
		this.surfaceAreaMin = surfaceAreaMin;
	}
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
	public float getSurfaceArea() {
		return surfaceArea;
	}
	public void setSurfaceArea(float surfaceArea) {
		this.surfaceArea = surfaceArea;
	}
	public int getPopulation() {
		return population;
	}
	public void setPopulation(int population) {
		this.population = population;
	}
	public int getPopulationMin() {
		return populationMin;
	}
	public void setPopulationMin(int populationMin) {
		this.populationMin = populationMin;
	}
	public int getPopulationMax() {
		return populationMax;
	}
	public void setPopulationMax(int populationMax) {
		this.populationMax = populationMax;
	}
}
