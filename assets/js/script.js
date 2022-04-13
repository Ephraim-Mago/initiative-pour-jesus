var $form = $('form#form-enga'),
    url = 'https://script.google.com/macros/s/AKfycbz2HmO6cfzaNYJ_V0gZDQ6ejhu2lpPF-xpUSeoJqVw-/dev';

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