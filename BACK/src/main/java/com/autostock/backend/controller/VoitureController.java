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
    
    @PostMapping  //Create
    public Voiture addVoiture(@RequestBody Voiture voiture) {
        return voitureService.saveVoiture(voiture);
    }
    
    @PutMapping("/{id}")  //Update
    public Voiture updateVoiture(@PathVariable Long id, @RequestBody Voiture updated) {
        return voitureService.getVoitureById(id).map(voiture -> {
            voiture.setMarque(updated.getMarque());
            voiture.setModele(updated.getModele());
            voiture.setAnnee(updated.getAnnee());
            voiture.setPrix(updated.getPrix());
            voiture.setKilometres(updated.getKilometres());
            voiture.setFuel(updated.getFuel());
            voiture.setTransmission(updated.getTransmission());
            voiture.setPuissance(updated.getPuissance());
            voiture.setCouleur(updated.getCouleur());
            voiture.setDescription(updated.getDescription());
            return voitureService.saveVoiture(voiture);
        })
        .orElseThrow(() -> new RuntimeException("Voiture non trouvée"));
    }
    
    @DeleteMapping("/{id}") //Supprimer
    public void deleteVoiture(@PathVariable Long id) {
        voitureService.getVoitureById(id).ifPresentOrElse(
            voiture -> voitureService.deleteVoiture(voiture.getId()),
            () -> { throw new RuntimeException("Voiture non trouvée"); }
        );
    }
}