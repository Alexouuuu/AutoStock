package com.autostock.backend.entity;
import jakarta.persistence.*;

@Entity
public class MessageContact {
    
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nomPrenom;
    private String email;
    private String telephone;
    private String motif;
    private String message;
    
    public MessageContact() {}
    
    public MessageContact(String nomPrenom, String email, String telephone, String motif, String message) {
        this.nomPrenom = nomPrenom;
        this.email = email;
        this.telephone = telephone;
        this.motif = motif;
        this.message = message;
    }
    
    public Long getId() { return this.id; }
    
    public String getNomPrenom() { return this.nomPrenom;}
    public void setNomPrenom(String nomPrenom) { this.nomPrenom = nomPrenom;}
    
    public String getEmail() { return this.email;}
    public void setEmail(String email) { this.email = email;}
    
    public String getTelephone() { return this.telephone;}
    public void setTelephone(String telephone) { this.telephone = telephone;}
    
    public String getMotif() { return this.motif;}
    public void setMotif(String motif) { this.motif = motif;}
    
    public String getMessage() { return this.message;}
    public void setMessage(String message) { this.message = message;}
}