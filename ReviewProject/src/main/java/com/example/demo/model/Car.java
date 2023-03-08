package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Car {
	@Id
	private int id;
	private  String carName;
	private String speed;
	private int yearModified;
	private String brand;
	private String price;
	private int seater;
	private String fueltype;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCarName() {
		return carName;
	}
	public void setCarName(String carName) {
		this.carName = carName;
	}
	public String getSpeed() {
		return speed;
	}
	public void setSpeed(String speed) {
		this.speed = speed;
	}
	public int getYearModified() {
		return yearModified;
	}
	public void setYearModified(int yearModified) {
		this.yearModified = yearModified;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public int getSeater() {
		return seater;
	}
	public void setSeater(int seater) {
		this.seater = seater;
	}
	public String getFueltype() {
		return fueltype;
	}
	public void setFueltype(String fueltype) {
		this.fueltype = fueltype;
	}
	@Override
	public String toString() {
		return "Car [id=" + id + ", carName=" + carName + ", speed=" + speed + ", yearModified=" + yearModified
				+ ", brand=" + brand + ", price=" + price + ", seater=" + seater + ", fueltype=" + fueltype + "]";
	}
	
    
	

}