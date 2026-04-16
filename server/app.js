const express = require("express");
const app = express();
const connect = require("./config/db");
const houseRoutes = require("./routes/houseRoutes");
app.use(express.json());
connect();

app.use("/house", houseRoutes);
app.use("/", (req, res) => res.send("working"));

app.listen(8080, () => console.log("server is runnning"));
