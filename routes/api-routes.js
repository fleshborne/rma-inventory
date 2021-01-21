// const router = require('express').Router();
const db = require('../models');
const express = require('express');
const router = require('express').Router();
router.get('/', (req,res) => res.send('inventory'))
router.post('/', (req,res) => {
    db.inventoryItem.create({
    projectName: req.body.projectName,
    internalContact: req.body.internalContact,
    trackingId: req.body.trackingId,
    carrier: req.body.carrier,
    itemValue: req.body.itemValue,
    dateReceived: req.body.dateReceived,
    dateTested: req.body.dateTested,
    manufactureDate: req.body.manufactureDate,
    dateSentManufacture: req.body.dateSentManufacture,
    serialNumber: req.body.serialNumber,
    reasonForReturn: req.body.reasonForReturn,
    returnToProd: req.body.returnToProd,
    returnToStock: req.body.returnToStock,
    returnToManufacture: req.body.returnToManufacture,
    repairInHouse: req.body.repairInHouse,
    })
})

router.get('/', (req,res) => {
    db.inventoryItem.findAll().then((response) => {
        console.log(response);
        res.json(response);
    });
});

module.exports = router;