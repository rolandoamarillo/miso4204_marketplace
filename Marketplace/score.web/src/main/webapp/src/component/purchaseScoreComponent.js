/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var datos = null;
define(['controller/selectionController', 'model/cacheModel', 'component/_CRUDComponent', 'controller/tabController', 'component/purchaseMasterComponent','component/scoreComponent'],
 function(SelectionController, CacheModel, CRUDComponent, TabController, PurchaseMasterComponent,ScoreComponent) {
    App.Component.CompositeComponent = App.Component.BasicComponent.extend({
        initialize: function() {
            this.componentId = App.Utils.randomInteger();
            this.name = "PurchaseMasterScoreIntegration";
            this.purchaseMasterComponent = new PurchaseMasterComponent();
            this.purchaseMasterComponent.initialize();
            this.setupPurchaseScoreComponent();
            this.purchaseMasterComponent.render('main');
        },
        setupPurchaseScoreComponent:function(){
            this.purchaseMasterComponent.purchaseItemComponent.addRecordAction({
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
            //this.scoreComponent.masterComponent.clearGlobalActions();
            //var listItems = JSON.stringify(this.purchaseMasterComponent.purchaseItemComponent.getSelectedRecords());
            //console.log(listItems);
                       
            var pItems = this.purchaseMasterComponent.purchaseItemComponent.listComponent.listController.model.attributes.data;              
            //datos = pItems;
            id = obj.id;
            var pItem = null;
                     
            for (var i = 0, l = pItems.length; i < l; i++) {
                if (pItems[i].id === id) {
                    pItem = pItems[i];
                    break;
                }
            }                                  
            this.scoreComponent.clearGlobalActions();
            
            /*
            var params = '{"productId":"' + pItem.attributes.productId + '","buyerId": "' + 1 + '"}';
            var PObj = JSON.parse(params);
            console.log(PObj);
*/
          
           this.scoreComponent.componentController.currentModel = new this.scoreComponent.modelClass({componentId: this.scoreComponent.componentId,productscoreId:pItem.attributes.productId });           

/*
           this.scoreComponent.toolbarComponent.addButton({
                name: 'create',
                icon: 'glyphicon-plus',
                displayName: 'create',
                show: true
            },
            this.scoreComponent.create,
                    this.scoreComponent);*/
   
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
            
            //datos[0].attributes.name;
/*
                    var addresses = this.addressComponent.listComponent.listController.model.attributes.data;
                    for (var i = 0, l = addresses.length; i < l; i++) {
                        if (addresses[i].id === id) {
                            return addresses[i];
                        }
                    }
                   */ 
                    
                    //this.cartMasterComponent.addItems(idList);
                    //this.productComponent.clearSelectedRecords();
                    //this.render();
            
            this.scoreComponent.render('ScoreMain');
            this.scoreComponent.componentController._renderEdit();
            
        }      
    });

    return App.Component.CompositeComponent;
});

