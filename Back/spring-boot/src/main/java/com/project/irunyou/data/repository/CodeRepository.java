package com.project.irunyou.data.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.irunyou.data.entity.CodeEntity;

@Repository
public interface CodeRepository extends JpaRepository<CodeEntity, String>{

}
