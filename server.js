const express=require('express')
const app=express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/html',express.static(__dirname+'/public'))

app.use('/todos',require('./routes/todo'))

app.listen(3535,()=>{
    console.log('serve started')
})