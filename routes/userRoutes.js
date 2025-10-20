const router = require("express").Router();
const UserController = require("../src/controllers/userController");


router.post("/cadastro", UserController.cadastrar);


router.post("/login", UserController.login);


router.post("/verifica", UserController.verificaAutenticacao, (req, res) => {
  res.json({
    msg: "Token válido!",
    usuarioId: req.usuarioId
  });
});


router.post(
  "/admin",
  UserController.verificaAutenticacao, // autentica
  UserController.verificaIsAdmin,      // verifica se é admin
  (req, res) => {
    res.json({ msg: "Bem-vindo, administrador!" });
  }
);

module.exports = router;
