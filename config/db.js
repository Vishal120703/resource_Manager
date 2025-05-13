const mongoose = require("mongoose")
const connectDB = async() =>{

try{
    async function main(){
    await mongoose.connect("mongodb://localhost:27017/resource_Manager");
    }
    main();
    console.log("connected");

}
catch{
    console.log("there is an error")

}
}
module.exports = connectDB;