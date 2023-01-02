const express=require("express");
const app=express();
app.get('/',(req,resp)=>{
    resp.send("",{root:__dirname})
})
app.listen(3000);
console.log("server started at port 3000");