const user = require("./User")
console.log(`${user.sayHello()} ${user.userName}!`);


//创建server
let http = require('http');
let url = require('url');
let server = http.createServer((req, res)=>{
  res.statusCode = 200;
  //响应头
  res.setHeader("Content-Type","text/plain;charset=utf-8");
  //req.url是字符串，客户端的url，没有http://127.0.0.1:3000/ ==》/
  //url.parse返回一个url对象
  //util.inspect：object用于调试的字符串表示形式
  console.log("url：");
console.log("url：");
  let util = require('util');
  res.end(util.inspect(url.parse('http://127.0.0.1:3000/index.html?a=123'))); //响应结束
})
.listen(3000, '127.0.0.1', () => { //监听端口，nodejs默认端口是3000
  console.log("服务器已经运行，请打开浏览器，输入：http://127.0.0.1:3000/来访问");
})
