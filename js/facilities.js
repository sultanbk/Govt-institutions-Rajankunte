$(document).ready(() => {
    

    $('.custom-select').change(function (e) {
        // Scroll to the selected section
        $('html, body').animate({
            scrollTop: $(`#${$(this).find(':selected').data('target')}`).offset().top
        }, 10);
    });
});