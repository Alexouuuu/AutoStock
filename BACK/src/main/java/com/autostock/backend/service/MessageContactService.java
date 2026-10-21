package com.autostock.backend.service;

import com.autostock.backend.entity.MessageContact;
import com.autostock.backend.repository.MessageContactRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class MessageContactService {
    
    private final MessageContactRepository messageContactRepository;
    
    public MessageContactService(MessageContactRepository messageContactRepository) {
        this.messageContactRepository = messageContactRepository;
    }
    
    public List<MessageContact> getAllMessageContact() {
        return messageContactRepository.findAll();
    }
    
    public Optional<MessageContact> getMessageContactById(Long id) {
        return messageContactRepository.findById(id);
    }
    
    public MessageContact saveMessageContact(MessageContact messageContact) {
        return messageContactRepository.save(messageContact);
    }
}