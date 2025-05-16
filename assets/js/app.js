$(document).ready(()=>{
    $("#hamburger").on("click", ()=>{
        $(".menu_nav").toggleClass("show");
    });

    $(".nav_link").on("click", ()=>{
        $(".menu_nav").removeClass("show");
    });
});