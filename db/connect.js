const mongoose = require('mongoose');


const connectDb = (uri) => {
    console.log("connected db")
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })
}

module.exports = connectDb;