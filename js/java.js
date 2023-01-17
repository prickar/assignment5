$(function() {
    $(".navigation li").on ({
        mouseenter: function() {
            $(this).toggleClass("active");
        },
        mouseleave: function() {
            $(this).toggleClass("active");
        },
        click: function() {
            $(this).siblings().find(".submenu").hide();
            $(this).find(".submenu").toggle();
        }
    })

    $('.photo-slider').slick();


})

