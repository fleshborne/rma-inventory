

$(document).ready(() => {
$('.collapsible').collapsible();
$('.dropdown-trigger').dropdown();
$('select').formSelect();
// $('select').material_select();
const $table = $('#find-schedule-table');
const $tbody = $('#find-schedule-tbody');

        // const callRmaCases = async () => {
        // try {
        //     const response = await fetch('/api/Case')
        //     const responseData = await response.json({})
        //     responseData.forEach(innerObject => {
        //         console.log(innerObject);
        //         const caseContactName = innerObject.Contact.name;
        //         const caseSiteName = innerObject.Site.siteName;
        //         callRmaInvent(caseContactName, caseSiteName)
        //     })

        // }   catch(error){
        //     console.table(error.name, error.type, error.stack)
        // }
            //   $tbody.empty(); 
        //      axios.get('/api/Case').then((response) => {
        //         for(let i = 0; response.data.length > 0; i++){
        //             const caseContactName = response.data[i].Contact.name;
        //             const caseSiteName = response.data[i].Site.siteName;
        //              console.log(response);
        //              console.log(caseContactName, caseSiteName)
        //              callRmaInvent([caseContactName,caseSiteName])
        //             //  Promise.all([caseContactName,caseSiteName]).then((values) => {
        //             //     console.log(values);
        //             //     callRmaInvent(values)  
        //             //  });
        //         };
        //     }).catch((err) => {
        //         console.log(err);
        //     })
// }
         

            const callRmaInvent = async () => {
                try {
                    const items = await axios.get('/api/caseDetail')
                    $tbody.empty()
                    items.data.forEach((item) => {
                        console.log(items);
                        const updateInv = item.id;
                        const putButton = `<button class="btn-warning btn waves-effect waves-yellow" id="${updateInv}update" type="put" name="action">Update
                        <i class="material-icons update">update</i>
                      </button>`
                        const deleteButton = `<button class="btn waves-effect waves-red" id="deleteInv" type="delete" name="action">Delete
                        <i class="material-icons delete">delete</i>
                      </button>`
                        $tbody.append(`
                        <tr id=${item.id}>
                        <td contenteditable="true" id="itemId">${item.id}</td>
                        <td contenteditable="true" id="itemCaseName">${item.caseName}</td>
                        <td contenteditable="true" id="itemSiteSiteName">${item.Site.siteName}</td>
                        <td contenteditable="true" id="itemContactName">${item.Contact.name}</td>
                        <td contenteditable="true" id="itemPartPartType">${item.Part.partType}</td>
                        <td contenteditable="true" id="itemPartSerialNumber">${item.Part.serialNumber}</td>        
                        <td contenteditable="true" id="itemFaultReasonForReturn">${item.Fault.reasonForReturn}</td>
                        <td contenteditable="true" id="itemDispositionActionTaken">${item.Disposition.actionTaken}</td>
                        <td>${dateFns.format(item.createdAt, 'MMM D, YY')}</td>
                        <td>${dateFns.format(item.updatedAt, 'MMM D, YY')}</td>
                        <td>${putButton}</td>
                        <td>${deleteButton}</td>
                        </tr>
                        `)
                        console.log(item)
                        updateInventory(item);
                    })
                } catch(error) {
                    console.table([error.name, error.type, error.stack])
                }
            }

            const updateTd = () => {
                $('<td>').on('click', (event) => {
                    event.preventDefault();
                    console.log('tr has been clicked');
                })
            }
            const updateInventory = async (item) => {
                  const updateButton = $(`#${item.id}update`);
                const deleteButton = $('#deleteInv');
                

                 $(updateButton).on('click',(event) => {
                     event.preventDefault();
                     console.log(item);
                     axios.get('/api/caseDetail/:id', item).then((response) => {
                         console.log(response);
                         
                     })
                     alert(`Inventory was updated`);
                 })  
            }
            
            
    //     const callRmaInvent = async (caseContactName,caseSiteName) => {
    //  axios.get('/api/caseDetail').then((items) => {
    //     $tbody.empty();
    //     console.log(items);
    //     console.log('inventory will go here');
    //    items.data.forEach((item) => {
    //         const id = item.id;
    //         // Table data
    //         const caseName = item.Case.caseName;
    //         const caseSite =  caseSiteName;
    //         const caseContact =  caseContactName;
    //         const itemType = item.Part.partType;
    //         const serialNumber = item.Part.serialNumber;
    //         const createdAt = item.createdAt;
    //         const updatedAt = item.updatedAt;
    //         const faultReason = item.Fault.reasonForReturn;
    //         const dispositionAction = item.Disposition.actionTaken;
    //         const addedToInvent = dateFns.format(createdAt, 'MMM D, YY')
    //         const updatedInvent = dateFns.format(updatedAt, 'MMM D, YY')

    //         $tbody.append(`
    //         <tr>
    //         <td>${id}</td>
    //         <td>${caseName}</td>
    //         <td>${caseSite}</td>
    //         <td>${caseContact}</td>
    //         <td>${serialNumber}</td>
    //         <td>${itemType}</td>         
    //         <td>${faultReason}</td>
    //         <td>${dispositionAction}</td>
    //         <td>${addedToInvent}</td>
    //         <td>${updatedInvent}</td>
    //         </tr>`)
    //     });
    // }).catch((err) => {
    //     console.log(err)
    // });   
    // };
        $(document).on('click', '#viewDatabase', (event) => {
            event.preventDefault();
            // callRmaCases();
            callRmaInvent();
            updateTd();
            
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
    // const insertContact = $('#insertContact');
    // $.get('/api/Contact').then((data) => {
    //     console.log(data);
    //     data.forEach((contact) => {
    //         const newContact = $('<option>').attr('value', contact.id).text(contact.name);
    //         insertContact.append(newContact);
    //     });
    //     insertContact.formSelect();
    // })
    // const insertSite = $('#insertSite');
    // $.get('/api/Case').then((data) => {
    //     console.log(data);
    //     data.forEach((site) => {
    //         const newSite = $('<option>').attr('value', site.id).text(site.siteName);
    //         insertSite.append(newSite);
    //     });
    //     insertSite.formSelect();
    // })
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

            //     response.data.forEach((response) => {
            //         console.log(response);
            //         const caseContactName = response.Contact[i].name;
            //         const caseSiteName = response[i].Site.siteName;
            //         callRmaInvent(caseContactName, caseSiteName)
    
            //     })