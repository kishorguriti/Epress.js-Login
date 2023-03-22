var express = require("express");
var router = express.Router();
const UserController = require("../controllers/Myusers");
/* GET users listing. */
router.get("/", UserController.getUsers);
router.post("/", UserController.createUser);
router.delete("/:id", UserController.DeleteUser);
router.put("/:id", UserController.UpdateUser);
router.get("/:id", UserController.getSingleUser);

module.exports = router;
