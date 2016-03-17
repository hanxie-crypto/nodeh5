var userpic = $('.userviewwrapper')[0];



function saveUserPic(pickey) {
    $.ajax({
        url: '/adduserimg',
        type: 'post',
        data: {
            userimg: pickey
        },
        success: function() {
            console.log('ok')
        },
        error: function(err) {
            console.log(err);
        }
    });
}
/**
 * 创建图片
 * @return {[type]} [description]
 */
function createUserPic() {
    html2canvas(userpic, {
        onrendered: function(canvas) {
            var userpicbase64 = canvas.toDataURL();
            $('#usercreatepic').attr('src', userpicbase64);
            $('#userviewwrapper').hide();
            var file = userpicbase64.replace(/data:image\/png;base64,/g, '');
            $.ajax('https://up.qbox.me/putb64/-1/', {
                type: 'POST',
                headers: {
                    Authorization: 'UpToken ' + window.token
                },
                data: file,
                success: function(data) {
                    saveUserPic(data.hash);
                },
                error: function(err) {
                    console.log(err)
                }
            });
        }
    });
}

var $sharebg = $('#sharebg');
var tab = false;

function showSharePic() {
    $sharebg.removeClass('hide');
    window.setTimeout(function() {
        $sharebg.addClass('hide');
    }, 2000);
}

function initShareBgTap() {
    $('#usercreatepic').bind('tapone', function() {
        if (!tab) {
            tab = true;
            showSharePic();
        }

    })
}

function initCloseShareBg() {
    $sharebg.bind('tapone', function() {
        $sharebg.addClass('hide');
    })
}

function timerGoShare() {
    window.setTimeout(showSharePic, 2000);
}
createUserPic();
//initShareBgTap();
initCloseShareBg();
timerGoShare();