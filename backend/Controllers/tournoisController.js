const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;

const { tournoisModel } = require("../models/tournoisModel");

router.get('/', (req, res) => {
    tournoisModel.find((err, docs) => {
        if (!err) res.send(docs);
        else console.log(err);
    })
})

/*exports.findAll = (req, res) => {
    tournoisModel.find((err, docs) => {
        if(!err) res.send(docs);
        else console.log(err);
    })
}*/

exports.findOne = (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID unknow :" + req.params.id)

    tournoisModel.findById(
        req.params.id,
        (err, docs) => {
        if (!err) res.send(docs);
        else console.log(err);
    })
}

exports.add = (req,res) => {
    const newRecord = new tournoisModel({
        nom: req.body.nom,
        debut: req.body.debut,
        fin: req.body.fin,
        ville: req.body.ville,
        pays: req.body.pays,
        surface: req.body.surface,
        creation: req.body.creation
    });

    newRecord.save((err,docs) => {
        if(!err) res.send(docs);
        else console.log(err);
    })
}

exports.modify = (req,res) => {
    if(!ObjectID.isValid(req.params.id)) 
        return res.status(400).send("ID unknow :" + req.params.id)
    
    const updateRecord = {
        nom: req.body.nom,
        debut: req.body.debut,
        fin: req.body.fin,
        ville: req.body.ville,
        pays: req.body.pays,
        surface: req.body.surface,
        creation: req.body.creation
    };

    tournoisModel.findByIdAndUpdate(
        req.params.id,
        {$set: updateRecord},
        {new: true},
        (err, docs) => {
            if(!err) res.send(docs);
            else console.log(err);
        }
    )

}

exports.suppr = (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID unknow :" + req.params.id)

    tournoisModel.findByIdAndRemove(
        req.params.id,
        (err,docs) => {
            if(!err) res.send(docs);
            else console.log(err);
        }
    );
}

module.exports = router;