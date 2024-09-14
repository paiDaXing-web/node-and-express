const http = require('http');

http.createServer((req, res) => {
  console.log(req.url)// 获取url
  // 设置相应头
  //获取状态 200 文件类型.html 字符集是utf-8
  res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });

  res.write('this is node.js')

  // 结束响应

  res.end()
}).listen(3000)

console.log('success:',3000)