package com.autostock.backend.service;

import com.autostock.backend.entity.Utilisateur;
import com.autostock.backend.entity.Role;
import com.autostock.backend.repository.RoleRepository;
import com.autostock.backend.repository.UtilisateurRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service 
public class UtilisateurService {
    private final UtilisateurRepository utilisateurRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    
    public UtilisateurService(UtilisateurRepository utilisateurRepository, RoleRepository roleRepository, PasswordEncoder passwordEncoder) {
        this.utilisateurRepository = utilisateurRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }
    
    public List<Utilisateur> getAllUtilisateurs() {
        return utilisateurRepository.findAll();
    }
    
    public Optional<Utilisateur> getUtilisateurById(Long id){
        return utilisateurRepository.findById(id);
    }
    
    public Utilisateur saveUtilisateur(Utilisateur utilisateur) {
        return utilisateurRepository.save(utilisateur);
    }
    
    public void deleteUtilisateur(Long id){
        utilisateurRepository.deleteById(id);
    }
    
    public Utilisateur inscrire(Utilisateur utilisateur) {
        if (utilisateurRepository.existsByEmail(utilisateur.getEmail())) {  //email pas déclaré ici , donc utilisateur.getEmail()
            throw new RuntimeException("Cet email est déjà utilisé.");
        }
        
        String motDePasse = utilisateur.getMotDePasse();
        String motDePasseHache = passwordEncoder.encode(motDePasse);
        utilisateur.setMotDePasse(motDePasseHache);
        
        Role roleUser = roleRepository.findByNom("ROLE_USER").orElseThrow(() -> new RuntimeException("Role introuvable"));  //cherche dans le repository Role si le role USER existe en base
        utilisateur.setRole(roleUser); //l'utilisateur reçoit son role
        
        return utilisateurRepository.save(utilisateur); //NE PAS OUBLIER LE RETURN QUAND ON SAVE
    }
    
    public Utilisateur connexion(String email, String motDePasseTape) {
        Utilisateur userTrouve = utilisateurRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("Utilisateur ou mot de passe incorrect"));  // toujours **new** RuntimeException !
        
        boolean correspond = passwordEncoder.matches(motDePasseTape, userTrouve.getMotDePasse());
        if (!correspond) {
            throw new RuntimeException("Email ou mot de passe incorrect.");
        }
        return userTrouve;
    }
}
