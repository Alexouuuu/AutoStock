package com.autostock.backend.controller;

import com.autostock.backend.entity.Utilisateur;
import com.autostock.backend.service.UtilisateurService;
import com.autostock.backend.dto.LoginRequest;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
@RestController 
public class AuthController {
    private final UtilisateurService utilisateurService; //pas de dto ici 
    
    public AuthController(UtilisateurService utilisateurService) {
        this.utilisateurService = utilisateurService;
    }
    
    @PostMapping("/register")
    public Utilisateur register(@RequestBody Utilisateur utilisateur) {
        return utilisateurService.inscrire(utilisateur);
    }
    
    @PostMapping("/login")
    public Utilisateur login(@RequestBody LoginRequest loginRequest) {  // l'utilisateur a la connexion de rentre que email et mdp , et pas le reste donc pas de type Utilisateur ici , mais LoginRequest (dto) qui ne renvoie lui que email et mdp
        return utilisateurService.connexion(loginRequest.getEmail(), loginRequest.getMotDePasse()); //connexion() est définie dans utilisateurService et pas utilisateur
    }
}
