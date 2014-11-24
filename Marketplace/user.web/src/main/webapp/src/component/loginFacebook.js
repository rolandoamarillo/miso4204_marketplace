/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {

    var data;

    function statusChangeCallback(response) {
        console.log('statusChangeCallback');
        console.log(response);
        if (response.status === 'connected') {
            testAPI();
        } else if (response.status === 'not_authorized') {
            document.getElementById('status').innerHTML = 'Please log ' + 'into this app.';
        } else {
            document.getElementById('status').innerHTML = 'Please log ' + 'into Facebook.';
        }
    }

    function checkLoginState() {
        FB.getLoginStatus(function (response) {
            statusChangeCallback(response);
        });
    }

    window.fbAsyncInit = function () {
        FB.init({
            appId: '940582389304340',
            status: true,
            cookie: true,
            oauth: true,
            xfbml: true,
            version: 'v2.2'
        });

        FB.getLoginStatus(function (response) {
            statusChangeCallback(response);
        });
    };

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "http://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    function testAPI() {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function (response) {
            console.log('Successful login for: ' + response.name);
            document.getElementById('status').innerHTML =
                    'Thanks for logging in, ' + response.name + '!';
        });
    }

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        var path = "; path=/";
        document.cookie = cname + "=" + cvalue + "; " + expires + path;
    }

    $("#btn-loginface").click(function () {
        console.log('Ejecuta el metodo');

        FB.getLoginStatus(function (response) {
            if (response.status === 'connected') {
                console.log('Logged in.');
                console.log(data);
            }
            else {

                FB.login(function () {
                    FB.api('/me', function (query) {
                        var username = query.email;
                        var password = query.id;
                        var json = {username: username, password: password, tenantID: document.domain, levelAccess: "user"};
                        var data2 = JSON.stringify(json);
                        console.log(data2);
                        $.ajax({
                            type: "POST",
                            url: "http://localhost:8084/user.services/webresources/auth/login",
                            dataType: 'json',
                            data: JSON.stringify(json),
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
                    });
                }, {scope: 'public_profile,email'});

            }
        });
    });
});

