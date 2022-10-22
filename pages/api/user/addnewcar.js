import { addNewCarUser } from '../../../modules/user/newcar.service'

function addNewCar(req, res) {
  addNewCarUser()
  res.status(200).json({ teste: 'entrou no newcarSearch, né' })
}

export default addNewCar
