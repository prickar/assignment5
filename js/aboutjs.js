$(function(){

    $(".me-image").on("click", function() {
        $(this).siblings("p").slideToggle(500);
    
        let opacityValue = $(this).hasClass("active") ? 1 : 0.5;
    
        $(this).parent().siblings().fadeTo(800, opacityValue)
    
        $(this).toggleClass("active");
    
    }) 

    $(".work-image").on("click", function() {
        $(this).siblings("p").slideToggle(500);
    
        let opacityValue = $(this).hasClass("active") ? 1 : 0.5;
    
        $(this).parent().siblings().fadeTo(800, opacityValue)
    
        $(this).toggleClass("active");
    
    })
})