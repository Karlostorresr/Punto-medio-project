package com.PuntoMedio.ProductosAPI;

public class Followers {
	private int emprendedorId;
	public String avatar;
	public String followerName;
	private int followerid;
	
	
	public Followers(int emprendedorId, String avatar, String followerName, int followerid) {	
		this.emprendedorId = emprendedorId;
		this.avatar = avatar;
		this.followerName = followerName;
		this.followerid = followerid;
	}


	public int getEmprendedorId() {
		return emprendedorId;
	}


	public int getFollowerid() {
		return followerid;
	}
	
	
	
	
	
	
}// class followers

