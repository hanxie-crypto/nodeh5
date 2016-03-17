var pathimgindex = window.imgpath.lastIndexOf('img');
var div_id = 'yohocp_hype_container'; //hype生成的div的id
//var folderPath = 'http://designer.yoho.cn/yohocp.hyperesources/'; 
//var hype_js = 'http://designer.yoho.cn/yohocp.hyperesources/yohocp_hype_generated_script.js?68319' + Math.floor(Math.random() * 1000);
var _viewHeight = 0;
var _viewWidth = 0;

var folderPath = 'http://cdn.yoho.cn/yohodesiner/1.0.3/yohocp.hyperesources/'; 
var hype_js = 'http://cdn.yoho.cn/yohodesiner/1.0.3/yohocp.hyperesources/yohocp_hype_generated_script.js?d68319' + Math.floor(Math.random() * 1000);
//imgArr用于存储图片名称,用英文的,号隔开
var imgArr = [
    'logo.png',
    'pointer.png',
    'scene1_btn.png',
    'scene1_figure1.png',
    'scene1_figure2.png',
    'scene1_figure3.png',
    'scene1_figure4.png',
    'scene1_heart.png',
    'scene1_logo.png',
    'scene1_magnifier.png',
    'scene1_pic1.png',
    'scene1_pic2.png',
    'scene1_pic3.png',
    'scene1_pic4.png',
    'scene1_pic5.png',
    'scene1_pic6.png',
    'scene1_pic7.png',
    'scene1_pic8.png',
    'scene1_pic9.png',
    'scene1_pic10.png',
    'scene1_pic11.png',
    'scene1_pic12.png',
    'scene1_pic13.png',
    'scene1_pic14.png',
    'scene1_pic15.png',
    'scene1_pic16.png',
    'scene1_turnplate.png',
    'scene1_word.png',
    'scene2_1bg.png',
    'scene2_1pic1.png',
    'scene2_1pic2.png',
    'scene2_2bg.png',
    'scene2_2pic1.png',
    'scene2_2pic2.png',
    'scene2_2pic3.png',
    'scene2_2picLg1.png',
    'scene2_2picLg2.png',
    'scene3_1bg.png',
    'scene3_1pic1.png',
    'scene3_1pic2.png',
    'scene3_1pic3.png',
    'scene3_2bg.png',
    'scene3_2pic1.png',
    'scene3_2pic2.png',
    'scene3_2picLg1.png',
    'scene3_2picLg2.png',
    'scene4_1bg.png',
    'scene4_1pic1.png',
    'scene4_1pic2.png',
    'scene4_1pic3.png',
    'scene4_1pic4.png',
    'scene4_2bg.png',
    'scene4_2pic1.png',
    'scene4_2pic2.png',
    'scene4_2picLg1.png',
    'scene4_2picLg2.png',
    'scene5_1bg.png',
    'scene5_1pic1.png',
    'scene5_1pic2.png',
    'scene5_1pic3.png',
    'scene5_1pic4.png',
    'scene5_1pic5.png',
    'scene5_1pic6.png',
    'scene5_1pic7.png',
    'scene5_2bg.png',
    'scene5_2pic1.png',
    'scene5_2pic2.png',
    'scene5_2picLg1.png',
    'scene5_2picLg2.png',
    'scene6_1bg.png',
    'scene6_1pic1.png',
    'scene6_1pic2.png',
    'scene6_1picLg1.png',
    'scene6_1picLg2.png',
    'scene7_1bg.png',
    'scene7_1btn1.png',
    'scene7_1btn2.png',
    'scene7_1pic1.png',
    'scene7_1pic2.png',
    'scene7_1picLg1.png',
    'scene7_1picLg2.png',
    'scene7_2btn.png',
    'scene7_2erweima.png',
    'scene7_2mengceng.png',
    'scene7_2share.png',
    'tip.png'
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
    $('#preloading').hide();
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
        //$('body').css({'background-color':'#000'});
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

var nowDegree = -60;
var scrollpan = null;
var rotateindex = 0;
var prestyle = '';
var actIndex = 2;
var scrollnow = false;
function scrollPannels(degree) {
    if(!scrollnow){
        scrollnow = true;
        if (scrollpan === null) {
        scrollpan = document.getElementById('scene1_turnplate');
        rotateindex = scrollpan.style.webkitTransform.indexOf('rotate');
        prestyle = scrollpan.style.webkitTransform.substr(0, rotateindex);
        }
        nowDegree += degree;
        scrollpan.style.transitionDuration = '0.8s';
        scrollpan.style.transitionTimingFunction = 'linear';
        scrollpan.style.webkitTransform = prestyle + 'rotate(' + nowDegree + 'deg)';
        window.setTimeout(function() {
           scrollnow = false;
           HYPE.documents['yohocp'].showSceneNamed('scene' + actIndex, HYPE.documents['yohocp'].kSceneTransitionCrossfade, 0.8)
        }, 800)
    }
    

}



function initScrollTouchStart() {

    $(document)[0].addEventListener('touchstart', function(event) {
        if ($(event.target).attr('id') === 'scene1_turnplate') {
            document.touchStartX = event.touches[0].pageX;
        }
    })

}

function initScrollTouchEnd() {
    $(document)[0].addEventListener('touchend', function(event) {
        if ($(event.target).attr('id') === 'scene1_turnplate') {
            document.touchEndX = event.changedTouches[0].pageX;
            if (document.touchEndX - document.touchStartX < 0) {
                actIndex += 1;
                if (actIndex > 7) {
                    actIndex = 2;
                }
                scrollPannels(-60);
            } else if (document.touchEndX - document.touchStartX > 0) {
                actIndex -= 1;
                if (actIndex < 2) {
                    actIndex = 7;
                }
                scrollPannels(60);
            }
        }
    })
}
$(document).ready(function() {
    _viewHeight = $(document).height();
    _viewWidth = $(document).width();
    $('#container').attr('id', div_id);
    init();
    initScrollTouchStart();
    initScrollTouchEnd();
});