const express = require("express");
const router = express.Router();
const authController = require("../Controllers/authController");
const verifyToken = require('../middlewares/verifyToken');

router.post("/register", authController.create)  //criação de dados
router.post("/login", authController.login)  //login opcional
router.get("/session_id", authController.viewSessionId)  // dados de todas as session_id
router.get("/user/:id", verifyToken, authController.viewOneUser)   // dados de um unico user
router.delete("/user/:id", authController.delete)  // deletar o user

module.exports = router;