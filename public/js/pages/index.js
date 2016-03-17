var desingerSwiper; //swiper变量
var $userpicvalue = $('#userpic_value'); //用户图片的值
var $yohodemo = $('#yohodemo'); // 展示图片
var $preupload = $('#preupload'); // 上传提示
var prenavindex = 1; //导航页索引


/**
 * 滑动到索引
 * @param  {[type]} index [description]
 * @return {[type]}       [description]
 */
function slideTo(index) {
    if (desingerSwiper) {
        desingerSwiper.slideTo(index, 500, true);
    }
}
/**
 * [goNavPage description]
 * @return {[type]} [description]
 */
function goNavPage() {
    slideTo(1);
}
/**
 * 首页按钮点击
 * @return {[type]} [description]
 */
function bindGoBtnToNavPage() {
    $('.gobtn').bind('tapone', function(e) {
        e.preventDefault();
        e.stopPropagation();
        goNavPage(); //切换导航页，速度为1秒
    })
}


var dotindex = 0;
var dot = '';
var dotTimmer;
/**
 * 开启上传点动画
 * @return {[type]} [description]
 */
function beginUploadDot() {
    dotTimmer = window.setInterval(function() {
        if (dotindex > 2) {
            dotindex = 0;
            dot = '';
        } else {
            dot += '.';
        }
        dotindex++;
        $('#loadingdot').text(dot);
    }, 1000);
}
/**
 * 结束上传点动画
 * @return {[type]} [description]
 */
function endUploadDot() {
    clearInterval(dotTimmer);
    dotindex = 0;
    dot = '';
}

var tempOpen = false;
var $modeltemp = $('.model-temp');
/**
 * 打开更多模板
 * @return {[type]} [description]
 */
function openMoreTemplate() {
    tempOpen = true;
    $modeltemp.removeClass('hide');
}
/**
 * 关闭模板
 * @return {[type]} [description]
 */
function closeMoreTemplate() {
    tempOpen = false;
    $modeltemp.addClass('hide');
}
$('.more-tmp').bind('tapone', function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (tempOpen === false) {
        openMoreTemplate()
    }
});
var gobntan = 'first';
var huanxing = 'first';
var chunchao = 'first';



function goBtnAn() {
    var $gobtn = $('#gobtn');
    $gobtn[0].addEventListener('webkitAnimationEnd', function() {
        if (gobntan === 'first') {
            $gobtn.css({
                opacity: 1
            })
            gobntan = 'second';
            $gobtn.addClass('gobtn-animated-shake');
        }
    });
    $gobtn.addClass('gobtn-animated-in')
}
var $writeword2 = $('#writeword2');
var $writeword3 = $('#writeword3');
var $writeword4 = $('#writeword4');
var $writeword5 = $('#writeword5');
var $writeword6 = $('#writeword6');
var $writeword7 = $('#writeword7');


function writeWord6() {
    $writeword7.show();
}

function writeWord5() {
    $writeword6.show();
    window.setTimeout(writeWord6, 400);
}

function writeWord4() {
    $writeword5.show();
    window.setTimeout(writeWord5, 400);
}

function writeWord3() {
    $writeword4.show();
    window.setTimeout(writeWord4, 400);
}

function writeWord2() {
    $writeword3.show();
    window.setTimeout(writeWord3, 400);
}

function writeWord1() {
    $writeword2.show();
    window.setTimeout(writeWord2, 400);
}
/**
 * 绘画出现
 * @return {[type]} [description]
 */
function beginWriteWord() {
    window.setTimeout(writeWord1, 400);
}
/**
 * 开启手动画
 * @return {[type]} [description]
 */
function beginhandWrite() {
    var $hand = $('#hand');
    $hand[0].addEventListener('webkitAnimationEnd', function() {
        wordOneStepAn()
    });
    $hand.addClass('hand-animated-write');

}
/**
 * 字出现
 * @return {[type]} [description]
 */
function wordSecondStepAn() {
    var $desinword = $('#desinword');
    $desinword[0].addEventListener('webkitAnimationEnd', function() {
        goBtnAn();
    });
    $desinword.addClass('designword-animated-fadein');
}
/**
 * 字飞进来
 * @return {[type]} [description]
 */
