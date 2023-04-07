const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    title:String,
    image:String,
    price:Number,
    size:String,
    discounted_price:Number
})

const CartModel=mongoose.model("cart",userSchema)

module.exports={
    CartModel
}