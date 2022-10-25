/* eslint-disable no-useless-catch */
import NewCar from '../newcar/newcar.model'

export const getCars = async (limit = 6) => {
  return await NewCar.find().sort({ carYear: -1 }).limit(limit)
}

export const deleteCar = async (id) => {
  return await NewCar.findOneAndDelete({
    _id: id
  })
}
