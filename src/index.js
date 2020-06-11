const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect(
  'mongodb+srv://hospitalscore:hospitalscore@hospitalscore-ke4bj.mongodb.net/hospital?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(express.json());
app.use(routes);

app.listen(3333);
