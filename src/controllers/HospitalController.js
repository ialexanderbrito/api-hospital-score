const Hospital = require('../models/Hospital');

module.exports = {
  async index(request, response) {
    const hospitais = await Hospital.find();

    return response.json(hospitais);
  },

  async store(request, response) {
    const { filename } = request.file;
    const { name, uf, city, type_hospital, latitude, longitude } = request.body;

    const location = {
      type: 'Point',
      coordinates: [longitude, latitude],
    };

    const hospital = await Hospital.create({
      name,
      uf,
      city,
      type_hospital,
      image_url: filename,
      location,
    });

    return response.json(hospital);
  },
};
