/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.miso4204.security.persistence;


import co.edu.uniandes.csw.miso4204.security.logic.dto.UserDTO;
import co.edu.uniandes.csw.miso4204.security.persistence.converter.UserConverter;
import co.edu.uniandes.csw.miso4204.security.persistence.entity.UserEntity;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.Query;

/**
 *
 * @author estudiante
 */
public abstract class _SecurityPersistence {

    protected EntityManager entityManager;

    public UserDTO createUserSession(UserDTO user) {
        UserEntity entity = UserConverter.persistenceDTO2Entity(user);
        entityManager.getTransaction().begin();
        entityManager.persist(entity);
        entityManager.getTransaction().commit();
        return UserConverter.entity2PersistenceDTO(entity);
    }

    @SuppressWarnings("unchecked")
    public List<UserDTO> getUserSessions() {
        entityManager.getTransaction().begin();
        Query q = entityManager.createQuery("select u from UserEntity u");
        List<UserDTO> result = UserConverter.entity2PersistenceDTOList(q.getResultList());
        entityManager.getTransaction().commit();
        return result;
    }

    public UserDTO getUserSession(Long id) {
        entityManager.getTransaction().begin();
        UserDTO result = UserConverter.entity2PersistenceDTO(entityManager.find(UserEntity.class, id));
        entityManager.getTransaction().commit();
        return result;
    }

    public UserDTO getUserSession(String userName) {
        UserDTO result = null;
        try {
            entityManager.getTransaction().begin();
            Query query = entityManager.createQuery("SELECT u FROM UserEntity u WHERE u.username = '"+userName+"'");
            List<UserEntity> records = query.getResultList();
            if (!records.isEmpty()) {
                result = UserConverter.entity2PersistenceDTO(records.get(0));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        finally{
            
        }
        return result;
    }

    public void deleteUserSession(Long id) {
        entityManager.getTransaction().begin();
        UserEntity entity = entityManager.find(UserEntity.class, id);
        entityManager.remove(entity);
        entityManager.getTransaction().commit();
    }

    public void updateUserSession(UserDTO detail) {
        entityManager.getTransaction().begin();
        UserEntity entity = entityManager.merge(UserConverter.persistenceDTO2Entity(detail));
        UserConverter.entity2PersistenceDTO(entity);
        entityManager.getTransaction().commit();
    }

}
