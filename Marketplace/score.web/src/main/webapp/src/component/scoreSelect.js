define(['component/_CRUDComponent', 'model/scoreModel', 'controller/scoreSelectController'], function() {
    App.Component._ScoreComponent = App.Component._CRUDComponent.extend({
        name: 'score',
        modelClass: App.Model.ScoreModel,
        listModelClass: App.Model.ScoreList,
        controller: App.Controller.ScoreController,
        configUI: function() {
            this.showToolbar = false;

            this.listComponent.addColumn('value', 'Value');
            this.listComponent.addColumn('date', 'Date');
            this.listComponent.addColumn('name', 'Name');
            this.listComponent.addColumn('userId', 'User Id');
            this.listComponent.addColumn('productscoreId', 'Productscore Id');
        }
    });
    return App.Component._ScoreComponent;
});