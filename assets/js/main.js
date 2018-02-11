var Gimmie = {
    /* our prior code here */
    userInput: '',
    userInputIsValid: false,
    appId: '',
    validate: function(input) {
        // validation happens here
    },
}
 
Gimmie.$form.on('submit', function(e){
    /* our previous code here */
    Gimmie.userInput = $(this).find('input').val();
    Gimmie.validate();
    if( Gimmie.userInputIsValid ) {
        /* make API request */
    } else {
        /* throw an error */
    }
});