//需要导入的模块
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
//使用http模块创建web服务器
const server = http.createServer();
//监听
server.on('request', (req, res) => {
    let pathname = req.url;
    pathname = pathname === '/' ? '/index.html' : pathname;
    

    let filepath = path.join(__dirname, 'public', pathname)
      //读取文件内容并响应给客户端
      fs.readFile(filepath, 'utf8',(err, data) => {
        if (err) {
            res.statusCode = 500
            res.end('服务器内部错误')
        } else {
            res.end(data)
        }

}
})

server.listen(8080,()=>{
    console.log('server is running at http://127.0.0.1:8080')
})
