import { filterCarUser } from '../../../modules/user/filtercar.service'

function carFilter(req, res) {
  filterCarUser()
  res.status(200).json({ teste: 'entrou no FilterCar, ne' })
}

export default carFilter
