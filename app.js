require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const pruduct_api = require("./routes/product");
const connectDb = require("./db/connect")

app.get('/', (req, res) => {
    res.send("hi, i am  alive");
});

app.use("/api/products", pruduct_api)

const start = async () => {

    try {
        await connectDb(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`server is started at this port :${ PORT }`); 
        });

    } catch (error) {
        console.log(error);
    }
};

start();