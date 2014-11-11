package co.edu.uniandes.csw.miso4204.service.config;

import javax.ws.rs.ApplicationPath;
import org.glassfish.jersey.server.ResourceConfig;

@ApplicationPath("/webresources")
public class WebApp extends ResourceConfig {
	public WebApp(){
        packages("co.edu.uniandes.csw.miso4204.paymentmode.service");
    }
}