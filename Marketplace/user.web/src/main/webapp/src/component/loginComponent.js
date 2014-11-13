/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



$(document).ready(function(){
   $("#btn-login").click(function(evento){
	var username = document.getElementById("login-username").value;
	var pass = document.getElementById("login-password").value;
	var remeberMe = document.getElementById("login-remember").value;
	var json = {userName: username, password: pass, remeberMe: remeberMe};
    $.ajax({
                type: "POST",
                url: "http://localhost:8084/user.services/webresources/auth/login",
//                crossDomain: true,
                dataType: 'json',
				data : JSON.stringify(json),
                contentType: "application/json"
				}).done(_.bind(function(data) {
                console.log(data);
				alert('USUARIO AUTENTICADO');
                
               
           }, this)).error(_.bind(function(data) {
               console.log("data");
			   alert('USUARIO NO AUTENTICADO : '+ username);
//			   window.location.href = '../Sport_web/error.html';
               
           }, this));
       });  
     
   
});






//define(['component/_CRUDComponent', 'model/loginModel', 'controller/loginController'], function(a,b,c) {
//    App.Component.LoginComponent = App.Component.BasicComponent.extend({
//        initialize: function(options) {
//            var self = this;
//			this.loginTemplate = _.template($('#login-form').html());
//			this.render();
//		},
//		render: function() {
//		var self = this;
//		this.$el.slideUp("fast", function() {
//			self.$el.html(self.loginTemplate({login: b}));
//			self.$el.slideDown("fast");
//		});
//	}
//    
//		});	
//		return App.Component.LoginComponent;
//});