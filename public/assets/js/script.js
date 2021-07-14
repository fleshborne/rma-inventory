$(document).ready(() => {
$('.collapsible').collapsible();
$('.dropdown-trigger').dropdown();
$('select').formSelect();
// $('select').material_select();
    const callRmaInvent = () => {
        axios.get('/api/caseDetail').then((items) => {
        const $table = $('#insertInventory');
        console.log(items);
        console.log('inventory will go here');
        $table.empty();
        items.data.forEach((item) => {
            const id = item.id;
            // Table data
            const caseName = item.Case.caseName;
            const caseSite = item.Case.caseSite;
            const caseContact = item.Case.caseContact;
            const itemType = item.Part.partType;
            const serialNumber = item.Part.serialNumber;
            const createdAt = item.createdAt;
            const updatedAt = item.updatedAt;
            const PartId = item.PartId;
            const FaultId = item.FaultId;
            const DispositionId = item.DispositionId;
            const faultReason = item.Fault.reasonForReturn;
            const dispositionAction = item.Disposition.actionTaken;
            // Table headers
            const headId = 'Id';
            const headCaseName = 'Case Name';
            const headCaseSite = 'Case Site';
            const headCaseContact = 'Case Contact';
            const headItemType = 'Item Type'
            const headSerialNumber = 'Serial Number'
            const headCreatedAt = 'Created At'
            const headUpdatedAt = 'Updated At'
            const headPartId = 'Part Id'
            const headFaultId = 'Fault Id'
            const headDispositionId = 'Disposition Id'
            const headFaultReason = 'Fault'
            const headDispositionAction = 'Action Taken'

            const addedToInvent = dateFns.format(createdAt, 'MMM D, YY')
            const updatedInvent = dateFns.format(updatedAt, 'MMM D, YY')
            $table.append(`
            <thead>
            <th>${headId}</th>
            <th>${headCaseName}</th>
            <th>${headCaseSite}</th>
            <th>${headCaseContact}</th>
            <th>${headSerialNumber}</th>
            <th>${headItemType}</th>
            <th>${headPartId}</th>
            <th>${headFaultId}</th>
            <th>${headDispositionId}</th>             
            <th>${headCreatedAt}</th>
            <th>${headUpdatedAt}</th>
            <th>${headFaultReason}</th>
            <th>${headDispositionAction}</th>
            </thead>
            <tr>
            <td>${id}</td>
            <td>${caseName}</td>
            <td>${caseSite}</td>
            <td>${caseContact}</td>
            <td>${serialNumber}</td>
            <td>${itemType}</td>
            <td>${PartId}</td>
            <td>${FaultId}</td>
            <td>${DispositionId}</td>            
            <td>${addedToInvent}</td>
            <td>${updatedInvent}</td>
            <td>${faultReason}</td>
            <td>${dispositionAction}</td>
            </tr>`)
        });
    }).catch((err) => {
        console.log(err)
    });   
    };
$(document).on('click', '#viewDatabase', (event) => {
    event.preventDefault();
    callRmaInvent();

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
