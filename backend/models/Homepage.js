// backend/models/Homepage.js
import mongoose from 'mongoose';

const homepageSchema = new mongoose.Schema({
  heroTitle: String,
  heroSubtitle: String,
  bannerImage: String,
  featuredProductIds: [mongoose.Schema.Types.ObjectId],
});

export default mongoose.model('Homepage', homepageSchema);
