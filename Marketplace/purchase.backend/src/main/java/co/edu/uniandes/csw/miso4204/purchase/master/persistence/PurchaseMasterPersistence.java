package co.edu.uniandes.csw.miso4204.purchase.master.persistence;

import co.edu.uniandes.csw.miso4204.creditcard.logic.dto.CreditCardDTO;
import co.edu.uniandes.csw.miso4204.payment.logic.dto.PaymentDTO;
import co.edu.uniandes.csw.miso4204.purchase.logic.dto.PurchaseDTO;
import co.edu.uniandes.csw.miso4204.purchase.logic.dto.PurchasePageDTO;
import co.edu.uniandes.csw.miso4204.purchase.master.logic.dto.PurchaseMasterDTO;
import co.edu.uniandes.csw.miso4204.purchase.master.persistence.entity.PurchasepaymentEntity;
import co.edu.uniandes.csw.miso4204.purchase.master.persistence.entity.PurchasepurchaseItemEntity;
import co.edu.uniandes.csw.miso4204.purchase.persistence.converter.PurchaseConverter;
import co.edu.uniandes.csw.miso4204.purchaseitem.logic.dto.PurchaseItemDTO;
import co.edu.uniandes.csw.miso4204.security.logic.dto.UserDTO;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;
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
    public PurchaseMasterDTO getMasterPurchase(Long purchaseId) {
        PurchaseMasterDTO purchaseMaster;
        try {
            getEntityManager();
            purchaseMaster = super.getMasterPurchase(purchaseId);
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

    @Override
    public PurchaseDTO createPurchase(PurchaseDTO purchase) {
        PurchaseDTO result;
        try {
            getEntityManager();
            result = super.createPurchase(purchase);
        } catch (Exception e) {
            e.printStackTrace();
            result = null;
        } finally {
            if (entityManager.isOpen()) {
                entityManager.close();
            }
        }
        return result;
    }

    @Override
    @SuppressWarnings("unchecked")
    public List<PurchaseDTO> getPurchases() {
        List<PurchaseDTO> result;
        try {
            getEntityManager();
            result = super.getPurchases();
        } catch (Exception e) {
            e.printStackTrace();
            result = null;
        } finally {
            if (entityManager.isOpen()) {
                entityManager.close();
            }
        }
        return result;
    }

    @Override
    @SuppressWarnings("unchecked")
    public PurchasePageDTO getPurchases(Integer page, Integer maxRecords) {
        PurchasePageDTO result;
        try {
            getEntityManager();
            result = super.getPurchases(page, maxRecords);
        } catch (Exception e) {
            e.printStackTrace();
            result = null;
        } finally {
            if (entityManager.isOpen()) {
                entityManager.close();
            }
        }
        return result;
    }

    @Override
    public PurchaseDTO getPurchase(Long id) {
        PurchaseDTO result;
        try {
            getEntityManager();
            result = super.getPurchase(id);
        } catch (Exception e) {
            e.printStackTrace();
            result = null;
        } finally {
            if (entityManager.isOpen()) {
                entityManager.close();
            }
        }
        return result;
    }

    @Override
    public void deletePurchase(Long id) {
        try {
            getEntityManager();
            super.deletePurchase(id);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (entityManager.isOpen()) {
                entityManager.close();
            }
        }
    }

    @Override
    public void updatePurchase(PurchaseDTO detail) {
        try {
            getEntityManager();
            super.updatePurchase(detail);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (entityManager.isOpen()) {
                entityManager.close();
            }
        }
    }

    @SuppressWarnings("unchecked")
    public PurchasePageDTO getPurchasesBuyer(Integer page, Integer maxRecords, Long id) {
        PurchasePageDTO response;
        try {
            getEntityManager();
            entityManager.getTransaction().begin();
            Query count = entityManager.createQuery("select count(u) from PurchaseEntity u");
            Long regCount = 0L;
            regCount = Long.parseLong(count.getSingleResult().toString());
            Query q = entityManager.createQuery("select u from PurchaseEntity u where u.buyerId =" + id + "");
            if (page != null && maxRecords != null) {
                q.setFirstResult((page - 1) * maxRecords);
                q.setMaxResults(maxRecords);
            }
            response = new PurchasePageDTO();
            response.setTotalRecords(regCount);
            response.setRecords(PurchaseConverter.entity2PersistenceDTOList(q.getResultList()));
            entityManager.getTransaction().commit();
        } catch (Exception e) {
            e.printStackTrace();
            response = null;
        } finally {
            if (entityManager.isOpen()) {
                entityManager.close();
            }
        }
        return response;
    }

    @SuppressWarnings("unchecked")
    public PurchasePageDTO getPurchasesSearch(Integer page, Integer maxRecords, String ini_date, String end_date, Long id_purchase) {
        PurchasePageDTO response;
        try {
            getEntityManager();
            entityManager.getTransaction().begin();
            Query count = entityManager.createQuery("select count(u) from PurchaseEntity u");
            Long regCount = 0L;
            regCount = Long.parseLong(count.getSingleResult().toString());

            String qr = "select u from PurchaseEntity u where u.buyerId > 0 ";

            if (!ini_date.equals("") && !end_date.equals("")) {
                qr += " and u.purchaseDate >='" + ini_date + "' and u.purchaseDate <= '" + end_date + "'";
            }

            if (id_purchase > 0) {
                qr += " and u.Id = " + id_purchase + "";
            }

            Query q = entityManager.createQuery(qr);

            if (page != null && maxRecords != null) {
                q.setFirstResult((page - 1) * maxRecords);
                q.setMaxResults(maxRecords);
            }
            response = new PurchasePageDTO();
            response.setTotalRecords(regCount);
            response.setRecords(PurchaseConverter.entity2PersistenceDTOList(q.getResultList()));
            entityManager.getTransaction().commit();
        } catch (Exception e) {
            e.printStackTrace();
            response = null;
        } finally {
            if (entityManager.isOpen()) {
                entityManager.close();
            }
        }
        return response;
    }

}
