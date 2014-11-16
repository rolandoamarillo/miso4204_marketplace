/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define(['component/shoppingCartComponent'], function(shoppingCartCp) {
    App.Component.Bill = App.Component.BasicComponent.extend({
        initialize: function(options) {
            this.componentId = App.Utils.randomInteger();
            this.name = "Purchase Bill";

            if(options.addressList){
                this.addressList = options.addressList;
            }
            
            if(options.paymentList){
                this.paymentList = options.paymentList;
            }
            this.setupShoppingCart();
            this.loadData();
        },
        
        setupShoppingCart: function (){
            this.shoppingCartComponent = new shoppingCartCp();
            this.shoppingCartComponent.initialize();
            this.shoppingCartComponent.toolbarComponent.display(false);
        },
        
        loadData: function(){
            $('#sendName').val(this.addressList.attributes.contactName);
            $('#sendAddress').val(this.addressList.attributes.address);
            $('#sendCity').val(this.addressList.attributes.city);
            $('#sendCountry').val(this.addressList.attributes.country);
            
            $('#payMode').val(this.paymentList.attributes.name);
//            $('#payNumber').val(this.paymentList.attributes);
//            $('#payPoints').val(this.paymentList.attributes);
        },
        
        
        render: function(parent){
            this.productComponent.render('list');
            $('#'+parent).append($('#bill').show());
        }
    });
    
    return App.Component.Bill;
});

