/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    var path = "; path=/";
    document.cookie = cname + "=" + cvalue + "; " + expires + path;
}

var full = location.hostname + (location.port ? ':' + location.port : '');
setCookie("token", "nodata", -1);
$.ajax({
    type: "POST",
    url: "http://" + full + "/user.services/webresources/auth/logout",
//  crossDomain: true,
    data: {},
    dataType: 'json',
    contentType: "application/json"
}).done(_.bind(function (data) {
    console.log(data);
    win = window.open("https://mail.google.com/mail/u/0/?logout&hl=en", "something", "width=550,height=570");
    setTimeout("win.close();", 4000);
}, this)).error(_.bind(function (data) {
    console.log("data");
    alert('Logout : ' + data["responseText"]);

}, this));
