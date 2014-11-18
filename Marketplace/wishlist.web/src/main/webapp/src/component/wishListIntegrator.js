define(['component/wishListMasterComponent', 'component/shoppingCartItemComponent'], 
function (wishListMasterCp, shoppingCartCp) 
{
    App.Component.CompositeComponent = App.Component.BasicComponent.extend(
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
                rootElement.append("<div id='main1' class='col-md-8'></div>");
                rootElement.append("<div id='cart' class='col-md-4'></div>");
                $("#cart").append("<div id='master'></div>");
                $("#cart").append("<div id='items'></div>");
                this.shoppingCartItemComponent.render("main1");
                this.wishListMasterComponent.renderMaster('master');
                this.wishListMasterComponent.masterComponent.create();
                this.wishListMasterComponent.masterComponent.listComponent.display(false);
                this.wishListMasterComponent.renderChild('item', 'items');
                this.wishListMasterComponent.whishListItemComponent.render('cart');
                console.log(Object.getOwnPropertyNames(this.wishListMasterComponent.whishListItemComponent));
                this.wishListMasterComponent.whishListItemComponent.toolbarComponent.display(false);
                this.wishListMasterComponent.whishListItemComponent.listComponent.render();
                
                //this.shoppingCartItemComponent.render("main");
            }
            
            this.shoppingCartItemComponent.renderRecords();
            this.wishListMasterComponent.renderChild('item');
        },
        setupShoppingCartComponent: function () 
        {
            this.shoppingCartItemComponent = new shoppingCartCp();
            this.shoppingCartItemComponent.initialize();
            this.shoppingCartItemComponent.addRecordAction({
                name: 'addToWishList',
                icon: '',
                displayName: 'Wish',
                show: true
            },
            this.addItem, this);
        },
        setupWishListMasterComponent: function () 
        {
            this.wishListMasterComponent = new wishListMasterCp();
            this.wishListMasterComponent.initialize();
            this.wishListMasterComponent.masterComponent.clearGlobalActions();
            this.wishListMasterComponent.masterComponent.addGlobalAction({
                name: 'checkout',
                icon: 'glyphicon-shopping-cart',
                displayName: 'Checkout',
                show: true
            },
            this.buy,
                    this);
            this.wishListMasterComponent.whishListItemComponent.setGlobalActionsVisible(false);
            this.wishListMasterComponent.whishListItemComponent.disableEdit();
            this.wishListMasterComponent.hideChilds();
        },
        addItem: function (params) {      
            this.wishListMasterComponent.addItems([{productId: params.id}]);
            this.render();
            this.wishListMasterComponent.whishListItemComponent.listComponent.render();
        },
        buy: function () {
            this.wishListMasterComponent.masterComponent.save();
        }
    });
    return App.Component.CompositeComponent;
});