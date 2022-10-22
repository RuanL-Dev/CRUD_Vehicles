/* eslint-disable no-useless-catch */
import Newcar from './newcar.model'

export const addNewCarUser = async (body) => {
  try {
    const newCar = { ...body }
    const dbNewcar = await Newcar.create(newCar)
    return dbNewcar
  } catch (err) {
    throw err
  }
}
