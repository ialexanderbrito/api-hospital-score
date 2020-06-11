const mongoose = require('mongoose');
const PointSchema = require('../utils/PointSchema');

const HospitalSchema = new mongoose.Schema({
  name: String,
  uf: String,
  city: String,
  image_url: String,
  type_hospital: String,
  location: {
    type: PointSchema,
    index: '2dsphere',
  },
});

module.exports = mongoose.model('Hospital', HospitalSchema);
