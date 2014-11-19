/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.miso4204.security.jwt.api;

import co.edu.uniandes.csw.miso4204.security.logic.dto.UserSessionDTO;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

/**
 *
 * @author Jj.alarcon10
 */
public class VerifyToken {

    public UserSessionDTO getDataUser(String token) {

        try {
            String userToken = JsonWebToken.decode(token, "Ejemplo", true);
            Gson gson = new GsonBuilder().serializeNulls().create();
            UserSessionDTO res = gson.fromJson(userToken, UserSessionDTO.class);
            return res;
        } catch (Throwable t) {
            t.printStackTrace();
            return null;
        }
    }
    
    

}
