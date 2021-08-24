const express = require("express")
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

const port = 3000;
app.listen(port,()=>{
    console.log(`App is running on port ${port}....`)
})