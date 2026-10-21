package com.autostock.backend.entity;

import jakarta.persistence.*;

@Entity
public class Voiture {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String marque;
    private String modele;
    private int annee;
    private int prix;
    private int kilometres;
    private String fuel;
    private String transmission;
    private int puissance;
    private String couleur;
    private String image;
    private String description;
    
    public Voiture() {}
    
    public Voiture(Long id, String marque, String modele, int annee, int prix, int kilometres, String fuel, String transmission, int puissance, String couleur, String image, String description) {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
        this.prix = prix;
        this.kilometres = kilometres;
        this.fuel = fuel;
        this.transmission = transmission;
        this.puissance = puissance;
        this.couleur = couleur;
        this.image = image;
        this.description = description;
    }
    
    public Long getId() { return this.id;}
    public void setId(Long id) { this.id = id;}
    
    public String getMarque() { return this.marque;}
    public void setMarque(String marque) { this.marque = marque;}
    
    public String getModele() { return this.modele;}
    public void setModele(String modele) { this.modele = modele;}
    
    public int getAnnee() { return this.annee;}
    public void setAnnee(int annee) { this.annee = annee;}
    
    public int getPrix() { return this.prix;}
    public void setPrix(int prix) { this.prix = prix;}
    
    public int getKilometres() { return this.kilometres;}
    public void setKilometres(int kilometres) { this.kilometres = kilometres;}
    
    public String getFuel() { return this.fuel;}
    public void setFuel(String fuel) { this.fuel = fuel;}
    
    public String getTransmission() { return this.transmission;}
    public void setTransmission(String transmission) { this.transmission = transmission;}
    
    public int getPuissance() { return this.puissance;}
    public void setPuissance(int puissance) { this.puissance = puissance;}
    
    public String getCouleur() { return this.couleur;}
    public void setCouleur(String couleur) { this.couleur = couleur;}
    
    public String getImage() { return this.image;}
    public void setImage(String image) { this.image = image;}
    
    public String getDescription() { return this.description;}
    public void setDescription(String description) { this.description = description;}
}