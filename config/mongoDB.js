const mongoose = require("mongoose");

const connection = async ()=>{
    try{
        const data = await mongoose.connect(process.env.MONGOURI)
        if(data){
            console.log("DBconnected!");
        }
    }
    catch(err){
        console.log(err);
        process.exit;
    }
}

module.exports = connection;


