const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/").post(userController.create);

// Matches with "/api/users/:id"
router.route("/:id").get(userController.findById);

module.exports = router;
