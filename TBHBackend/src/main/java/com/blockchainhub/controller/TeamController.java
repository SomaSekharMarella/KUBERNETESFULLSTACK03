package com.blockchainhub.controller;

import com.blockchainhub.model.Team;
import com.blockchainhub.service.TeamService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/teams")
@CrossOrigin(origins = "http://localhost:5173") 
public class TeamController {

    private final TeamService teamService;

    public TeamController(TeamService teamService) {
        this.teamService = teamService;
    }

    @GetMapping
    public List<Team> getAllTeams() {
        return teamService.getAllTeams();
    }

    @PostMapping
    public Team addTeam(@RequestBody Team team) {
        return teamService.addTeam(team);
    }
    
    @PutMapping("/{id}")
    public Team updateTeam(@PathVariable Long id, @RequestBody Team teamDetails) {
        Team team = teamService.getTeamById(id);
        team.setName(teamDetails.getName());
        team.setRegisterNumber(teamDetails.getRegisterNumber());
        team.setRole(teamDetails.getRole());
        team.setBatch(teamDetails.getBatch());
        team.setPhoneNumber(teamDetails.getPhoneNumber());
        team.setTelegramId(teamDetails.getTelegramId());
        return teamService.updateTeam(team);
    }

    @DeleteMapping("/{id}")
    public String deleteTeam(@PathVariable Long id) {
        teamService.deleteTeam(id);
        return "Team member deleted successfully!";
    }

}
