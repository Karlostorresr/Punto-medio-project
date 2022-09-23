package com.PuntoMedio.ProductosAPI;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

@Service
public class ComentarioServicio {

public final ArrayList <Comentario> listaDeComentarios =new ArrayList <Comentario>();
	
	public ComentarioServicio() {
		listaDeComentarios.add(new Comentario("Multimedia/Karlos", "Karlos Torres", "25/09/2022 12:35", "Recomiendo altamente este producto hice una orden de 15 piezas y todas tenian una excelente calidad",153 ));
		
		listaDeComentarios.add(new Comentario("Multimedia/Fernanda", "Fernanda Martinez", "25/09/2022 12:35", "Recomiendo altamente este producto hice una orden de 15 piezas y todas tenian una excelente calidad",07));
		
		listaDeComentarios.add(new Comentario("Multimedia/FernandoC", "Fernando Aguilar", "25/09/2022 12:35", "Recomiendo altamente este producto hice una orden de 15 piezas y todas tenian una excelente calidad", 43 ));
		
		listaDeComentarios.add(new Comentario("Multimedia/Fernando O. ", "Fernando Orozco", "25/09/2022 12:35", "Recomiendo altamente este producto hice una orden de 15 piezas y todas tenian una excelente calidad",102 ));
		
		
		listaDeComentarios.add(new Comentario("Multimedia/Guillermo", "Memo Ri", "25/09/2022 12:35", "Recomiendo altamente este producto hice una orden de 15 piezas y todas tenian una excelente calidad", 07));
		
		
	}
	
	//metodo para traer todos los comentarios relacionados al ID de una publicacion 
	 public  ArrayList<Comentario> getComentarioByPostId(int postId) {
		 ArrayList<Comentario> ComentariosDelPost = new ArrayList <Comentario>();
			for (Comentario coment: listaDeComentarios) {
				if (coment.getIdPost()==postId) {
					ComentariosDelPost.add(coment);				
				}
			}
			return ComentariosDelPost; 
		}
	
	 
	 
	//metodo para agregar una nuevo commentario 
			public void addComentario (Comentario coment) {
				listaDeComentarios.add(coment);
			}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}//Comentario Servicio

