$(function () {

    $('[data-toggle="tooltip"]').tooltip()

    $("#enviarcorreo").click(function () {
        var nombre = prompt("Ingrese su nombre y Apellido", "Nombre/Apellido")
        var email = prompt("Ingrese su email", "test123@email")
        alert( "Sr/Sra " + nombre + " ,los datos han sido enviado a "+ email + " ,Gracias por su preferencia")
    })
})