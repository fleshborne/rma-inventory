



$(document).ready(() => {
    const $tbody = $('#find-bySearch-tbody');

    $('#searchDb').on("keyup", (event) => {
    if(event.which === 13) {
        event.preventDefault();
        console.log('enter was pressed');
        const caseName = $('#searchCase').val().trim();
        console.log(caseName);
        if(!caseName) {
        console.log('Fill out search parameter');
        return;
        }         
        console.log('something was submitted')
        
        callSearchResults(caseName);
    }  
})
    const callSearchResults = async () => {
                const items = await axios.get(`/api/caseDetail/:caseName` + caseName);
                const data = JSON.parse(data);
                console.log(items.data); 
                $tbody.empty()
                items.data.forEach((item) => {
                    console.log(items);
                    const updateInv = item.id;
                    const putButton = `<button class="btn-warning btn waves-effect waves-yellow" id="${updateInv}update" type="put" name="action">Update
                    <i class="material-icons update">update</i>
                  </button>`
                    const deleteButton = `<button class="btn waves-effect waves-red" id="${updateInv}deleteInv" type="delete" name="action">Delete
                    <i class="material-icons delete">delete</i>
                  </button>`
                    $tbody.append(`
                    <tr id=${item.id}>
                    <td id="itemId">${item.id}</td>
                    <td id="itemCaseName">${item.caseName}</td>
                    <td id="itemSiteSiteName">${item.Site.siteName}</td>
                    <td id="itemContactName">${item.Contact.name}</td>
                    <td id="itemPartPartType">${item.Part.partType}</td>
                    <td id="itemPartSerialNumber">${item.Part.serialNumber}</td>        
                    <td id="itemFaultReasonForReturn">${item.Fault.reasonForReturn}</td>
                    <td id="itemDispositionActionTaken">${item.Disposition.actionTaken}</td>
                    <td>${dateFns.format(item.createdAt, 'MMM D, YY')}</td>
                    <td>${dateFns.format(item.updatedAt, 'MMM D, YY')}</td>
                    <td>${putButton}</td>
                    <td>${deleteButton}</td>
                    </tr>
                    `)
                    console.log(item)
                })
    }
        

      

});