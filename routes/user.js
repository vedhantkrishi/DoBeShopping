const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controller/user");

const advanceResults = require("../middleware/advanceResults");
const { protect, permission } = require("../middleware/auth");
const User = require("../models/User");
const router = require("express").Router();

router.use(protect);
router.use(permission("admin"));

router.route("/")
  // .post(createUser)
  .get(advanceResults(User), getUsers); // Using advanceReslts, populate User model with users (which is received from res.advancedResults in aR)

router.route("/:id")
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
