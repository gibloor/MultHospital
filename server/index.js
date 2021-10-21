const express = require("express");
const app = express();
const cors = require('cors');

const questions = require('./modules/questions');
const accounts = require('./modules/accounts');
const multfilms = require('./modules/multfilms');
const watched = require('./modules/watched');

app.use(cors());
app.use(express.json());

app.use('/questions', questions);
app.use('/accounts', accounts);
app.use('/multfilms', multfilms);
app.use('/watched', watched);

app.listen(5000, () => {
  console.log('server has started on port 5000');
});