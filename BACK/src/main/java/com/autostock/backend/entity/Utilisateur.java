package com.autostock.backend.entity;

import jakarta.persistence.*;

@Entity 
@Table(name = "utilisateurs")
public class Utilisateur {
    
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String nom;
    @Column(nullable = false)
    private String prenom;
    @Column(unique= true, nullable = false)
    private String email;
    @Column(nullable = false)
    private String motDePasse;
    
    //Plusieurs utilisateurs ont qu'un role
    @ManyToOne
    @JoinColumn(name= "role_id")
    private Role role;
    
    public Utilisateur() {}
    
    public Utilisateur(String nom, String prenom, String email, String motDePasse, Role role){
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.motDePasse = motDePasse;
        this.role = role;
    }
    
    public Long getId() { return id;}
    public String getPrenom() { return prenom;}
    public String getNom() { return nom;}
    public String getMotDePasse() { return motDePasse;}
    public Role getRole() { return role;}
    public String getEmail() { return email;}
    
    public void setPrenom(String prenom) { this.prenom = prenom;}
    public void setNom(String nom) { this.nom = nom;}
    public void setMotDePasse(String motDePasse) { this.motDePasse = motDePasse;}
    public void setRole(Role role) { this.role = role;}
    public void setEmail(String email) { this.email = email;}
}