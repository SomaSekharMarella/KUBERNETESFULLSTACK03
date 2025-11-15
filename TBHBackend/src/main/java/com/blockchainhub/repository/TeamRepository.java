package com.blockchainhub.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.blockchainhub.model.Team;

public interface TeamRepository extends JpaRepository<Team, Long> {
    boolean existsByRegisterNumber(Long long1);
}