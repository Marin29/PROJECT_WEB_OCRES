const express = require('express');
const app = express();
require('./models/dbConfig');
const tournoisControllers = require('./Controllers/tournoisController');
const bodyParser = require('body-parser');
const cors = require('cors');
//const mongoose = require('mongoose');

//mongoose.set('useFindAndModify', false);

app.use(bodyParser.json());
app.use(cors());
app.use('/', tournoisControllers);

app.listen(5500, () => console.log('Server started: 5500'));