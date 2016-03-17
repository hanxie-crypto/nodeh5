var folderPath = window.imgpath; //放图片的目录名称
//imgArr用于存储图片名称,用英文的,号隔开
var imgArr = [
    'firstbg.jpg',
    'writeword1.png',
    'writeword2.png',
    'writeword3.png',
    'writeword4.png',
    'writeword5.png',
    'writeword6.png',
    'writeword7.png',
    'hand.png',
    'huanxing.png',
    'chunchao.png',
    'desinword.png',
    'gobtn.png',
    'uploadmainbg.png',
    'uploadptbtn.png',
    'storewordbtn.png',
    'yohodemo.png',
    'yohologo.png',
    'moretemp.png',
    'babyghost.png',
    'bubble1.png',
    'bubble2.png',
    'bubble3.png',
    'bubble4.png',
    'bubble5.png',
    'bubble6.png',
    'bubble7.png',
    'bubble8.png',
    'bubble9.png',
    'dresslab.png',
    'life.png',
    'museum.png',
    'rfactory.png',
    'sankuanz.png',
    'shapeless.png',
    'simongao.png',
    'title.png',
    'tx_babyghost.png',
    'tx_dresslab.png',
    'tx_life.png',
    'tx_me.png',
    'tx_museum.png',
    'tx_rfactory.png',
    'tx_sankuanz.png',
    'tx_shapeless.png',
    'tx_simongao.png?v=2',
    'moretemptip.png',
    'designinfo.png',
    'preupload.png',
    'backmain.png',
    'temp1.png',
    'temp2.png',
    'temp3.png',
    'temp4.png',
    'errortip.png',
    'bg3.jpg',
    'camera.png',
    'close.png',
    'wenzi_life.png?v=2',
    'bg4.png',
    'close4.png',
    'camera4.png',
    'wenziRfactory.png?v=2',
    'bg5.png',
    'wenziSp.png?v=2',
    'camera5.png',
    'close5.png',
    'bg6.png',
    'close6.png',
    'camera6.png',
    'wenzimu.png?v=2',
    'bg7.png',
    'camera7.png',
    'close7.png',
    'wenzidl.png?v=2',
    'bg8.png',
    'close8.png',
    'camera8.png',
    'wenzijo.png?v=2',
    'bg9.png',
    'camera9.png',
    'close9.png',
    'wenzisan.png?v=2',
    'bg10.png?v=3',
    'camera10.png',
    'close10.png',
    'bgGirl.png',
    'wenzisim.png?v=2'
];
//----------------上面的要改，下面的不要动--------------------------------------
var total = imgArr.length;
var $imgnow, $type, $imgurl, $imgid;
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
/**
 * 开始主页动画
 * @return {[type]} [description]
 */
function goMainPage() {
    window.setTimeout(function() {
        $('#preloading').hide();
        window.beginPlay();
    }, 1500);
}
/**
 * 预加载图片
 * @param  {[type]} arr [需要预加载的图片文件数组]
 * @return {[type]}     [description]
 */
function preLoadingImg(arr) {
    window.initPlay();
    var newimages = [],
        loadedimages = 0
    var arr = (typeof arr != "object") ? [arr] : arr;
    var total = arr.length;

    function imageloadpost(err) {
        if (err) {
            console.log('加载失败')
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
        newimages[i].onload = (function(imgid) {
            $imgnow = $('#' + imgid)
            $type = $imgnow.attr('type');
            if ($type) {
                if ($type === 'img') {
                    $imgnow.attr('src', $imgurl);
                }
                if ($type === 'div') {
                    $imgnow.css({
                        'background-image': 'url(' + $imgurl + ')'
                    })
                }
            }
            imageloadpost(null);
        })($imgid);
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
    $('#showcontent').height($(window).height());
    preLoadingImg(imgArr);
}

init();