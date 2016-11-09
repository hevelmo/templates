$(function () {

    $.each($('.form-55875').find('table').find('select'), function (idx, elem) {
        $options = $(elem).find('option');
        $options.first().remove();
    });

    $.each($('.form-237399').find('table').find('td'), function (idx, elem) {
        $options = $(elem).find('.choice-item');
        $options.first().remove();
    })
});