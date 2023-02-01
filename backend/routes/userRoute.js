const { addAvatar, getAllavatar, addToGallery, getAllUsers, destroyAllUsers } = require("../Controller/userController")

const router = require("express").Router()
router
.get("/",getAllavatar)
.get("/fetch", getAllUsers)
.delete("/destroy", destroyAllUsers)
.post("/add",addAvatar)
.post("/gallery",addToGallery)
module.exports =router