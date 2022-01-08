$(document).ready(function(){
    // Options Menu
    $('.header .btn-options').on('click', function(){
        $('.header').toggleClass('menu-open');
    })
    $('.header .menu a').on('click', function(){
        $('.header').toggleClass('menu-open');
    })
})