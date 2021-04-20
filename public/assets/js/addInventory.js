

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
        axios.post('/api/Contact', newContact).then((res) => {
            console.log(res);
            console.log('New Contact added')
        }).catch((err) => {
            console.log(err);
        });
    }    
const addSite = () => {

}
const addCase = () => {
    
}
const addCaseDetail = () => {

}
const addDisposition = () => {

}
const addFault = () => {
    const reasonForReturn = $('#reasonForReturn');
    if (!reasonForReturn.val().trim()) {
        console.log('please enter a reason')
        return;
    }
    
    console.log(`the reason is: ${reasonForReturn}`)
    axios.post('/api/Fault', reasonForReturn)
    .then((req,res) => {
        console.log(res);
        res.json(reasonForReturn);

    })
    .catch((err) => {
        res.status(401).json(err);
    })
}
const addPart = () => {

}
const addSupplier = () => {

}

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