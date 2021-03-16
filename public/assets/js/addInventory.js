const addContact = () => {

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

$(document).on('click', '#addInventory', (event) => {
    event.preventDefault();
    
})

$(document).ready(function(){
    $('input.autocomplete').autocomplete({
      data: {
        //  autocomplete data must look like this
        // "Apple": null,
        // "Microsoft": null,
        // "Google": 'https://placehold.it/250x250'
        
    //   add existing database items here
    //   eventual rework for querying db
      },
    });
  });
        