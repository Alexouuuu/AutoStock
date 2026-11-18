package com.autostock.backend.controller;

import com.autostock.backend.entity.Role;
import com.autostock.backend.service.RoleService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController 
@RequestMapping("/api/roles")
@CrossOrigin(origins = "http://localhost:5173")
public class RoleController {
    private final RoleService roleService;
    
    public RoleController(RoleService roleService) {
        this.roleService = roleService;
    }
    
    @GetMapping 
    public List<Role> getAllRoles() {
        return roleService.getAllRoles();
    }
    
    @GetMapping("/{id}")
    public Role getRoleById(@PathVariable Long id) {
        return roleService.getRoleById(id).orElse(null);
    }
    
    @PostMapping
    public Role addRole(@RequestBody Role role) {
        return roleService.saveRole(role);
    }
}
