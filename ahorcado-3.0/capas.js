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
    localStorage.victorias5 = (localStorage.victorias5 || 0);
    localStorage.derrotas5 = (localStorage.derrotas5 || 0);
    localStorage.victorias6 = (localStorage.victorias6 || 0);
    localStorage.derrotas6 = (localStorage.derrotas6 || 0);
    var palabras = "";
    $(".letra").removeAttr("disabled");
    //Listas de palabras -SOLO de 3 a 8 letras-
    var deportes = ["aerobic", "ajedrez", "aquagym", "arco", "bandy", "basquet", "beisbol", "biathlon", "bikepolo", "billar", "bochas", "bolos", "bossaball", "bowling", "boxeo", "beisbol", "buceo", "canotaje", "caza", "cestoball", "ciclismo", "cricket", "cross", "curling", "danza", "dardos", "decatlon", "duatlon", "escalada", "esgrima", "esqui", "fitness", "futbol", "golf", "gimnasia", "hipica", "hockey", "judo", "karate", "kitesurf", "korfball", "kronum", "lacrosse", "lucha", "luge", "maraton", "mushing", "natacion", "netball", "paddle", "patinaje", "pelota", "pesca", "petanca", "pingpong", "polo", "rafting", "remo", "rugby", "salto", "skeleton", "softbol", "squash", "sumo", "surf", "tenis", "tiro", "trekking", "triatlon", "trineo", "vela", "voleibol", "windsurf"];
    var animales = ["abeja", "abejorro", "aguila", "almeja", "anaconda", "araña", "asno", "atun", "avestruz", "avispa", "ballena", "besugo", "bufalo", "buho", "buitre", "burro", "caballo", "cabra", "caiman", "camaleon", "camello", "canario", "cangrejo", "canguro", "caracol", "cebra", "cerdo", "ciervo", "cigala", "cobra", "conejo", "cotorra", "coyote", "cuervo", "delfin", "elefante", "foca", "gacela", "gallo", "garza", "gato", "gavilan", "gaviota", "gorila", "gorrion", "grillo", "guepardo", "gusano", "halcon", "hamster", "hiena", "hormiga", "iguana", "jabali", "jaguar", "jineta",  "jirafa", "koala", "lagarto", "langosta", "lechuza", "leon", "leopardo", "lemur", "libelula", "liebre", "lince", "llama", "lobo", "lombriz", "loro", "mariposa", "marmota", "marsopa", "mejillon", "mono", "mosca", "mula", "nutria", "orca", "oso", "ostra", "oveja", "paloma", "pantera", "pato", "pavo", "perdiz", "perro", "pinguino", "piton", "pulga", "pulpo", "puma", "rana", "raton", "salmon", "sapo", "tiburon", "tigre", "topo", "toro", "tortuga", "trucha", "tucan", "vaca", "vibora", "zorro"];
    var ciudades = ["adelaida", "agra", "albacete", "alepo", "alicante", "ankara", "atenas", "atlanta", "avila", "badajoz", "bagdad", "bangkok", "basora", "berlin", "berna", "bilbao", "bogota", "bombay", "boston", "bruselas", "burgos", "caceres", "cadiz", "calcuta", "caracas", "chicago", "colonia", "cordoba", "cuenca", "dallas", "dakar", "damasco", "detroit", "dubai", "dublin", "estambul", "ginebra", "hamburgo", "hanoi", "houston", "ibiza", "jaen", "kabul", "karachi", "leipzig", "leon", "lima", "lisboa", "londres", "madrid", "malaga", "manila", "medellin", "merida", "milan", "moscu", "munich", "murcia", "nagoya", "nairobi", "napoles", "oporto", "osaka", "oslo", "palencia", "paris", "pekin", "praga", "rabat", "riad", "roma", "santiago", "segovia", "seul", "sevilla", "shanghai", "sidney", "singapur", "sofia", "teheran", "tokio", "toledo", "toronto", "tunez", "valencia", "venecia", "viena", "yakarta", "zamora", "zaragoza"];
    var flores = ["acacia", "aciano", "alheli", "almizcle", "amapola", "amarilis", "azahar", "azalea", "azucena", "begonia", "betonica", "camelia", "cardo", "ciclamen", "clavel", "clematis", "dalia", "farfara", "fresia", "fucsia", "genciana", "geranio", "girasol", "gladiolo", "glicina", "guisante", "helenio", "hinojo", "hiperico", "hisopo", "iris", "jacinto", "jazmin", "lagrima", "laurel", "lavanda", "lila", "lirio", "lis", "loto", "lunaria", "magnolia", "malva", "menta", "mimosa", "mirto", "narciso", "nenufar", "olivo", "orquidea", "ortiga", "peonia", "petunia", "phlox", "primula", "romero", "rosa", "sabina", "salvia", "sauce", "sauco", "silene", "tejo", "tomillo", "trebol", "tulipan", "ulmaria", "verbena", "veronica", "viborera", "violeta", "zinnia"];
    var peliculas = ["agora", "akira", "alien", "aliento", "amadeus", "amelie", "ardor", "arrebato", "asesinos", "avatar", "babel", "babylon", "bambi", "batman", "bichos", "blacula", "blade", "bolero", "bolt", "brave", "brick", "brothers", "bruno", "buried", "cabaret", "calabuch", "camino", "candida", "candyman", "capote", "carrie", "cars", "casino", "catwoman", "chaplin", "chicago", "cluedo", "control", "cyborg", "daisy", "dracula", "edtv", "elegy", "eragon", "estomago", "evita", "failan", "fargo", "fracture", "furtivos", "gamer", "genova", "ghandi", "ghost", "gigli", "good", "gomorra", "gorgo", "grease", "gremlins", "hachiko", "hamlet", "hancock", "hannibal", "happy", "hero", "hitch", "home", "hostel", "jarhead", "julia", "jumper", "junior", "juno", "jvcd", "kinsey", "kundum", "lantana", "looper", "machete", "mama", "matilda", "matrix", "memento", "monster", "moon", "munich", "naufrago", "niagara", "oliver", "origen", "othello", "papillon", "placido", "platoon", "peloton", "postal", "precious", "psicosis", "push", "radio", "rambo", "rango", "reds", "rec", "reflejos", "robocop", "rocky", "saw", "scarface", "scoop", "seven", "shine", "shrek", "sicko", "sinister", "skyfall", "speed", "splash", "stargate", "stone", "sunshine", "superman", "surcos", "suspense", "syriana", "tangled", "taxi", "tekken", "tesis", "tiburon", "tideland", "tierra", "time", "titanic", "tootsie", "tristana", "tron", "troya", "vacas", "valkiria", "vertigo", "warrior", "xmen", "xxy", "zodiac"];
    var todos =  deportes.concat(animales, ciudades, flores, peliculas);
    
    $.mobile.changePage("#pageInicio", {transition: "slide"});
