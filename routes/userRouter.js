const express = require("express");
const {
  getUserInfo,
  getAllUsersInfo,
  addNewUser,
} = require("../controllers/userController");

const router = express.Router();

// Rutas
router.get("/", getAllUsersInfo);
router.post("/", addNewUser);
router.get("/details", getUserInfo);

module.exports = router;
