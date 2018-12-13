// ==UserScript==
// @name         脚本之家去广告
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  脚本之家去广告.
// @author       You
// @match        *://www.jb51.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // 去头部logo旁边的广告
    $(".logom").hide();
    $(".logor").hide();
    $(".mainlr").hide();
    $("#txtlink").hide();
    $(".topimg").hide();
    $("#wrapper").hide();
    $(".r300").hide();
    $(".rFixedBox").hide();
    $(".lbd").hide();
    var iframe = $('iframe');
    for (var i = 0; i < iframe.length; i++) {
        iframe.hide();
    };
    $(".dxy828").hide();
    $(".dxy320").hide();

})();