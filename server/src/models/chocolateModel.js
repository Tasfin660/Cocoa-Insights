import mongoose from 'mongoose';

const ChocolateSchema = new mongoose.Schema({
  brand: String,
  brand_link: String,
  name: String,
  image: String,
  rate: Number,
  shop_link: String,
});

const ChocolateModel = mongoose.model('chocolates', ChocolateSchema);

export default ChocolateModel;
