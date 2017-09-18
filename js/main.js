$(document).ready(function () {
    var arrayPreguntas = [{
        pregunta: 'Which is the oldest airline in the world?',
        respuesta: 'KLM',
    },
    {
        pregunta: 'Which is the largest port in the world?',
        respuesta: 'Port of Shanghai',
    },
    {
        pregunta: 'What is the longest distance cycling backwards?',
        respuesta: '337.60 km',
    },
    {
        pregunta: 'What is the highest speed ever reached by a school bus?',
        respuesta: '590 km/h',
    },
    {
        pregunta: 'What is the longest car trip on one tank of gas?',
        respuesta: '2617 km',
    }
    ];
    //ocultar cuestionarios
    $("#Cuestionario2").hide(); // oculta
    $("#Cuestionario3").hide();
    $("#Cuestionario4").hide();
    $("#Cuestionario5").hide();
    $("#hojasRespuestas").hide();
    // evento click para pasar a las siguientes cuestionarios
    $(".pregunta2").click(function (e) { // click en registrame
        $("#Cuestionario1").slideUp(0);// oculta con movimiento deslizante para arriba
        $("#hojasRespuestas").slideUp(0);
        $("#Cuestionario2").fadeIn(300);//fundir un elemento oculto muestra
    });
    $(".pregunta3").click(function (e) { // click en registrame
        $("#Cuestionario1").slideUp(0);// oculta con movimiento deslizante para arriba
        $("#Cuestionario2").slideUp(0);
        $("#hojasRespuestas").slideUp(0);
        $("#Cuestionario3").fadeIn(300);//fundir un elemento oculto muestra
    });
    $(".pregunta4").click(function (e) { // click en registrame
        $("#Cuestionario1").slideUp(0);// oculta con movimiento deslizante para arriba
        $("#Cuestionario2").slideUp(0);// oculta con movimiento deslizante para arriba
        $("#Cuestionario3").slideUp(0);
        $("#hojasRespuestas").slideUp(0);
        $("#Cuestionario4").fadeIn(300);//fundir un elemento oculto muestra
    });
    $(".pregunta5").click(function (e) { // click en registrame
        $("#Cuestionario1").slideUp(0);// oculta con movimiento deslizante para arriba
        $("#Cuestionario2").slideUp(0);// oculta con movimiento deslizante para arriba
        $("#Cuestionario3").slideUp(0);
        $("#Cuestionario4").slideUp(0);
        $("#hojasRespuestas").slideUp(0);
        $("#Cuestionario5").fadeIn(300);//fundir un elemento oculto muestra
    });

    $(".hojasRespuestas").click(function (e) { // click en registrame
        $("#Cuestionario1").slideUp(0);// oculta con movimiento deslizante para arriba
        $("#Cuestionario2").slideUp(0);// oculta con movimiento deslizante para arriba
        $("#Cuestionario3").slideUp(0);
        $("#Cuestionario4").slideUp(0);
        $("#Cuestionario5").slideUp(0);
        $("#hojasRespuestas").fadeIn(300);//fundir un elemento oculto muestra

    });
    $(".reiniciaJuego").click(function (e) { // click en registrame
        $("#Cuestionario2").slideUp(0);// oculta con movimiento deslizante para arriba
        $("#Cuestionario3").slideUp(0);// oculta con movimiento deslizante para arriba
        $("#Cuestionario4").slideUp(0);
        $("#Cuestionario5").slideUp(0);
        $("#hojasRespuestas").slideUp(0);
        $("#Cuestionario1").fadeIn(300);//fundir un elemento oculto muestra
    });
    $("#rptaCorrectas").click(function () {
        var rptaCorrecto = document.getElementById('RespuestasCorrectas');
        var respuestas = document.getElementById('Respuestas');
        var botonRespuesta = document.getElementById('rptaCorrectas');
        var btnReinicio = document.getElementById('reinicio');
        if (rptaCorrecto.style.display === "none") {
            respuestas.style.display = "none";
            botonRespuesta.style.display = "none";
            rptaCorrecto.style.display = "block";
            btnReinicio.style.display = "block";
        } else {
            respuestas.style.display = "block";
            botonRespuesta.style.display = "block";
            rptaCorrecto.style.display = "none";
            btnReinicio.style.display = "none";
        }
    })
    var respuestaMarcada = document.getElementsByTagName('a');
    for (var i = 0; i < respuestaMarcada.length; i++) {
        respuestaMarcada[i].addEventListener('click', genera, false);
        console.log(respuestaMarcada[i]);
    }
    function genera(event) {
        var e = event.target.textContent;
        console.log(e);
        for (var i = 1; i < arrayPreguntas.length; i++) {
            $('#Respuestas').append(
                `<p id="rptas"><strong>${i}: </strong>${arrayPreguntas[i].pregunta} <strong>${e}</strong><p>`
            );
        }
    }
    genera(event);
    
});