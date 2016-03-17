var pathimgindex = window.imgpath.lastIndexOf('img');
var folderPath = 'http://cdn.yoho.cn/yohodesiner/1.0.3/yohogdmf.hyperesources/'; //放图片的目录名称
var _viewHeight = 0;
var _viewWidth = 0;
var div_id = 'yohogdmf_hype_container'; //hype生成的div的id
var folder = 'yohogdmf.hyperesources/'; //放图片的目录名称

var hype_js = 'http://127.0.0.1:8889/yohogdmf.hyperesources/yohogdmf_hype_generated_script.js?20802' + Math.floor(Math.random() * 1000);
//var hype_js = 'http://172.16.6.191:8889/yohogdmf.hyperesources/yohogdmf_hype_generated_script.js?20802' + Math.floor(Math.random() * 1000);

var title = 'yohogdmf'; //页面的标题

//var hype_jstest = 'http://172.16.6.191:8889/yohogdmf.hyperesources/yohogdmf_hype_generated_script.js?bsst212';
//var hype_js = 'http://cdn.yoho.cn/yohodesiner/1.0.3/yohogdmf.hyperesources/yohogdmf_hype_generated_script.js?v=a4' + Math.floor(Math.random() * 1000);

//imgArr用于存储图片名称,用英文的,号隔开
var imgArr = [
    'scene10_bg.png',
    'scene10_bg1.png',
    'scene10_bg2.png',
    'scene10_photo.png',
    'scene11_bg.png',
    'scene11_bg1.png',
    'scene11_obj.png',
    'scene11_photo.png',
    'scene12_bg.png',
    'scene12_bg1.png',
    'scene12_photo.png',
    'scene12_word.png',
    'scene13_bg.png',
    'scene13_bg1.png',
    'scene13_photo.png',
    'scene14_bg.png',
    'scene14_bg1.png',
    'scene14_photo.png',
    'scene15_bg.png',
    'scene15_bg1.png',
    'scene15_photo.png',
    'scene1_bg1.jpg',
    'scene1_bg2.png',
    'scene1_circle.png',
    'scene1_clickme.png',
    'scene1_enter_boy.png',
    'scene1_enter_girl-2.png',
    'scene1_logo.png',
    'scene1_look_boy.png',
    'scene1_look_girl.png',
    'scene1_photo_boy.png',
    'scene1_photo_girl.png',
    'scene1_word.png',
    'scene1_word2.png',
    'scene1_word_boy.png',
    'scene1_word_girl.png',
    'scene2_ailing.png',
    'scene2_bg.png',
    'scene2_bg1.png',
    'scene2_necklace.png',
    'scene2_obj.png',
    'scene2_red.png',
    'scene2_sunglasses.png',
    'scene2_word.png',
    'scene3_bg.png',
    'scene3_bg1.png',
    'scene3_earring1.png',
    'scene3_earring2.png',
    'scene3_earrings.png',
    'scene3_flower.png',
    'scene3_photo.png',
    'scene3_word.png',
    'scene4_bg.png',
    'scene4_bg1.png',
    'scene4_musical.png',
    'scene4_photo.png',
    'scene4_word.png',
    'scene5_bg.png',
    'scene5_bg1.png',
    'scene5_hole.png',
    'scene5_photo.png',
    'scene5_print.png',
    'scene5_ring.png',
    'scene5_smoke1.png',
    'scene5_smoke2.png',
    'scene5_word.png',
    'scene6_bg.png',
    'scene6_bg1.png',
    'scene6_bg2.png',
    'scene6_photo.png',
    'scene6_tatoo.png',
    'scene6_word.png',
    'scene7_bg.png',
    'scene7_bg1.png',
    'scene7_kiss.png',
    'scene7_photo.png',
    'scene7_word.png',
    'scene8_bg.png',
    'scene8_bg1.png',
    'scene8_bg2.png',
    'scene8_dot.png',
    'scene8_tongue.png',
    'scene8_lip.png',
    'scene8_photo.png',
    'scene8_sunglasses.png',
    'scene8_word.png',
    'scene9_bg.png',
    'scene9_bg1.png',
    'scene9_photo.png',
    'since10_cartoon1.png',
    'since10_cartoon2.png',
    'since10_wenzi.png',
    'since11_ny.png',
    'since11_wenzi.png',
    'since12_ball.png',
    'since12_hat.png',
    'since12_wrister.png',
    'since13_lightning.png',
    'since13_wenzi.png',
    'since14_hat.png',
    'since14_wenzi.png',
    'since15_star.png',
    'since15_wenzi.png',
    'since9_lightning.png',
    'since9_wenzi.png',
];
//----------------上面的要改，下面的不要动--------------------------------------
var total = imgArr.length;
var $imgnow, $type, $imgurl, $imgid;
/**
 * 加载hype处理视图
 * @return {[type]} [description]
 */
