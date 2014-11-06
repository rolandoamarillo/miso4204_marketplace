define(['component/_shoppingCartMasterComponent'],function(_ShoppingCartMasterComponent) {
    App.Component.ShoppingCartMasterComponent = _ShoppingCartMasterComponent.extend({
		postInit: function(){
			//Escribir en este servicio las instrucciones que desea ejecutar al inicializar el componente
                    
                    this.masterComponent.removeGlobalAction('refresh');
                    this.masterComponent.removeGlobalAction('print');
                    this.masterComponent.removeGlobalAction('search');
                    //this.masterComponent.removeGlobalAction('create');
                    this.masterComponent.removeGlobalAction('save');
                    this.masterComponent.removeGlobalAction('cancel');                                        
		}/*,
                render: function(domElementId){
			if (domElementId) {
				var rootElementId = $("#"+domElementId);
				this.masterElement = this.componentId + "-master";
				this.tabsElement = this.componentId + "-tabs";

				rootElementId.append("<div id='" + this.masterElement + "'></div>");
				rootElementId.append("<div id='" + this.tabsElement + "'></div>");
			}
			this.masterComponent.render(this.masterElement);
		}*/
    });

    return App.Component.ShoppingCartMasterComponent;
});