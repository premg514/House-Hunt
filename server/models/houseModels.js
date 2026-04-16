const { Mongoose, default: mongoose } = require("mongoose");

const schema = {
  name: String,
  price: Number,
};
const mongooseSchema = new mongoose.Schema(schema);
const house = mongoose.model("house", mongooseSchema);
module.exports = house;
