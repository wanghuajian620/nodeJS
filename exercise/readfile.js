const fs = require('fs'); // fs - 文件系统 所有文件系统操作都具有同步和异步的形式

fs.readFile('file1', function(err, file) {
  console.log('文件1的内容: ' + file);
})

fs.readFile('file2', function(err, file) {
  console.log('文件2的内容: ' + file);
})

console.log('读取文件1和文件2');
