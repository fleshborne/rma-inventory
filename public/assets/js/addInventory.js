 const addContact = () => {
        const contactId = $('#contactId')
        const contactName = $('#contactName')
        const contactPhone = $('#contactPhone')
        const contactEmail = $('#contactEmail')
        // make sure empty sets aren't submitted to db
        if (!contactId.val().trim() || !contactName.val().trim() || !contactPhone.val().trim() ||!contactEmail.val().trim()) {
            console.log('Please fill out entire form')
            return;
        }
          
        const newContact = {
            // id: contactId.val().trim(),
            name: contactName.val().trim(),
            phoneNumber: contactPhone.val().trim(),
            email: contactEmail.val().trim()
        }
        // JSON.stringify(newContact);
        console.log(newContact);
        axios.post('/api/Contact', newContact).then((req,res) => {
            console.log(req);
            console.log(res);
            console.log('New Contact added')
            // res.send(newContact);
        }).catch((err) => {
            console.log(err);
        });
    }    
const addSite = () => {

}
const addCaseDetail = () => {

}
const addDisposition = () => {

}
const addFault = () => {

}
const addPart = () => {

}
const addSupplier = () => {

}

$('#contactForm').on('submit', (event) => {
    event.preventDefault();
    addContact();
})

        