function wordOneStepAn() {
    var $huanxing = $('#huanxing');
    var $chunchao = $('#chunchao');
    $huanxing[0].addEventListener('webkitAnimationEnd', function() {
        if (huanxing === 'first') {
            huanxing = 'second';
            $huanxing.css({
                'left': '1.075rem'
            });
            $huanxing.addClass('huanxing-animated-skew');
        }
        if (huanxing === 'second') {
            huanxing = 'third';
            wordSecondStepAn();

        }
    });
    $chunchao[0].addEventListener('webkitAnimationEnd', function() {
        if (chunchao === 'first') {
            chunchao = 'second';
            $chunchao.css({
                'right': '1.075rem'
            });
            $chunchao.addClass('chunchao-animated-skew');
        }
        if (chunchao === 'second') {
            chunchao = 'third';
        }
    });
    $huanxing.addClass('huanxing-animated-in');
    $chunchao.addClass('chunchao-animated-in');
}

/**
 * 显示更多模板的动画
 * @return {[type]} [description]
 */
function moreTempTipAnimation() {
    $('#moretemptip').addClass('more-tmp-tip-show');
    window.setTimeout(function() {
        $('#moretemptip').removeClass('more-tmp-tip-show').addClass('more-tmp-tip-hide');
    }, 2000);
}


var theater;
/**
 * 打字
 * @return {[type]} [description]
 */
function initType() {
    theater = theaterJS()
    theater
        .addActor('typeword')
        .addScene('typeword:(点击', '输入)', 500)
        .addScene(theater.replay)
}
/**
 * 监听用户输入框的事件
 * @return {[type]} [description]
 */
function initInputFocus() {
    $('#inputword').on('focus', function() {
        $('#typeword').hide();
        theater.stop();
    })
    $('#inputword').on('blur', function() {
        var word = $(this).val();
        if (word === '') {
            theater.replay()
            $('#typeword').show();
        }
    });
}
/**
 * 显示错误
 * @param  {[type]} tip [description]
 * @return {[type]}     [description]
 */
function showErrorTip(tip) {
    $errtip.removeClass('hide');
    $errtip.text(tip);
    window.setTimeout(function() {
        $errtip.addClass('hide');
    }, 2000);
}
/**
 * 初始化上传
 */
var uploader;
var $errtip = $('#errortip');

function initUpload() {
    uploader = Qiniu.uploader({
        runtimes: 'html5,flash,html4',
        browse_button: 'up-pt-file',
        uptoken: window.token,
        unique_names: true,
        multi_selection: false,
        filters: {
            mime_types: [{
                title: "Image files",
                extensions: "jpg,jpeg,png"
            }]
        },
        dragdrop: false,
        domain: 'http://img01.yohoboys.com/', //所绑定的域名
        max_file_size: '5mb',
        max_retries: 3,
        chunk_size: '4mb',
        auto_start: true,
        init: {
            'UploadProgress': function() {
                $('.preupload').removeClass('hide');
                beginUploadDot();
            },
            'FileUploaded': function(up, file, info) {
                var imgLink = Qiniu.imageMogr2({
                    'auto-orient': true,
                    strip: true,
                    thumbnail: 'x701',
                    crop: '521x701',
                    gravity: 'Center', // 裁剪锚点参数
                    quality: 100, // 图片质量，取值范围1-100
                    format: 'png' //新图的输出格式，取值范围：jpg，gif，png，webp等
                }, info.key);
                var domain = up.getOption('domain');
                var res = JSON.parse(info);
                var sourceLink = domain + res.key + "?" + imgLink;
                $userpicvalue.val(sourceLink);
                $yohodemo.attr('src', sourceLink);
                $yohodemo[0].onload = function() {
                    $preupload.addClass('hide');
                    endUploadDot();
                }
            },
            'Error': function(up, err, errTip) {
                $preupload.addClass('hide');
                if (err.code === -600) {
                    showErrorTip('图片过大');
                }
                if (err.code === -601) {
                    showErrorTip('文件类型错误');
                }


            }
        }
    });
}


/**
 * 选择模板
 * @type {[type]}
 */
var $uploadmainbg = $('#uploadmainbg');
var $usertemplate = $('#usertemplate');
var temppath = '';