//    MARCADOR
    function marcador() {
        $.mobile.changePage("#pageMarcador", {transition: "slide"});
//        $('#borrarMarcador').removeClass('ui-disabled');        
        victorias = parseInt(localStorage.victorias1) + parseInt(localStorage.victorias2) + parseInt(localStorage.victorias3) + parseInt(localStorage.victorias4) + parseInt(localStorage.victorias5) + parseInt(localStorage.victorias6);
        derrotas = parseInt(localStorage.derrotas1) + parseInt(localStorage.derrotas2) + parseInt(localStorage.derrotas3) + parseInt(localStorage.derrotas4) + parseInt(localStorage.derrotas5) + parseInt(localStorage.derrotas6);
        if (victorias === 0 && derrotas === 0) {$('#borrarMarcador').addClass('ui-disabled'); }
        $("#tablaMarcador").html(
            "<thead><tr><th scope='col'>" + " " + "</th><th scope='col'><img src='triunfos.png' />" + "</th><th scope='col'>" + "   " + "</th><th scope='col'><img src='derrotas.png' /></th></tr></thead>" +
            "<br />" +
            "<tr><th scope='row'>" + "Deportes" + "</th><td>" + localStorage.victorias1 + "</td><td>" + "-" + "</td><td>" + localStorage.derrotas1 + "</td></tr>" +
            "<tr><th scope='row'>" + "Animales" + "</th><td>" + localStorage.victorias2 + "</td><td>" + "-" + "</td><td>" + localStorage.derrotas2 + "</td></tr>" +
            "<tr><th scope='row'>" + "Ciudades" + "</th><td>" + localStorage.victorias3 + "</td><td>" + "-" + "</td><td>" + localStorage.derrotas3 + "</td></tr>" +
            "<tr><th scope='row'>" + "Flores" + "</th><td>" + localStorage.victorias4 + "</td><td>" + "-" + "</td><td>" + localStorage.derrotas4 + "</td></tr>" +
            "<tr><th scope='row'>" + "Películas" + "</th><td>" + localStorage.victorias5 + "</td><td>" + "-" + "</td><td>" + localStorage.derrotas5 + "</td></tr>" +
            "<tr><th scope='row'>" + "Global" + "</th><td>" + localStorage.victorias6 + "</td><td>" + "-" + "</td><td>" + localStorage.derrotas6 + "</td></tr>" +            
            "<br />" +
            "<tr class='ultima'><th scope='row'>" + "  " + "</th><td class='grande'>" + victorias + "</td><td>" + "-" + "</td><td class='grande'>" + derrotas + "</td></tr>"
        );
    }
