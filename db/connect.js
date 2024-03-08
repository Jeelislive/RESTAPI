const mongoose = require('mongoose');

uri = "mongodb+srv://jeelrupareliya255:jilu3333@cluster01.jiyyihh.mongodb.net/Cluster01?retryWrites=true&w=majority&appName=Cluster01";

const connectDb = () => {
    console.log("connected db")
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })
}

module.exports = connectDb;