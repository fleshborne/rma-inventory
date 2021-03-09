
$(document).ready(() => {
$('.collapsible').collapsible();
$('.dropdown-trigger').dropdown();
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
            
            const headId = 'Id'
            const headItemType = 'Item Type'
            const headSerialNumber = 'Serial Number'
            const headCreatedAt = 'Created At'
            const headUpdatedAt = 'Updated At'
            const headPartId = 'Part Id'
            const headFaultId = 'Fault Id'
            const headDispositionId = 'Disposition Id'

            $table.append(`
            <thead>
            <th>${headId}</th>
            <th>${headSerialNumber}</th>
            <th>${headItemType}</th>
            <th>${headCreatedAt}</th>
            <th>${headUpdatedAt}</th>
            <th>${headPartId}</th>
            <th>${headFaultId}</th>
            <th>${headDispositionId}</th> 
            </thead>
            <tr>
            <td>${id}</td>
            <td>${serialNumber}</td>
            <td>${itemType}</td>
            <td>${createdAt}</td>
            <td>${updatedAt}</td>
            <td>${PartId}</td>
            <td>${FaultId}</td>
            <td>${DispositionId}</td>
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
