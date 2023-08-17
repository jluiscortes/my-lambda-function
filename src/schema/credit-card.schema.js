const Joi = require("joi");
const currentYear = new Date().getFullYear();

const creditCardSchema = Joi.object({
  email: Joi.string().email().min(5).max(100).required(),
  card_number: Joi.string().min(13).max(16).required(),
  cvv: Joi.string().min(3).max(4).required(),
  expiration_year: Joi.string()
    .regex(/^\d{4}$/)
    .min(4)
    .max(4)
    .valid(
      `${currentYear}`,
      `${currentYear + 1}`,
      `${currentYear + 2}`,
      `${currentYear + 3}`,
      `${currentYear + 4}`
    )
    .required(),
  expiration_month: Joi.string().min(1).max(2).required(),
});

module.exports = creditCardSchema;
