const express = require("express");
const { WishListModel } = require("../model/wishlist.model");

const wishRouter = express.Router();

wishRouter.get("/", async (req, res) => {
    try {
        const wishData=await WishListModel.find()
        res.status(200).send(wishData)
        
    } catch (error) {
        res.status(400).send({"err":error})
        
    }

});

wishRouter.post("/add", async (req, res) => {
  try {
    const wishData = new WishListModel(req.body);
    await wishData.save();
    res.status(200).send({ msg: "Added to WishList" });
  } catch (error) {
    res.status(400).send({ err: error });
  }
});

wishRouter.delete("/delete/:wishID", async (req, res) => {
     const {wishID}=req.params

    try {
        await WishListModel.findByIdAndDelete({_id:wishID})
        res.status(200).send({"msg":"Deleted"})

        
    } catch (error) {
        res.status(400).send({"error":error.message})
        
    }


});

module.exports={
    wishRouter
}
