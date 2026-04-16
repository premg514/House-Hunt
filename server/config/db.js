const mongoose = require("mongoose");
require("dotenv").config();
const connect =  () =>{
  return mongoose
    .connect(process.env.MONGO_URI)
    .then((res) => console.log("DB is working!"))
    .catch((e) => console.log(e));
}
module.exports = connect;
