const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send('hello world');
})
app.get('/html5',(req,res)=>{
    res.send('2003');
})
app.post('/post',(req,res)=>{
    res.send('post');
})
app.listen(8080,()=>{
    console.log('app is running at http://127.0.0.1:8080')
})