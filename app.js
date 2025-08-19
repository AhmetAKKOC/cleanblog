const express = require('express');

const app=express();

app.get('/',(req,res)=>{

    res.send("roje çalıtı");
})

app.listen(3000);