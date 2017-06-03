$(function () {
    
    //Valores iniciales
    var errores = 0;
    var aciertos = 0;
    localStorage.victorias1 = (localStorage.victorias1 || 0);
    localStorage.derrotas1 = (localStorage.derrotas1 || 0);
    localStorage.victorias2 = (localStorage.victorias2 || 0);
    localStorage.derrotas2 = (localStorage.derrotas2 || 0);
    localStorage.victorias3 = (localStorage.victorias3 || 0);
    localStorage.derrotas3 = (localStorage.derrotas3 || 0);
    localStorage.victorias4 = (localStorage.victorias4 || 0);
    localStorage.derrotas4 = (localStorage.derrotas4 || 0);
    
    $(".letra").removeAttr("disabled");
    
    //Listas de palabras -SOLO de 3 a 8 letras-
    var deportes = ["aerobic", "ajedrez", "aquagym", "arco", "bandy", "basquet", "bikepolo", "billar", "bochas", "bolos", "bossaball", "bowling", "boxeo", "beisbol", "canotaje", "cestoball", "ciclismo", "cricket", "cross", "curling", "danza", "dardos", "decatlon", "escalada", "esgrima", "esqui", "futbol", "golf", "gimnasia", "hipica", "hockey", "judo", "karate", "korfball", "kronum", "lacrosse", "lucha", "luge", "maraton", "natacion", "netball", "paddle", "patinaje", "pelota", "petanca", "pingpong", "polo", "rafting", "remo", "rugby", "salto", "skeleton", "softbol", "squash", "sumo", "surf", "tenis", "tiro", "triatlon", "trineo", "vela", "voleibol"];
    var animales = ["abeja","abejorro", "aguila", "almeja", "anaconda", "araña", "asno", "atun", "avestruz", "avispa", "ballena", "besugo", "bufalo", "buho", "buitre", "burro", "caballo", "cabra", "caiman", "camaleon", "camello", "canario", "cangrejo", "caracol", "cebra", "cerdo", "ciervo", "cigala", "cobra", "conejo", "cotorra", "coyote", "delfin", "elefante", "foca", "gacela", "gallo", "gacela", "garza", "gato", "gavilan", "gaviota", "gorila", "gorrion", "grillo", "guepardo", "gusano", "halcon", "hamster", "hiena", "hormiga", "iguana", "jabali", "jaguar", "jineta",  "jirafa", "koala", "lagarto", "langosta", "lechuza", "leon", "leopardo", "lemur", "libelula", "liebre", "lince", "llama", "lobo", "lombriz", "loro", "mariposa", "marmota", "marsopa", "mejillon", "mono", "mosca", "mula", "nutria", "orca", "oso", "ostra", "oveja", "paloma", "pantera", "pato", "pavo", "perdiz", "perro", "pinguino", "piton", "pulga", "pulpo", "puma", "rana", "raton", "salmon", "sapo", "tiburon", "tigre", "topo", "toro", "tortuga", "trucha", "tucan", "vaca", "vibora", "zorro"];
    var ciudades = ["adelaida", "agra", "albacete", "alepo", "alicante", "ankara", "atenas", "atlanta", "avila", "badajoz", "bagdad", "bangkok", "basora", "berlin", "berna", "bilbao", "bogota", "bombay", "boston", "bruselas", "burgos", "caceres", "cadiz", "calcuta", "caracas", "chicago", "colonia", "cordoba", "cuenca", "dallas", "dakar", "damasco", "detroit", "dubai", "dublin", "estambul", "ginebra", "hanoi", "houston", "ibiza", "jaen", "kabul", "karachi", "leon", "lima",  "lisboa", "londres", "madrid", "malaga", "manila", "medellin", "merida", "milan", "moscu", "munich", "murcia", "nagoya", "nairobi", "napoles", "oporto", "osaka", "oslo", "palencia", "paris", "pekin", "praga", "rabat", "riad", "roma", "santiago", "segovia", "seul", "sevilla", "shanghai", "sidney", "singapur", "sofia", "teheran", "tokio", "toledo", "toronto", "tunez", "valencia", "venecia", "viena", "yakarta", "zamora", "zaragoza"];
    var todos =  deportes.concat(animales, ciudades);
    
    //    Probando arrays
    //var palabra = "Hola";
    //var letras = palabra.split(""); // letras = ["H", "o", "l", "a"]
    //var array = ["hola", "mundo"];
    //mensaje = array.join(" "); // mensaje = "hola mundo"    
    
    //INICIO
    //Mostrar INICIO (niveles)
    $("#capaInicio").show();
    $("#capaMenu").hide();
    $("#capaAyuda").hide();
    $("#capaResultados").hide();
    $("#capaCreditos").hide();
    $("#capaJuego").hide();
    $("#capaMarcador").hide();
    
    $("#tInicio").text("Juego del Ahorcado");
    
    //Ocultar / mostrar    
    //mostrar INICIO
    function verInicio() {
        $("#capaInicio").show();
        $("#capaMenu").hide();
        $("#capaAyuda").hide();
        $("#capaResultados").hide();
        $("#capaCreditos").hide();
        $("#capaJuego").hide();
        $("#capaMarcador").hide();
        
        $("#tInicio").text("Juego del Ahorcado");
    }
    //mostrar MENU
    function verMenu() {
        $("#capaInicio").hide();
        $("#capaMenu").show();
        $("#capaAyuda").hide();
        $("#capaResultados").hide();
        $("#capaCreditos").hide();
        $("#capaJuego").hide();
        $("#capaMarcador").hide();
        
//        $("#capaMarcador").slideDown('slow');      
        $("#tMenu").text("Menú");
    }
     //mostrar AYUDA
    function verAyuda() {
        $("#capaInicio").hide();
        $("#capaMenu").hide();
        $("#capaAyuda").show();
        $("#capaResultados").hide();
        $("#capaCreditos").hide();
        $("#capaJuego").hide();
        $("#capaMarcador").hide();
       
        $("#tAyuda").text("Ayuda");
    }
    //mostrar RESULTADOS
    function verResultados() {
        $("#capaInicio").hide();
        $("#capaMenu").hide();
        $("#capaAyuda").hide();
        $("#capaResultados").show();
        $("#capaCreditos").hide();
        $("#capaJuego").hide();
        $("#capaMarcador").hide();

        $("#tResultados").text("Marcador");
        
        victorias = parseInt(localStorage.victorias1) + parseInt(localStorage.victorias2) + parseInt(localStorage.victorias3) + parseInt(localStorage.victorias4);
        derrotas = parseInt(localStorage.derrotas1) + parseInt(localStorage.derrotas2) + parseInt(localStorage.derrotas3) + parseInt(localStorage.derrotas4);
        
        $("#tablaResultados").html(
            "<thead><tr><th scope='col'>" + " " + "</th><th scope='col'><img src='triunfos.png' />" + "</th><th scope='col'>" + "   " + "</th><th scope='col'><img src='derrotas.png' /></th></tr></thead>" +
                "<br />" +
                "<tr><th scope='row'>" + "Deportes" + "</th><td>" + localStorage.victorias1 + "</td><td>" + "-" + "</td><td>" + localStorage.derrotas1 + "</td></tr>" + 
                "<tr><th scope='row'>" + "Animales" + "</th><td>" + localStorage.victorias2 + "</td><td>" + "-" + "</td><td>" + localStorage.derrotas2 + "</td></tr>" + 
                "<tr><th scope='row'>" + "Ciudades" + "</th><td>" + localStorage.victorias3 + "</td><td>" + "-" + "</td><td>" + localStorage.derrotas3 + "</td></tr>" + 
                "<tr><th scope='row'>" + "Global" + "</th><td>" + localStorage.victorias4 + "</td><td>" + "-" + "</td><td>" + localStorage.derrotas4 + "</td></tr>" + 
                "<br />" +
                "<tr class='ultima'><th scope='row'>" + "  " + "</th><td class='grande'>" + victorias + "</td><td>" + "-" + "</td><td class='grande'>" + derrotas + "</td></tr>"
        );
    }
    //mostrar MARCADOR
    function verMarcador() {
        $("#capaInicio").hide();
        $("#capaMenu").hide();
        $("#capaAyuda").hide();
        $("#capaResultados").hide();
        $("#capaCreditos").hide();
        $("#capaJuego").hide();
        $("#capaMarcador").show();             
        
        $("#borrarMarcador").removeAttr("disabled");
        $("#tMarcador").text("Marcador");
                
        victorias = parseInt(localStorage.victorias1) + parseInt(localStorage.victorias2) + parseInt(localStorage.victorias3) + parseInt(localStorage.victorias4);
        derrotas = parseInt(localStorage.derrotas1) + parseInt(localStorage.derrotas2) + parseInt(localStorage.derrotas3) + parseInt(localStorage.derrotas4);
        
        $("#tablaMarcador").html(
            "<thead><tr><th scope='col'>" + " " + "</th><th scope='col'><img src='triunfos.png' />" + "</th><th scope='col'>" + "   " + "</th><th scope='col'><img src='derrotas.png' /></th></tr></thead>" +
                "<br />" +
            "<tr><th scope='row'>" + "Deportes" + "</th><td>" + localStorage.victorias1 + "</td><td>" + "-" + "</td><td>" + localStorage.derrotas1 + "</td></tr>" + 
            "<tr><th scope='row'>" + "Animales" + "</th><td>" + localStorage.victorias2 + "</td><td>" + "-" + "</td><td>" + localStorage.derrotas2 + "</td></tr>" + 
            "<tr><th scope='row'>" + "Ciudades" + "</th><td>" + localStorage.victorias3 + "</td><td>" + "-" + "</td><td>" + localStorage.derrotas3 + "</td></tr>" + 
            "<tr><th scope='row'>" + "Global" + "</th><td>" + localStorage.victorias4 + "</td><td>" + "-" + "</td><td>" + localStorage.derrotas4 + "</td></tr>" + 
            "<br />" +
            "<tr class='ultima'><th scope='row'>" + "  " + "</th><td class='grande'>" + victorias + "</td><td>" + "-" + "</td><td class='grande'>" + derrotas + "</td></tr>"
        );
    }
    //mostrar CREDITOS
    function verCreditos() {
        $("#capaInicio").hide();
        $("#capaMenu").hide();
        $("#capaAyuda").hide();
        $("#capaResultados").hide();
        $("#capaCreditos").show();
        $("#capaJuego").hide();
        $("#capaMarcador").hide();
        
        $("#tCreditos").text("Créditos");
    }
    //mostrar JUEGO
    function verJuego() {
        $("#capaInicio").hide();
        $("#capaMenu").hide();
        $("#capaAyuda").hide();
        $("#capaResultados").hide();
        $("#capaCreditos").hide();
        $("#capaJuego").show();
        $("#capaMarcador").hide();

        //  Reinicia valores
        estaPalabra = "";
        aciertos = 0;
        errores = 0;
        nLetras = 0;
        letra1 = "";
        letra2 = "";
        letra3 = "";
        letra4 = "";
        letra5 = "";
        letra6 = "";
        letra7 = "";
        letra8 = "";
        $("#ahorcado").attr("src", "1.png");
        $(".letra1").html("");
        $(".letra2").html("");
        $(".letra3").html("");
        $(".letra4").html("");
        $(".letra5").html("");
        $(".letra6").html("");
        $(".letra7").html("");
        $(".letra8").html("");
        $(".letra").removeAttr("disabled");        
        ////Selecciona una palabra al azar del nivel
        var npalabras = palabras.length;
        var aleatorio = Math.floor(Math.random()*npalabras);
        estaPalabra = palabras[aleatorio]; 
        estaPalabraM = estaPalabra.toUpperCase(); 

        //Probando funcion azar
        //	function  azar (categoria) {
        //		var npalabras = categoria.length;
        //		var aleatorio = Math.floor(Math.random()*npalabras);
        //		var estaPalabra = categoria[aleatorio];
        //		return estaPalabra;
        //	}
        //    
        //	var palabranivel1 = azar(colores);    
        //	var palabranivel2 = azar(animales);
        //    
        //	function niveles543 (){
        //		var nivel = ($(this).val());    
        //		if (nivel === "1") {
        //		        palabraSecreta = palabranivel1;}
        //		if (nivel === "2") {
        //		        palabraSecreta = palabranivel2;}
        //	}
        
        //Identifica el número de letras y cada letra de la palabra seleccionada
        nLetras = estaPalabra.length;
        letra1 = estaPalabra.substring(0,1);
        letra2 = estaPalabra.substring(1,2);
        letra3 = estaPalabra.substring(2,3);
        letra4 = estaPalabra.substring(3,4);
        letra5 = estaPalabra.substring(4,5);
        letra6 = estaPalabra.substring(5,6);
        letra7 = estaPalabra.substring(6,7); 
        letra8 = estaPalabra.substring(7,8); 
        //Escribe las rayas, tantas como letras tiene la palabra seleccionada            
        $(".letra1").html("_");
        $(".letra2").html("_");
        $(".letra3").html("_");
        if(nLetras > 3){$(".letra4").html("_");}
        if(nLetras > 4){$(".letra5").html("_");}
        if(nLetras > 5){$(".letra6").html("_");}
        if(nLetras > 6){$(".letra7").html("_");}
        if(nLetras > 7){$(".letra8").html("_");}
    }
    
    function niveles() {
        nivel = ($(this).val());
        if (nivel === "1"){
            palabras = deportes;
            var imagenDeportes = $('<img/>').attr({type: 'image', src: 'iconDeporte.svg'});
            $("#indicadorNivel").append(imagenDeportes);
        }
        if (nivel === "2"){
            palabras = animales;
            var imagenAnimal = $('<img/>').attr({type: 'image', src: 'iconAnimal.svg'});
            $("#indicadorNivel").append(imagenAnimal);
        }
        if (nivel === "3"){
            palabras = ciudades;
            var imagenCiudad = $('<img/>').attr({type: 'image', src: 'iconCiudad.svg'});
            $("#indicadorNivel").append(imagenCiudad);
        }
        if (nivel === "4"){ 
            palabras = todos;           
            var $nuevoBoton= $('<input/>').attr({ type: 'image', name:'btn1', src: 'pista.svg'});
            $("#indicadorNivel").append($nuevoBoton);
            $nuevoBoton.click(function(){
                if ($.inArray(estaPalabra, deportes) != -1){alert("Una pista: la palabra es un DEPORTE");}
                if ($.inArray(estaPalabra, animales) != -1){alert("Una pista: la palabra es un ANIMAL");}
                if ($.inArray(estaPalabra, ciudades) != -1){alert("Una pista: la palabra es una CIUDAD");}
            });
        }
        if (palabras !== false) {verJuego();}        
    }
    
    function pulsaLetra() {
        $(this).attr("disabled", "disabled");
        var letraBoton = ($(this).val());
        if(estaPalabra.indexOf(letraBoton)!==-1){  //si la letra del botón está en la palabra            
            var ordenLetra = (estaPalabra.indexOf(letraBoton) + 1);
            //var posicion = (estaPalabra.search(letraCaracter) + 1); otra opción para saber la posición de la letra en la palabra
            var letraCaracter = estaPalabra.charAt(ordenLetra - 1);
            $("#sonido").attr("src", "acierto.ogg");
            if (letraBoton === letra1){$("#palabra").find("span").eq(0).text(letraCaracter);aciertos = aciertos + 1;}
            if (letraBoton === letra2){$("#palabra").find("span").eq(1).text(letraCaracter);aciertos = aciertos + 1;}    
            if (letraBoton === letra3){$("#palabra").find("span").eq(2).text(letraCaracter);aciertos = aciertos + 1;}
            if (letraBoton === letra4){$("#palabra").find("span").eq(3).text(letraCaracter);aciertos = aciertos + 1;}
            if (letraBoton === letra5){$("#palabra").find("span").eq(4).text(letraCaracter);aciertos = aciertos + 1;}
            if (letraBoton === letra6){$("#palabra").find("span").eq(5).text(letraCaracter);aciertos = aciertos + 1;}    
            if (letraBoton === letra7){$("#palabra").find("span").eq(6).text(letraCaracter);aciertos = aciertos + 1;}  
            if (letraBoton === letra8){$("#palabra").find("span").eq(7).text(letraCaracter);aciertos = aciertos + 1;}
            if (aciertos === nLetras){            
                alert("¡Has ganado!\nLa palabra es " + estaPalabraM);
                if (nivel === "1") {localStorage.victorias1 = +localStorage.victorias1 + 1;}
                if (nivel === "2") {localStorage.victorias2 = +localStorage.victorias2 + 1;}
                if (nivel === "3") {localStorage.victorias3 = +localStorage.victorias3 + 1;}
                if (nivel === "4") {localStorage.victorias4 = +localStorage.victorias4 + 1;}
                $("#borrarMarcador").removeAttr("disabled");
                verMarcador();
            }            
        } else {    //si la letra del botón NO está en la palabra
            errores = errores + 1;
            $("#sonido").attr("src", "error.ogg");
            window.navigator.vibrate(1000);
            if (errores === 1){$("#ahorcado").attr("src", "2.png");}
            if (errores === 2){$("#ahorcado").attr("src", "3.png");}
            if (errores === 3){$("#ahorcado").attr("src", "4.png");}
            if (errores === 4){$("#ahorcado").attr("src", "5.png");}
            if (errores === 5){$("#ahorcado").attr("src", "6.png");}
            if (errores === 6){
                $("#ahorcado").attr("src", "7.png");
                alert("¡Has perdido!\nLa palabra era " + estaPalabraM);
                if (nivel === "1") {localStorage.derrotas1 = +localStorage.derrotas1 + 1;}
                if (nivel === "2") {localStorage.derrotas2 = +localStorage.derrotas2 + 1;}
                if (nivel === "3") {localStorage.derrotas3 = +localStorage.derrotas3 + 1;}
                if (nivel === "4") {localStorage.derrotas4 = +localStorage.derrotas4 + 1;}
                $("#borrarMarcador").removeAttr("disabled");
                verMarcador();
            }        
        }        
    }    
    function borrarResultados() {
        if (confirm("¿Borrar el marcador?")) {            
            localStorage.victorias1 = 0;
            localStorage.derrotas1 = 0;   
            localStorage.victorias2 = 0;
            localStorage.derrotas2 = 0;
            localStorage.victorias3 = 0;
            localStorage.derrotas3 = 0;       
            localStorage.victorias4 = 0;
            localStorage.derrotas4 = 0;       
            $("#borrarResultados").attr("disabled", "disabled");      
            verResultados();
        }
    }
    function borrarMarcador() {
        if (confirm("¿Borrar el marcador?")) {            
            localStorage.victorias1 = 0;
            localStorage.derrotas1 = 0;   
            localStorage.victorias2 = 0;
            localStorage.derrotas2 = 0;
            localStorage.victorias3 = 0;
            localStorage.derrotas3 = 0;       
            localStorage.victorias4 = 0;
            localStorage.derrotas4 = 0;          
            $("#borrarMarcador").attr("disabled", "disabled");      
            verMarcador();
        }
    }          
    function reiniciar() {
//        window.location.reload();
        location.href="index.html";
    }
    
    //BOTONES
    //    En Inicio
    $(".niveles").on('click', niveles);
    $("#irMenu").on('click', verMenu);    
    //    En Menu
    $("#verAyuda").on('click', verAyuda);
    $("#verMarcador").on('click', verResultados);
    $("#verCreditos").on('click', verCreditos);
    $("#salirMenu").on('click', reiniciar);    
    //    En Resultados
    $("#salirResultados").on('click', reiniciar);
    $("#borrarResultados").on('click', borrarResultados);    
    //    En Ayuda
    $("#salirAyuda").on('click', reiniciar);    
    //    En Créditos
    $("#salirCreditos").on('click', reiniciar);    
    //    En Juego
    $("#iconoMenu").on('click', reiniciar);
    $(".letra").on('click', pulsaLetra);        
    //    En Marcador
    //También: $("#iconoMenu").on('click', reiniciar);
    $("#volverJuego").on('click', verJuego);
    $("#borrarMarcador").on('click', borrarMarcador);
    
});
