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
          $maxDistance: 25000, //Raio de busca de 25KM
        },
      },
    });

    return response.json(hospitais);
  },
};
