import validate from '../../../lib/middlewares/validation'
import createHandler from '../../../lib/middlewares/nextConnect'
import { getCars, editCar } from '../../../modules/cars/car.service'
import { editCarSchema } from '../../../modules/cars/car.schema'

const carFilter = createHandler()

carFilter
  .get(async (req, res) => {
    try {
      const filter = await getCars()
      res.status(200).send(filter)
    } catch (err) {
      return res.status(500).send(err.message)
    }
  })
  .patch(validate(editCarSchema), async (req, res) => {
    try {
      const refreshEditCar = await editCar(req.body)
      if (refreshEditCar) res.status(201).send({ ok: true })
      return res.status(400).send(res.message)
    } catch (err) {
      return res.status(500).send(err.message)
    }
  })

export default carFilter
