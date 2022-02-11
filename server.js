const express = require('express');
const app=express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors=require('cors');
const Item=require('./model/model');


app.use(bodyParser.json());
app.use(cors());


app.get('/',async(req,res)=>{
    let data;
    try{
        data= await Item.find();
    }catch(e){
        console.log("DATABASE SE DATA NAHI NIKAL RAHA HAI");
    }

    res.json({"Item" : data});
})

app.post('/',async(req,res)=>{
    let data=req.body;

    let newitem= new Item({
        "name":data.name,
        "price":data.price,
        "quant":data.quant
    })

    try{
        await newitem.save();
    }catch(e){
        console.log("DATA POST NAHI HO RAHA HAI")
    }

    res.send("DATA HAS BEEN SAVED");

})


mongoose.connect('mongodb://localhost:27017/programno5')
.then(()=>{console.log("DB CONNECTED")})
.catch(()=>{console.log("DB NOT CONNECTED")})


const PORT=9000;
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})