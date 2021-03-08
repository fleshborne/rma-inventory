
$(document).ready(() => {
$('.collapsible').collapsible();
$('.dropdown-trigger').dropdown();
})

    const callRmaInvent = () => {
        axios.get(`/api/caseDetail`).then((items) => {
        const $table = $('#insertInventory')
        console.log(items);

        console.log('inventory will go here');
        
        // $table.empty();
        items.data.forEach((item) => {
            const id = item.id;
            const itemType = item.itemType;
            const serialNumber = item.serialNumber;
            const createdAt = item.createdAt;
            const updatedAt = item.updatedAt;


            $table.append(`
            <tr>
            <td>${id}</td>
            <td>${serialNumber}</td>
            <td>${itemType}</td>
            <td>${createdAt}</td>
            <td>${updatedAt}</td>
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


            // const id = items.id;
            // const projectName = items.projectName;
            // const internalContact = items.internalContact;
            // const trackingId = items.trackingId;
            // const carrier = items.carrier;
            // const itemValue = items.itemValue;
            // const dateReceived = items.dateReceived;
            // const dateTested = items.dateTested;
            // const manufactureDate = items.manufactureDate;
            // const dateSentManufacture = items.dateSentManufacture;
            // const serialNumber = items.serialNumber;
            // const reasonForReturn = items.reasonForReturn;
            // const returnToProd = items.returnToProd;
            // const returnToStock = items.returnToStock;
            // const returnToManufacture=items.returnToManufacture;
            // const repairInHouse = items.repairInHouse;