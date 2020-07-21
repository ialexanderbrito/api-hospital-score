const { Router } = require('express');
const multer = require('multer');

const uploadConfig = require('./config/upload');

const HospitalController = require('./controllers/HospitalController');
const SearchController = require('./controllers/SearchController');

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/hospitais', HospitalController.index);
routes.get('/hospitais/:id', HospitalController.id);
routes.post('/hospitais', upload.single('image_url'), HospitalController.store);

routes.get('/search', SearchController.index);

module.exports = routes;
