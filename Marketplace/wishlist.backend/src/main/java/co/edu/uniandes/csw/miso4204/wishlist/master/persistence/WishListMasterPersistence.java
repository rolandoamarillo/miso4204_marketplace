 
package co.edu.uniandes.csw.miso4204.wishlist.master.persistence;

import co.edu.uniandes.csw.miso4204.wishlist.persistence.WishListPersistence;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class WishListMasterPersistence extends _WishListMasterPersistence{

    public WishListMasterPersistence() {
		EntityManagerFactory emf = Persistence.createEntityManagerFactory("WishListPU");
		entityManager = emf.createEntityManager();
		wishlistPersistence = new WishListPersistence();
    }
}