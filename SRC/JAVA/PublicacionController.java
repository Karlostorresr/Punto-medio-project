package com.PuntoMedio.ProductosAPI;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE,
        RequestMethod.PUT })


@RestController
@RequestMapping(path="PuntoMedio/")

public class PublicacionController {
	
	private final PublicacionServicio postService;
	@Autowired 
	
	public PublicacionController(PublicacionServicio postService) {
		this.postService = postService;
	}
	
	
	//MetodoGet
	
	@GetMapping (path= "PublicacionByUser/{userId}")
	public ArrayList <Publicacion> getPostByUser(@PathVariable("userId") int userId){
		return postService.getPostByUser(userId);
	}
	


	@GetMapping(path="/Postnum/{postId}")
	public Publicacion getPostById(@PathVariable("postId") int postId) {
		return postService.getPostById(postId);
	}//getProducto
	

	@GetMapping 
	 public ArrayList<Publicacion> getAllPosts(){
			return postService.getAllPosts();
		}//traer todos los post
	
	
	
	@PostMapping
	public void addPost(@RequestBody Publicacion post) {
		postService.addPost(post);		
	}


























}//PublicacionController

