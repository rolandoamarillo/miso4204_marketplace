define(['component/_wishListMasterComponent'],function(_WishListMasterComponent) {
    App.Component.WishListMasterComponent = _WishListMasterComponent.extend({
		postInit: function(){
			//Escribir en este servicio las instrucciones que desea ejecutar al inicializar el componente
                        //alert('ENTRE');
		},
                addItems: function (params) {
                     var list = this.whishListItemComponent.getRecords();
                     for (var idx in params) {
                         var productId = params[idx].productId;
                         //this.wishListItemComponent.addRecords({productId: productId, quantity: 1});

                         var model = _.findWhere(list, {productId: productId});
                         if (model) {
                             //model.quantity++;
                             //this.shoppingCartItemComponent.updateRecord(model);
                         } else {
                             this.whishListItemComponent.addRecords({productId: productId});    
                         }
                     }
                 }
 
    });

    return App.Component.WishListMasterComponent;
});