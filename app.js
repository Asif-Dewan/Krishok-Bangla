const express = require("express")
const mongoose = require("mongoose")
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session);
const app = express()

// import router
const authRouter = require('./routes/authRouter')

// set up view engine
app.set('view engine','ejs')
app.set('views','views')
 
const DB = `mongodb+srv://Krishok_Bangla:Krishok@bangla@cluster0.pdcxb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const store = new MongoDBStore({
    uri: DB,
    collection: 'sessions',
    expires : 1000 * 60 * 60 * 2
  });
  
// middleware array
const middleware = [
    express.static('public'),
    express.urlencoded({extended : true}),
    express.json(),
    session({
        secret : process.env.SECRET_KEY || 'SECRET_KEY',
        resave : false,
        saveUninitialized : false,
        store : store
    }),

]
 
app.use(middleware)

app.use('/auth',authRouter)

app.get('/',(req,res) =>{
    res.render('pages/homepage',{title: 'Home page'})
})

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