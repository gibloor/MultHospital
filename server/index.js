const express = require("express");
const app = express();
const cors = require('cors');

app.use(express.json({limit: '3mb'}));
app.use(express.urlencoded({limit: '3mb'}));

const questions = require('./modules/questions');
const accounts = require('./modules/accounts');
const multfilms = require('./modules/multfilms');
const watched = require('./modules/watched');
const images = require('./modules/images');

app.use(cors());
app.use(express.json());

app.use('/questions', questions);
app.use('/accounts', accounts);
app.use('/multfilms', multfilms);
app.use('/watched', watched);
app.use('/images', images);

app.listen(5000, () => {
  console.log('server has started on port 5000');
});