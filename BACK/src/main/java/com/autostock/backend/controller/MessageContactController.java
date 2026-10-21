package com.autostock.backend.controller;

import com.autostock.backend.entity.MessageContact;
import com.autostock.backend.service.MessageContactService;
import org.springframework.web.bind.annotation.*;
import java.util.List; 

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:5173")
public class MessageContactController {
    private final MessageContactService messageContactService;
    
    public MessageContactController(MessageContactService messageContactService) {
        this.messageContactService = messageContactService;
    }
    
    @GetMapping
    public List<MessageContact> getAllMessageContact() {
        return messageContactService.getAllMessageContact();
    }
    
    @GetMapping("/{id}")
    public MessageContact getMessageContactById(@PathVariable Long id) {
        return messageContactService.getMessageContactById(id).orElse(null);
    }
    
    @PostMapping
    public MessageContact saveMessageContact(@RequestBody MessageContact messageContact) {
        return messageContactService.saveMessageContact(messageContact);
    }
}