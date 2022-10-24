import Joi from 'joi'

export const newcarSchema = Joi.object({
  carModel: Joi.string().required().max(30),
  carBrand: Joi.string().required().max(20),
  carColor: Joi.string().required().max(30),
  carYear: Joi.string().required().max(4).min(4),
  carPlate: Joi.string().required().max(15),
  carPrice: Joi.string().required().max(15)
})
