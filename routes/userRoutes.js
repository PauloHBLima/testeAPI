const express = require("express");
const router = express.Router();
const authController = require("../Controllers/authController");
const verifyToken = require('../middlewares/verifyToken');

router.post("/register", authController.create)  //criação de dados
router.post("/login", authController.login)  //login opcional
router.get("/users", authController.viewSessionId)  // dados de todas os users
router.get("/user/:id", verifyToken, authController.viewOneUser)   // dados de um unico user
router.delete("/user/:id", authController.delete)  // deletar o user

module.exports = router;