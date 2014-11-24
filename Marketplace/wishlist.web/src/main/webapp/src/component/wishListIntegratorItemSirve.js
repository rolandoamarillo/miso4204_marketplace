define(['component/wishListMasterComponent', 'component/wishListItemComponent'], 
function (wishListMasterCp, shoppingCartCp) 
{
    App.Component.wishListIntegratorItem = App.Component.BasicComponent.extend(
    {
        initialize: function () 
        {
            var self = this;
            self.setCookie("token", 1, 1);
            var user = self.checkCookie();
            
            this.componentId = App.Utils.randomInteger();
            this.name = "WishListIntegrator";
            this.buyerId = user;
            this.setupWishListMasterComponent();
            this.setupShoppingCartComponent({buyerId : user});
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
        getCookie: function(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for(var i=0; i<ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0)===' ') c = c.substring(1);
                if (c.indexOf(name) !== -1) return c.substring(name.length, c.length);
            }
            return "";            
        },
        setCookie: function(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            var path = "; path=/";
            document.cookie = cname + "=" + cvalue + "; " + expires + path ;      
        },
        checkCookie: function() {
            var user = this.getCookie('token');
            if (user !== "") {
                return user;
            } else {
                window.location = "/user.web";
            }
        },
        viewWishList: function (domElementId) {
            window.location = "wishListMaster.html";
        },
        setupShoppingCartComponent: function (params) 
        {
            var listadoItems;
            this.shoppingCartItemComponent = new shoppingCartCp();
            this.wishListMasterComponent.masterComponent.componentController.searchWishListBuyer(function (data) {
                        listadoItems = data;
                    }, {buyerId:params.buyerId});
            this.shoppingCartItemComponent.initialize({cache: {data: listadoItems, mode: "memory"},pagination: false});
            this.shoppingCartItemComponent.setReadOnly(true);
            this.shoppingCartItemComponent.addRecordAction({
                name: 'addToCart',
                icon: '',
                displayName: 'Add to cart',
                show: true,
            },
            this.addCart, this);
            this.shoppingCartItemComponent.toolbarComponent.removeButton("search");
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
        addCart: function (params) {                 
            var buyerId = this.buyerId;
            
            var list = this.shoppingCartItemComponent.getRecords();
            
            var model = _.findWhere(list, {id: params.id});
            this.shoppingCartItemComponent.componentController._loadRequiredComponentsData(function (data) {
                        
                    });
                   
            var listProduct = this.shoppingCartItemComponent.componentController.productComponent.toJSON();
            
            var modelProduct = _.findWhere(listProduct, {"id":model.productId});
            
            
            if (model) {
                this.wishListMasterComponent.addItems([{productId: model.productshoppingcartitemId}]);
                this.wishListMasterComponent.masterComponent.componentController.addToCart(function (data) {
                        
                    }, {"shoppingCartEntity":{"name":"Shopping cart " + buyerId,"buyerId":buyerId},"listshoppingCartItem":[],"createshoppingCartItem":[{"productshoppingcartitemId":model.productId,"quantity":1,"name":modelProduct.name,"unitPrice":modelProduct.price}],"updateshoppingCartItem":[],"deleteshoppingCartItem":[]});
            }
            this.render();
            this.wishListMasterComponent.whishListItemComponent.listComponent.render();
        }
    });
    return App.Component.wishListIntegratorItem;
});