function preloadexe() {
    var sc = document.createElement('script');
    sc.type = 'text/javascript';
    sc.charset = 'utf-8';
    sc.src = hype_js; //加载的js名称

    $('#' + div_id + '').append(sc); //修改此处为div的ID名称
    var scale = 1;

    if (_viewHeight > 500) {
        if (_viewWidth / _viewHeight <= 320 / 509) {
            scale = _viewHeight / 509;
        } else if (_viewWidth / _viewHeight > 320 / 509) {
            scale = _viewWidth / 320;
        }
    } else {
        scale = _viewHeight / 509;
    }

    if (scale > 1.8) {
        scale = 1.8;
    }
    setTimeout(function() {
        if (_viewWidth < 320) {
            $('#' + div_id + '').css({
                '-webkit-transform': 'scale(' + scale + ')',
                'left': (_viewWidth - 320) / 2,
                'top': (_viewHeight - 509) / 2
            });
        } else {
            $('#' + div_id + '').css({
                '-webkit-transform': 'scale(' + scale + ')',
                'left': '0px',
                'top': (_viewHeight - 509) / 2
            });
        }
        $('body').css({'background-color':'#000'});
        //$('.HYPE_scene').each(function(){$(this).css({'width':_viewWidth,'height':_viewHeight})});
    }, 100);
}
/**
 * 预加载动画效果
 * @param  {[type]} loadIndex [description]
 * @param  {[type]} percent   [description]
 * @return {[type]}           [description]
 */
function loadingAnimation(loadIndex, percent) {
    $('.loadImg').attr('src', window.loadingpath + loadIndex + '.png');
    $('.loadText').text(percent + '%');
}

function goMainPage() {
    $('#preloading').hide();
    preloadexe();
}
/**
 * 预加载图片
 * @param  {[type]} arr [需要预加载的图片文件数组]
 * @return {[type]}     [description]
 */
function preLoadingImg(arr) {
    var newimages = [],
        loadedimages = 0
    var arr = (typeof arr != "object") ? [arr] : arr;
    var total = arr.length;

    function imageloadpost(err) {
        if (err) {
            console.log(err.message);
            return;
        }
        loadedimages++;
        var percent = Math.round((loadedimages + 1) / total * 100);
        var loadIndex = 0;
        if (loadedimages !== total) {
            if (percent > 10) {
                loadIndex = 1;
            }
            if (percent > 25) {
                loadIndex = 2;
            }
            if (percent > 40) {
                loadIndex = 3;
            }
            if (percent > 55) {
                loadIndex = 4;
            }
            if (percent > 70) {
                loadIndex = 5;
            }
            if (percent > 80) {
                loadIndex = 6;
            }
            if (percent > 90) {
                loadIndex = 7;
            }
            loadingAnimation(loadIndex, percent);
        } else {
            goMainPage(); //加载完毕开启动画
        }
    }
    for (var i = 0; i < total; i++) {
        var imgobj = arr[i];
        $imgurl = folderPath + imgobj;
        newimages[i] = new Image();
        newimages[i].src = $imgurl;
        $imgid = imgobj.substr(0, imgobj.lastIndexOf('.'));
        newimages[i].onload = function() {
            imageloadpost(null);
        };
        newimages[i].onerror = function() {
            imageloadpost(new Error('图片加载报错'));
        }
    }
}
/**
 * 加载启动入口
 * @param  {[type]} ) {               preLoadingImg(imgArr);} [description]
 * @return {[type]}   [description]
 */
function init() {
    preLoadingImg(imgArr);
}
$(document).ready(function() {
    _viewHeight = $(document).height();
    _viewWidth = $(document).width();
    $('#container').attr('id', div_id);
    init();
});