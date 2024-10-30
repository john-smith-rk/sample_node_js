const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3700

// serve files from the public directory
app.use('/',express.static(path.join(__dirname,'/css')));

//app.use(express.static(path.join(__dirname,'public')));

app.use(express.static('js'));



app.get('/',(req, res)=>{
  res.sendFile(path.join(__dirname,'mainpage.html'));

});


app.get('/login(.html)?',(req, res)=>{
   res.sendFile(path.join(__dirname,'view','login.html'));

 });

 app.get('/register(.html)?',(req, res)=>{
  res.sendFile(path.join(__dirname,'view','register.html'));

});

app.get('/success(.html)?',(req, res)=>{
  res.sendFile(path.join(__dirname,'view','success.html'));

});

app.listen(PORT ,()=>console.log(`Server running on port ${PORT}`));