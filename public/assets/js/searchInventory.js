



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
    const callSearchResults = async (caseName) => {
              try { 
                  let items = await axios.get(`/api/caseDetail/${caseName}`);
                // const data = JSON.parse(data);
                console.log(items); 
                $tbody.empty()
            //    for (const item in items) {
            //        console.log(`${item}: ${items[item]}`);
            //    }
                const returnedItems = JSON.parse(JSON.stringify(items));
                returnedItems.data.forEach((returnedItem) => {
                    
                    console.log(returnedItem);
                    const updateInv = returnedItem.id;
                    const putButton = `<button class="btn-warning btn waves-effect waves-yellow" id="${updateInv}update" type="put" name="action">Update
                    <i class="material-icons update">update</i>
                  </button>`
                    const deleteButton = `<button class="btn waves-effect waves-red" id="${updateInv}deleteInv" type="delete" name="action">Delete
                    <i class="material-icons delete">delete</i>
                  </button>`
                    $tbody.append(`
                    <tr id=${returnedItem.id}>
                    <td id="returnedItemId">${returnedItem.id}</td>
                    <td id="returnedItemCaseName">${returnedItem.caseName}</td>
                    <td id="returnedItemSiteSiteName">${returnedItem.Site.siteName}</td>
                    <td id="returnedItemContactName">${returnedItem.Contact.name}</td>
                    <td id="returnedItemPartPartType">${returnedItem.Part.partType}</td>
                    <td id="returnedItemPartSerialNumber">${returnedItem.Part.serialNumber}</td>        
                    <td id="returnedItemFaultReasonForReturn">${returnedItem.Fault.reasonForReturn}</td>
                    <td id="returnedItemDispositionActionTaken">${returnedItem.Disposition.actionTaken}</td>
                    <td>${dateFns.format(returnedItem.createdAt, 'MMM D, YY')}</td>
                    <td>${dateFns.format(returnedItem.updatedAt, 'MMM D, YY')}</td>
                    <td>${putButton}</td>
                    <td>${deleteButton}</td>
                    </tr>
                    `)
                    console.log(returnedItem)
                })} catch(error) {
                    console.log(error);
                }
    }
        

      

});
 // Object.entries(items).forEach(([key, val]) =>{ 
                //     console.log(key, val)
                //     console.log(key.id)
                //     console.log(item);
                //     const updateInv = item.id;
                //     const putButton = `<button class="btn-warning btn waves-effect waves-yellow" id="${updateInv}update" type="put" name="action">Update
                //     <i class="material-icons update">update</i>
                //   </button>`
                //     const deleteButton = `<button class="btn waves-effect waves-red" id="${updateInv}deleteInv" type="delete" name="action">Delete
                //     <i class="material-icons delete">delete</i>
                //   </button>`
                //     $tbody.append(`
                //     <tr id=${item.id}>
                //     <td id="itemId">${item.id}</td>
                //     <td id="itemCaseName">${item.caseName}</td>
                //     <td id="itemSiteSiteName">${item.Site.siteName}</td>
                //     <td id="itemContactName">${item.Contact.name}</td>
                //     <td id="itemPartPartType">${item.Part.partType}</td>
                //     <td id="itemPartSerialNumber">${item.Part.serialNumber}</td>        
                //     <td id="itemFaultReasonForReturn">${item.Fault.reasonForReturn}</td>
                //     <td id="itemDispositionActionTaken">${item.Disposition.actionTaken}</td>
                //     <td>${dateFns.format(item.createdAt, 'MMM D, YY')}</td>
                //     <td>${dateFns.format(item.updatedAt, 'MMM D, YY')}</td>
                //     <td>${putButton}</td>
                //     <td>${deleteButton}</td>
                //     </tr>
                //     `)
                // });