import express from "express";

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.json({hello:'world!!'})
})


app.listen(process.env.PORT || 1337, ()=>{
    console.log('server Running')
})