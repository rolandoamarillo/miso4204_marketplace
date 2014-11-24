///*
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */
//package co.edu.uniandes.csw.reward.service.test;
//
//import co.edu.uniandes.csw.miso4204.reward.logic.dto.RewardDTO;
//import javax.servlet.ServletException;
//import javax.ws.rs.client.Client;
//import javax.ws.rs.client.ClientBuilder;
//import javax.ws.rs.client.Entity;
//import javax.ws.rs.core.MediaType;
//import org.glassfish.jersey.client.ClientConfig;
//import org.junit.After;
//import org.junit.AfterClass;
//import org.junit.Before;
//import org.junit.BeforeClass;
//import org.junit.Test;
//import static org.junit.Assert.*;
//
///**
// *
// * @author estudiante
// */
//public class RewardTest {
//    
//    UtilsTomcat embeddedServer;
//    
//    public RewardTest() {
//    }
//    
//    @BeforeClass
//    public static void setUpClass() {
//    }
//    
//    @AfterClass
//    public static void tearDownClass() {
//    }
//    
//     @Before
//   // or @BeforeClass
//   public void startServer() throws ServletException {
//     embeddedServer = new UtilsTomcat(9091, "/myservice");
//     embeddedServer.start();
//
//   }
//    
////    @Before
////    public void setUp() {
////    }
//    
//       @After
//   // or @AfterClass
//   public void stopServer() {
//       embeddedServer.stop();
//   }
//    
//    @After
//    public void tearDown() {
//    }
//
//    // TODO add test methods here.
//    // The methods must be annotated with annotation @Test. For example:
//    //
//    // @Test
//    // public void hello() {}
//    
//    @Test
//    public void getAllRewardTest(){
//        
//        RewardDTO reward = new RewardDTO();
//        reward.setName("xxx");
//        reward.setPoints(100);
//        reward.setValue(10000D);
//        reward.setBuyerId(1L);
//        reward.setId(9999L);
//        
//        try {
//        
//        String token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJjYW1pbG9jbyIsInBhc3N3b3JkIjoiMTIzNDUiLCJlbWFpbCI6Imp6dSIsImZpcnN0TmFtZSI6ImNhIiwibGFzdE5hbWUiOiJ6dSIsImJpcnRoRGF0ZSI6IjIyLzExLzIwMTQiLCJnZW5kZXIiOiJoIiwibGV2ZWxBY2Nlc3MiOiIxIiwidGVuYW50SUQiOiJsb2NhbGhvc3QifQ.A-Jhv9p2JaUzLQw1Ga-5GqfdKRz0SL_BeMYPCrf8EY8";
//        ClientConfig config = new ClientConfig();
//        Client client = ClientBuilder.newClient(config);
//        
//        RewardDTO entity = client.target("http://localhost:8084/reward.services/webresources/rewards")
//                .request()
//                .header("X_REST_USER", token)
//                .post(Entity.entity(reward,MediaType.APPLICATION_JSON),RewardDTO.class);        
//        }
//        catch (Exception e){
//         System.out.println(e);
//         assertTrue(false);
//        }
//
//        assertTrue(true);
//
//    }
//}
