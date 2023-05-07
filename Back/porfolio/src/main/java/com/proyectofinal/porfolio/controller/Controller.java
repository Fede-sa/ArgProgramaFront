package com.proyectofinal.porfolio.controller;

import com.proyectofinal.porfolio.model.Persona;
import com.proyectofinal.porfolio.service.IPersonaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http:/localhost:4200")
public class Controller {
    
    @Autowired
    private IPersonaService persoServ;
    
    @PostMapping("/crear/persona")
    public void agregarPersona(@RequestBody Persona per){
        persoServ.crearPersona(per);
    }
        
    @GetMapping("/ver/personas")
    @ResponseBody
    public List<Persona> verPersonas(){
            return persoServ.verPersonas();
        }
    
    @DeleteMapping("/borrar/{id}")
    public void elimPersona(@PathVariable Long id){
        persoServ.borrarPersona(id);
    }
     
    @PutMapping("/editar")
    public void editPersona(@RequestBody Persona per){
        persoServ.editarPersona(per);
    }
    
}


    
