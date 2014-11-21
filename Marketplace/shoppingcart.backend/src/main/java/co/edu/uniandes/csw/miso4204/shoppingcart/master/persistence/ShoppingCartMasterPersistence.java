 
package co.edu.uniandes.csw.miso4204.shoppingcart.master.persistence;

import co.edu.uniandes.csw.miso4204.shoppingcart.persistence.ShoppingCartPersistence;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class ShoppingCartMasterPersistence extends _ShoppingCartMasterPersistence{

    public ShoppingCartMasterPersistence() {
		EntityManagerFactory emf = Persistence.createEntityManagerFactory("ShoppingCartPU");
		entityManager = emf.createEntityManager();
		shoppingcartPersistence = new ShoppingCartPersistence();
    }
}