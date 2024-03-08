
const connectDB = require("./db/connect");
const Product = require("./models/product");
const productjson = require("./product.json");

const start = async() => {
    try {
        await connectDB(process.env.uri);
        await Product.deleteMany();
        await Product.create(productjson);
        console.log("succeess");
    } catch (error) {
        console.log(error);
    }
}

start();
