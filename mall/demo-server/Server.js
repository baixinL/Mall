//创建server
const http = require('http');
const url = require('url');
const util = require('util');
const fs = require('fs');
let server = http.createServer((req, res) => {
    res.statusCode = 200;
    //响应头
    res.setHeader("Content-Type", "text/plain;charset=utf-8");
    //req.url是字符串，客户端的url，没有http://127.0.0.1:3000/ ==》/
    //url.parse返回一个url对象
    //util.inspect：object用于调试的字符串表示形式
    //先读取pathname,然后使用fs.readFile读入这个页面的内容
    let pathname = url.parse(req.url).pathname; //文件名称，，substring(1)，因为文件名称多了一个”/“
    console.log("pathname.substring(1):", pathname);
    //res.end();要写在fs.readFile内部，否则报错
    fs.readFile(pathname.substring(1), (err, data) => {
      if(err)
      {
        //文件不存在
        res.writeHead(404, {
          "Content-Type":'text/html'
        })
        res.write("404")
      }else{
        res.writeHead(200, {
           "Content-Type": 'text/html'
        })
        res.write(data.toString())
      }
      res.end(); //响应结束
    })

  })
  .listen(3000, '127.0.0.1', () => { //监听端口，nodejs默认端口是3000，，，keep alive
    console.log("服务器已经运行，请打开浏览器，输入：http://127.0.0.1:3000/来访问");
  })
