const express = require("express")
const app = express()
const path = require('path')
const mongoose = require("mongoose")

const Product = require('./models/marketPlaceModel')

const DB = `mongodb+srv://Krishok_Bangla:Krishok@bangla@cluster0.pdcxb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
mongoose.connect(DB,({
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology : true,
    useFindAndModify : false
})).then(()=>{y
    console.log('Database connected successfully...')
})



app.set('views', path.join(_dirname,'views'))
app.set('view engine','ejs')

app.get('/',(req,res) =>{
    res.render('pages/auth/marketPlace',{title: 'Market Place'})
})

const port = 3000;
app.listen(port,()=>{
    console.log(`App is running on port ${port}....`)
})
