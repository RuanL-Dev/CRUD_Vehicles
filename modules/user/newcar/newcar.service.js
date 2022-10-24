/* eslint-disable no-useless-catch */
import NewCar from './newcar.model'

export const addNewCarUser = async (body) => {
  try {
    const newCar = { ...body }
    const dbNewcar = await NewCar.create(newCar)
    return dbNewcar
  } catch (err) {
    throw err
  }
}
