require("dotenv").config();
const CREDIT_CARD_TOKEN = process.env.CREDIT_CARD_TOKEN;
const CREDIT_CARD_VALID = {
  email: "gian.corzo@gmail.com",
  card_number: "4111111111111111",
  cvv: "123",
  expiration_year: "2025",
  expiration_month: "09",
};
const PORT = process.env.PORT || 8080;

module.exports = {
  CREDIT_CARD_TOKEN,
  CREDIT_CARD_VALID,
  PORT,
};
