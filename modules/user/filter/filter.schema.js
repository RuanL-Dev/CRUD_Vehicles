import Joi from 'joi'

export const filterSchema = Joi.object({
  carBrand: Joi.string().required().max(20),
  carColour: Joi.string().required().max(20),
  carYear: Joi.string().required().max(4),
  LowestPrice: Joi.string().required().max(12).min(4),
  HighestPrice: Joi.string().required().max(20)
})
