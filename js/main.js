$(document).ready(function () {
    $(document).ready(function () {
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

        $("#rptaCorrectas").click(function(){
            var rptaCorrecto = document.getElementById('RespuestasCorrectas');
            var respuestas = document.getElementById('Respuestas');
            var botonRespuesta = document.getElementById('rptaCorrectas');
            var btnReinicio = document.getElementById('reinicio');
            if(rptaCorrecto.style.display === "none")
            {
                respuestas.style.display = "none";
                botonRespuesta.style.display = "none";
                rptaCorrecto.style.display = "block";
                btnReinicio.style.display = "block";
            }else 
            {
                respuestas.style.display = "block";
                botonRespuesta.style.display = "block";
                rptaCorrecto.style.display = "none";
                btnReinicio.style.display = "none";
            }
        })
    });
});