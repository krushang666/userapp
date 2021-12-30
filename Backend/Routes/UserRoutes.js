const express = require('express')
const route=express.Router();
route.use(express.json());

const UserController=require("../Controller/UserController");

route.get("/",UserController.Default);
route.post("/addUser",UserController.addUser);
route.post("/checkLogin",UserController.checkLogin);
route.post("/update",UserController.update);
route.get("/fetchUserFromId/:id",UserController.fetchUserFromId);
route.get("/delete/:id",UserController.delete);
module.exports=route;