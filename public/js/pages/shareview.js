var userpic = $('.userviewwrapper')[0];
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
        }
    });
}

createUserPic();