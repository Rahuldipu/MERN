import mongoose from "mongoose";
import Product from "../models/product.js";
import products from "./data.js";

const seedProducts = async () => {
    try {
        await mongoose.connect("mongodb+srv://admin:admin@cluster0.068hl09.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0");

        await Product.deleteMany();
        console.log("Products are deleted");

        await Product.insertMany(products);
        console.log("Products are inserted");
        process.exit();
    } catch (error) {
        console.log(error.message);
        process.exit();
    }
};

seedProducts();
