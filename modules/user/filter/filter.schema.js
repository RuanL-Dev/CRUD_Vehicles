import Joi from 'joi'

export const filterSchema = Joi.object({
  carBrand: Joi.string().required().max(25),
  carColour: Joi.string().required().max(30),
  carYear: Joi.string().required().max(4).min(4),
  LowestPrice: Joi.string().required().max(15).min(4),
  HighestPrice: Joi.string().required().max(20)
})
