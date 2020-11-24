const http =require('http');
const querystring=require('querystring');
const server = http.createServer();
server.on('request',(req,res)=>{
    let arr=[];
    req.on('data',buffer=>{
        // console.log(buffer);
        arr.push(buffer)
    })
    req.on('end',()=>{
        let buffer=Buffer.concat(arr);
        // console.log(buffer);
        // console.log(buffer.toString());
        let dataObj=querystring.parse(buffer.toString());
        console.log(dataObj);

    })
})
server.listen(8080,()=>{
    console.log('server is running at http://127.0.0.1:8080');
})