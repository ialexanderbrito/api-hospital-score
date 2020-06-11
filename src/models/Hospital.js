const mongoose = require('mongoose');
const PointSchema = require('../utils/PointSchema');

const HospitalSchema = new mongoose.Schema(
  {
    name: String,
    uf: String,
    city: String,
    image_url: String,
    type_hospital: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    location: {
      type: PointSchema,
      index: '2dsphere',
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

HospitalSchema.virtual('image_uri').get(function () {
  return `http://192.168.100.4:3333/files/${this.image_url}`;
});

module.exports = mongoose.model('Hospital', HospitalSchema);
