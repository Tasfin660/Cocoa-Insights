import mongoose from 'mongoose';

const PremiumSchema = new mongoose.Schema({
  brand: String,
  country: String,
  brand_link: String,
  name: String,
  image: String,
  shop_link: String,
});

const PremiumModel = mongoose.model('premiums', PremiumSchema);

export default PremiumModel;
