const Joi = require("joi");

const addContactShema = Joi.object({
  name: Joi.string().required(),
  phone: Joi.string().required(),
  email: Joi.string().required(),
});

module.exports = addContactShema;