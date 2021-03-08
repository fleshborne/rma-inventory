// const router = require('express').Router();
const db = require('../models');
const express = require('express');
const router = require('express').Router();



router.get('/caseDetail', (req,res) => {
    db.CaseDetail.findAll({
        include: [db.Case]
    }).then((response) => {
        console.log(response);
        res.json(response);
    })
});
router.post('/rma_inventory', (req,res) => {
    // create, takes an argument of an obhect describing the item we want
    // to insert into our table. In this case we just pass in an object with a text
    // and complete property ie (req.body)
    console.log(res.body);
    // create object
    db.CaseDetail.create({
        itemType: req.body.itemType,
        serialNumber: req.body.serialNumber,
    }).then((response) => {
        res.json(response);
    }).catch((err) => {
        res.status(401).json(err);
    });
    // db.inventoryItem.create({
    // projectName: req.body.projectName,
    // internalContact: req.body.internalContact,
    // trackingId: req.body.trackingId,
    // carrier: req.body.carrier,
    // itemValue: req.body.itemValue,
    // dateReceived: req.body.dateReceived,
    // dateTested: req.body.dateTested,
    // manufactureDate: req.body.manufactureDate,
    // dateSentManufacture: req.body.dateSentManufacture,
    // serialNumber: req.body.serialNumber,
    // reasonForReturn: req.body.reasonForReturn,
    // returnToProd: req.body.returnToProd,
    // returnToStock: req.body.returnToStock,
    // returnToManufacture: req.body.returnToManufacture,
    // repairInHouse: req.body.repairInHouse,
    // }).then((dbInventoryItem)=> {
    //     console.log(dbInventoryItem);
    //     res.json(dbInventoryItem);
    // })
})

// router.get('/', (req,res) => {
//     db.inventoryItem.findAll().then((response) => {
//         console.log(response);
//         res.json(response);
//     });
// });

module.exports = router;