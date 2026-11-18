package com.autostock.backend.controller;

import com.autostock.backend.entity.Utilisateur;
import com.autostock.backend.service.UtilisateurService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController 
@RequestMapping("/api/utilisateurs")
@CrossOrigin(origins = "http://localhost:5173")
public class UtilisateurController {
    private final UtilisateurService utilisateurService;
    
    public UtilisateurController(UtilisateurService utilisateurService) {
        this.utilisateurService = utilisateurService;
    }
    
    @GetMapping 
    public List<Utilisateur> getAllUtilisateurs() {
        return utilisateurService.getAllUtilisateurs();
    }
    
    @GetMapping("/{id}")
    public Utilisateur getUtilisateurById(@PathVariable Long id) {
        return utilisateurService.getUtilisateurById(id).orElse(null);
    }
    
    @PostMapping
    public Utilisateur addUtilisateur(@RequestBody Utilisateur utilisateur) {
        return utilisateurService.saveUtilisateur(utilisateur);
    }
}
