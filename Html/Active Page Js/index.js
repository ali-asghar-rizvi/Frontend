

$(function () {
    let url = window.location.href.split('/')
    $.each($('.main-menu a'), function () {
        if (url[url.length - 1] === $(this).attr('href')) {
            $('.main-menu a').removeClass("active");
            $(this).addClass("active");
        }
    });
});

