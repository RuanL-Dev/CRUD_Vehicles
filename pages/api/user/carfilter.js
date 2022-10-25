import createHandler from '../../../lib/middlewares/nextConnect'
import validate from '../../../lib/middlewares/validation'
import { filterCarUser, getCars } from '../../../modules/user/filter/filtercar.service'
import { filterSchema } from '../../../modules/user/filter/filter.schema'

const carFilter = createHandler()

carFilter.get(async (req, res) => {
  try {
    const filter = await getCars()
    res.status(200).send(filter)
  } catch (err) {
    return res.status(500).send(err.message)
  }
})

export default carFilter
