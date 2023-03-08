package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.demo.model.Car;
import com.example.demo.repository.CarRepository;
@Service
public class CarService {
	@Autowired
	CarRepository repository;
	public String addCar(Car car) 
	{
		repository.save(car);
		return "Car is Added";
	}
	public List<Car> getCar()
	{
		return repository.findAll();
	}
	public List<Car> getCarById(int id){
		return repository.getCarById(id);
	}
	public String updateCar(Car car)
	{
		repository.save(car);
		return " Car is Updated ";
	}
	public String deleteCarById(int id) {
	    repository.deleteById(id);
	    return "Car Removed";
	}
	public List<Car> getCarSorted(String field)
	{
		return repository.findAll(Sort.by(Sort.Direction.ASC, field));
	}
	public List<Car> getCarWithPagination(@PathVariable int offset, @PathVariable int pageSize)
	{
		Page<Car> page=repository.findAll(PageRequest.of(offset,pageSize));
		return page.getContent();
	}
	public List<Car> getCarWithSortingAndPagination(int offset,int pageSize,String field)
	{
		Pageable paging = PageRequest.of(offset,pageSize,Sort.by(field));
		Page<Car> page=repository.findAll(paging);
		return page.getContent();
	}

}