$(document).ready(() => {
$('.collapsible').collapsible();
$('.dropdown-trigger').dropdown();
$('select').formSelect();
// $('select').material_select();
const $table = $('#find-schedule-table');
const $tbody = $('#find-schedule-tbody');

        const callRmaCases = () => {
        //    $tbody.empty(); 
            axios.get('/api/Case').then((response) => {
                Promise.all(response.data.forEach((response) => {
                    console.log(response);
                    const caseContactName = response.Contact.name;
                    const caseSiteName = response.Site.siteName;
                    callRmaInvent(caseContactName, caseSiteName)
    
                }))
            }).catch((err) => {
                console.log(err);
            })
            
            }

        const callRmaInvent = async (caseContactName, caseSiteName) => {

        console.log(caseSiteName, caseContactName);
        axios.get('/api/caseDetail').then((items) => {
        $tbody.empty();
        console.log(items);
        console.log('inventory will go here');
        Promise.all(items.data.forEach((item) => {
            const id = item.id;
            // Table data
            const caseName = item.Case.caseName;
            const caseSite = caseSiteName;
            const caseContact = caseContactName;
            const itemType = item.Part.partType;
            const serialNumber = item.Part.serialNumber;
            const createdAt = item.createdAt;
            const updatedAt = item.updatedAt;
            const faultReason = item.Fault.reasonForReturn;
            const dispositionAction = item.Disposition.actionTaken;
            const addedToInvent = dateFns.format(createdAt, 'MMM D, YY')
            const updatedInvent = dateFns.format(updatedAt, 'MMM D, YY')

            $tbody.append(`
            <tr>
            <td>${id}</td>
            <td>${caseName}</td>
            <td>${caseSite}</td>
            <td>${caseContact}</td>
            <td>${serialNumber}</td>
            <td>${itemType}</td>         
            <td>${faultReason}</td>
            <td>${dispositionAction}</td>
            <td>${addedToInvent}</td>
            <td>${updatedInvent}</td>
            </tr>`)
        }));
    }).catch((err) => {
        console.log(err)
    });   
    };
$(document).on('click', '#viewDatabase', (event) => {
    event.preventDefault();
    callRmaInvent();
    callRmaCases();
})

// Generate Site responses for drop down
const insertSite = $('#insertSite');
    $.get('/api/Site').then((data) => {
        console.log(data);
        data.forEach((site) => {
            const newSite = $('<option>').attr('value', site.id).text(site.siteName);
            insertSite.append(newSite);
        });
        insertSite.formSelect();
    })

// Generate Contact responses for drop down
const insertContact = $('#insertContact');
    $.get('/api/Contact').then((data) => {
        console.log(data);
        data.forEach((contact) => {
            const newContact = $('<option>').attr('value', contact.id).text(contact.name);
            insertContact.append(newContact);
        });
        insertContact.formSelect();
    })

// Pass user data for dom display and user database correlation 
    $.get('/api/user_data').then((user) => {
        $('.member-name').text(user.username);
        console.log(user);
        const userId = user.id;
        sessionStorage.setItem('id', JSON.stringify(userId));
    })
// Pass case data for Case Detail relation
    const insertCase = $('#insertCase');
    $.get('/api/Case').then((data) => {
        console.log(data);
        data.forEach((caseInfo) => {
            const newCase = $('<option>').attr('value', caseInfo.id).text(caseInfo.caseName);
            insertCase.append(newCase);
        });
        insertCase.formSelect();
    })
// Pass part data for Case Detail relation
    const insertPart = $('#insertPart');
    $.get('/api/Part').then((parts) => {
        console.log(parts);
        parts.forEach((part) => {
            const newPart = $('<option>').attr('value', part.id).text(part.partType);
            insertPart.append(newPart);
        })
        insertPart.formSelect();
    })
// Pass Fault data for Case Detail 
    const insertFault = $('#insertFault');
    $.get('/api/Fault').then((data) => {
        console.log(data);
        data.forEach((Fault) => {
            const newFault = $('<option>').attr('value', Fault.id).text(Fault.reasonForReturn);
            insertFault.append(newFault);
        });
        insertFault.formSelect();
    })
    const insertDisposition = $('#insertDisposition');
    $.get('/api/Disposition').then((data) => {
        console.log(data);
        data.forEach((Disposition) => {
            const newDisposition = $('<option>').attr('value', Disposition.id).text(Disposition.actionTaken);
            insertDisposition.append(newDisposition);
        });
        insertDisposition.formSelect();
    })

//  Pass supplier data for part relation
const insertSupplier = $('#insertSupplier');
$.get('/api/Supplier').then((suppliers) => {
    console.log(suppliers);
    suppliers.forEach((supplier) => {
        const newSupplier = $('<option>').attr('value', supplier.id).text(supplier.name)
        insertSupplier.append(newSupplier);
    })
    insertSupplier.formSelect();
})

})
