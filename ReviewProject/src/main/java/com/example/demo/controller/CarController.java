package com.example.demo.controller;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Car;
import com.example.demo.service.CarService;
@RestController
@CrossOrigin
public class CarController {
	@Autowired
	CarService service;
	
	@PostMapping("/car")
	public String add(@RequestBody Car car)
	{
		return service.addCar(car);
	}
	
	@GetMapping("/car")
	public List<Car> get()
	{
		return service.getCar();
	}
	@GetMapping("/car/{field}")
	public List<Car> babyWithSort(@PathVariable String field)
	{
		return service.getCarSorted(field);
	}
	@GetMapping("/id/{id}")
	public List<Car> getByCarName(@PathVariable int id){
		return service.getCarById(id);
	}
	@PutMapping("/car")
	public String update(@RequestBody Car car)
	{
		return service.updateCar(car);
	}
	
	@DeleteMapping("/car")
		public String delete(@RequestParam int id)
		{
		return service.deleteCarById(id);
		}
	@GetMapping("/car/{offset}/{pageSize}")
	public List<Car> CarWithPagination(@PathVariable int offset,@PathVariable int pageSize)
	{
		return service.getCarWithPagination(offset, pageSize );
	}
	@GetMapping("/car/{offset}/{pageSize}/{field}")
	public List<Car> CarWithSortingAndPagination(@PathVariable int offset,@PathVariable int pageSize,@PathVariable String field)
	{
		return service.getCarWithSortingAndPagination(offset, pageSize,field );
	}
	
	

}