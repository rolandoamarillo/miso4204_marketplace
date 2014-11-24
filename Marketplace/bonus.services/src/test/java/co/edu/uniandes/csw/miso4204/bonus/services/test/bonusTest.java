///*
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */
//package co.edu.uniandes.csw.miso4204.bonus.services.test;
//
//import co.edu.uniandes.csw.miso4204.bonus.logic.dto.BonusDTO;
//import javax.servlet.ServletException;
//import javax.ws.rs.client.Client;
//import javax.ws.rs.client.ClientBuilder;
//import javax.ws.rs.client.Entity;
//import javax.ws.rs.core.MediaType;
//import org.glassfish.jersey.client.ClientConfig;
//import org.junit.After;
//import static org.junit.Assert.assertTrue;
//import org.junit.Before;
//import org.junit.Test;
//
///**
//*
//* @author estudiante
//*/
//public class bonusTest {
//   
//  UtilsTomcat embeddedServer;
//   
// @Before
//   // or @BeforeClass
//   public void startServer() throws ServletException {
//     embeddedServer = new UtilsTomcat(9090, "/myservice");
//     embeddedServer.start();
//
//   }
//
//   @After
//   // or @AfterClass
//   public void stopServer() {
//       embeddedServer.stop();
//   }
//
//   
//   @Test
//   public void test_send (){
//           boolean test1 = true;
//           assertTrue (test1);
//   }
//   
//   
//   @Test
//   public void test_getBonus(){
//      BonusDTO bonus = new BonusDTO();
//      bonus.setName("xxx");
//      bonus.setDescription("yyy");
//      bonus.setBuyerId(15L);
//      bonus.setId(999L);
//      
//      try {
//      
//      String token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJjYW1pbG9jbyIsInBhc3N3b3JkIjoiMTIzNDUiLCJlbWFpbCI6Imp6dSIsImZpcnN0TmFtZSI6ImNhIiwibGFzdE5hbWUiOiJ6dSIsImJpcnRoRGF0ZSI6IjIyLzExLzIwMTQiLCJnZW5kZXIiOiJoIiwibGV2ZWxBY2Nlc3MiOiIxIiwidGVuYW50SUQiOiJsb2NhbGhvc3QifQ.A-Jhv9p2JaUzLQw1Ga-5GqfdKRz0SL_BeMYPCrf8EY8";
//      ClientConfig config = new ClientConfig();
//      Client client = ClientBuilder.newClient(config);
//      
//      BonusDTO entity = client.target("http://localhost:8084/bonus.services/webresources/bonuss")
//              .request()
//              .header("X_REST_USER", token)
//              .post(Entity.entity(bonus,MediaType.APPLICATION_JSON),BonusDTO.class);
//      }
//      
//      
//      catch (Exception e){
//       System.out.println(e);
//      }
//
//    
//   }
//   
//   
//   
//}