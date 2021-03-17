// const router = require('express').Router();
const db = require('../models');
const router = require('express').Router();
const passport = require('../config/passport');
// Get Requests##################

router.get('/Case_Detail', (req,res) => {
    db.caseDetail.findAll({
        include: [db.Part,db.Fault,db.Disposition]
    }).then((response) => {
        console.log(response);
        res.json(response);
    })
});
router.get('/Part', (req,res) => {
    db.Part.findAll().then((response) => {
        console.log(response);
        res.json(response);
    })
})
router.get('/Fault', (req,res) => {
    db.Fault.findAll().then((response) => {
        console.log(response);
        res.json(response);
    })
})
router.get('/Disposition', (req,res) => {
    db.Disposition.findAll().then((response) => {
        console.log(response);
        res.json(response);
    })
})
router.get('/Part', (req,res) => {
    db.Part.findAll().then((response) => {
        console.log(response);
        res.json(response);
    })
})
router.get('/Supplier', (req,res)=>{
    db.Supplier.findAll().then((response) => {
        console.log(response);
        res.json(response);
    })
})
router.get('/Case', (req,res) => {
    db.Case.findAll({
        include: [db.Site,db.Contact,db.User]
    }).then((response) => {
        console.log(response);
        res.json(response);
    })
})
router.get('/Site', (req,res) => {
    db.Site.findAll().then((response) => {
        console.log(response);
        res.json(response);
    }).catch((err) => {
        res.status(401).json(err);
    });
})
router.get('/Contact', (req,res) => {
    db.Contact.findAll().then((response) => {
        console.log(response);
        res.json(response);
    }).catch((err) => {
        res.status(401).json(err);
    });
})
router.get('/User', (req,res) => {
    db.User.findAll().then((response)  => {
        console.log(response);
        res.json(response);
    }).catch((err) => {
        res.status(401).json(err);
    });
})
// Post Requests ##############################################
router.post('/login', passport.authenticate('local'), function (req, res) {
    console.log('check for invalid user' + res.message);
    res.json(req.user);
  });
router.post('/signup', (req, res) => {
    db.User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    })
      .then(function () {
        //res.json(req.body);
        //console.log('createduser' + res.body);
        res.redirect(307, '/api/login');
      })
      .catch((err) => {
        console.log('create user error' + err);
        res.status(406).json(err);
      });
    // .catch((Sequelize.) => {
    //   //console.log('create user error' + err);
    //   res.status(401).json(UniqueConstraintError);
    // });
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
router.post('/Case', (req,res) => {
    console.log(req.body);
    db.Case.create({
        caseName: req.body.caseName
    }).then((response) => {
        res.json(response)
    }).catch((err) => {
        res.status(401).json(err);
    })
})
router.post('/Site', (req,res) => {
    console.log(req.body);
    db.Site.create({
        siteName: req.body.siteName,
        location: req.body.location
    }).then((response) => {
        console.log(response);
        res.json(response);
    }).catch((err) => {
        res.status(401).json(err);
    });
})
router.post('/Contact', (req,res) => {
    console.log(req.body);
    db.Contact.create({
        id: req.body.contactId,
        name: req.body.contactName,
        phoneNumber: req.body.contactPhone,
        email: req.body.contactEmail
    }).then((response) => {
        console.log(response);
        res.json(response);
    }).catch((err) => {
        console.log(err);
    });
})
//  Put Requests ################################################

//  Delete Requests #############################################

module.exports = router;