//    JUEGO
    function verJuego() {
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
        var aleatorio = Math.floor(Math.random() * npalabras);
        estaPalabra = palabras[aleatorio];
        estaPalabraM = estaPalabra.toUpperCase();
        //Identifica el número de letras y cada letra de la palabra seleccionada
        nLetras = estaPalabra.length;
        letra1 = estaPalabra.substring(0, 1);
        letra2 = estaPalabra.substring(1, 2);
        letra3 = estaPalabra.substring(2, 3);
        letra4 = estaPalabra.substring(3, 4);
        letra5 = estaPalabra.substring(4, 5);
        letra6 = estaPalabra.substring(5, 6);
        letra7 = estaPalabra.substring(6, 7);
        letra8 = estaPalabra.substring(7, 8);
        //Escribe las rayas, tantas como letras tiene la palabra seleccionada            
        $(".letra1").html("_");
        $(".letra2").html("_");
        $(".letra3").html("_");
        if (nLetras > 3) {$(".letra4").html("_"); }
        if (nLetras > 4) {$(".letra5").html("_"); }
        if (nLetras > 5) {$(".letra6").html("_"); }
        if (nLetras > 6) {$(".letra7").html("_"); }
        if (nLetras > 7) {$(".letra8").html("_"); }
    }
//    TEMAS
    function niveles() {
        nivel = ($(this).val());
        //  $.mobile.changePage("#pageJuego", {transition: "slide"}); 
        if (nivel === "1") {
            palabras = deportes;
            var imagenDeportes = $('<img/>').attr({type: 'image', src: 'iconDeporte2.svg'});
            $("#indicadorNivel").html(imagenDeportes);
        }
        if (nivel === "2") {
            palabras = animales;
            var imagenAnimal = $('<img/>').attr({type: 'image', src: 'iconAnimal2.svg'});
            $("#indicadorNivel").html(imagenAnimal);
        }
        if (nivel === "3") {
            palabras = ciudades;
            var imagenCiudad = $('<img/>').attr({type: 'image', src: 'iconCiudad2.svg'});
            $("#indicadorNivel").html(imagenCiudad);
        }
        if (nivel === "4") {
            palabras = flores;
            var imagenFlor = $('<img/>').attr({type: 'image', src: 'iconFlor2.svg'});
            $("#indicadorNivel").html(imagenFlor);
        }
        if (nivel === "5") {
            palabras = peliculas;
            var imagenPelicula = $('<img/>').attr({type: 'image', src: 'iconPelicula.svg'});
            $("#indicadorNivel").html(imagenPelicula);
        }
        if (nivel === "6") {
            palabras = todos;
            var $nuevoBoton = $('<input/>').attr({ type: 'image', name: 'btn1', src: 'pista2.svg'});
            $("#indicadorNivel").html($nuevoBoton);
            $nuevoBoton.click(function () {
                if ($.inArray(estaPalabra, deportes) !== -1) {alert("Una pista: la palabra es un DEPORTE"); }
                if ($.inArray(estaPalabra, animales) !== -1) {alert("Una pista: la palabra es un ANIMAL"); }
                if ($.inArray(estaPalabra, ciudades) !== -1) {alert("Una pista: la palabra es una CIUDAD"); }
                if ($.inArray(estaPalabra, flores) !== -1) {alert("Una pista: la palabra es una FLOR"); }
                if ($.inArray(estaPalabra, peliculas) !== -1) {alert("Una pista: la palabra es una PELÍCULA"); }
            });
        }
        if (palabras !== false) {
            $.mobile.changePage("#pageJuego", {transition: "slide"});
            verJuego();
        }
    }
//ACCION AL PULSAR LETRA        
function pulsaLetra() {
    var letraBoton = ($(this).val());
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
                if (nivel === "5") {localStorage.victorias5 = +localStorage.victorias5 + 1;}
                if (nivel === "6") {localStorage.victorias6 = +localStorage.victorias6 + 1;}                
                $('#borrarMarcador').removeClass('ui-disabled');
                marcador();
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
                if (nivel === "5") {localStorage.derrotas5 = +localStorage.derrotas5 + 1;}
                if (nivel === "6") {localStorage.derrotas6 = +localStorage.derrotas6 + 1;}                
                $('#borrarMarcador').removeClass('ui-disabled');
                marcador();
            }        
        }        
    }
//    SALIR DEL MARCADOR
    function salirMarcador() {
        if (palabras === "") {
            $.mobile.changePage("#pageNiveles", {transition: "slide"});            
        } else {
            $.mobile.changePage("#pageJuego", {transition: "slide"}); 
            verJuego();
        }        
    }
//    BORRAR MARCADOR
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
            localStorage.victorias5 = 0;
            localStorage.derrotas5 = 0;       
            localStorage.victorias6 = 0;
            localStorage.derrotas6 = 0;
//            $("#borrarMarcador").attr("disabled", "disabled");
            $('#borrarMarcador').addClass('ui-disabled');
            marcador();
        }
    }
//    BOTONES
    //    En Inicio
    $("#verMarcador").on('click', marcador);
    //    En Temas
     $(".niveles").bind('click', niveles);
    //    En Juego
    //    $(".reiniciar").on('click', reiniciar);
    $(".letra").on('click', pulsaLetra);    
     //    En Marcador
    //También: $("#iconoMenu").on('click', reiniciar);    
    $("#salirMarcador").on('click', salirMarcador);
    $("#borrarMarcador").on('click', borrarMarcador);
});