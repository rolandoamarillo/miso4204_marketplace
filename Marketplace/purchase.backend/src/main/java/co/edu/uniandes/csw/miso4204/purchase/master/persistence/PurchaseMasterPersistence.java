package co.edu.uniandes.csw.miso4204.purchase.master.persistence;

import co.edu.uniandes.csw.miso4204.creditcard.logic.dto.CreditCardDTO;
import co.edu.uniandes.csw.miso4204.payment.logic.dto.PaymentDTO;
import co.edu.uniandes.csw.miso4204.purchase.master.logic.dto.PurchaseMasterDTO;
import co.edu.uniandes.csw.miso4204.purchase.master.persistence.entity.PurchasepaymentEntity;
import co.edu.uniandes.csw.miso4204.purchase.master.persistence.entity.PurchasepurchaseItemEntity;
import co.edu.uniandes.csw.miso4204.purchase.persistence.PurchasePersistence;
import co.edu.uniandes.csw.miso4204.purchaseitem.logic.dto.PurchaseItemDTO;
import co.edu.uniandes.csw.miso4204.security.logic.dto.UserDTO;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import org.apache.shiro.SecurityUtils;

public class PurchaseMasterPersistence extends _PurchaseMasterPersistence {

    private EntityManagerFactory emf;

    public PurchaseMasterPersistence() {
        emf = Persistence.createEntityManagerFactory("PurchasePU");
    }

    public void getEntityManager() {
        UserDTO purchases = (UserDTO) SecurityUtils.getSubject().getPrincipal();
        String tenant = purchases.getTenantID();
        Map<String, Object> emProperties = new HashMap<String, Object>();
        emProperties.put("eclipselink.tenant-id", tenant);//Asigna un valor al multitenant
        entityManager = emf.createEntityManager(emProperties);
    }

    @Override
    public PurchaseMasterDTO getPurchase(Long purchaseId) {
        PurchaseMasterDTO purchaseMaster;
        try {
            getEntityManager();
            purchaseMaster = super.getPurchase(purchaseId);
        } catch (Exception e) {
            e.printStackTrace();
            purchaseMaster = null;
        } finally {
            if (entityManager.isOpen()) {
                entityManager.close();
            }
        }
        return purchaseMaster;
    }

    @Override
    public PurchasepurchaseItemEntity createPurchasepurchaseItemEntity(PurchasepurchaseItemEntity entity) {
        PurchasepurchaseItemEntity purchasePurchaseItem;
        try {
            getEntityManager();
            purchasePurchaseItem = super.createPurchasepurchaseItemEntity(entity);
        } catch (Exception e) {
            e.printStackTrace();
            purchasePurchaseItem = null;
        } finally {
            if (entityManager.isOpen()) {
                entityManager.close();
            }
        }
        return purchasePurchaseItem;
    }

    @Override
    public void deletePurchasepurchaseItemEntity(Long purchaseId, Long purchaseItemId) {
        try {
            getEntityManager();
            super.deletePurchasepurchaseItemEntity(purchaseId, purchaseItemId);
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
    public List<PurchaseItemDTO> getPurchasepurchaseItemEntityList(Long purchaseId) {
        List<PurchaseItemDTO> list;
        try {
            getEntityManager();
            list = super.getPurchasepurchaseItemEntityList(purchaseId);
        } catch (Exception e) {
            e.printStackTrace();
            list = new ArrayList<PurchaseItemDTO>();
        } finally {
            if (entityManager.isOpen()) {
                entityManager.close();
            }
        }
        return list;
    }

    @Override
    public PurchasepaymentEntity createPurchasepaymentEntity(PurchasepaymentEntity entity) {
        PurchasepaymentEntity purchasePayment;
        try {
            getEntityManager();
            purchasePayment = super.createPurchasepaymentEntity(entity);
        } catch (Exception e) {
            e.printStackTrace();
            purchasePayment = null;
        } finally {
            if (entityManager.isOpen()) {
                entityManager.close();
            }
        }
        return purchasePayment;
    }

    @Override
    public void deletePurchasepaymentEntity(Long purchaseId, Long paymentId) {
        try {
            getEntityManager();
            super.deletePurchasepaymentEntity(purchaseId, paymentId);
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
    public List<PaymentDTO> getPurchasepaymentEntityList(Long purchaseId) {
        List<PaymentDTO> list;
        try {
            getEntityManager();
            list = super.getPurchasepaymentEntityList(purchaseId);
        } catch (Exception e) {
            e.printStackTrace();
            list = new ArrayList<PaymentDTO>();
        } finally {
            if (entityManager.isOpen()) {
                entityManager.close();
            }
        }
        return list;
    }
}
