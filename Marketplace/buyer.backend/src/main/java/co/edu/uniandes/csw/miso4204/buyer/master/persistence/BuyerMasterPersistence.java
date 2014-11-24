 
package co.edu.uniandes.csw.miso4204.buyer.master.persistence;

import co.edu.uniandes.csw.miso4204.address.logic.dto.AddressDTO;
import co.edu.uniandes.csw.miso4204.buyer.master.logic.dto.BuyerMasterDTO;
import co.edu.uniandes.csw.miso4204.buyer.master.persistence.entity.BuyeraddressEntity;
import co.edu.uniandes.csw.miso4204.buyer.master.persistence.entity.BuyercreditCardEntity;
import co.edu.uniandes.csw.miso4204.creditcard.logic.dto.CreditCardDTO;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import org.apache.shiro.SecurityUtils;

public class BuyerMasterPersistence extends _BuyerMasterPersistence{

    private EntityManagerFactory emf;
    
    public BuyerMasterPersistence() {
		emf = Persistence.createEntityManagerFactory("BuyerMasterPU");		
    }
    
    public void getEntityManager() {
        co.edu.uniandes.csw.miso4204.security.logic.dto.UserDTO buyerS = (co.edu.uniandes.csw.miso4204.security.logic.dto.UserDTO) SecurityUtils.getSubject().getPrincipal();
        String tenant = buyerS.getTenantID();
        Map<String, Object> emProperties = new HashMap<String, Object>();
        emProperties.put("eclipselink.tenant-id", tenant);//Asigna un valor al multitenant
        entityManager = emf.createEntityManager(emProperties);
    }
    
    
   @Override
    public BuyerMasterDTO getBuyer(Long buyerId) {
        BuyerMasterDTO buyerMaster;
        try {
            getEntityManager();
            buyerMaster = super.getBuyer(buyerId);
        } catch (Exception e) {
            e.printStackTrace();
            buyerMaster = null;
        } finally {
            if (entityManager.isOpen()) {
                entityManager.close();
            }
        }
        return buyerMaster;
    }
    
    @Override
     public BuyercreditCardEntity createBuyercreditCardEntity(BuyercreditCardEntity entity) {
         BuyercreditCardEntity buyercreditCard;
        try {
            getEntityManager();
            buyercreditCard = super.createBuyercreditCardEntity(entity);
        } catch (Exception e) {
            e.printStackTrace();
            buyercreditCard = null;
        } finally {
            if (entityManager.isOpen()) {
                entityManager.close();
            }
        }
        return buyercreditCard;
    }
     
     @Override
     public void deleteBuyercreditCardEntity(Long buyerId, Long creditCardId) {
        try {
            getEntityManager();
            super.deleteBuyercreditCardEntity(buyerId,creditCardId);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (entityManager.isOpen()) {
                entityManager.close();
            }
        }
     }
     
    @Override
    @SuppressWarnings("unchecked")
    public List<CreditCardDTO> getBuyercreditCardEntityList(Long buyerId) {
        List<CreditCardDTO> list;
        try {
            getEntityManager();
            list = super.getBuyercreditCardEntityList(buyerId);
        } catch (Exception e) {
            e.printStackTrace();
            list = new ArrayList<CreditCardDTO>();
        } finally {
            if (entityManager.isOpen()) {
                entityManager.close();
            }
        }
        return list;
    }
    
    
    @Override
    public BuyeraddressEntity createBuyeraddressEntity(BuyeraddressEntity entity) {
        BuyeraddressEntity buyeraddress;
        try {
            getEntityManager();
            buyeraddress = super.createBuyeraddressEntity(entity);
        } catch (Exception e) {
            e.printStackTrace();
            buyeraddress = null;
        } finally {
            if (entityManager.isOpen()) {
                entityManager.close();
            }
        }
        return buyeraddress;
    }
    
    @Override
    public void deleteBuyeraddressEntity(Long buyerId, Long addressId) {
	try {
            getEntityManager();
            super.deleteBuyeraddressEntity(buyerId,addressId);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (entityManager.isOpen()) {
                entityManager.close();
            }
        }
    }
    
    @Override
    @SuppressWarnings("unchecked")
    public List<AddressDTO> getBuyeraddressEntityList(Long buyerId) {
	List<AddressDTO> list;
        try {
            getEntityManager();
            list = super.getBuyeraddressEntityList(buyerId);
        } catch (Exception e) {
            e.printStackTrace();
            list = new ArrayList<AddressDTO>();
        } finally {
            if (entityManager.isOpen()) {
                entityManager.close();
            }
        }
        return list;
    }
     
     
    
    
   
}