package com.autostock.backend.config;

import com.autostock.backend.entity.Voiture;
import com.autostock.backend.repository.VoitureRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List; 

@Component
public class DataInitializer implements CommandLineRunner {
    
    private final VoitureRepository voitureRepository;
    
    public DataInitializer(VoitureRepository voitureRepository) {
        this.voitureRepository = voitureRepository;
    }
    
    @Override
    public void run(String... args) throws Exception {
        if (voitureRepository.count() == 0) {
            List<Voiture> initialCars = List.of(
                new Voiture(null, "BMW", "Serie 5", 2008, 7000, 300000, "Diesel", "Manuelle", 177, "Gris",
                    "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80", "BMW Serie 5 Grise"),
                new Voiture(null, "Peugeot", "508", 2015, 8500, 170000, "Hybride", "Semi-Automatique", 200, "Blanc",
                    "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80", "Peugeot 508 blanche"),
                new Voiture(null, "Volkswagen", "Golf", 2012, 10000, 120000, "Essence", "Automatique", 210, "Noir",
                    "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80", "Volkswagen Golf Noire"),
                new Voiture(null, "BMW", "M4", 2024, 100000, 30000, "Essence", "Automatique", 500, "Vert",
                    "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80", "BMW M4 Verte"),
                new Voiture(null, "Dacia", "Sandero", 2013, 8000, 150000, "Diesel", "Manuelle", 130, "Bleu",
                    "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80", "Dacia Sandero Bleue"),
                new Voiture(null, "Tesla", "Model S", 2023, 30000, 15000, "Electrique", "Automatique", 300, "Rouge",
                    "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80", "Tesla Modele S Rouge")
            );
            
            voitureRepository.saveAll(initialCars);
            System.out.println("6 voitures ajoutées automatiquement dans MySQL");
        }
    }
}