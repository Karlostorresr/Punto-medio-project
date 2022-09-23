package com.PuntoMedio.ProductosAPI;

public class perfilUsuario {
	
	//Atributos
	private int idUsuario;
	public String nombreUsuario;
	public String apellidoUsuario;
	public String correo;
	public String avatar;
	public String nombreMarca;
	public String fotoMarca;
	public String descripcionMarca;
	public String fechaNacimiento;
	private String password;
	private double telefono;
	
	//Constructor
	public perfilUsuario(int idUsuario, String nombreUsuario, String apellidoUsuario, String avatar,
			String nombreMarca, String fotoMarca, String descripcionMarca) {
		super();
		this.idUsuario = idUsuario;
		this.nombreUsuario = nombreUsuario;
		this.apellidoUsuario = apellidoUsuario;
		this.avatar = avatar;
		this.nombreMarca = nombreMarca;
		this.fotoMarca = fotoMarca;
		this.descripcionMarca = descripcionMarca;
	}//constructor
	
	//getters y setters

	public int getIdUsuario() {
		return idUsuario;
	}



}
