/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//function getCookie(cname) {
//    var name = cname + "=";
//    var ca = document.cookie.split(';');
//    for (var i = 0; i < ca.length; i++) {
//        var c = ca[i];
//        while (c.charAt(0) == ' ')
//            c = c.substring(1);
//        if (c.indexOf(name) != -1)
//            return c.substring(name.length, c.length);
//    }
//    return "";
//}
//
//function delete_cookie(name, value) {
//    document.cookie = name + '='+ value+'; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"; ';
//}
function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            var path = "; path=/";
            document.cookie = cname + "=" + cvalue + "; " + expires + path;
        }




var full = location.hostname + (location.port ? ':' + location.port : '');
//var cookie_name = 'token';
//var cookie_token = getCookie("token");
//delete_cookie(cookie_name, cookie_token);
setCookie("token", "nodata", -1);
$.ajax({
    type: "POST",
    url: "http://" + full + "/user.services/webresources/auth/logout",
//          crossDomain: true,
    data: {},
    dataType: 'json',
    contentType: "application/json"
}).done(_.bind(function (data) {
    console.log(data);
}, this)).error(_.bind(function (data) {
    console.log("data");
    alert('Logout : ' + data["responseText"]);

}, this));

