const db = require("../database/database.bank");
class CreditCard {
  constructor(email, card_number, cvv, expiration_year, expiration_month) {
    this.email = email;
    this.card_number = card_number;
    this.cvv = cvv;
    this.expiration_year = expiration_year;
    this.expiration_month = expiration_month;
  }
  async verifyCreditCard() {
    const tokenCreditCard = await db.execute(this);
    return tokenCreditCard;
  }
}

module.exports = CreditCard;
