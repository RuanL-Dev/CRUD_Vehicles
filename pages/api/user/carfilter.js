import Joi from 'joi'

import createHandler from '../../../lib/middlewares/nextConnect'

import validate from '../../../lib/middlewares/validation'

import { filterCarUser } from '../../../modules/user/filtercar.service'

const postSchema = Joi.object({
  carBrand: Joi.string().required().max(20),
  carColour: Joi.string().required().max(20),
  carYear: Joi.string().required().max(4),
  LowestPrice: Joi.string().required().max(12).min(4),
  HighestPrice: Joi.string().required().max(20)
})

const carFilter = createHandler()

carFilter.post(validate({ body: postSchema }), async (req, res) => {
  try {
    const carFilter = await filterCarUser(req.body)
    res.status(200).json(carFilter)
  } catch (err) {
    console.error(err)
    throw err
  }
})

export default carFilter
