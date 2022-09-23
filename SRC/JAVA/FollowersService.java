package com.PuntoMedio.ProductosAPI;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

@Service 
public class FollowersService {
	
	public final ArrayList <Followers > listaDeSeguidores =new ArrayList <Followers>();
	
	public FollowersService () {
		listaDeSeguidores.add(new Followers( 2, "Multimedia/Guillermo", "Guillermo Garibay", 5));
		
		listaDeSeguidores.add(new Followers( 2, "Multimedia/Luis", "Luis Eduardo", 7));
		
		listaDeSeguidores.add(new Followers( 2, "Multimedia/Gloria", "Gloria Aletvia", 8));
		
		listaDeSeguidores.add(new Followers( 2, "Multimedia/Fernanda", "Fernanda Martinez", 4));
		
		listaDeSeguidores.add(new Followers( 4, "Multimedia/Muffin", "Muffin Torres", 2));
		
		listaDeSeguidores.add(new Followers( 4, "Multimedia/Brownie", "Brownie Torres", 13));
	}
		
	public ArrayList <Followers> getFollowersByEmpId (int empId){
		ArrayList<Followers> Seguidores =new ArrayList <Followers>();
			for (Followers user:listaDeSeguidores ) {
				if (user.getEmprendedorId()==empId) {
					Seguidores.add(user);
				}
			}
			return Seguidores;
	}
	
	
}//Followers servicio
