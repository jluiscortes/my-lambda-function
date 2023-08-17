const {
  CREDIT_CARD_TOKEN,
  CREDIT_CARD_VALID,
} = require("../config/environments.config");
const { areObjectsEqual } = require("../utils/credit-card.utils");

async function executeQuery(creditCardProperties) {
  const isCreditCardValid = await areObjectsEqual(
    creditCardProperties,
    CREDIT_CARD_VALID
  );
  return isCreditCardValid ? CREDIT_CARD_TOKEN : null;
}

module.exports = {
  execute: executeQuery,
};
