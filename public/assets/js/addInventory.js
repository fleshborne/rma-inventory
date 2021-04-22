// all functions for adding to singular tables,
// maybe need separate page for join tables

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
            // id: contactId.val().trim(),
            contactName: contactName.val().trim(),
            contactPhone: contactPhone.val().trim(),
            contactEmail: contactEmail.val().trim()
        }
        // JSON.stringify(newContact);
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
    
}
const addCaseDetail = () => {

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
    // console.log(actionTaken);
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
    const serialNumber = $('#partSerialNumber');

    if(!partType.val().trim() || !serialNumber.val().trim()) {
        console.log('please add required info for part submission')
        return;
    }

    const newPart = {
        partType : partType.val().trim(),
        serialNumber : serialNumber.val().trim()
    }

    axios.post('/api/Part', newPart)
    .then((res) => {
        console.log(res)
        console.log(`New Part: ${newPart}, was added`);
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

// Code section for dropdown selection 

const chooseSite = () => {
    
    const $siteSelect = $('#insertSite');
    $siteSelect.empty();
    axios.get('/api/Site').then((sites) => {
        console.log(sites);
        // for (let i = 0; i < sites.length; i++) {
        //     const siteName = site.siteName;
        //     $siteSelect.append(`
        //      <li id="siteName"> ${siteName} <li/>
        //     `)    
                
        //      const siteNameSelected = $('#siteName').val();
        //      console.log(siteNameSelected);
        // }

        sites.data.map((site) => {
            const siteName = site.siteName;

            $siteSelect.append(`
            <li id="siteName"> ${siteName} <li/>
            `)    
            
            const siteNameSelected = $('#siteName').val();
            console.log(siteNameSelected);
        })
    }).catch((err) => {
        console.log(err);
    })


}

// Form submissions
$('#contactForm').on('submit', (event) => {
    event.preventDefault();
    addContact();
})

$('#faultForm').on('submit', (event) => {
    event.preventDefault();
    addFault();
})
$('#siteForm').on('submit', (event) => {
    event.preventDefault();
    addSite();
})

$('#dispositionForm').on('submit', (event) => {
    event.preventDefault();
    addDisposition();
})

$('#partForm').on('submit', (event) => {
    event.preventDefault();
    addPart();
})

$('#supplierForm').on('submit', (event) => {
    event.preventDefault();
    addSupplier();
})
// Click Handlers for dropdown selections
$('#chooseSite').on('click', (event) => {
    event.preventDefault();
    chooseSite();
})