function changeBgTemplage(item) {
    switch (item) {
        case 'temp1':
            temppath = 'bgtemp1.jpg';
            $uploadmainbg.css({
                'background-image': 'url(' + window.imgpath + temppath + ')'
            });

            break;
        case 'temp2':
            temppath = 'bgtemp2.jpg';
            $uploadmainbg.css({
                'background-image': 'url(' + window.imgpath + temppath + ')'
            });
            break;
        case 'temp3':
            temppath = 'bgtemp3.jpg';
            $uploadmainbg.css({
                'background-image': 'url(' + window.imgpath + temppath + ')'
            });
            break;
        case 'temp4':
            temppath = 'bgtemp4.jpg';
            $uploadmainbg.css({
                'background-image': 'url(' + window.imgpath + temppath + ')'
            });
            break;
    }
    $usertemplate.val(temppath); //赋值
}
var tempcache = {};

function initChooseTemplate() {
    var $targettemp;
    var $pretemp;

    $('.temp-img').bind('tapone', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $pretemp = tempcache.target || $('.act-img');
        $targettemp = $(this);
        $pretemp.removeClass('act-img');
        $targettemp.addClass('act-img');
        tempcache.target = $targettemp;
        changeBgTemplage($targettemp.attr('id'));
        closeMoreTemplate();
    })
}

/**
 * 生成潮流宣言
 * @return {[type]} [description]
 */
function initCreatDesignerWord() {
    $('#storewordbtn').bind('tapone', function(e) {
        e.preventDefault();
        e.stopPropagation();
        var inputword = $('#inputword').val();
        if (inputword === '') {
            showErrorTip('请输入宣言');
            return;
        }
        var userpicvalue = $userpicvalue.val();
        if (userpicvalue === '') {
            showErrorTip('请上传图片');
            return;
        }
        $('#createtrendview').submit();
    })
}

var nowindex = 3;
/**
 * 设计页导航
 * @return {[type]} [description]
 */
function bidnMainNavTap() {
    $('.designerphoto').bind('tapone', function(e) {
        e.preventDefault();
        e.stopPropagation();
        nowindex = +$(this).attr('nowindex');
        if (nowindex === 10) {
            prenavindex = 1; //me的索引
        } else {
            prenavindex = nowindex;
        }

        desingerSwiper.slideTo(nowindex, 1500, true); //切换到第一个slide，速度为1秒
    })
}
/**
 * 第一页动画
 * @return {[type]} [description]
 */
function firstPageAn() {
    beginhandWrite();
    beginWriteWord();
}
var $bubble7 = $('.bubble7');
var $bubble5 = $('.bubble5');
var $bubble6 = $('.bubble6');
var $bubble4 = $('.bubble4');
var $bubble3 = $('.bubble3');
var $bubble2 = $('.bubble2');
var $bubble1 = $('.bubble1');
var $bubble8 = $('.bubble8');
var $bubble9 = $('.bubble9');
var $tx_me = $('.tx_me');

function cleanSecondPageAn() {
    $tx_me.removeClass('meAnimation');
    $bubble7.removeClass('bub1');
    $bubble2.removeClass('bub11');
    $bubble9.removeClass('bub1');
    $bubble5.removeClass('bub21');
    $bubble3.removeClass('bub2');
    $bubble4.removeClass('bub2');
    $bubble8.removeClass('bub3');
    $bubble6.removeClass('bub3');
    $bubble1.removeClass('bub4');
}

/**
 * 第二页动画
 * @return {[type]} [description]
 */
function secondPageAn() {
    
    $tx_me.addClass('meAnimation');
    $bubble7.addClass('bub1');
    $bubble2.addClass('bub11');
    $bubble9.addClass('bub1');
    $bubble5.addClass('bub21');
    $bubble3.addClass('bub2');
    $bubble4.addClass('bub2');
    $bubble8.addClass('bub3');
    $bubble6.addClass('bub3');
    $bubble1.addClass('bub4');

}
var truebublean = 1;
function listenBuble() {
    $bubble1[0].addEventListener('webkitAnimationEnd', function() {
        cleanSecondPageAn(); 
        window.setTimeout(secondPageAn,1000);
    });

}
/**
 * 第三页动画
 * @return {[type]} [description]
 */
function thirdPageAn() {
    var $camera = $('#camera');
    var $wenzi_life = $('#wenzi_life');
    $camera.addClass('camera');
    $wenzi_life.addClass('life_animation');
}
/**
 *第四页动画
 */
function fourthPageAn() {
    var $camera4 = $('#camera4');
    var $wenziRfactory = $('#wenziRfactory');
    $camera4.addClass('camera');
    $wenziRfactory.addClass('wenzi_animation4');
}
/**
 *第五页动画
 */
