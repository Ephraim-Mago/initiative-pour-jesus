var $form = $('form#form-enga'),
    url = 'https://script.google.com/macros/s/AKfycbywdSuSP1bENuiW_eL8WeTiVsNPZjGMhlVPlbHB5Jy17jaZPQ4iiRE6pSt7bmgeDvxQGQ/exec';

$('#submit-form').on('click', function(e) {
    e.preventDefault();
    var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: $form.serializeObject()
    }).done(function() {

    });
});