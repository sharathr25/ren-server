const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  category: {
    type: String,
    enum: [
      'ELECTRONICS',
      'LIFESTYLE',
      'HOME',
      'EDUCATION',
      'VEHICLES',
      'SPORTS',
      'FITNESS'
    ],
    uppercase: true
  },
  for: {
    type: String,
    enum: ['RENT', 'SALE'],
    uppercase: true,
    required: true
  },
  per: {
    type: String,
    enum: ['HOUR', 'DAY', 'WEEK', 'MONTH', 'YEAR'],
    uppercase: true,
    required: function () {
      return Boolean(this.for && this.for.toUpperCase() === 'RENT')
    }
  },
  images: { type: [String], validate: v => Array.isArray(v) && v.length > 0 },
  location: {
    type: String,
    coordinates: [Number]
  },
  address: {
    pincode: Number,
    doorNumber: String,
    street: String,
    city: String,
    state: String,
    country: String
  },
  date: { type: Date, default: Date.now },
  disclosePhoneNumber: { type: Boolean, default: false },
  sellerId: { type: mongoose.Schema.Types.ObjectId, required: true },
  buyerId: mongoose.Schema.Types.ObjectId
})

const Product = mongoose.model('Product', productSchema)

export default Product
