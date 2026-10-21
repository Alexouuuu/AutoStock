package com.autostock.backend.service;

import com.autostock.backend.entity.Voiture;
import com.autostock.backend.repository.VoitureRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional; 

@Service
public class VoitureService {
    private final VoitureRepository voitureRepository;
    
    public VoitureService(VoitureRepository voitureRepository) {
        this.voitureRepository = voitureRepository;
    }
    
    public List<Voiture> getAllVoitures() {
        return voitureRepository.findAll();
    }
    
    public Optional<Voiture> getVoitureById(Long id){
        return voitureRepository.findById(id);
    }
    
    public Voiture saveVoiture(Voiture voiture) {
        return voitureRepository.save(voiture);
    }
}