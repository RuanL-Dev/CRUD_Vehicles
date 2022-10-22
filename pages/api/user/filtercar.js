import Joi from 'joi'

import createHandler from '../../../lib/middlewares/nextConnect'

import validate from '../../../lib/middlewares/validation'

import { filterCarUser } from '../../../modules/user/filtercar.service'

const postSchema = Joi.object({
  tradeMark: Joi.string().required().max(20),
  tradeMarkColour: Joi.string().required().max(20),
  tradeMarkYear: Joi.string().required().max(5),
  LowestPrice: Joi.string().required().max(10).min(4),
  HighestPrice: Joi.string().required().max(20).min(4)
})

const carFilter = createHandler()

carFilter.post(validate({ body: postSchema }), (req, res) => {
  filterCarUser(req, res)
  res.status(200).json({ teste: 'entrou no FilterCar, ne' })
})

export default carFilter
