import createHandler from '../../../lib/middlewares/nextConnect'
import validate from '../../../lib/middlewares/validation'
import { addNewCarUser } from '../../../modules/user/newcar/newcar.service'
import { newcarSchema } from '../../../modules/user/newcar/newcar.schema'

const addNewCar = createHandler()

addNewCar.post(validate({ body: newcarSchema }), async (req, res) => {
  try {
    const newCar = await addNewCarUser(req.body)
    res.status(201).json(newCar)
  } catch (err) {
    return res.status(400).send(err.message)
  }
})

export default addNewCar
