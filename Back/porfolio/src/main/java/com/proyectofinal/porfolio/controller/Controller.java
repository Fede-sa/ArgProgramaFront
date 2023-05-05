package com.proyectofinal.porfolio.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
    
    @GetMapping("/hola/{nombre}/{apellido}")
    public String decirHola(@PathVariable String nombre,
                            @PathVariable String apellido){
        return "Hola "+nombre+", "+apellido+" venis mejor!!!!";
    } 
    
    @GetMapping("/chau")
    public String decirChau(@RequestParam String nombre,
                            @RequestParam String apellido,
                            @RequestParam String texto){
     return "chau mundo, " + nombre+", "+apellido+" "+texto;   
    }
   
}   

    
