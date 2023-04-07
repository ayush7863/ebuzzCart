const express=require("express")
const { connection } = require("./db")
const { cartRouter } = require("./routes/cart.routes")
const app=express()
const cors=require("cors")

app.use(cors())

app.use(express.json())
app.use("/cart",cartRouter)


app.listen(8080,async ()=>{
    try {
        await connection
        console.log("MongoDB is Connected")
        console.log("Server is Running on port 8080")
        
    } catch (error) {
        console.log("NOt Connected")
        
    }
    
})