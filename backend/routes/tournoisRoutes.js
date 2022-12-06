const express = require('express');
const axios = require('axios');
// Lodash utils library
const _ = require('lodash');

const router = express.Router();
const tournoisController = require("../controllers/tournoisController");


router.get('/', tournoisController.findAll);

router.get('/:id', tournoisController.findOne);

router.put('/', tournoisController.add);

router.delete('/:id', tournoisController.suppr);

router.post('/:id', tournoisController.modify);

module.exports = router;
