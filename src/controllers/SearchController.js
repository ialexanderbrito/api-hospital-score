const Hospital = require('../models/Hospital');

module.exports = {
  async index(request, response) {
    const { latitude, longitude, type_hospital } = request.query;

    const hospitais = await Hospital.find({
      type_hospital: {
        $in: type_hospital,
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000,
        },
      },
    });

    return response.json(hospitais);
  },
};
