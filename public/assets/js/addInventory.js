// all functions for adding to singular tables,
// maybe need separate page for join tables
$(document).ready(() => {
    //     // construct a moment object with UTC-based input
    // const moment = moment.utc('2015-01-01 00:00:00');
    
    // // convert using the TZDB identifier for US Central time
    // moment().format('LT');  
    $('.collapsible').collapsible();
    $('.dropdown-trigger btn').dropdown();
    })
    
 const addContact = () => {
        // const contactId = $('#contactId')
        const contactName = $('#contactName')
        const contactPhone = $('#contactPhone')
        const contactEmail = $('#contactEmail')
        // make sure empty sets aren't submitted to db
        if (!contactName.val().trim() || !contactPhone.val().trim() ||!contactEmail.val().trim()) {
            console.log('Please fill out entire form')
            return;
        }
          
        const newContact = {
            contactName: contactName.val().trim(),
            contactPhone: contactPhone.val().trim(),
            contactEmail: contactEmail.val().trim()
        }
        console.log(newContact);
        axios.post('/api/Contact', newContact)
        .then((res) => {
            console.log(res);
            console.log('New Contact added')
        }).catch((err) => {
            console.log(err);
        });
    }    
const addSite = () => {
    const siteName = $('#siteName');
    const siteLocation = $('#siteLocation');
    if (!siteName.val().trim() || !siteLocation.val().trim()) {
        console.log('Please fill out the Site Information');
        return;
    }

    const newSite = {
        siteName: siteName.val().trim(),
        siteLocation: siteLocation.val().trim()
    }
    console.log(newSite);

    axios.post('/api/Site', newSite)
    .then((res) => {
        console.log(res);
        console.log('New Site Added');
    }).catch((err) => {
        console.log(err);
    })

 
}
const addCase = () => {
    const caseName = $('#caseName');
    const UserId = sessionStorage.getItem('id');
    const SiteId = $('#insertSite');
    const ContactId = $('#insertContact');
    
    console.log(SiteId, ContactId);

    if(!caseName.val().trim() || !UserId || !SiteId || !ContactId){
        console.log('Please enter all of the Case information')
        return;
    }

    const newCase = {
        caseName: caseName.val().trim(),
        UserId: UserId,
        SiteId: SiteId.val(),
        ContactId: ContactId.val(),
    };
    console.log(newCase);
    axios.post('/api/Case', newCase).then((res) => {
        console.log('New Case has been added' + res);

    }).catch((err) => {
        console.log(err);
    });
}
const addCaseDetail = () => {
    const UserId = sessionStorage.getItem('id');
    const caseName = $('#caseName');
    const ContactId = $('#insertContact');
    const SiteId = $('#insertSite')
    const PartId = $('#insertPart');
    const FaultId = $('#insertFault')
    const DispositionId = $('#insertDisposition');

    if(!UserId || !caseName.val().trim() || !ContactId.val() || !SiteId.val()|| !PartId.val() || !FaultId.val() || !DispositionId.val()) {
        console.log('Please enter all of the Case Detail information.')
        return;
    }

    const newCaseDetail = {
        caseName: caseName.val().trim(),
        UserId: UserId,
        PartId: PartId.val(),
        ContactId: ContactId.val(),
        SiteId: SiteId.val(),
        FaultId:FaultId.val(),
        DispositionId: DispositionId.val(),
    }
    console.log(newCaseDetail);
    axios.post('/api/caseDetail', newCaseDetail).then((res) => {
        console.log(`You've posted ${res} to Case Details`)
    })
    .catch((err) => {
        console.log(err);
    });
}
const addDisposition = () => {
    const actionTaken = $('#dispositionActionTaken');
    
    if (!actionTaken.val().trim()) {
        console.log('What action was taken?')
        return;
    }

    const newActionTaken = {
        actionTaken: actionTaken.val().trim()
    }
    axios.post('/api/Disposition', newActionTaken)
    .then((res)=> {
        console.log(res);
        console.log('New Disposition Added')
    }).catch((err) => {
        console.log(err);
    })
}
const addFault = () => {
    const reasonForReturn = $('#faultReason');
    if (!reasonForReturn.val().trim()) {
        console.log('please enter a reason')
        return;
    }

    const newReasonForReturn = {
        reasonForReturn : reasonForReturn.val().trim()
    }
    console.log(newReasonForReturn);
    console.log(`the reason is: ${reasonForReturn}`)
    axios.post('/api/Fault', newReasonForReturn)
    .then((res) => {
        console.log(res);
        console.log('New Fault Added.')
    })
    .catch((err) => {
        res.status(401).json(err);
    })
}
const addPart = () => {
    const partType = $('#partPartType');
    const partNumber = $('#partPartNumber');
    const serialNumber = $('#partSerialNumber');
    const SupplierId  = $('#insertSupplier');

    if(!partType.val().trim()|| !partNumber.val().trim() || !serialNumber.val().trim() || !SupplierId.val() ) {
        console.log('please add required info for part submission')
        return;
    }

    const newPart = {
        partType : partType.val().trim(),
        partNumber: partNumber.val().trim(),
        serialNumber : serialNumber.val().trim(),
        SupplierId : SupplierId.val(), 
    }

    axios.post('/api/Part', newPart)
    .then((part) => {
        console.log(part)
        console.log(`New Part: ${part}, was added`);
    })
    .catch((err) => {
        console.log(err);
    })
}
const addSupplier = () => {
    const name = $('#supplierName');
    if(!name.val().trim()){
        console.log('Please enter the new Supplier')
        return;
    }

    const newSupplier = {
        name : name.val().trim()
    };

    axios.post('/api/Supplier', newSupplier)
    .then((res) => {
        console.log(res)
        console.log('New Supplier has been added')
    }).catch((err) => {
        console.log(err);
    })
}
// Form submissions
$('#contactForm').on('submit', (event) => {
    event.preventDefault();
    addContact();
    location.reload();
})

$('#faultForm').on('submit', (event) => {
    event.preventDefault();
    addFault();
    location.reload();
})
$('#siteForm').on('submit', (event) => {
    event.preventDefault();
    addSite();
    location.reload();
})

$('#dispositionForm').on('submit', (event) => {
    event.preventDefault();
    addDisposition();
    location.reload();
})

$('#partForm').on('submit', (event) => {
    event.preventDefault();
    addPart();
    location.reload();
})

$('#supplierForm').on('submit', (event) => {
    event.preventDefault();
    addSupplier();
    location.reload();
})

$('#caseForm').on('submit', (event) => {
    event.preventDefault();
    addCase();
    location.reload();
})

$('#caseDetailForm').on('submit', (event) => {
    event.preventDefault();
    addCaseDetail();
    location.reload();
})
