package com.blockchainhub.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "teams")
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // primary key

    @NotBlank
    private String name;

    @NotNull
    @Column(unique = true)
    private Long registerNumber;


    private String role;
    private String batch;
    private String phoneNumber;
    private String telegramId;

    // --- Getters & Setters ---
    public Long getId() 
    { 
    	return id; 
    }
    public void setId(Long id) 
    { 
    	this.id = id; 
    }

    public String getName() 
    { 
    	return name; 
    }
    public void setName(String name) 
    { 
    	this.name = name; 
    }

    public Long getRegisterNumber() 
    {
    	return registerNumber; 
    }
    public void setRegisterNumber(Long registerNumber) 
    {
    	this.registerNumber = registerNumber; 
    }

    public String getRole() 
    {
    	return role; 
    }
    public void setRole(String role) 
    {
    	this.role = role; 
    }

    public String getBatch() 
    {
    	return batch; 
    }
    public void setBatch(String batch) 
    {
    	this.batch = batch;
    }

    public String getPhoneNumber() 
    {
    	return phoneNumber; 
    }
    public void setPhoneNumber(String phoneNumber)
    {
    	this.phoneNumber = phoneNumber;
    }

    public String getTelegramId() 
    {
    	return telegramId; 
    }
    public void setTelegramId(String telegramId) 
    {
    	this.telegramId = telegramId; 
    }
}