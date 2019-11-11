//访问第三方。作为客户端
const http = require('http');
const util = require('util');
http.get("http://www.imooc.com/u/card", (res) => {
  let data = '';
  res.on("data", chunk => {//data不能变名称。chunk可以任意取
    data += chunk;
  })
  res.on("end", () => {
    let start = data.indexOf('{') >= 0 ? data.indexOf('{') : 0;
    let end = data.indexOf('}') >= 0 ? data.indexOf('}') + 1 : 0;
    data = data.slice(start, end)

    let result = JSON.parse(data); //转成json对象
    console.log(`result: ${util.inspect(result)}`);
  })
})
