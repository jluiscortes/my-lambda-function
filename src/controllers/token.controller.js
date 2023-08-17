const CreditCard = require("../models/credit-card.model");
const creditCardShema = require("../schema/credit-card.schema");
async function validateCreditCard(req, res, next) {
  try {
    const { error } = creditCardShema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });
    const { email, card_number, cvv, expiration_year, expiration_month } =
      req.body;
    const creditCard = new CreditCard(
      email,
      card_number,
      cvv,
      expiration_year,
      expiration_month
    );
    const tokenCreditCard = await creditCard.verifyCreditCard();
    if (tokenCreditCard) {
      req.tokenCreditCard = tokenCreditCard;
      return res.status(200).json({ token: tokenCreditCard });
    } else {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  validateCreditCard,
};
