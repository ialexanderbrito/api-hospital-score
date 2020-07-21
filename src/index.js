const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const path = require('path');

const app = express();

mongoose.connect(
  'mongodb+srv://hospitalscore:hospitalscore@hospitalscore-ke4bj.mongodb.net/hospital?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333, () => {
  console.info('🚀 Back-end started!');
});
