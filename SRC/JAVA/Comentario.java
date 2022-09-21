package com.PuntoMedio.ProductosAPI;

public class Comentario {
	public int idPost;
	public String avatar;
	public String usuario;
	public String fecha;
	public String textoComentario;
	private int idComentario;
	private int contador=0;
	
	
	public Comentario(String avatar, String usuario, String fecha, String textoComentario, int idPost) {
		contador ++;
		this.idComentario=contador;
		this.avatar = avatar;
		this.usuario = usuario;
		this.fecha = fecha;
		this.textoComentario = textoComentario;
		this.idPost=idPost;
	}
	
	public Comentario() {
		contador ++;
		this.idComentario=contador;
	}


	public int getIdPost() {
		return idPost;
	}
	
	
	
	
	
	
	
	















}//Comments

