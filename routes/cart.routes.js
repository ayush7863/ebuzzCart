const express = require("express");
const { CartModel } = require("../model/cart.model");

const cartRouter = express.Router();

cartRouter.get("/", async (req, res) => {
    try {
        const cartData=await CartModel.find()
        res.status(200).send(cartData)
        
    } catch (error) {
        res.status(400).send({"err":error})
        
    }

});

cartRouter.post("/add", async (req, res) => {
  try {
    const cartData = new CartModel(req.body);
    await cartData.save();
    res.status(200).send({ msg: "Added to Cart" });
  } catch (error) {
    res.status(400).send({ err: error });
  }
});

cartRouter.delete("/delete/:cartID", async (req, res) => {
     const {cartID}=req.params

    try {
        await CartModel.findByIdAndDelete({_id:cartID})
        res.status(200).send({"msg":"Deleted"})

        
    } catch (error) {
        res.status(400).send({"error":error.message})
        
    }


});

module.exports={
    cartRouter
}
