/* eslint-disable no-useless-catch */
import FilterCar from './filtercar.model'

export const filterCarUser = async (body) => {
  try {
    const userfiltercar = { ...body }
    const dbFilterCar = await FilterCar.create(userfiltercar)
    return dbFilterCar
  } catch (err) {
    throw err
  }
}

export const getCars = async (limit = 10) => {
  return await FilterCar.find()
}