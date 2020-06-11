const { Router } = require('express');
const multer = require('multer');

const uploadConfig = require('./config/upload');

const HospitalController = require('./controllers/HospitalController');
const UserController = require('./controllers/UserController');
const SearchController = require('./controllers/SearchController');

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/users', UserController.store);

routes.get('/search', SearchController.index);

routes.get('/hospitais', HospitalController.index);
routes.post('/hospitais', upload.single('image_url'), HospitalController.store);

module.exports = routes;
