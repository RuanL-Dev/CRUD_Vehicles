import mongoose from 'mongoose'

const FilterCarSchema = new mongoose.Schema({
  carBrand: { type: String, required: true, maxlength: 20 },
  carColour: { type: String, required: true, maxlength: 20 },
  carYear: { type: String, required: true, maxlength: 4 },
  LowestPrice: { type: String, required: true, maxlength: 12, minlength: 4 },
  HighestPrice: { type: String, required: true, maxlength: 20, minlength: 4 }
})

export default mongoose.models.FilterCar || mongoose.model('FilterCar', FilterCarSchema)
