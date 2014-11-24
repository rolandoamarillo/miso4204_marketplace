/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define(['component/listComponent', 'component/toolbarComponent' ], function(listCp, toolbarCP) {
    App.Component.Bill = App.Component.BasicComponent.extend({
        initialize: function(options) {
            this.componentId = App.Utils.randomInteger();
            this.name = "Purchase Bill";

            if(options.addressList){
                this.addressList = options.addressList;
            }
            
            if(options.creditCardList){
                this.creditCardList = options.creditCardList;
            }
            if(options.purchaseIntegrator){
                this.purchaseIntegrator = options.purchaseIntegrator;
            }
            
            var date = new Date();
            $('#purchaseDate').val(date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear());
            
            this.toolbar();
            this.productList();
            this.loadData();
        },
        
        loadData: function(){
            $('#sendName').val(this.addressList.attributes.contactName);
            $('#sendAddress').val(this.addressList.attributes.address);
            $('#sendCity').val(this.addressList.attributes.city);
            $('#sendCountry').val(this.addressList.attributes.country);
            
            $('#payMode').val(this.creditCardList.attributes.accountType);
            $('#payNumber').val(this.creditCardList.attributes.cardNumber);
            $('#branch').val(this.creditCardList.attributes.branch);
            $('#payPoints').val(this.creditCardList.attributes);
        },
        
        toolbar: function(){
            this.toolbarComponent = new toolbarCP({componentId: "toolbar", name: "Confirm and Pay"});
            this.toolbarComponent.initialize({componentId: "toolbar", name: "Confirm and Pay"});
            this.loadToolbar();            
        },
        
        
        loadToolbar: function() {
            this.toolbarComponent.addMenu({
                name: 'actions',
                displayName: 'Actions',
                show: true
            });

            this.purchaseIntegrator.loadButtonsByName([{
                name: 'pay',
                displayName: 'Pay',
                callback: this.purchaseIntegrator.pay,
                toolbar: this.toolbarComponent,
                that: this
            }]);
        
            this.purchaseIntegrator.loadButtonsByName([{
                name: 'cancel',
                displayName: 'Cancel',
                callback: this.purchaseIntegrator.cancel,
                toolbar: this.toolbarComponent,
                that: this
            }]);
        
            this.toolbarComponent.render();
            $('#toolbar').html(this.toolbarComponent.toolbarController.$el);            
        },
        
        productList: function(){
            this.listComponent = new listCp({componentId: "list", name: "Products"});
            this.listComponent.initialize({componentId: "list", name: "Products"});
            this.listComponent.addColumn('productName', 'Product Name');
            this.listComponent.addColumn('unitValue', 'Unit Value');
            this.listComponent.addColumn('amount', 'Amount');
            this.listComponent.addColumn('totalValue', 'Total Value', null);
            this.listComponent.render();
            $('#list').html(this.listComponent.listController.$el);
        },
        
        render: function(parent){
            $('#'+parent).append($('#bill').show());
        }
    });
    
    return App.Component.Bill;
});

