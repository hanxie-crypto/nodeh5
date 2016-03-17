/**
 * 读取相关路径获得该路径下文件
 * @type {[type]}
 */
var fs = require('fs');
var iconv = require('iconv-lite');
var imgList = [];
var file = 'images.txt';
var imgpath = 'public/yohopopular.hyperesources';


function writeFile(file, str) {
    // 测试用的中文  
    var str = str + "\r\n";
    // 把中文转换成字节数组   
    var arr = iconv.encode(str, 'gbk');
    fs.appendFile(file, arr, function(err) {
        if (err)
            console.log("fail " + err);
        else
            console.log("写入文件ok");
    });
}

function redFilePath(path) {
    var dirList = fs.readdirSync(path);
    dirList.forEach(function(item) {
        writeFile(file, '\'' + item + '\'\,');
        imgList.push(item);
    });
}
redFilePath(imgpath);