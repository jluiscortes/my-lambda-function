const { Router } = require("express");
const tokenController = require("../controllers/token.controller");
const router = Router();

router.post("/tokens", tokenController.validateCreditCard);

module.exports = {
  routes: router,
};
