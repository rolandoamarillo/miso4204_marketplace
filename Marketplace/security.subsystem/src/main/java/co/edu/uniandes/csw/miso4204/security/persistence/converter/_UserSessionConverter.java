/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.miso4204.security.persistence.converter;

import co.edu.uniandes.csw.miso4204.security.logic.dto.UserSessionDTO;
import co.edu.uniandes.csw.miso4204.security.persistence.entity.UserSessionEntity;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author estudiante
 */
public abstract class _UserSessionConverter {

    public static UserSessionDTO entity2PersistenceDTO(UserSessionEntity entity) {
        if (entity != null) {
            UserSessionDTO dto = new UserSessionDTO();
            dto.setId(entity.getId());
            dto.setUserName(entity.getUserName());
            dto.setPassword(entity.getPassword());
            dto.setLevelAccess(entity.getLevelAccess());
            dto.setTenantID(entity.getTenantID());
            return dto;
        } else {
            return null;
        }
    }

    public static UserSessionEntity persistenceDTO2Entity(UserSessionDTO dto) {
        if (dto != null) {
            UserSessionEntity entity = new UserSessionEntity();
            entity.setId(dto.getId());
            entity.setUserName(dto.getUserName());
            entity.setPassword(dto.getPassword());
            entity.setLevelAccess(dto.getLevelAccess());
            entity.setTenantID(dto.getTenantID());
            return entity;
        } else {
            return null;
        }
    }

    public static List<UserSessionDTO> entity2PersistenceDTOList(List<UserSessionEntity> entities) {
        List<UserSessionDTO> dtos = new ArrayList<UserSessionDTO>();
        for (UserSessionEntity entity : entities) {
            dtos.add(entity2PersistenceDTO(entity));
        }
        return dtos;
    }

    public static List<UserSessionEntity> persistenceDTO2EntityList(List<UserSessionDTO> dtos) {
        List<UserSessionEntity> entities = new ArrayList<UserSessionEntity>();
        for (UserSessionDTO dto : dtos) {
            entities.add(persistenceDTO2Entity(dto));
        }
        return entities;
    }

}
