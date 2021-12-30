require("dotenv").config();
const cors=require("cors");
const express = require("express");
const mongo = require("mongoose");
const route = require("./Routes/UserRoutes");
mongo.connect(process.env.MONGO).then(() => {
  console.log("Mongo Connected!");
});
const app = express();
const port = 3300;
app.use(cors());
app.use("/User", route);
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
