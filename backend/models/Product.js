import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  category: String,
  sizes: [String],
  colors: [String],
  images: [String],
  isFeatured: Boolean,
});

export default mongoose.model('Product', productSchema);
