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
            }, this.cancel(), this);
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
            }, this.cancel(), this);
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
            var paymentMode = this.paymentModeComponent.listComponent.listController.model.attributes.data;
            for(var i = 0, l = paymentMode.length; i<l; i++){
                if(paymentMode[i].id === id){
                    return paymentMode[i];
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
        
        loadToolbar: function() {
            this.toolbarComponent.addMenu({
                name: 'actions',
                displayName: 'Actions',
                show: true
            });

            this.toolbarComponent.addButton({
                name: 'pay',
                icon: '',
                displayName: 'Pay',
                show: true
            }, this.pay, this);

            this.toolbarComponent.addButton({
                name: 'bonus',
                icon: '',
                displayName: 'Use Bonus',
                show: true
            }, this.useBonus, this);
            this.toolbarComponent.render();
            console.log(this.toolbarComponent.el);
        },
        
        pay: function(){
            
        },
        
        useBonus: function(){
            
        },
        
        cancel: function(){
            
        }
    });
    return App.Component.PurchaseIntegrator;
});

