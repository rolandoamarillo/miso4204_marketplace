 
package co.edu.uniandes.csw.miso4204.buyer.master.persistence;

import co.edu.uniandes.csw.miso4204.buyer.persistence.BuyerPersistence;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class BuyerMasterPersistence extends _BuyerMasterPersistence{

    public BuyerMasterPersistence() {
		EntityManagerFactory emf = Persistence.createEntityManagerFactory("BuyerPU");
		entityManager = emf.createEntityManager();
		buyerPersistence = new BuyerPersistence();
    }
}