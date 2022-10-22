import mongoose from 'mongoose'

const FilterCarSchema = new mongoose.Schema({
  tradeMark: { type: String, required: true, maxlength: 20 },
  tradeMarkColour: { type: String, required: true, maxlength: 20 },
  tradeMarkYear: { type: String, required: true, maxlength: 4 },
  LowestPrice: { type: String, required: true, maxlength: 10, minlength: 4 },
  HighestPrice: { type: String, required: true, maxlength: 20, minlength: 4 }
})

export default mongoose.models.FilterCar || mongoose.model('FilterCar', FilterCarSchema)
