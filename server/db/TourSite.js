import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TourSiteSchema = new Schema({
  name: String,
  seasonPhotos: [{
    _id: false,
    month: Number,
    img: String
  }],
  foodPhotos: [String],
  activity: [String],
  flightFee: Number,
  dailyFee: Number,
  description: String,
});

module.exports = {
  TourSite: mongoose.model('TourSite', TourSiteSchema)
}