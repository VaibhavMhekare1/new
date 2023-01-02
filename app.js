const express=require('express');
const app=express();
const m1=require('./Add.js')
const bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:false}));

app.get('/',(req,resp)=>{
  resp.sendFile('./Public/Form.html',{root:__dirname});
})

app.post('/sumit_form',(req,resp)=>{
 let num1=req.body.num1;
 let num2=req.body.num2;
 let result=m1.add(num1,num2);
 resp.send(`<h2>result = ${result} </h2>`)
})
app.listen(2000,()=>{console.log("server started at 2000")})