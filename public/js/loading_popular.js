var pathimgindex = window.imgpath.lastIndexOf('img');
var div_id = 'yohopopular_hype_container'; //hype生成的div的id
//var folderPath = 'http://designer.yoho.cn/yohopopular.hyperesources/'; 
//var hype_js = 'http://designer.yoho.cn/yohopopular.hyperesources/yohopopular_hype_generated_script.js?68319' + Math.floor(Math.random() * 1000);
var _viewHeight = 0;
var _viewWidth = 0;

var folderPath = 'http://cdn.yoho.cn/yohodesiner/1.0.3/yohopopular.hyperesources/';
var hype_js = 'http://cdn.yoho.cn/yohodesiner/1.0.3/yohopopular.hyperesources/yohopopular_hype_generated_script.js?n1ss' + Math.floor(Math.random() * 1000);
//imgArr用于存储图片名称,用英文的,号隔开
var imgArr = [
    'scene2_6F.png',
    'scene2_6F_addidas.png',
    'scene2_5F_stussy.png',
    'scene2_5F_pic2.png',
    'scene2_6F_bg.jpg',
    'scene2_6F_btn1.png',
    'scene2_6F_btn2.png',
    'scene2_6F_btn3.png',
    'scene2_6F_pic1.png',
    'scene2_6F_pic10.png',
    'scene2_6F_pic2.png',
    'scene2_6F_pic4.png',
    'scene2_6F_pic3.png',
    'scene2_6F_pic5.png',
    'scene2_6F_pic6.png',
    'scene2_6F_pic7.png',
    'scene2_6F_pic8.png',
    'scene2_6F_pic9.png',
    'scene2_6F_puma.png',
    'scene1_bars.png',
    'scene1_brand.png',
    'scene1_lg.png',
    'scene1_plane.png',
    'scene2_1F.png',
    'scene2_1F_bg.png',
    'scene2_1F_btn1.png',
    'scene2_1F_btn2.png',
    'scene2_1F_btn3.png',
    'scene2_1F_skullcandy.png',
    'scene2_1F_skullcandyPic1.png',
    'scene2_1F_skullcandyPic2.png',
    'scene2_1F_skullcandyPic3.png',
    'scene2_1F_thermos.png',
    'scene2_1F_thermosPic2.png',
    'scene2_1F_thermosPic1.png',
    'scene2_1F_thermosPic3.png',
    'scene2_1F_toyPic1.png',
    'scene2_1F_toy.png',
    'scene2_1F_toyPic2.png',
    'scene2_1F_toyPic3.png',
    'scene2_2F.png',
    'scene2_2F_bg.png',
    'scene2_2F_btn2.png',
    'scene2_2F_btn1.png',
    'scene2_2F_mdnsPic1.png',
    'scene2_2F_mdnsPic2.png',
    'scene2_2F_btn3.png',
    'scene2_2F_mdnsPic3.png',
    'scene2_2F_mdns.png',
    'scene2_2F_stayrealPic1.png',
    'scene2_2F_stayreal.png',
    'scene2_2F_stayrealPic2.png',
    'scene2_2F_yod.png',
    'scene2_2F_yodPic1.png',
    'scene2_2F_yodPic2.png',
    'scene2_3F.png',
    'scene2_3F_bg.png',
    'scene2_3F_btn1.png',
    'scene2_3F_btn2.png',
    'scene2_3F_btn3.png',
    'scene2_3F_btn4.png',
    'scene2_3F_dresslab.png',
    'scene2_3F_dresslabPic1.png',
    'scene2_3F_dresslabPic2.png',
    'scene2_3F_dresslabPic3.png',
    'scene2_3F_lal.png',
    'scene2_3F_lalPic1.png',
    'scene2_3F_lalPic2.png',
    'scene2_3F_lalPic3.png',
    'scene2_3F_skz.png',
    'scene2_3F_skzPic1.png',
    'scene2_3F_skzPic2.png',
    'scene2_3F_skzPic3.png',
    'scene2_3F_tyakashaPic1.png',
    'scene2_3F_tyakashaPic2.png',
    'scene2_3F_tyakashaPic3.png',
    'scene2_3F_tyakasha.png',
    'scene2_4F_btn1.png',
    'scene2_4F.png',
    'scene2_4F_bg (2).png',
    'scene2_4F_lazyoaf.png',
    'scene2_4F_btn2.png',
    'scene2_4F_btn3.png',
    'scene2_4F_lazyoafPic1.png',
    'scene2_4F_lazyoafPic2.png',
    'scene2_4F_lazyoafPic2@2x.png',
    'scene2_4F_mo&coPic2.png',
    'scene2_4F_mo&co.png',
    'scene2_4F_mo&coPic1.png',
    'scene2_4F_mo&coPic3.png',
    'scene2_4F_moussy.png',
    'scene2_4F_moussyPic1.png',
    'scene2_4F_moussyPic2.png',
    'scene2_4F_moussyPic3.png',
    'scene2_5F.png',
    'scene2_5F_bg.jpg',
    'scene2_5F_bha.png',
    'scene2_5F_bhaPic1.png',
    'scene2_5F_bhaPic2 .png',
    'scene2_5F_bhaPic3.png',
    'scene2_5F_btn1.png',
    'scene2_5F_btn2.png',
    'scene2_5F_btn3.png',
    'scene2_5F_misbhv.png',
    'scene2_5F_misbhvPic1.png',
    'scene2_5F_misbhvPic2.png',
    'scene2_5F_pic1.png',
    'scene2_5F_misbhvPic3.png',
    'scene2_5F_pic3.png',
    'scene2_brand.png',
    'scene2_house.png',
    'scene2_lg.png',
    'scene2_plane1.png',
    'scene2_plane2.png',
    'scene2_roof.png',
    'scene2_tree1.png',
    'scene2_tree2.png',
    'scene2_tree3.png',
    'scene5_pic1.png',
    'scene_1cloud3.png',
    'scene_1cloud1.png',
    'scene_1cloud2.png',
    'scene_1lg1.png',
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


$(document).ready(function() {
    $('#container').attr('id', div_id);
    init();
});