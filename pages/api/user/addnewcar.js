import Joi from 'joi'

import createHandler from '../../../lib/middlewares/nextConnect'

import validate from '../../../lib/middlewares/validation'

import { addNewCarUser } from '../../../modules/user/newcar.service'

const postSchema = Joi.object({
  carModel: Joi.string().required().max(20),
  carBrand: Joi.string().required().max(20),
  carColor: Joi.string().required().max(8),
  carYear: Joi.string().required().max(4).min(4),
  carPlate: Joi.string().required().max(10)
})

const addNewCar = createHandler()

addNewCar.post(validate({ body: postSchema }), (req, res) => {
  addNewCarUser(req.body)
  res.status(200).json({ teste: 'entrou no newcarSearch, né' })
})

export default addNewCar
