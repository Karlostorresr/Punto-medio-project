package com.PuntoMedio.ProductosAPI;

public class Publicacion {
	
	public String userName;
	public String productName;
	public String productDescription;
	public String imagenURL;
	private int userId;
	private int postId;
	private static int total=0;
	
	
	//Parametros
	
	public Publicacion(int userId, String userName, String productName, String productDescription, String imagenURL) {
		total ++;//cada que se agregue un producto aumenta el contador
		this.postId=total;
		this.userId = userId; //para agregarle el id al producto
		this.userName = userName;
		this.productName = productName;
		this.productDescription = productDescription;
		this.imagenURL = imagenURL;
	}
	
	public Publicacion() {
		total ++;
		this.postId=total;
	}
	

	//Constructor
	
	
	//methods
	public int getUserId () {
		//String name= this.userName ;
		//return name;
		return this.userId;
		
	}


	public int getPostId() {
		return postId;
	}


}//Clase Publicacion 
