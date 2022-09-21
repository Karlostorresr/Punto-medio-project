package com.PuntoMedio.ProductosAPI;

import java.util.ArrayList;

import org.springframework.stereotype.Service;




@Service 
public class PublicacionServicio {
	
public final ArrayList <Publicacion> lista =new ArrayList <Publicacion>();
	
	public PublicacionServicio() {
		lista.add(new Publicacion(1, "Karlos Torres", "Sombrero charro", "Sombrero mexicano para estas fiestas patrias. Unisex cuentan con diferentes tamaños para todas las edades. no te quedes sin el tuyo", "/Multimedia/Iprueba2.png"));
		
		lista.add(new Publicacion(1, "Karlos Torres", "Sombrero charro 2", "Sombrero mexicano", "/Multimedia/Iprueba4.png"));
		
		lista.add(new Publicacion(2, "Lheilani Castillo", "vestido de noche negro", "Hermoso vestido largo color negro, perfecto para cualquier evento social de gala. Escotado y con un hermoso diseño floreado hecho con pedreria", "/Multimedia/Iprueba3.png"));
		
		lista.add(new Publicacion(3, "Fernanda Martinez", "Comedor Pavoreal", "Comedor para 6 personas tallado a mano hecho de roble con diseño de pavoreales en cada una de las sillas", "Multimedia/Comedor1"));
		
		lista.add(new Publicacion(1, "Guillermo Garibay", "Escultura de Rana", "Escultura de ceramica de ranita verde, perfecta para usar de pisa papeles y de plumero","/Multimedia/Iprueba3.png"));
		
		lista.add(new Publicacion(1, "Jacobo Amezcua", "Cubrebocas bordado", "Cubrbeocas con flores rojas bordadas a mano sobre tela blanca, de facil limpieza", "/Multimedia/IPrueba1.png"));
	}

	
	 public ArrayList<Publicacion> getAllPosts() {
		return lista;
	}//traer todos los post
	 
	 
	 
	 public ArrayList<Publicacion> getPostByUser(int UserId) {
		 ArrayList<Publicacion> publicacionesDelUsuario = new ArrayList <Publicacion>();
			for (Publicacion post: lista) {
				if (post.getUserId()==UserId) {
					publicacionesDelUsuario.add(post);				
				}
			}
			return publicacionesDelUsuario; 
		}
	 
	 
	 public Publicacion getPostById(int postId) {
			Publicacion temporal =null;
			for (Publicacion post: lista) {
				if (post.getPostId()==postId) {
					temporal=post;
					break;
				}//cierre del if
			}//foreach
			return temporal;//muestro el producto solicitado 
		}
	 

		//metodo para agregar una nueva publicacion 
		public void addPost (Publicacion post) {
			lista.add(post);
		}
		 
	// }
	 
	
	
	
	
	
	
	
	
	
	
	
	
}// clase PublicacionServicio

