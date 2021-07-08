// const moment = require("moment");

$(document).ready(() => {
//     // construct a moment object with UTC-based input
// const moment = moment.utc('2015-01-01 00:00:00');

// // convert using the TZDB identifier for US Central time
// moment().format('LT');  
$('.collapsible').collapsible();
$('.dropdown-trigger').dropdown();
$('select').formSelect();
// $('select').material_select();
})

    const callRmaInvent = () => {
        axios.get(`/api/Case_Detail`).then((items) => {
        const $table = $('#insertInventory');

        // must create headers dynamically at some point
        // const $tableHeads = $('#databaseHeaders');
        // come back to this
        console.log(items);

        console.log('inventory will go here');
        
        $table.empty();
        items.data.forEach((item) => {
            const id = item.id;
            const itemType = item.itemType;
            const serialNumber = item.serialNumber;
            const createdAt = item.createdAt;
            const updatedAt = item.updatedAt;
            const PartId = item.PartId;
            const FaultId = item.FaultId;
            const DispositionId = item.DispositionId;
            const faultReason = item.Fault.reasonForReturn;
            const dispositionAction = item.Disposition.actionTaken;

            
            const headId = 'Id';
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



// var instance = M.Collapsible.init(elem, {
//   accordion: false
// });
