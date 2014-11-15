/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(['component/bonusComponent', 'component/purchaseIntegrator'], function(bonusComponent, purchaseIntegratorMine) {
    App.Component.BonusPaymentIntegratorComponent = App.Component.BasicComponent.extend({
        initialize: function() {
            this.componentId = App.Utils.randomInteger();
            this.name = "Bonus";

            //this.setupBonusComponent();
            this.setupPurchaseIntegrator();
        },
        render: function(domElementId) {
                        var self = this;
			if (domElementId) {
				var rootElement = $("#"+domElementId)
                                rootElement.append("<div id='main1' class='col-md-6'></div>");
				rootElement.append("<div id='bonus' class='col-md-6'></div>");

				//this.purchaseIntegrator.render("main1");
                                //this.bonusComponent.render("bonus");
			}
        },
        setupPurchaseIntegrator: function() {
            this.purchaseIntegrator = new purchaseIntegratorMine();
            this.purchaseIntegrator.initialize();
            //this.purchaseComponent.masterComponent.clearGlobalActions();
            //this.purchaseIntegrator.setReadOnly(true);          
        },
        setupBonusComponent: function() {
            this.bonusComponent = new bonusComponent();
            this.bonusComponent.initialize();
            this.bonusComponent.clearRecordActions();
            this.bonusComponent.addRecordAction({
                name: 'buy',
                icon: 'glyphicon-shopping-cart',
                displayName: 'Apply Bonus',
                show: true,
                menu: 'utils'
            },
            this.applyBonus,
            this);
           
        },
        applyBonus: function() {

            
        }
    });
    return App.Component.BonusPaymentIntegratorComponent;
});



