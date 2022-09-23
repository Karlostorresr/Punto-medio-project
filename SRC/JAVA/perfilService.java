package com.PuntoMedio.ProductosAPI;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

@Service


public class perfilService {
	public final ArrayList<perfilUsuario> lista = new ArrayList<perfilUsuario>();

	public perfilService() {
		lista.add(new perfilUsuario(1, "Karlos", "Torres", "/Multimedia/lheicas.jpeg", "Magnolias", "/Multimedia/portadaMagnolia.png", "Magnolia: Es una boutique local, la cual busca poner al alcance de todas las personas vestir siempre comodas y a la moda. Ofrecemos muchos accesorios  y articulos que se adapatan a todos los estilos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis tenetur rem "));

	}

	public ArrayList<perfilUsuario> getperfilUsuario() {
		// TODO Auto-generated method stub
		return lista;
	}// getPRoductos
	
	
	public perfilUsuario getperfilUsuario(Long idUsuario) {
		perfilUsuario temporal = null;
		for (perfilUsuario perfil : lista) {
			if (perfil.getIdUsuario() == idUsuario) {
				temporal = perfil;
				break;
			} // if
		} // foreach
		return temporal;
	}
	

}//class

