// 2023-01-26 홍지혜
package com.project.irunyou.data.repository;

import org.springframework.boot.json.JsonParser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.irunyou.data.entity.RunScheduleLikeEntity;

@Repository
public interface RunScheduleLikeRepository extends JpaRepository<RunScheduleLikeEntity, Integer>{

}
