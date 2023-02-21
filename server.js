const express = require('express')
const Razorpay = require('razorpay')
const port = process.env.port || 4500
const app = express()
const instancevariable = new Razorpay({
    key_id:'rzp_test_A9HqKHBZctlQ13',
    key_secret:'m7fLAWuMiH2bz9E9u5D6tJL8'
})

app.get('/getdata',(req,res)=>{
    res.send("hello")
})

app.use(express.json())
app.post('/createOrder',(req,res)=>{
    const {amount, currency ,receipt, notes}=req.body;
    instancevariable.orders.create(req.body,(err,data)=>{
        if(!err){
            res.status(200).json({data:data})
        }else{
            res.status(500).json({err})
        }
    })
})
app.listen(port,()=>{
    console.log("server is created successfully",port)
})
