/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.miso4204.security.logic;

import co.edu.uniandes.csw.miso4204.security.logic.dto.UserSessionDTO;
import co.edu.uniandes.csw.miso4204.security.persistence.SecurityPersistence;
import java.util.List;

/**
 *
 * @author estudiante
 */
public abstract class _SecurityLogic {

    protected SecurityPersistence persistance;

    public UserSessionDTO createUserSession(UserSessionDTO user) {
        return persistance.createUserSession(user);
    }

    public List<UserSessionDTO> getUserSessions() {
        return persistance.getUserSessions();
    }

    public UserSessionDTO getUserSession(Long id) {
        return persistance.getUserSession(id);
    }
    
    public UserSessionDTO getUserSession(String userName) {
        return persistance.getUserSession(userName);
    }

    public void deleteUserSession(Long id) {
        persistance.deleteUserSession(id);
    }

    public void updateUserSession(UserSessionDTO user) {
        persistance.updateUserSession(user);
    }

}
