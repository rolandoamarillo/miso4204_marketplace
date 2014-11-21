/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.miso4204.user.persistence;

import co.edu.uniandes.csw.miso4204.security.logic.dto.UserSessionDTO;
import java.util.HashMap;
import java.util.Map;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;

/**
 *
 * @author estudiante
 */
public class TenantSetup {
    private final EntityManager em;
    
    public TenantSetup(EntityManager em){
        this.em = em;
    }
    public void setTenant(EntityManager em){
      UserSessionDTO userS = (UserSessionDTO) SecurityUtils.getSubject().getPrincipal();
      String tenant = userS.getTenantID();
      Map<String, Object> emProperties = new HashMap<String, Object>();
      emProperties.put("eclipselink.tenant-id", tenant);//Asigna un valor al multitenant
      ((org.eclipse.persistence.internal.jpa.EntityManagerImpl)em.getDelegate()).setProperties(emProperties);      
    }
    
}
