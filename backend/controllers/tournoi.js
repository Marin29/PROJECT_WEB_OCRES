const mongoose = require('mongoose');
const axios = require('axios');

const gChelem = require('../models/tournoi');

exports.findAll = (req, res) => {
    gChelem.find({}).then((tournois) => {
        // Get List of tournaments and return JSON
        res.status(200).json({ tournois });
    })
}

exports.findOne = (req, res) => {
    const { id } = req.params;

    // Find tournament which has [id] name in DB
    Tournoi.findOne({ tournoi: id })
        .then(tournoi => {
            if (tournoi) {
                // Return movie
                res.status(200).json({
                    message: 'Tournament found!',
                    movie
                });
            } else {
                res.status(404).json({
                    message: `Tournament ${id} not found!`
                });
            }
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: 'Tournament not found with id' + req.paramas.tournoiId
                });
            }

            return res.status(500).send({
                message: 'Error retrieving movie with id' + req.paramas.tournoiId
            });
        })
}



