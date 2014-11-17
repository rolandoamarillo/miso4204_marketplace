/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.miso4204.security.persistence;

import co.edu.uniandes.csw.miso4204.security.logic.dto.UserSessionDTO;
import co.edu.uniandes.csw.miso4204.security.persistence.converter.UserSessionConverter;
import co.edu.uniandes.csw.miso4204.security.persistence.entity.UserSessionEntity;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.Query;

/**
 *
 * @author estudiante
 */
public abstract class _SecurityPersistence {

    protected EntityManager entityManager;

    public UserSessionDTO createUserSession(UserSessionDTO user) {
        UserSessionEntity entity = UserSessionConverter.persistenceDTO2Entity(user);
        entityManager.getTransaction().begin();
        entityManager.persist(entity);
        entityManager.getTransaction().commit();
        return UserSessionConverter.entity2PersistenceDTO(entity);
    }

    @SuppressWarnings("unchecked")
    public List<UserSessionDTO> getUserSessions() {
        entityManager.getTransaction().begin();
        Query q = entityManager.createQuery("select u from UserSessionEntity u");
        List<UserSessionDTO> result = UserSessionConverter.entity2PersistenceDTOList(q.getResultList());
        entityManager.getTransaction().commit();
        return result;
    }

    public UserSessionDTO getUserSession(Long id) {
        entityManager.getTransaction().begin();
        UserSessionDTO result = UserSessionConverter.entity2PersistenceDTO(entityManager.find(UserSessionEntity.class, id));
        entityManager.getTransaction().commit();
        return result;
    }

    public UserSessionDTO getUserSession(String userName) {
        UserSessionDTO result = null;
        try {
            entityManager.getTransaction().begin();
            Query query = entityManager.createQuery("SELECT u FROM UserSessionEntity u WHERE u.userName = '"+userName+"'");
            List<UserSessionEntity> records = query.getResultList();
            if (!records.isEmpty()) {
                result = UserSessionConverter.entity2PersistenceDTO(records.get(0));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        finally{
            entityManager.getTransaction().commit();
        }
        return result;
    }

    public void deleteUserSession(Long id) {
        entityManager.getTransaction().begin();
        UserSessionEntity entity = entityManager.find(UserSessionEntity.class, id);
        entityManager.remove(entity);
        entityManager.getTransaction().commit();
    }

    public void updateUserSession(UserSessionDTO detail) {
        entityManager.getTransaction().begin();
        UserSessionEntity entity = entityManager.merge(UserSessionConverter.persistenceDTO2Entity(detail));
        UserSessionConverter.entity2PersistenceDTO(entity);
        entityManager.getTransaction().commit();
    }

}
