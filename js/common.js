$('#form').on('submit', submitForm);

function submitForm (ev) {
    ev.preventDefault();
    
    var form = $(ev.target),
        result = $('.form-res')
        data = form.serialize(),
        url = form.attr('action'),
        type = form.attr('method');
        
    ajaxForm(form).done(function(msg) {
        
        var mes = msg.mes,
            status = msg.status;
        if (status === 'OK') {
            result.append('<p class="success">' + mes + '</p>');
        } else{
            result.append('<p class="error">' + mes + '</p>');
        }
    }).fail(function(jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });

};

// Универсальная функция для работы с формами
var ajaxForm = function (form) {
    var data = form.serialize(),
        url = form.attr('action');
    
    return $.ajax({
        type: 'POST',
        url: url,
        dataType : 'JSON',
        data: data
    })
};