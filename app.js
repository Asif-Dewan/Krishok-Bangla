const express = require("express")
const app = express()

app.get('/',(req,res) =>{
    res.status(200).json({
        status: 'Success',
        message: 'This route is for homepage'
        
        })
})

const port = 3000;
app.listen(port,()=>{
    console.log(`App is running on port ${port}....`)
})