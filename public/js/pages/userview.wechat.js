/**
 * 微信分享
 */

var userpic = $('#userpic').val(); //用户上传的图片地址
var _weChatInterface = 'http://www.yohoshow.com/api/wechat/getSignPackage';
var info = '2016唤醒春潮新势力!我在YOHO!BUY有货!';
var shareTitle = '潮流,就是' + $('#userword').val() + ',我的潮流我设计!';
var shareImg = userpic;
var shareDesc = info;

userpic = encodeURIComponent(userpic);
var usertemplate = $('#usertemplate').val(); //用户选择的模板
var userword = $('#userword').val(); //用户输入的消息
var shareLink = 'http://' + location.host + '/' +
    'shareview?userword=' + userword + '&userpic=' + userpic + '&usertemplate=' + usertemplate;
if (typeof wx !== 'undefined') {

    $.getJSON(_weChatInterface + '?pageurl=' +
        encodeURIComponent(location.href.split('#')[0]) + '&callback=?',
        function(json) {
            var _appId, _timestamp, _nonceStr, _signature;

            if (json !== undefined && json !== '') {
                _appId = json.appId.toString();
                _timestamp = json.timestamp;
                _nonceStr = json.nonceStr.toString();
                _signature = json.signature.toString();

                wx.config({
                    debug: false,
                    appId: _appId,
                    timestamp: _timestamp,
                    nonceStr: _nonceStr,
                    signature: _signature,
                    jsApiList: [
                        'checkJsApi',
                        'onMenuShareTimeline',
                        'onMenuShareAppMessage',
                        'onMenuShareQQ',
                        'onMenuShareWeibo',
                        'hideMenuItems',
                        'showMenuItems',
                        'hideAllNonBaseMenuItem',
                        'showAllNonBaseMenuItem',
                        'translateVoice',
                        'startRecord',
                        'stopRecord',
                        'onRecordEnd',
                        'playVoice',
                        'pauseVoice',
                        'stopVoice',
                        'uploadVoice',
                        'downloadVoice',
                        'chooseImage',
                        'previewImage',
                        'uploadImage',
                        'downloadImage',
                        'getNetworkType',
                        'openLocation',
                        'getLocation',
                        'hideOptionMenu',
                        'showOptionMenu',
                        'closeWindow',
                        'scanQRCode',
                        'chooseWXPay',
                        'openProductSpecificView',
                        'addCard',
                        'chooseCard',
                        'openCard'
                    ]
                });
            }
        });

    wx.ready(function() {
        var shareData = {
            title: shareTitle,
            desc: shareDesc,
            imgUrl: shareImg,
            link: shareLink,
            success: function() {
                // 用户确认分享后执行的回调函数
            },
            cancel: function() {
                // 用户取消分享后执行的回调函数
            }
        };

        //分享给朋友
        wx.onMenuShareAppMessage(shareData);

        //分享到朋友圈
        wx.onMenuShareTimeline(shareData);

        //分享到QQ
        wx.onMenuShareQQ(shareData);

        //分享到微博
        wx.onMenuShareWeibo(shareData);
    });
}