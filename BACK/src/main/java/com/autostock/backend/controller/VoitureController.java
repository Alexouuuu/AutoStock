package com.autostock.backend.controller;

import com.autostock.backend.entity.Voiture;
import com.autostock.backend.service.VoitureService;
import org.springframework.web.bind.annotation.*;
import java.util.List; 

@RestController
@RequestMapping("/api/voitures")
@CrossOrigin(origins = "http://localhost:5173")
public class VoitureController {
    private final VoitureService voitureService;
    
    public VoitureController(VoitureService voitureService) {
        this.voitureService = voitureService;
    }
    
    @GetMapping
    public List<Voiture> getAllVoitures() {
        return voitureService.getAllVoitures();
    }
    
    @GetMapping("/{id}")
    public Voiture getVoitureById(@PathVariable Long id) {
        return voitureService.getVoitureById(id).orElse(null);
    }
}