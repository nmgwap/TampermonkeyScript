// ==UserScript==
// @name         博客园去广告
// @namespace    http://tampermonkey.net/
// @version      6.06.1707
// @description  博客园去广告,
// @author       lidonghui
// @match        *://www.cnblogs.com/*
// @match        *://news.cnblogs.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // 获取当前地址url
    var url = location.href;
    // 正则匹配博客首页部分
    var wwwcnblogs = /www.cnblogs.com/i;
    if (wwwcnblogs.test(url)) {
        function clearAD() {
            $("#cnblogs_a1").remove();
            $("#cnblogs_b1").remove();
            $("#cnblogs_b2").remove();
            $("#cnblogs_b3").remove();
            $("#cnblogs_b4").remove();
            $("#ad_t2").remove();
            $("#cnblogs_c1").remove();
            $("#cnblogs_c2").remove();
        }
        setInterval(function() {
            clearAD();
        }, 1000);
    }
    // 新闻
    var newcnblogs = /news.cnblogs.com/i;
    if (newcnblogs.test(url)) {
        function clearnewAD() {
            $(".banner").remove();
            $("#ad_e3").remove();
            $("#e4").remove();
            var iframe = $('iframe');
            for (var i = 0; i < iframe.length; i++) {
                iframe.hide();
            };
        }
        setInterval(function() {
            clearnewAD();
        }, 1000);
    }

})();