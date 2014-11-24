/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(['controller/selectionController', 'model/cacheModel', 'component/_CRUDComponent', 'controller/tabController','component/scoreComponent','component/purchaseItemComponent'],
 function(SelectionController, CacheModel, CRUDComponent, TabController,ScoreComponent,PurchaseItemComponent) {
    App.Component.CompositeComponent = App.Component.BasicComponent.extend({
        initialize: function() {
            this.componentId = App.Utils.randomInteger();
            this.name = "PurchaseItemScoreIntegration";
            this.purchaseItemComponent = new PurchaseItemComponent();
            this.purchaseItemComponent.initialize();
            this.setupPurchaseScoreComponent();
            this.purchaseItemComponent.render('main');
        },
        setupPurchaseScoreComponent:function(){
            
            this.purchaseItemComponent.addRecordAction({
                    name: 'PuchaseItemScore',
                    icon: '',
                    displayName: 'Calificar',
                    show: true 
                },
                _.bind(function(evt){ this.PuchaseItemScore(evt); }, this),
                this
            );          
        },
        PuchaseItemScore : function(obj){
            $("#ScoreMain").empty();
            this.scoreComponent = new ScoreComponent();
            this.scoreComponent.initialize();
            this.scoreComponent.clearCache();
                    
            var pItems = this.purchaseItemComponent.listComponent.listController.model.attributes.data;              
            id = obj.id;
            var pItem = null;
                     
            for (var i = 0, l = pItems.length; i < l; i++) {
                if (pItems[i].id === id) {
                    pItem = pItems[i];
                    break;
                }
            }                                  
            this.scoreComponent.clearGlobalActions();
          
           this.scoreComponent.componentController.currentModel = new this.scoreComponent.modelClass({componentId: this.scoreComponent.componentId,productscoreId:pItem.attributes.productId });           
   
           this.scoreComponent.toolbarComponent.addButton({
                name: 'save',
                icon: 'glyphicon-floppy-disk',
                displayName: 'Save',
                show: true
            },
            this.scoreComponent.save,
                    this.scoreComponent);

            this.scoreComponent.toolbarComponent.addButton({
                name: 'cancel',
                icon: 'glyphicon-remove-sign',
                displayName: 'Cancel',
                show: true
            },
            this.scoreComponent.cancel,
                    this.scoreComponent);
                    
            this.scoreComponent.render('ScoreMain');
            this.scoreComponent.componentController._renderEdit();
            
        }      
    });

    return App.Component.CompositeComponent;
});

