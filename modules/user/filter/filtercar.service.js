/* eslint-disable no-useless-catch */
import NewCar from '../newcar/newcar.model'

export const filterCarUser = async (body) => {
  try {
    const userfiltercar = { ...body }
    const dbFilterCar = await FilterCar.create(userfiltercar)
    return dbFilterCar
  } catch (err) {
    throw err
  }
}

export const getCars = async (limit = 6) => {
  return await NewCar.find().sort({ carYear: -1 }).limit(limit)
}
