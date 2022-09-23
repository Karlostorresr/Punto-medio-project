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
@RequestMapping(path="post/")

public class CommentController {
	
	private final ComentarioServicio commentService;	
	@Autowired 
	
	public CommentController(ComentarioServicio commentService) {
		this.commentService =commentService;
	}
	
	@GetMapping
	public void saludo () {
		System.out.println("Hola Lucho");
	}
	
	@GetMapping(path="comments/Postnum/{idPost}")
	public ArrayList <Comentario> getComentarioByPostId(@PathVariable("idPost") int idPost){
		return commentService.getComentarioByPostId(idPost);
	}
	
	@PostMapping
	public void addComentario(@RequestBody Comentario post) {
		commentService.addComentario(post);
	}


}//CommentController
