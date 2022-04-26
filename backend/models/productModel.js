import mongoose from "mongoose";

const productSchema  = new mongoose.Schema(
    {
        cartype: { type:String, required: true, unique: true},
        service: { type:String, required: true},
        price: { type:Number, required: true},
        quantity: { type:Number, required: true},
        img: { type:String, required: true},
        img_car: { type:String, required: true},
    },
    {
        timestamps: true
    }
);


const Product = mongoose.model('Product', productSchema);
export default Product;