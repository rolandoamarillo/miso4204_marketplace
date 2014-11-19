define([], function () {
    App = {
        initialize: function (config) {

            Backbone.trigger('app-initialize', this);
        },
        components: []
    };

    App.Component = App.Module || {};
    App.Controller = App.Controller || {};
    App.Delegate = App.Delegate || {};
    App.Model = App.Model || {};
    App.Collection = App.Collection || {};
    App.Router = App.Router || {};

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1);
            if (c.indexOf(name) != -1)
                return c.substring(name.length, c.length);
        }
        return "";
    }


    var backboneSync = Backbone.sync;
    var token = getCookie("token");
    Backbone.sync = function (method, model, options) {
        options.headers = {
            'X_REST_USER': token
        };
        backboneSync(method, model, options);
    };




    return App;
});
