// const router = require('express').Router();
const db = require('../models');
const express = require('express');

const router = require('express').Router();



router.get('/Case_Detail', (req,res) => {
    db.caseDetail.findAll().then((response) => {
        console.log(response);
        res.json(response);
    })
});
router.post('/Case_Detail', (req,res) => {
    // create, takes an argument of an object describing the item we want
    // to insert into our table. In this case we just pass in an object with a text
    // and complete property ie (req.body)
    console.log(res.body);
    // create object
    db.caseDetail.create({
        itemType: req.body.itemType,
        serialNumber: req.body.serialNumber,
    }).then((response) => {
        res.json(response);
    }).catch((err) => {
        res.status(401).json(err);
    });

    // }).then((dbInventoryItem)=> {
    //     console.log(dbInventoryItem);
    //     res.json(dbInventoryItem);
    // })
})
router.post('/Part', (req,res) => {
    console.log(req.body);
    db.Post.create({
        partType: req.body.partType,
        serialNumber: req.body.serialNumber
    }).then((response) => {
        res.json(response)
    }).catch((err) => {
        res.status(401).json(err);
    })
})
router.post('/Fault', (req,res) => {
    console.log(req.body);
    db.Fault.create({
        reasonForReturn: req.body.reasonForReturn
    }).then((response) => {
        res.json(response)
    }).catch((err) => {
        res.status(401).json(err);
    })
})
router.post('/Disposition', (req,res) => {
    console.log(req.body);
    db.Post.create({
     actionTaken: req.body.actionTaken
    }).then((response) => {
        res.json(response)
    }).catch((err) => {
        res.status(401).json(err);
    })
})
// router.get('/', (req,res) => {
//     db.inventoryItem.findAll().then((response) => {
//         console.log(response);
//         res.json(response);
//     });
// });

module.exports = router;