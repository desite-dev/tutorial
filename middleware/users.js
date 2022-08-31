const joi = require("joi");
const logger = require("../utils/logger");

const validateCreateUser = async (req, res, next) => {
  const schema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    country: joi.string(),
  });

  try {
    await schema.validateAsync(req.body);
    return next();
  } catch (error) {
    logger.error("An error occurred creating user");
    return next(error);
  }
};

module.exports = {
  validateCreateUser,
};
