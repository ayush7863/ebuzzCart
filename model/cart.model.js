const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    image:String,
    price:Number,
    discounted_price:Number
})

const CartModel=mongoose.model("cart",userSchema)

module.exports={
    CartModel
}