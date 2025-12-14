const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () =>{
    mongoose.connect(process.env.MONGODB_URL,{
        // useNewUrlParser :true,
        // useNewTopology:true,
    })
    .then(()=> console.log("DB Connected Successfully"))
    .catch((error) =>{
        console.log("DB Connection Failed");
        console.error(error);
        process.exitCode(1);
    })
}