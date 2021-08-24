const express = require("express")
const mongoose = require("mongoose")
const app = express()
// set up view engine
app.set('view engine','ejs')
app.set('views','views')
 
// middleware array
const middleware = [
    express.static('public'),
    express.urlencoded({extended : true}),
    express.json()
]
 
app.use(middleware)

app.get('/',(req,res) =>{
    res.render('pages/homepage',{title: 'Home page'})
})
const DB = `mongodb+srv://Krishok_Bangla:Krishok@bangla@cluster0.pdcxb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
mongoose.connect(DB,({
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology : true,
    useFindAndModify : false
})).then(()=>{
    console.log('Database connected successfully...')
})


const port = 3000;
app.listen(port,()=>{
    console.log(`App is running on port ${port}....`)
})