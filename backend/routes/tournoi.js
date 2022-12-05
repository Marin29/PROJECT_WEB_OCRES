const express = require('express');
const axios = require('axios');
// Lodash utils library
const _ = require('lodash');

const router = express.Router();
const controller = require("../controllers/tournoi");


const movies = [];
/* GET tournaments listing. */
router.get('/', controller.findAll);

/* GET one tournament. */
router.get('/:id', controller.findOne);

module.exports = router;
