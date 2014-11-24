 
package co.edu.uniandes.csw.miso4204.wishlist.master.persistence;

import co.edu.uniandes.csw.miso4204.wishlist.master.logic.dto.WishListMasterDTO;
import co.edu.uniandes.csw.miso4204.wishlist.master.persistence.entity.WishListwhishListItemEntity;
import co.edu.uniandes.csw.miso4204.wishlist.persistence.WishListPersistence;
import co.edu.uniandes.csw.miso4204.wishlistitem.logic.dto.WishListItemDTO;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import org.apache.shiro.SecurityUtils;

public class WishListMasterPersistence extends _WishListMasterPersistence{

    private EntityManagerFactory emf;

    public WishListMasterPersistence() {
        emf = Persistence.createEntityManagerFactory("WishListPU");
    }

    public void getEntityManager() {
        System.out.println("entre");
        co.edu.uniandes.csw.miso4204.security.logic.dto.UserDTO addressS = (co.edu.uniandes.csw.miso4204.security.logic.dto.UserDTO) SecurityUtils.getSubject().getPrincipal();
        System.out.println("entre1");
        String tenant = addressS.getTenantID();
        System.out.println("entre2");
        Map<String, Object> emProperties = new HashMap<String, Object>();
        System.out.println("entre3");
        emProperties.put("eclipselink.tenant-id", tenant);//Asigna un valor al multitenant
        System.out.println("entre4");
        entityManager = emf.createEntityManager(emProperties);
        System.out.println("entre5");
    }
    
    @Override
    public WishListMasterDTO getWishList(Long id) {
        WishListMasterDTO address;
        try {
            getEntityManager();
            address = super.getWishList(id);
        } catch (Exception e) {
            address = null;
        } finally {
            if (entityManager.isOpen()) {
                entityManager.close();
            }
        }
        return address;
    }
    
    @Override
    public WishListwhishListItemEntity createWishListwhishListItemEntity(WishListwhishListItemEntity address) {
        WishListwhishListItemEntity address2;
        try {
            getEntityManager();
            address2 = super.createWishListwhishListItemEntity(address);
        } catch (Exception e) {
            address2 = null;
        } finally {
            if (entityManager.isOpen()) {
                entityManager.close();
            }
        }
        return address2;
    }
    
    @Override
    public void deleteWishListwhishListItemEntity(Long id,Long id2) {
        try {
            getEntityManager();
            super.deleteWishListwhishListItemEntity(id,id2);
        } catch (Exception e) {
        } finally {
            if (entityManager.isOpen()) {
                entityManager.close();
            }
        }
    }
    
    @Override
    @SuppressWarnings("unchecked")
    public List<WishListItemDTO> getWishListwhishListItemEntityList(Long id) {
        List<WishListItemDTO> list;
        try {
            getEntityManager();
            list = super.getWishListwhishListItemEntityList(id);
        } catch (Exception e) {
            list = new ArrayList<WishListItemDTO>();
        } finally {
            if (entityManager.isOpen()) {
                entityManager.close();
            }
        }
        return list;
    }
}