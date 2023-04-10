const mongoose=require("mongoose")

const wishListSchema=mongoose.Schema({
    title:String,
    image:String,
    price:Number,
    count:Number,
    discount:String,
    discounted_price:Number
})

const WishListModel=mongoose.model("wish",wishListSchema)

module.exports={
   WishListModel
}