


$(document).ready(() => {
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

        $.get(`/api/getCaseBySearch/:${caseName}`, (data) => {
            console.log(caseName);
            console.log(data);

    
})  
} 
      
})
});