#! /usr/bin/env node
var program = require('commander')
var fs = require("fs");

// program 
//   .version('0.0.2') 
//   .arguments('<type> [menu]')
//   .option('--type', 'form | querytable') 
//   .option('--menu', 'restart server') 
//   .action(function (type, menu) {
//     console.log(type)
//     console.log(menu)
//     // name = cmd;
// });

// console.log("program.argv",program.type)

program
.version('0.0.2')
.usage('test')
.option('-n, --name <value>', '文件名称','index')
.option('-t, --type [value]', '组件类型 form | table','querytable')
.option('-m, --menu <value>', 'queryTable下的数值 1 | 2 | 3 | 4','1')

program.parse(process.argv);

name = program.name
type = program.type
menu = program.menu


var stat=fs.stat;

var copy=function(src,dst){
    //读取目录
    fs.readdir(src,function(err,paths){
        if(err){
            throw err;
        }
        paths.forEach(function(path){
            var _src=src+'/'+path;
            var _dst=dst+'/'+path;
            var readable;
            var writable;
            stat(_src,function(err,st){
                if(err){
                    throw err;
                }
                
                if(st.isFile()){
                    // readable=fs.createReadStream(_src);//创建读取流
                    // writable=fs.createWriteStream(_dst);//创建写入流
                    // readable.pipe(writable)
                    fs.readFile(_src,function(err,data){
                      if(err){
                          return err;
                      }
                      let str = data.toString();

                      fs.writeFile(_dst, str, function (err) {
                          if (err) return err;
                          console.log(`创建${_dst}成功`)
                      });
                  });

                }else if(st.isDirectory()){
                    exists(_src,_dst,copy);
                }
            });
        });
    });
}

var exists=function(src,dst,callback){
    //测试某个路径下文件是否存在
    fs.exists(dst,function(exists){
        if(exists){//不存在
            callback(src,dst);
        }else{//存在
            fs.mkdir(dst,function(){//创建目录
                callback(src,dst)
            })
        }
    })
}



var localPath = process.cwd();

var filename = '';

if (type === 'form') {
  filename = 'form'
} else {
  switch(menu) {
    case 1:
      filename = 'table1';
      break;
    case 2:
      filename = 'table2';
      break;
    case 3:
      filename = 'table3';
      break;
    case 4:
      filename = 'table4';
      break;
    default:
      filename = 'table1';
      break;
  }
}



// 创建组件
if (program.name) {
  // 判断字符串是否为首字母大写
  var pathArray = name.split('/')
  var chineseName = process.argv[process.argv.length - 1]
  
  if (pathArray.length == 1) {
    localPath = `${localPath}/${pathArray[0]}`
  } else {
    var folderPath = `${localPath}/${pathArray[0]}`
    localPath = `${localPath}/${pathArray[0]}/${pathArray[1]}`
    fs.mkdir(folderPath, function(err){
      if(err){
          console.log('创建文件夹出错！');
      }
      console.log('创建文件夹成功！');
    });
  }

  exists(`${__dirname}/${filename}`,`${localPath}`,copy)

  console.log("创建组件成功")
}

if (program.route)
  console.log('route')

function replaceFile (filePath,sourceRegx,targetStr){
  fs.readFile(filePath,function(err,data){
      if(err){
          return err;
      }
      console.log(filePath)
      let str = data.toString();
      str = str.replace(sourceRegx,targetStr);
      fs.writeFile(filePath, str, function (err) {
          if (err) return err;
      });
  });
}


function deleteFolder(path) {
  if( fs.existsSync(path) ) {
    fs.unlinkSync(path);
  }
}
