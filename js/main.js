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
    });
});