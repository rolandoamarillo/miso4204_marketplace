/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


// Your client ID    
var clientId = '890157117447-g0qh02in87s9kqc2behljc94hlp61vbu.apps.googleusercontent.com';
// Your API key
var apiKey = 'AIzaSyBRwMPOxmJ8VUsbRluC_sFapeSx-vQwPNw';
(function () {
    var po = document.createElement('script');
    po.type = 'text/javascript';
    po.async = true;
    po.src = 'https://apis.google.com/js/client:plusone.js?onload=render';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(po, s);
})();
function render() {
    gapi.signin.render('customBtn', {
        'callback': 'signinCallback',
        'clientid': '890157117447-g0qh02in87s9kqc2behljc94hlp61vbu.apps.googleusercontent.com',
        'cookiepolicy': 'single_host_origin',
        'requestvisibleactions': 'http://schemas.google.com/AddActivity',
        'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email'
    });

}

function signinCallback(authResult) {

    if (authResult['access_token']) {
        
        gapi.auth.setToken(authResult);
        onloadInitialization();
        makeGoogleApiCalls();
        // Oculta el botón de inicio de sesión ahora que el usuario está autorizado, por ejemplo:
        document.getElementById('signinButton').setAttribute('style', 'display: none');
    } else if (authResult['error']) {
        // Se ha producido un error.
        // Posibles códigos de error:
        // "access_denied": el usuario ha denegado el acceso a la aplicación.
        // "immediate_failed": no se ha podido dar acceso al usuario de forma automática.
        // console('There was an error: ' + authResult['error']);
    }
}




// onliad initialization
function onloadInitialization() {
    // set our own api key
    gapi.client.setApiKey(apiKey);
}

// make Google API calls: obtain logged-in member info and activity of friends
function makeGoogleApiCalls() {
    gapi.client.load('plus', 'v1', function () {
        
        
      
        // Request1: obtain logged-in user info
        var request = gapi.client.plus.people.get({
            'userId': 'me'
        });


        request.execute(function (aInfo) {

            // prepare user info array for rendering Login
            var userInfo =
                    {
                        'username': aInfo.emails[0].value,
                        'password': aInfo.id,
                        'tenantID': document.domain,
                        'levelAccess': 'user'

                    };

            var full = location.hostname + (location.port ? ':' + location.port : '');
            $.ajax({
                type: "POST",
                url: "http://" + full + "/user.services/webresources/auth/login",
//          crossDomain: true,
                dataType: 'json',
                data: JSON.stringify(userInfo),
                contentType: "application/json"
            }).done(_.bind(function (data) {
                console.log(data);
                alert('USUARIO AUTENTICADO');
                setCookie("token", data, 1);
                window.location.href = '../address.web';


            }, this)).error(_.bind(function (data) {
                console.log("data");
                alert('USUARIO NO AUTENTICADO : ' + data["responseText"]);

            }, this));

            console.log(aInfo);
        });
    });
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    var path = "; path=/";
    document.cookie = cname + "=" + cvalue + "; " + expires + path;
}
