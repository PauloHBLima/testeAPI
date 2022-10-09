const express = require("express");
const router = express.Router();
const authController = require("../Controllers/authController");
const validaRegistraUser = require('../middlewares/validaRegistraUser')

router.post("/register", validaRegistraUser, authController.create)  //criação de dados
router.post("/login", validaRegistraUser, authController.login)  //login opcional
router.get("/session_id", authController.viewSessionId)  // dados de todas as session_id
router.get("/:id", authController.viewOneUser)   // dados de um unico user
router.delete("/:id", authController.delete)  // deletar o user

module.exports = router;