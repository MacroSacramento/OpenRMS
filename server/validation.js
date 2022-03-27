const Joi = require("joi");

const userSchema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(6)
        .required(),
    password: Joi.string()
        .pattern(new RegExp('^((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$)'))
        .required()
})

module.exports = userSchema