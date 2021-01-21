
$(document).ready(() => {
$('.collapsible').collapsible();
$('.dropdown-trigger').dropdown();
})

    const callRmaInvent = () => {
        $.get(`/api`).then((data) => {
        console.log(data);
        console.log('inventory will go here');
        // console.log(items.data);
        const $table = $('#inventory-table tbody')

        $table.empty();
        data.data.inventoryItems.forEach((items) => {
            const id = items.id;
            const projectName = items.projectName;
            const internalContact = items.internalContact;
            const trackingId = items.trackingId;
            const carrier = items.carrier;
            const itemValue = items.itemValue;
            const dateReceived = items.dateReceived;
            const dateTested = items.dateTested;
            const manufactureDate = items.manufactureDate;
            const dateSentManufacture = items.dateSentManufacture;
            const serialNumber = items.serialNumber;
            const reasonForReturn = items.reasonForReturn;
            const returnToProd = items.returnToProd;
            const returnToStock = items.returnToStock;
            const returnToManufacture=items.returnToManufacture;
            const repairInHouse = items.repairInHouse;

            $table.append(`
            <tr>
            <td>${id}</td>
            <td>${projectName}</td>
            <td>${internalContact}</td>
            <td>${trackingId}</td>
            <td>${carrier}</td>
            <td>${itemValue}</td>
            <td>${dateReceived}</td>
            <td>${dateTested}</td>
            <td>${manufactureDate}</td>
            <td>${dateSentManufacture}</td>
            <td>${serialNumber}</td>
            <td>${reasonForReturn}</td>
            <td>${returnToProd}</td>
            <td>${returnToStock}</td>
            <td>${returnToManufacture}</td>
            <td>${repairInHouse}</td>`)
        })
    })   
    }
$(document).on('click', '#viewDatabase', (event) => {
    event.preventDefault();
    callRmaInvent();

})

// var instance = M.Collapsible.init(elem, {
//   accordion: false
// });