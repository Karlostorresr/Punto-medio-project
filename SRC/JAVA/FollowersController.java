package com.PuntoMedio.ProductosAPI;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

	

@RestController
@RequestMapping(path="PuntoMedio/")
	
	public class FollowersController{
		
		private final FollowersService FollService;
		@Autowired
		
		public FollowersController (FollowersService FollService) {
			this.FollService =FollService;
			
		}
		
		
		
	
		
	//MetodoGet
		@GetMapping (path= "UsuarioFollowers/{emprendedorId}")
		public ArrayList <Followers> getFollowersByEmpId(@PathVariable("emprendedorId")int emprendedorId){
			return FollService.getFollowersByEmpId(emprendedorId);
		}
	

	
	
	
	
	
	
	
	
	
	
}//Followers Controller
