define(['component/wishListMasterComponent', 'component/shoppingCartItemComponent'], 
function (wishListMasterCp, shoppingCartCp) 
{
    App.Component.wishListIntegrator = App.Component.BasicComponent.extend(
    {
        initialize: function () 
        {
            this.componentId = App.Utils.randomInteger();
            this.name = "WishListIntegrator";
            this.setupShoppingCartComponent();
            this.setupWishListMasterComponent();
        },
        render: function (domElementId) {
            if (domElementId) {
                var rootElement = $("#" + domElementId);
                rootElement.append("<div id='main1' ></div>");
                //rootElement.append("<div id='cart' class='col-md-4'></div>");
                $("#cart").append("<div id='master'></div>");
                //$("#cart").append("<div id='items'></div>");
                this.wishListMasterComponent.renderMaster('master');
                this.wishListMasterComponent.masterComponent.create();
                this.wishListMasterComponent.masterComponent.listComponent.display(false);
                //this.wishListMasterComponent.renderChild('item', 'items');
                //this.wishListMasterComponent.whishListItemComponent.render('cart');
                //console.log(Object.getOwnPropertyNames(this.wishListMasterComponent.whishListItemComponent));
                this.wishListMasterComponent.whishListItemComponent.toolbarComponent.display(false);
                //this.wishListMasterComponent.whishListItemComponent.listComponent.render();
                this.shoppingCartItemComponent.render('main1');
                
                //this.shoppingCartItemComponent.render("main");
            }
            
            this.shoppingCartItemComponent.renderRecords();
            //this.wishListMasterComponent.renderChild('item');
        },
        viewWishList: function (domElementId) {
            window.location = "wishListMaster.html";
        },
        setupShoppingCartComponent: function () 
        {
            this.shoppingCartItemComponent = new shoppingCartCp();
            this.shoppingCartItemComponent.initialize();
            this.shoppingCartItemComponent.setReadOnly(true);
            this.shoppingCartItemComponent.addRecordAction({
                name: 'addToWishList',
                icon: '',
                displayName: 'Add to Wish',
                show: true
            },
            this.buyOne, this);
            this.shoppingCartItemComponent.addGlobalAction({
                name: 'WishList',
                icon: 'glyphicon-list',
                displayName: 'WishList',
                show: true
            },
            this.viewWishList,
                    this);
            this.shoppingCartItemComponent.toolbarComponent.removeButton("search");
        },
        setupWishListMasterComponent: function () 
        {
            this.wishListMasterComponent = new wishListMasterCp();
            this.wishListMasterComponent.initialize();
            this.wishListMasterComponent.masterComponent.clearGlobalActions();
            this.wishListMasterComponent.masterComponent.addGlobalAction({
                name: 'Confirm',
                icon: 'glyphicon-shopping-cart',
                displayName: 'Confirm',
                show: true
            },
            this.buy,
                    this);
            this.wishListMasterComponent.masterComponent.toolbarComponent.removeButton("Cart");
            this.wishListMasterComponent.whishListItemComponent.listComponent.hideAction("agregarCarrito");
            this.wishListMasterComponent.whishListItemComponent.setGlobalActionsVisible(false);
            this.wishListMasterComponent.whishListItemComponent.disableEdit();
            this.wishListMasterComponent.hideChilds();
        },
        addItem: function (params) {      
            var list = this.shoppingCartItemComponent.getRecords();
            var model = _.findWhere(list, {id: params.id});
            if (model) {
                this.wishListMasterComponent.addItems([{productId: model.productshoppingcartitemId}]);
            }
            this.render();
            this.wishListMasterComponent.whishListItemComponent.listComponent.render();
        },
        buy: function () {
            //this.wishListMasterComponent.masterComponent.save();
            if (this.wishListMasterComponent.whishListItemComponent.getRecords().length > 0)
            {
                this.wishListMasterComponent.masterComponent.componentController.saveGenModel({buyerId:1});
                //this.wishListMasterComponent.masterComponent.save();
                this.wishListMasterComponent.whishListItemComponent.setRecords();
                this.wishListMasterComponent.whishListItemComponent.listComponent.render();
            }
            else
            {
                console.log('Agrega productos al carrito');
                Backbone.trigger(this.wishListMasterComponent.masterComponent.componentId + '-error', {event: 'shoppingCart-master-save', view: this.wishListMasterComponent.masterComponent, message: 'Debes agregar al menos un producto al listado'});
            }
        },
        buyOne: function (params) {
            var list = this.shoppingCartItemComponent.getRecords();
            var model = _.findWhere(list, {id: params.id});
            if (model) {
                this.wishListMasterComponent.addItems([{productId: model.productshoppingcartitemId}]);
            }
            if (this.wishListMasterComponent.whishListItemComponent.getRecords().length > 0)
            {
                this.wishListMasterComponent.masterComponent.componentController.saveGenModel({buyerId:2});
                //this.wishListMasterComponent.masterComponent.save();
                this.wishListMasterComponent.whishListItemComponent.setRecords();
                this.wishListMasterComponent.whishListItemComponent.listComponent.render();
            }
            else
            {
                Backbone.trigger(this.wishListMasterComponent.masterComponent.componentId + '-error', {event: 'shoppingCart-master-save', view: this.wishListMasterComponent.masterComponent, message: 'Debes agregar al menos un producto a la lista'});
            }
        }
    });
    return App.Component.wishListIntegrator;
});