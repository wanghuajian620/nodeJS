const fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>hello Node.js</h1>');
  res.end('<p>The End</p>');
}).listen(8888);

console.log("HTTP server is running at http://127.0.0.1:8888/");


// 按书上写的，服务报错。http is not defined