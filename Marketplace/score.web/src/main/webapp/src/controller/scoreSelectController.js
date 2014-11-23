define(['model/scoreModel'], function(scoreModel) {
    App.Controller.ScoreController = Backbone.View.extend({
        initialize: function(options) {
            this.listModelClass = options.listModelClass;
            this.showEdit = false;
            this.showDelete = false;
        },

        list: function(params, callback, context) {
            if (params) {
                var data = params.data;
            }
            if (App.Utils.eventExists(this.componentId + '-' + 'instead-score-list')) {
                Backbone.trigger(this.componentId + '-' + 'instead-score-list', {view: this, data: data});
            } else {
                Backbone.trigger(this.componentId + '-' + 'pre-score-list', {view: this, data: data});
                var self = this;
                if (!this.currentList) {
                    this.currentList = new this.listModelClass();
                    if (this.pageSize) {
                        this.currentList.setPageSize(this.pageSize);
                    }
                }
                this.currentList.fetch({
                    data: data,
                    success: function(resp) {
                        callback.call(context, {data: self.currentList, page: resp.state.currentPage, pages: resp.state.totalPages, totalRecords: resp.state.totalRecords});
                        Backbone.trigger(self.componentId + '-' + 'post-score-list', {view: self});
                    },
                    error: function(mode, error) {
                        Backbone.trigger(self.componentId + '-' + 'error', {event: 'score-list', view: self, error: error});
                    }
                });
            }
        }
    });
    return App.Controller.ScoreController;
});