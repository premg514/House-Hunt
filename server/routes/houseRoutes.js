const router = require("express").Router();
const { getHouse } = require("../controllers/houseControllers");
router.get("/", getHouse);

module.exports = router;
