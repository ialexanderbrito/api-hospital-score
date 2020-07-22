const Hospital = require('../models/Hospital');

module.exports = {
  async index(request, response) {
    const hospitais = await Hospital.find();

    return response.json(hospitais);
  },

  async store(request, response) {
    const { filename } = request.file;
    const {
      id,
      name,
      uf,
      city,
      type_hospital,
      latitude,
      longitude,
    } = request.body;

    const location = {
      type: 'Point',
      coordinates: [longitude, latitude],
    };

    const hospital = await Hospital.create({
      id,
      name,
      uf,
      city,
      type_hospital,
      image_url: filename,
      location,
    });

    return response.json(hospital);
  },

  async id(request, response) {
    const hospitais = await Hospital.findOne({ _id: request.params.id });

    return response.json(hospitais);
  },

  async delete(request, response) {
    const id = await Hospital.deleteOne({ _id: request.params.id });

    await Hospital.deleteOne({ id });

    return response.send('Deleted');
  },
};
