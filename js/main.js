var typed = new Typed('.element', {
    strings: ["Perfect Style", "New Style", "nice Style"],
    cursorChar: '_',
    typeSpeed: 100,
    loopCount: Infinity,
    loop: true,
    backSpeed: 100,
});




$(window).scroll(function () {


    /******* navbar color and size of image */
    if ($(window).scrollTop() > 300) {
        $(".navbar").css("backgroundColor", "black");
        $(".navbar-brand img").removeClass('w-100').addClass('w-75');

    } else {
        $(".navbar").css("backgroundColor", "transparent");
        $(".navbar-brand img").addClass('w-100');
    }


    /******Add Class Active to navbar with Scroll */
    $(".block").each(function () {
        if ($(window).scrollTop() > $(this).offset().top) {
            let blockID = $(this).attr('id');
            $('.navbar li a').removeClass('ActiveNav');
            $('.navbar li a[data-scroll ="' +
                blockID + '"]').addClass('ActiveNav');
        }
    })








});




$(".nav-item .nav-link").click(function (e) {


    e.preventDefault;

    $("body,html").animate({


        scrollTop: $('#' + $(this).data('scroll'))
            .offset().top

    }, 1000);



    $('.navbar-nav .nav-link').click(function () {
        $('.navbar li a').removeClass('ActiveNav')
        $(this).addClass('ActiveNav');
    })





});
/*********************************   counter   */



$('.from-left').hover(function () {

    $(this).find('span').eq(0).animate({
        width: '100%'
    }, 200);


},
    function () {

        $(this).find('span').eq(0).animate({
            width: '0'
        }, 200);




    });




$(document).ready(function () {
    $('.owl-carousel').owlCarousel({




        rtl: true,
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }


    });
});






/*
let w= setInterval(increase ,50);
let z= setInterval(increase ,50);
/*          fixed menu */
$('.fixed-menu .fa-cog').click(function () {

    $(this).parent('.fixed-menu').toggleClass('is-visiable');
    if ($(this).parent('.fixed-menu').hasClass('is-visiable')) {
        $(this).parent('.fixed-menu').animate({
            left: '0px'

        }, 500);

    } else {
        $(this).parent('.fixed-menu').animate({
            left: '-220px'
        }, 500);
    }



});

/********* chnnage color  */

let changeColor = $('.color-item');
changeColor.eq(0).css('backgroundColor', '#e75b1e');
changeColor.eq(1).css('backgroundColor', 'green');
changeColor.eq(2).css('backgroundColor', 'purple');
changeColor.eq(3).css('backgroundColor', 'red');
changeColor.click(function () {



    let newColor = $(this).css('backgroundColor');
    $('.ccolor').css('color', newColor)
})


//************************ */$(document).ready(function(){*/




$('.menu_main').click(function () {




    let value = $(this).attr('data-filter');

    if (value == 'All') {
        $('.filter').show("1000")
    } else {
        $('.filter').not('.' + value).hide("1000");
        $('.filter').filter('.' + value).show("1000");
        $('.menu_main').addClass("text-light");

        $(this).addClass("menuActive").siblings().removeClass("menuActive");


    }
})