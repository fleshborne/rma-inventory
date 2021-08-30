const router = require('express').Router();
const db = require('../models');
const passport = require('../config/passport');
const { eachQuarterOfInterval } = require('date-fns');
// Get Requests##################

router.get('/caseDetail', (req,res) => {
    db.caseDetail.findAll({
        include: [db.Part,db.Fault,db.Disposition,db.Contact,db.Site]
    }).then((response) => {
        // console.log(response);
        res.json(response);
    }).catch((err) => {
        console.log(err)
    });


});
router.get('/caseDetail/:id', (req,res) => {
db.caseDetail.findOne({
    include : [db.Part,db.Fault,db.Disposition,db.Contact,db.Site]
}).then((response) => {
    res.json(response);
}).catch((error) => {
    console.table([stack.error,stack.id,])
})
})
router.get('/Part', (req,res) => {
    db.Part.findAll().then((response) => {
        // console.log(response);
        res.json(response);
    })
})
router.get('/Fault', (req,res) => {
    db.Fault.findAll().then((response) => {
        // console.log(response);
        res.json(response);
    })
})
router.get('/Disposition', (req,res) => {
    db.Disposition.findAll().then((response) => {
        // console.log(response);
        res.json(response);
    })
})
router.get('/Part', (req,res) => {
    db.Part.findAll().then((response) => {
        // console.log(response);
        res.json(response);
    })
})
router.get('/Supplier', (req,res)=>{
    db.Supplier.findAll().then((response) => {
        // console.log(response);
        res.json(response);
    })
})
router.get('/Case', (req,res) => {
    db.Case.findAll({
        include: [db.Site,db.Contact,db.User]
    }).then((response) => {
        // console.log(response);
        res.json(response);
    })
})
router.get('/Site', (req,res) => {
    db.Site.findAll().then((response) => {
        // console.log(response);
        res.json(response);
    }).catch((err) => {
        res.status(401).json(err);
    });
})
router.get('/Contact', (req,res) => {
    db.Contact.findAll().then((response) => {
        // console.log(response);
        res.json(response);
    }).catch((err) => {
        res.status(401).json(err);
    });
})
router.get('/user_data', (req,res) => {
    // console.log(req);
if (!req.user) {
    res.json({});
} else {
    res.json({
        username: req.user.username,
        email:req.user.email,
        id: req.user.id,
    });
}
});

// Post Requests ##############################################
router.post('/login', passport.authenticate('local'), function (req, res) {
    console.log('check for invalid user' + res.message);
    // console.log(req.user);
    res.json(req.user);

  });
router.post('/signup', (req, res) => {
    db.User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    })
      .then(function () {
        res.redirect(307, '/api/login');
      })
      .catch((err) => {
        console.log('create user error' + err);
        res.status(406).json(err);
      });
  });
router.post('/caseDetail', (req,res) => {
    console.log(res.body);
    db.caseDetail.create({
        caseName: req.body.caseName,
        UserId: req.body.UserId,
        SiteId: req.body.SiteId,
        ContactId: req.body.ContactId,
        PartId: req.body.PartId,
        FaultId: req.body.FaultId,
        DispositionId: req.body.DispositionId,
    }).then((response) => {
        // console.log(response);
        res.json(response);
    }).catch((err) => {
        res.status(401).json(err);
        console.log(err)
    });

})
router.post('/Part', (req,res) => {
    console.log(req.body);
    db.Part.create({
        partType: req.body.partType,
        partNumber: req.body.partNumber,
        serialNumber: req.body.serialNumber,
        SupplierId: req.body.SupplierId,
    }).then((response) => {
        res.json(response)
    }).catch((err) => {
        res.status(401).json(err);
    });
})
router.post('/Supplier', (req,res) => {
    console.log(req.body);
    db.Supplier.create({
        name: req.body.name
    }).then((response) => {
        res.json(response)
    }).catch((err) => {
        res.status(401).json(err)
    });
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
    db.Disposition.create({
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
        caseName: req.body.caseName,
        UserId: req.body.UserId,
        SiteId: req.body.SiteId,
        ContactId: req.body.ContactId
    }).then((response) => {
        res.json(response)
    }).catch((err) => {
        console.log(err);
    })
})
router.post('/Site', (req,res) => {
    console.log(req.body);
    db.Site.create({
        siteName: req.body.siteName,
        siteLocation: req.body.siteLocation
    }).then((response) => {
        // console.log(response);
        res.json(response);
    }).catch((err) => {
        res.status(401).json(err);
    });
})
router.post('/Contact', (req,res) => {
    console.log(req.body);
    db.Contact.create({
        name: req.body.contactName,
        phoneNumber: req.body.contactPhone,
        email: req.body.contactEmail,
        user: req.body.user
    }).then((newContact) => {
        // console.log(newContact);
        res.json(newContact);
    }).catch((err) => {
        console.log(err);
    });
})
//  Put Requests ################################################
router.put('/caseDetail/:id', (req,res) => {
    db.caseDetail.findOne({
        where: {
            id: req.body.id
        },
    }).then((response)=>{
        const updateEntry = {
            id : req.body.itemId,
            caseName : req.body.itemCaseName,
            siteName : req.body.itemSiteSiteName,
            contactName : req.body.itemContactName,
            partType : req.body.itemPartPartType,
            serialNumber : req.body.itemPartSerialNumber,
            reasonForReturn : req.body.itemFaultReasonForFault,
            actionTaken : req.body.itemDispositionActionTaken
        }
        console.log(updateEntry);
        console.log(response);
        res.json(updateEntry);
    }).catch((err) => {
        console.table([err.name, err.type, err.stack])
    })
})

//  Delete Requests #############################################

module.exports = router;