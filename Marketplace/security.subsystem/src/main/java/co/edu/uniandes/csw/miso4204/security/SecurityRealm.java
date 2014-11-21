/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.miso4204.security;

import co.edu.uniandes.csw.miso4204.security.jwt.JwtToken;
import co.edu.uniandes.csw.miso4204.security.jwt.api.VerifyToken;
import co.edu.uniandes.csw.miso4204.security.logic.SecurityLogic;
import co.edu.uniandes.csw.miso4204.security.logic.dto.UserSessionDTO;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAccount;
import org.apache.shiro.realm.AuthenticatingRealm;
import org.apache.shiro.util.ByteSource;

/**
 *
 * @author estudiante
 */
public class SecurityRealm extends AuthenticatingRealm{
    
    public static final String REALM="Ejemplo";
    
    private SecurityLogic securityLogic;

    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
        SimpleAccount account=null;
        
        JwtToken authToken = (JwtToken) token;
        if (authToken.getToken() != null) { 
            //Descifrar token y establecer info de usuario
            UserSessionDTO user = decodeUser(authToken.getToken());
            if (validarToken(user)) {
                account = new SimpleAccount(user.getUserName(), user.getPassword(),ByteSource.Util.bytes(authToken.getToken()),REALM);       
            }
        }
        return account;
    }
    
    public UserSessionDTO decodeUser(String token){
        VerifyToken ver = new VerifyToken();
        UserSessionDTO user = ver.getDataUser(token);
        return user;
    }

    public boolean validarToken(UserSessionDTO user) {
        UserSessionDTO userRecord = securityLogic.getUserSession(user.getId());
        return (userRecord.getUserName().equals(user.getUserName()) && userRecord.getPassword().equals(user.getPassword()));
    }

    public SecurityLogic getSecurityLogic() {
        return securityLogic;
    }

    public void setSecurityLogic(SecurityLogic securityLogic) {
        this.securityLogic = securityLogic;
    }
    
    
}
