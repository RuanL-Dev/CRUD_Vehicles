import Joi from 'joi'
import joiObjectid from 'joi-objectid'
Joi.objectId = joiObjectid(Joi)

export const newcarSchema = Joi.object({
  carModel: Joi.string().required().max(30),
  carBrand: Joi.string().required().max(20),
  carColor: Joi.string().required().max(30),
  carDescription: Joi.string().required().max(70),
  carYear: Joi.string().required().max(4).min(4),
  carPlate: Joi.string().required().max(15),
  carPrice: Joi.string().required().max(15)
})

export const filterSchema = Joi.object({
  carBrand: Joi.string().required().max(25),
  carColour: Joi.string().required().max(30),
  carYear: Joi.string().required().max(4).min(4),
  LowestPrice: Joi.string().required().max(15),
  HighestPrice: Joi.string().required().max(20)
})

export const deleteCarSchema = Joi.object({
  id: Joi.objectId().required()
})

export const editCarSchema = Joi.object({
  id: Joi.objectId().required(),
  carModel: Joi.string().required().max(30),
  carPrice: Joi.string().required().max(15),
  carDescription: Joi.string().required().max(70),
  carYear: Joi.string().required().max(4).min(4)
})