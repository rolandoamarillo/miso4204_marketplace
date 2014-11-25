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

            
            this.setupPurchaseIntegrator();
            this.setupBonusComponent();
        },
        render: function(domElementId) {
                        var self = this;
			if (domElementId) {
				var rootElement = $("#"+domElementId)
                                //rootElement.append("<div id='main1' class='col-md-6'></div>");
				rootElement.append("<div id='bonus' class='col-md-6'></div>");

				//this.purchaseIntegrator.render("main1");
                                this.bonusComponent.render("bonus");
			}
        },
        setupPurchaseIntegrator: function() {
            this.purchaseIntegrator = new purchaseIntegratorMine();
            this.purchaseIntegrator.initialize();
 
        },
        setupBonusComponent: function() {
            this.bonusComponent = new bonusComponent();
            this.bonusComponent.initialize();
            this.bonusComponent.clearRecordActions();
            this.bonusComponent.toolbarComponent.removeButton("create");
            this.bonusComponent.addRecordAction({
                name: 'apply',
                displayName: 'Apply Bonus',
                show: true,
                menu: 'utils'
            },
            _.bind(function(evt){ this.selectBonus(evt); }, this), this);
           
        },
        selectBonus: function(obj) {
            var selectedId = obj.id;
            this.selectedBonus = this.searchBonusById(selectedId); 
            var totalpayField = $('#totalPay').val();
            porcentaje = this.selectedBonus.attributes.value / 100;
            //totalpay = totalpayField * porcentaje;
            //$('#totalPay').val(totalpay);
            $('#totalPay').val(porcentaje);
            console.log(this.purchaseIntegrator);
            //this.bonusComponent.delete(obj);
            this.render();
        },
        searchBonusById: function(id){
            var bonuss = this.bonusComponent.listComponent.listController.model.attributes.data;
            for(var i = 0, l = bonuss.length; i<l; i++){
                if(bonuss[i].id === id){
                    return bonuss[i];
                }
            }
        }        

    });
    return App.Component.BonusPaymentIntegratorComponent;
});



