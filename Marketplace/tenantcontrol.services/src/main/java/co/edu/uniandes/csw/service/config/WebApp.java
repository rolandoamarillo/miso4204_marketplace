package co.edu.uniandes.csw.service.config;

import javax.ws.rs.ApplicationPath;
import org.glassfish.jersey.server.ResourceConfig;

@ApplicationPath("/webresources")
public class WebApp extends ResourceConfig {
	public WebApp(){
        packages("co.edu.uniandes.csw.tenantcontrol.service");
    }
}