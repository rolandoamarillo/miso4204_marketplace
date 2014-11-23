define(['component/wishListMasterComponent', 'component/CompositeComponentShopping'], 
function (wishListMasterCp, shoppingCartCp) 
{
    App.Component.wishListIntegratorCart = App.Component.BasicComponent.extend(
    {
        initialize: function () 
        {
            this.componentId = App.Utils.randomInteger();
            this.name = "WishListIntegratorCart";
            this.setupCompositeComponentShoopingComponent();
            this.setupWishListMasterComponent();
        },
        render: function (domElementId) {
            if (domElementId) {
                var rootElement = $("#" + domElementId);
                this.wishListMasterComponent.renderMaster('master');
                this.wishListMasterComponent.masterComponent.create();
                this.wishListMasterComponent.masterComponent.listComponent.display(false);
                this.wishListMasterComponent.whishListItemComponent.toolbarComponent.display(false);
                this.CompositeComponentShopping.render('main');
            }
        },
        viewWishList: function (domElementId) {
            window.location = "wishListMaster.html";
        },
        setupCompositeComponentShoopingComponent: function () 
        {
            this.CompositeComponentShopping = new shoppingCartCp();
            this.CompositeComponentShopping.initialize();
            this.CompositeComponentShopping.cartMasterComponent.shoppingCartItemComponent.addRecordAction({
                name: 'addToWishList',
                icon: '',
                displayName: 'Add to Wish',
                show: true
            },
            this.buyOne, this);
        },
        setupWishListMasterComponent: function () 
        {
            this.wishListMasterComponent = new wishListMasterCp();
            this.wishListMasterComponent.initialize();
            this.wishListMasterComponent.masterComponent.clearGlobalActions();
            this.wishListMasterComponent.masterComponent.toolbarComponent.removeButton("Cart");
            this.wishListMasterComponent.whishListItemComponent.listComponent.hideAction("agregarCarrito");
            this.wishListMasterComponent.whishListItemComponent.setGlobalActionsVisible(false);
            this.wishListMasterComponent.whishListItemComponent.disableEdit();
            this.wishListMasterComponent.hideChilds();
        },
        buyOne: function (params) {
            var list = this.CompositeComponentShopping.cartMasterComponent.shoppingCartItemComponent.getRecords();
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
    return App.Component.wishListIntegratorCart;
});