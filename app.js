const express = require('express');
const bodyParser = require('body-parser');

const WordsRouter = require('./routes/Word');

const cors = require('cors'); 


const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/words', WordsRouter);

module.exports = app;