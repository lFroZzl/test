
$(function () {

    $('[data-toggle="tooltip"]').tooltip()

    /* 3 on click agregados en quienes somos apretando div de la imagen */

    $(".click-me-1").click(function () {
        $(".texto-card-1").toggle("slow", function () {

        })
    })

    $(".click-me-2").click(function () {
        $(".texto-card-2").toggle("slow", function () {

        })
    })

    $(".click-me-3").click(function () {
        $(".texto-card-3").toggle("slow", function () {

        })
    })   
})


/* 

    //para texto invisible por defecto //

    $(".card").ready(function () {
        var par = $('.invi')
        $(par).hide()

        $('#button').click(function (e) {
            $(par).slideToggle('slow');
            e.preventDefault()
        })
    })

*/
