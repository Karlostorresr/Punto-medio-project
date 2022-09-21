package com.PuntoMedio.ProductosAPI;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins="*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE,
        RequestMethod.PUT })


@RestController
@RequestMapping(path="/PuntoMedio/perfilUsuario/")

public class perfilController {
	
private perfilService perfilUsuarioService;
	
	@Autowired
	public perfilController(perfilService perfilUsuarioService) {
		this.perfilUsuarioService = perfilUsuarioService;
	}
	
	@GetMapping(path="{idUsuario}")
	public perfilUsuario getperfilUsuario(@PathVariable("idUsuario") Long idUsuario) {
		return perfilUsuarioService.getperfilUsuario(idUsuario);
	}


}
