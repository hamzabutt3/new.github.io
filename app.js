const express=require('express');
const path=require('path');
const fs=require('fs')
const app=express();
const port=80;

app.use('/static',express.static('static'));
app.use(express.urlencoded());

app.set('view engine','pug');
app.set('views',path.join(__dirname, 'views'))

app.get('/',(req,res)=>{
    res.render('index.pug')
});
app.get('/about',(req,res)=>{
    res.render('about.pug')
});
app.get('/service',(req,res)=>{              
    res.render('service.pug')
});
app.post('/',(req,res)=>{
    name=req.body.name;
    age=req.body.age;
    let output=`the name is ${name} and age is ${age}` 
    fs.writeFileSync('newuser',output)
    res.render('index.pug');
})
app.listen(port,()=>{
    console.log(`port run on ${port}`)
});