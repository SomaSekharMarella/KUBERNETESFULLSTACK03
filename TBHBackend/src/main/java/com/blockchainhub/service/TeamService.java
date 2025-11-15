package com.blockchainhub.service;

import com.blockchainhub.model.Team;
import com.blockchainhub.repository.TeamRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TeamService {

    private final TeamRepository teamRepository;

    public TeamService(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    public List<Team> getAllTeams() {
        return teamRepository.findAll();
    }

    public Team addTeam(Team team) {
        if (teamRepository.existsByRegisterNumber(team.getRegisterNumber())) {
            throw new RuntimeException("Register number already exists!");
        }
        return teamRepository.save(team);
    }
    
    public Team getTeamById(Long id) {
        return teamRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Team member not found"));
    }

    public Team updateTeam(Team team) {
        return teamRepository.save(team);
    }

    public void deleteTeam(Long id) {
        if (!teamRepository.existsById(id)) {
            throw new RuntimeException("Team member not found");
        }
        teamRepository.deleteById(id);
    }

    
}
