define(['controller/selectionController', 'model/cacheModel', 'component/_CRUDComponent', 'controller/tabController', 'component/buyerComponent'],
 function(SelectionController, CacheModel, CRUDComponent, TabController, BuyerComponent) {
    App.Component.CompositeComponent = App.Component.BasicComponent.extend({
        initialize: function() {
            this.componentId = App.Utils.randomInteger();
            this.name = "BuyerIntegration";
            this.buyerComponent = new BuyerComponent();
            this.buyerComponent.initialize();
            this.setupBuyerComponent();
        },
        render: function(domElementId){
            if (domElementId) {
                var rootElementId = $("#"+domElementId);
                this.buyerElement = this.componentId + "-buyer";
                this.tabsElement = this.componentId + "-tabs";

                rootElementId.html("<div id='" + this.buyerElement + "'></div>" + "<div id='" + this.tabsElement + "'></div>");
            }
            this.buyerComponent.render(this.buyerElement);
        },
        setupBuyerComponent: function() {
            this.buyerComponent.addGlobalAction({
                name: 'Twitter',
                icon: 'glyphicon-user',
                displayName: 'Twitter',
                show: true,
                menu: 'utils'
            },
            this.twitter,
            this);
            
            this.buyerComponent.addGlobalAction({
                name: 'Facebook',
                icon: 'glyphicon-user',
                displayName: 'Facebook',
                show: true,
                menu: 'utils'
            },
            this.facebook,
            this);
            
            this.buyerComponent.addGlobalAction({
                name: 'Google',
                icon: 'glyphicon-user',
                displayName: 'Google',
                show: true,
                menu: 'utils'
            },
            this.google,
            this);
        },
        twitter: function() {
            $("#username").val("Hola Mundo");
            alert('Twitter');
        },
        facebook: function() {
            alert('Facebook');
        },
        google: function() {
            alert('Google');
        }
    });

    return App.Component.CompositeComponent;
});