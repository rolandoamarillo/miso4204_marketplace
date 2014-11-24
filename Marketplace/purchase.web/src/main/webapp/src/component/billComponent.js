/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define(['component/shoppingCartComponent', 'component/toolbarComponent'], function (shoppingCartCp, toolbarCP) {
    App.Component.Bill = App.Component.BasicComponent.extend({
        initialize: function (options) {
            this.componentId = App.Utils.randomInteger();
            this.name = "Purchase Bill";

            if (options.addressList) {
                this.addressList = options.addressList;
            }

            if (options.creditCardList) {
                this.creditCardList = options.creditCardList;
            }
            if (options.purchaseIntegrator) {
                this.purchaseIntegrator = options.purchaseIntegrator;
            }

            this.toolbar();
            this.purchaseDate();
            this.setupShoppingCart();
            this.loadData();
        },
        setupShoppingCart: function () {
            this.shoppingCartComponent = new shoppingCartCp();
            this.shoppingCartComponent.initialize();
            this.shoppingCartComponent.toolbarComponent.display(false);
        },
        loadData: function () {
            $('#sendName').val(this.addressList.attributes.contactName);
            $('#sendAddress').val(this.addressList.attributes.address);
            $('#sendCity').val(this.addressList.attributes.city);
            $('#sendCountry').val(this.addressList.attributes.country);

            $('#payMode').val(this.creditCardList.attributes.name);
//            $('#payNumber').val(this.creditCardList.attributes);
//            $('#payPoints').val(this.creditCardList.attributes);
        },
        render: function (parent) {
            this.shoppingCartComponent.render('list');
            $('#' + parent).append($('#bill').show());
        },
        toolbar: function () {
            this.toolbarComponent = new toolbarCP({componentId: "toolbar", name: "Confirm and Pay"});
            this.toolbarComponent.initialize({componentId: "toolbar", name: "Confirm and Pay"});
            this.loadToolbar();
            $('#toolbar').html(this.toolbarComponent.toolbarController.$el);
        },
        loadToolbar: function () {
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
            }, this.purchaseIntegrator.pay, this);
            this.toolbarComponent.render();
            console.log(this.toolbarComponent.el);
        },
        
        purchaseDate: function () {
            var f = new Date();
            ('#actualDate').val(f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear());
        }
    });

    return App.Component.Bill;
});

