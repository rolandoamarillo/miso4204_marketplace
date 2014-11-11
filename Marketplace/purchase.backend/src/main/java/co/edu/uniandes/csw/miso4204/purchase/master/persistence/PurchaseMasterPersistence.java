 
package co.edu.uniandes.csw.miso4204.purchase.master.persistence;

import co.edu.uniandes.csw.miso4204.purchase.persistence.PurchasePersistence;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class PurchaseMasterPersistence extends _PurchaseMasterPersistence{

    public PurchaseMasterPersistence() {
		EntityManagerFactory emf = Persistence.createEntityManagerFactory("PurchasePU");
		entityManager = emf.createEntityManager();
		purchasePersistence = new PurchasePersistence();
    }
}