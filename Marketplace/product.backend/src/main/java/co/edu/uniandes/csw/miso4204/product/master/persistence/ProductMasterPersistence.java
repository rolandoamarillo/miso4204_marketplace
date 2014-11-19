 
package co.edu.uniandes.csw.miso4204.product.master.persistence;

import co.edu.uniandes.csw.miso4204.product.persistence.ProductPersistence;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import co.edu.uniandes.csw.miso4204.product.master.logic.dto.ProductMasterDTO;
import java.util.List;

public class ProductMasterPersistence extends _ProductMasterPersistence{

    public ProductMasterPersistence() {
		EntityManagerFactory emf = Persistence.createEntityManagerFactory("ProductPU");
		entityManager = emf.createEntityManager();
		productPersistence = new ProductPersistence();
    }
    
    public List<ProductMasterDTO> getProducts(Long category, Long features, String searchText, Integer maxRecords, Integer firstRecord) {
        
        return null;
    }
}