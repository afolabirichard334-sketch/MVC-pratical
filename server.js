const express = require('express');
const router =require('./router/router')
const app = express();

app.use(express.json())
app.use(router) 
app.listen(2000,()=>{
    console.log('server is running on port 2000')
})
