const http = require('http');
const url = require('url');


http.createServer((req, res) => {
  // 设置相应头
  //获取状态 200 文件类型.html 字符集是utf-8
  res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });

  res.write('this is node.js')


  const {pageSize,pageNum}=url.parse(req.url,true).query
  console.log(pageSize,pageNum)// 获取
  // 结束响应

  res.end("end")
}).listen(3000)

console.log('success:',3000)