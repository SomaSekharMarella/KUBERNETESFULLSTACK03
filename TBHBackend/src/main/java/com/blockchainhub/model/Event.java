package com.blockchainhub.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "events")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String eventName;

    private String description;  // optional

    private String speakers;

    private LocalDate date;

    private int totalMembersAttended;

    private String photo; // optional (store image URL / filename if needed)

    // --- Getters and Setters ---
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getEventName() { return eventName; }
    public void setEventName(String eventName) { this.eventName = eventName; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getSpeakers() { return speakers; }
    public void setSpeakers(String speakers) { this.speakers = speakers; }

    public LocalDate getDate() { return date; }
    public void setDate(LocalDate date) { this.date = date; }

    public int getTotalMembersAttended() { return totalMembersAttended; }
    public void setTotalMembersAttended(int totalMembersAttended) { this.totalMembersAttended = totalMembersAttended; }

    public String getPhoto() { return photo; }
    public void setPhoto(String photo) { this.photo = photo; }
}