function fifthPageAn() {
    var $camera5 = $('#camera5');
    var $wenziSp = $('#wenziSp');
    $camera5.addClass('camera');
    $wenziSp.addClass('wenzi_animation5');
}
/**
 *第六页动画
 */
function sixthPageAn() {
    var $camera6 = $('#camera6');
    var $wenzimu = $('#wenzimu');
    $camera6.addClass('camera');
    $wenzimu.addClass('wenzi_animation6');
}
/**
 *第七页动画
 */
function seventhPageAn() {
    var $camera7 = $('#camera7');
    var $wenzidl = $('#wenzidl');
    $camera7.addClass('camera');
    $wenzidl.addClass('wenzi_animation7');
}
/**
 *第八页动画
 */
function eighthPageAn() {
    var $camera8 = $('#camera8');
    var $wenzijo = $('#wenzijo');
    $camera8.addClass('camera');
    $wenzijo.addClass('wenzi_animation8');
}
/**
 *第九页动画
 */
function ninthPageAn() {
    var $camera9 = $('#camera9');
    var $wenzisan = $('#wenzisan');
    $camera9.addClass('camera');
    $wenzisan.addClass('wenzi_animation9');
}
/**
 *第十页动画
 */
function tenthPageAn() {
    var $camera10 = $('#camera10');
    var $wenzisim = $('#wenzisim');
    $camera10.addClass('camera');
    $wenzisim.addClass('wenzi_animation10');
}

function changePage(swiper) {
    switch (swiper.activeIndex) {
        case 1:
            secondPageAn();
            break;
        case 2:
            thirdPageAn();
            break;
        case 3:
            fourthPageAn();
            break;
        case 4:
            fifthPageAn();
            break;
        case 5:
            sixthPageAn();
            break;
        case 6:
            seventhPageAn();
            break;
        case 7:
            eighthPageAn();
            break;
        case 8:
            ninthPageAn();
            break;
        case 9:
            tenthPageAn();
            break;
        case 10:
            elevenPageEvent();
            elevenPageAn();
            break;
    }
}

var elevenfistevent = false;
/**
 * 上传页动画及事件
 * @return {[type]} [description]
 */
function elevenPageEvent() {
    if (!elevenfistevent) {
        elevenfistevent = true;
        initType(); //初始化打字
        initInputFocus(); //初始化获得焦点事件
        initChooseTemplate(); //初始化选择模板
        initUpload(); //初始化上传
        initCreatDesignerWord();
    }
}

function elevenPageAn() {
    $('#inputword').val('');
    moreTempTipAnimation();
}

function initSwiper() {
    desingerSwiper = new Swiper('#showcontent', {
        onTransitionEnd: changePage,
        effect: 'fade',
        fade: {
            crossFade: true,
        }
    });
}
/**
 * 上传页的返回
 * @return {[type]} [description]
 */
function uploadPageBack() {
    $('#backmain').bind('tapone', function(e) {
        slideTo(prenavindex);
    })
}
/**
 * 点击相机进入上传页
 * @return {[type]} [description]
 */
function goUploadPage() {
    $('.cam').bind('tapone', function(e) {
        e.preventDefault();
        slideTo(10);
    })
}
/**
 * 点击cha返回导航页
 * @return {[type]} [description]
 */
function bindCloseToNavPage() {
    $('.closepage').bind('tapone', function(e) {
        e.preventDefault();
        if ($(e.target).hasClass('closepage')) {
            goNavPage();
        }
    })
}


function initUploadFormValidate() {
    $('#createtrendview').submit(function(e) {
        var userword = $('#inputword').val();
        var userpic = $('#userpic_value').val();
        if (userword === '') {
            showErrorTip('请输入宣言')
            return false;
        } else {
            if (userpic === '') {
                showErrorTip('请上传图片')
                return false;
            } else {
                return true;
            }
        }
    });
}
/**
 * 初始化一些基础
 * @return {[type]} [description]
 */
window.initPlay = function() {
        initSwiper(); //初始化swiper
        bindGoBtnToNavPage(); //点击设计你的潮流宣言
        bidnMainNavTap(); //主页导航点击事件
        listenBuble();
        initUploadFormValidate();

    }
/**
 * 开启动画
 * @return {[type]} [description]
 */
window.beginPlay = function() {
    firstPageAn();
    uploadPageBack(); //上传页返回
    bindCloseToNavPage(); //返回导航页
    goUploadPage(); //点击相机进入上传页
}