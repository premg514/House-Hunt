const house = require("../models/houseModels")
function getHouse(req,res){

    res.status(200).json({
        message:"data came",

    })
}
module.exports = {getHouse}