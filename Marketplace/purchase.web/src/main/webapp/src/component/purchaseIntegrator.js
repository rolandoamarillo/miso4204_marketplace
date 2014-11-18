/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define(['component/addressComponent', 'component/creditCardComponent', 'component/billComponent'], function(adressCp, creditCardCp, billCp) {
    App.Component.PurchaseIntegrator = App.Component.BasicComponent.extend({
        initialize: function() {
            this.componentId = App.Utils.randomInteger();
            this.name = "Purchase";

            this.setupAdressComponent();
        },
                      
        setupAdressComponent: function() {
            this.addressComponent = new adressCp();
            this.addressComponent.initialize();
            this.addressComponent.clearGlobalActions();
            this.addressComponent.clearRecordActions();
            this.addressComponent.addGlobalAction({
                name: 'cancelar',
                icon: '',
                displayName: 'Cancelar',
                show: true
            }, this.cancel, this);
            this.addressComponent.addRecordAction({
                name: 'seleccionar',
                icon: '',
                displayName: 'Seleccionar',
                show: true
            },
            _.bind(function(evt){ this.selectAddress(evt); }, this), this);
            this.addressComponent.render('main');
            $('.breadcrumb').html('');
            $('.breadcrumb').append('<li class="active">Shopping Address</li>');            
        },
        
        selectAddress: function(obj) {
            var selectedId = obj.id;
            this.selectedAddress = this.searchAddressById(selectedId);            
            this.setupCreditCardComponent();            
        },
        
        searchAddressById: function(id){
            var addresses = this.addressComponent.listComponent.listController.model.attributes.data;
            for(var i = 0, l = addresses.length; i<l; i++){
                if(addresses[i].id === id){
                    return addresses[i];
                }
            }
        },
        
        setupCreditCardComponent: function() {
            this.creditCardComponent = new creditCardCp();
            this.creditCardComponent.initialize();            
            this.creditCardComponent.clearGlobalActions();
            this.creditCardComponent.clearRecordActions();            
            this.creditCardComponent.addGlobalAction({
                name: 'cancelar',
                icon: '',
                displayName: 'Cancelar',
                show: true
            }, this.cancel, this);
            this.creditCardComponent.addRecordAction({
                name: 'seleccionar',
                icon: '',
                displayName: 'Seleccionar',
                show: true
            },
            _.bind(function(evt){ this.selectCreditCard(evt); }, this), this);
            $('#main').html('');
            this.creditCardComponent.render('main');
            $('.breadcrumb').html('');
            $('.breadcrumb').append('<li>Shopping Address</li>');
            $('.breadcrumb').append('<li class="active">Credit Card</li>');
        },
        
        selectCreditCard: function(obj) {
            var selectedId = obj.id;
            this.selectedPayment = this.searchCreditCardById(selectedId);  
            this.initBillTemplate();
        },
        
        searchCreditCardById: function(id){
            var creditCard = this.creditCardComponent.listComponent.listController.model.attributes.data;
            for(var i = 0, l = creditCard.length; i<l; i++){
                if(creditCard[i].id === id){
                    return creditCard[i];
                }
            }
        },
                
        initBillTemplate: function(){
                        
            $('#main').html('');
            this.billComponent = new billCp();
            this.billComponent.initialize({addressList:this.selectedAddress, paymentList:this.selectedPayment});
            $('.breadcrumb').html('');
            this.billComponent.render('main');
            $('.breadcrumb').append('<li>Shopping Address</li>');
            $('.breadcrumb').append('<li>Credit Card</li>');
            $('.breadcrumb').append('<li class="active">Confirm and Pay</li>');
        },
        
        pay: function(){
            
        },
        
        useBonus: function(){
            
        },
        
        cancel: function(){
            document.location.href="http://localhost:8080/purchase.web";
        }
    });
    return App.Component.PurchaseIntegrator;
});

