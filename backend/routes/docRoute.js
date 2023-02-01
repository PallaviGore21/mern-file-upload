const { addDocController, getAlldocsController } = require("../Controller/docController")

const router = require("express").Router()

router
.get("/fetch",getAlldocsController)
.post("/add", addDocController)

module.exports = router