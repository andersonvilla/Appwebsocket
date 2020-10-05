let galerias = document.querySelectorAll('section.xop-section');
let titulos = document.querySelectorAll('div');
let estilos = document.getElementById('estilos');
let content = document.getElementById('root');

let titulo = "";
let imagen = "";
let resumen = "";
let precio = "";
let desc = "";


function h01(){
    titulo = "Hamburguesa con Huevo";
    imagen = "../../images/hamburguesas/01.jpg"
    resumen = "orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis est est aliquam, sed faucibus massa lobortis. Maecenas non est justo.";
    precio = "$9500";
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec auctor turpis. Curabitur at nisi eu arcu blandit feugiat. Quisque mollis sodales dolor, vitae facilisis elit dictum in. Fusce condimentum molestie volutpat. Nam ut quam luctus, suscipit quam sed, egestas nibh. Maecenas pulvinar est ut lectus faucibus, vitae dictum est bibendum. Nunc dictum ligula nec sapien ultrices elementum. In hac habitasse platea dictumst. Proin non tortor vehicula elit facilisis auctor et id turpis. Phasellus eu velit eu urna fermentum semper at ut massa. Vivamus eget magna placerat, dictum odio at, posuere massa. Morbi ornare et arcu eget luctus. Suspendisse accumsan accumsan dapibus. Suspendisse condimentum, nulla nec auctor ultrices, lorem diam faucibus erat, non pellentesque ex dui mollis neque. Proin vel elit accumsan, interdum mi eu, dapibus massa.";
}

function h02(){
    titulo = "Hamburguesa de Salmón";
    imagen = "../../images/hamburguesas/02.jpg"
    resumen = "orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis est est aliquam, sed faucibus massa lobortis. Maecenas non est justo.";
    precio = "$10500";
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec auctor turpis. Curabitur at nisi eu arcu blandit feugiat. Quisque mollis sodales dolor, vitae facilisis elit dictum in. Fusce condimentum molestie volutpat. Nam ut quam luctus, suscipit quam sed, egestas nibh. Maecenas pulvinar est ut lectus faucibus, vitae dictum est bibendum. Nunc dictum ligula nec sapien ultrices elementum. In hac habitasse platea dictumst. Proin non tortor vehicula elit facilisis auctor et id turpis. Phasellus eu velit eu urna fermentum semper at ut massa. Vivamus eget magna placerat, dictum odio at, posuere massa. Morbi ornare et arcu eget luctus. Suspendisse accumsan accumsan dapibus. Suspendisse condimentum, nulla nec auctor ultrices, lorem diam faucibus erat, non pellentesque ex dui mollis neque. Proin vel elit accumsan, interdum mi eu, dapibus massa.";
}

function h03(){
    titulo = "Hamburguesa Sencilla";
    imagen = "../../images/hamburguesas/03.jpg"
    resumen = "orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis est est aliquam, sed faucibus massa lobortis. Maecenas non est justo.";
    precio = "$7500";
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec auctor turpis. Curabitur at nisi eu arcu blandit feugiat. Quisque mollis sodales dolor, vitae facilisis elit dictum in. Fusce condimentum molestie volutpat. Nam ut quam luctus, suscipit quam sed, egestas nibh. Maecenas pulvinar est ut lectus faucibus, vitae dictum est bibendum. Nunc dictum ligula nec sapien ultrices elementum. In hac habitasse platea dictumst. Proin non tortor vehicula elit facilisis auctor et id turpis. Phasellus eu velit eu urna fermentum semper at ut massa. Vivamus eget magna placerat, dictum odio at, posuere massa. Morbi ornare et arcu eget luctus. Suspendisse accumsan accumsan dapibus. Suspendisse condimentum, nulla nec auctor ultrices, lorem diam faucibus erat, non pellentesque ex dui mollis neque. Proin vel elit accumsan, interdum mi eu, dapibus massa.";
}

function h04(){
    titulo = "Hamburguesa Especial";
    imagen = "../../images/hamburguesas/04.jpg"
    resumen = "orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis est est aliquam, sed faucibus massa lobortis. Maecenas non est justo.";
    precio = "$13000";
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec auctor turpis. Curabitur at nisi eu arcu blandit feugiat. Quisque mollis sodales dolor, vitae facilisis elit dictum in. Fusce condimentum molestie volutpat. Nam ut quam luctus, suscipit quam sed, egestas nibh. Maecenas pulvinar est ut lectus faucibus, vitae dictum est bibendum. Nunc dictum ligula nec sapien ultrices elementum. In hac habitasse platea dictumst. Proin non tortor vehicula elit facilisis auctor et id turpis. Phasellus eu velit eu urna fermentum semper at ut massa. Vivamus eget magna placerat, dictum odio at, posuere massa. Morbi ornare et arcu eget luctus. Suspendisse accumsan accumsan dapibus. Suspendisse condimentum, nulla nec auctor ultrices, lorem diam faucibus erat, non pellentesque ex dui mollis neque. Proin vel elit accumsan, interdum mi eu, dapibus massa.";
}

function h05(){
    titulo = "Hamburguesa Vegetariana";
    imagen = "../../images/hamburguesas/05.jpg"
    resumen = "orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis est est aliquam, sed faucibus massa lobortis. Maecenas non est justo.";
    precio = "$10000";
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec auctor turpis. Curabitur at nisi eu arcu blandit feugiat. Quisque mollis sodales dolor, vitae facilisis elit dictum in. Fusce condimentum molestie volutpat. Nam ut quam luctus, suscipit quam sed, egestas nibh. Maecenas pulvinar est ut lectus faucibus, vitae dictum est bibendum. Nunc dictum ligula nec sapien ultrices elementum. In hac habitasse platea dictumst. Proin non tortor vehicula elit facilisis auctor et id turpis. Phasellus eu velit eu urna fermentum semper at ut massa. Vivamus eget magna placerat, dictum odio at, posuere massa. Morbi ornare et arcu eget luctus. Suspendisse accumsan accumsan dapibus. Suspendisse condimentum, nulla nec auctor ultrices, lorem diam faucibus erat, non pellentesque ex dui mollis neque. Proin vel elit accumsan, interdum mi eu, dapibus massa.";
}

function pa01(){
    titulo = "Papas Sencillas";
    imagen = "../../images/papas/01.jpg"
    resumen = "orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis est est aliquam, sed faucibus massa lobortis. Maecenas non est justo.";
    precio = "$6000";
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec auctor turpis. Curabitur at nisi eu arcu blandit feugiat. Quisque mollis sodales dolor, vitae facilisis elit dictum in. Fusce condimentum molestie volutpat. Nam ut quam luctus, suscipit quam sed, egestas nibh. Maecenas pulvinar est ut lectus faucibus, vitae dictum est bibendum. Nunc dictum ligula nec sapien ultrices elementum. In hac habitasse platea dictumst. Proin non tortor vehicula elit facilisis auctor et id turpis. Phasellus eu velit eu urna fermentum semper at ut massa. Vivamus eget magna placerat, dictum odio at, posuere massa. Morbi ornare et arcu eget luctus. Suspendisse accumsan accumsan dapibus. Suspendisse condimentum, nulla nec auctor ultrices, lorem diam faucibus erat, non pellentesque ex dui mollis neque. Proin vel elit accumsan, interdum mi eu, dapibus massa.";
}

function pa02(){
    titulo = "Papas con Carne";
    imagen = "../../images/papas/02.jpg"
    resumen = "orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis est est aliquam, sed faucibus massa lobortis. Maecenas non est justo.";
    precio = "$10000";
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec auctor turpis. Curabitur at nisi eu arcu blandit feugiat. Quisque mollis sodales dolor, vitae facilisis elit dictum in. Fusce condimentum molestie volutpat. Nam ut quam luctus, suscipit quam sed, egestas nibh. Maecenas pulvinar est ut lectus faucibus, vitae dictum est bibendum. Nunc dictum ligula nec sapien ultrices elementum. In hac habitasse platea dictumst. Proin non tortor vehicula elit facilisis auctor et id turpis. Phasellus eu velit eu urna fermentum semper at ut massa. Vivamus eget magna placerat, dictum odio at, posuere massa. Morbi ornare et arcu eget luctus. Suspendisse accumsan accumsan dapibus. Suspendisse condimentum, nulla nec auctor ultrices, lorem diam faucibus erat, non pellentesque ex dui mollis neque. Proin vel elit accumsan, interdum mi eu, dapibus massa.";
}

function pa03(){
    titulo = "Papas con Tocineta";
    imagen = "../../images/papas/03.jpg"
    resumen = "orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis est est aliquam, sed faucibus massa lobortis. Maecenas non est justo.";
    precio = "$10500";
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec auctor turpis. Curabitur at nisi eu arcu blandit feugiat. Quisque mollis sodales dolor, vitae facilisis elit dictum in. Fusce condimentum molestie volutpat. Nam ut quam luctus, suscipit quam sed, egestas nibh. Maecenas pulvinar est ut lectus faucibus, vitae dictum est bibendum. Nunc dictum ligula nec sapien ultrices elementum. In hac habitasse platea dictumst. Proin non tortor vehicula elit facilisis auctor et id turpis. Phasellus eu velit eu urna fermentum semper at ut massa. Vivamus eget magna placerat, dictum odio at, posuere massa. Morbi ornare et arcu eget luctus. Suspendisse accumsan accumsan dapibus. Suspendisse condimentum, nulla nec auctor ultrices, lorem diam faucibus erat, non pellentesque ex dui mollis neque. Proin vel elit accumsan, interdum mi eu, dapibus massa.";
}

function pa04(){
    titulo = "Papas con Nuggets";
    imagen = "../../images/papas/04.jpg"
    resumen = "orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis est est aliquam, sed faucibus massa lobortis. Maecenas non est justo.";
    precio = "$12000";
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec auctor turpis. Curabitur at nisi eu arcu blandit feugiat. Quisque mollis sodales dolor, vitae facilisis elit dictum in. Fusce condimentum molestie volutpat. Nam ut quam luctus, suscipit quam sed, egestas nibh. Maecenas pulvinar est ut lectus faucibus, vitae dictum est bibendum. Nunc dictum ligula nec sapien ultrices elementum. In hac habitasse platea dictumst. Proin non tortor vehicula elit facilisis auctor et id turpis. Phasellus eu velit eu urna fermentum semper at ut massa. Vivamus eget magna placerat, dictum odio at, posuere massa. Morbi ornare et arcu eget luctus. Suspendisse accumsan accumsan dapibus. Suspendisse condimentum, nulla nec auctor ultrices, lorem diam faucibus erat, non pellentesque ex dui mollis neque. Proin vel elit accumsan, interdum mi eu, dapibus massa.";
}

function pe01(){
    titulo = "Perro Sencillo";
    imagen = "../../images/perros/01.png"
    resumen = "orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis est est aliquam, sed faucibus massa lobortis. Maecenas non est justo.";
    precio = "$5000";
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec auctor turpis. Curabitur at nisi eu arcu blandit feugiat. Quisque mollis sodales dolor, vitae facilisis elit dictum in. Fusce condimentum molestie volutpat. Nam ut quam luctus, suscipit quam sed, egestas nibh. Maecenas pulvinar est ut lectus faucibus, vitae dictum est bibendum. Nunc dictum ligula nec sapien ultrices elementum. In hac habitasse platea dictumst. Proin non tortor vehicula elit facilisis auctor et id turpis. Phasellus eu velit eu urna fermentum semper at ut massa. Vivamus eget magna placerat, dictum odio at, posuere massa. Morbi ornare et arcu eget luctus. Suspendisse accumsan accumsan dapibus. Suspendisse condimentum, nulla nec auctor ultrices, lorem diam faucibus erat, non pellentesque ex dui mollis neque. Proin vel elit accumsan, interdum mi eu, dapibus massa.";
}

function pe02(){
    titulo = "Perro con Papas";
    imagen = "../../images/perros/02.jpg"
    resumen = "orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis est est aliquam, sed faucibus massa lobortis. Maecenas non est justo.";
    precio = "$8000";
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec auctor turpis. Curabitur at nisi eu arcu blandit feugiat. Quisque mollis sodales dolor, vitae facilisis elit dictum in. Fusce condimentum molestie volutpat. Nam ut quam luctus, suscipit quam sed, egestas nibh. Maecenas pulvinar est ut lectus faucibus, vitae dictum est bibendum. Nunc dictum ligula nec sapien ultrices elementum. In hac habitasse platea dictumst. Proin non tortor vehicula elit facilisis auctor et id turpis. Phasellus eu velit eu urna fermentum semper at ut massa. Vivamus eget magna placerat, dictum odio at, posuere massa. Morbi ornare et arcu eget luctus. Suspendisse accumsan accumsan dapibus. Suspendisse condimentum, nulla nec auctor ultrices, lorem diam faucibus erat, non pellentesque ex dui mollis neque. Proin vel elit accumsan, interdum mi eu, dapibus massa.";
}

function pe03(){
    titulo = "Perro Especial";
    imagen = "../../images/perros/03.jpeg"
    resumen = "orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis est est aliquam, sed faucibus massa lobortis. Maecenas non est justo.";
    precio = "$11000";
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec auctor turpis. Curabitur at nisi eu arcu blandit feugiat. Quisque mollis sodales dolor, vitae facilisis elit dictum in. Fusce condimentum molestie volutpat. Nam ut quam luctus, suscipit quam sed, egestas nibh. Maecenas pulvinar est ut lectus faucibus, vitae dictum est bibendum. Nunc dictum ligula nec sapien ultrices elementum. In hac habitasse platea dictumst. Proin non tortor vehicula elit facilisis auctor et id turpis. Phasellus eu velit eu urna fermentum semper at ut massa. Vivamus eget magna placerat, dictum odio at, posuere massa. Morbi ornare et arcu eget luctus. Suspendisse accumsan accumsan dapibus. Suspendisse condimentum, nulla nec auctor ultrices, lorem diam faucibus erat, non pellentesque ex dui mollis neque. Proin vel elit accumsan, interdum mi eu, dapibus massa.";
}

function pe04(){
    titulo = "Perro con Tocineta";
    imagen = "../../images/perros/04.jpg"
    resumen = "orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis est est aliquam, sed faucibus massa lobortis. Maecenas non est justo.";
    precio = "$10500";
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec auctor turpis. Curabitur at nisi eu arcu blandit feugiat. Quisque mollis sodales dolor, vitae facilisis elit dictum in. Fusce condimentum molestie volutpat. Nam ut quam luctus, suscipit quam sed, egestas nibh. Maecenas pulvinar est ut lectus faucibus, vitae dictum est bibendum. Nunc dictum ligula nec sapien ultrices elementum. In hac habitasse platea dictumst. Proin non tortor vehicula elit facilisis auctor et id turpis. Phasellus eu velit eu urna fermentum semper at ut massa. Vivamus eget magna placerat, dictum odio at, posuere massa. Morbi ornare et arcu eget luctus. Suspendisse accumsan accumsan dapibus. Suspendisse condimentum, nulla nec auctor ultrices, lorem diam faucibus erat, non pellentesque ex dui mollis neque. Proin vel elit accumsan, interdum mi eu, dapibus massa.";
}

function b01(){
    titulo = "Burrito de Carne";
    imagen = "../../images/burritos/01.jpg"
    resumen = "orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis est est aliquam, sed faucibus massa lobortis. Maecenas non est justo.";
    precio = "$7500";
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec auctor turpis. Curabitur at nisi eu arcu blandit feugiat. Quisque mollis sodales dolor, vitae facilisis elit dictum in. Fusce condimentum molestie volutpat. Nam ut quam luctus, suscipit quam sed, egestas nibh. Maecenas pulvinar est ut lectus faucibus, vitae dictum est bibendum. Nunc dictum ligula nec sapien ultrices elementum. In hac habitasse platea dictumst. Proin non tortor vehicula elit facilisis auctor et id turpis. Phasellus eu velit eu urna fermentum semper at ut massa. Vivamus eget magna placerat, dictum odio at, posuere massa. Morbi ornare et arcu eget luctus. Suspendisse accumsan accumsan dapibus. Suspendisse condimentum, nulla nec auctor ultrices, lorem diam faucibus erat, non pellentesque ex dui mollis neque. Proin vel elit accumsan, interdum mi eu, dapibus massa.";
}

function b02(){
    titulo = "Burrito de Pollo";
    imagen = "../../images/burritos/02.jpg"
    resumen = "orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis est est aliquam, sed faucibus massa lobortis. Maecenas non est justo.";
    precio = "$7500";
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec auctor turpis. Curabitur at nisi eu arcu blandit feugiat. Quisque mollis sodales dolor, vitae facilisis elit dictum in. Fusce condimentum molestie volutpat. Nam ut quam luctus, suscipit quam sed, egestas nibh. Maecenas pulvinar est ut lectus faucibus, vitae dictum est bibendum. Nunc dictum ligula nec sapien ultrices elementum. In hac habitasse platea dictumst. Proin non tortor vehicula elit facilisis auctor et id turpis. Phasellus eu velit eu urna fermentum semper at ut massa. Vivamus eget magna placerat, dictum odio at, posuere massa. Morbi ornare et arcu eget luctus. Suspendisse accumsan accumsan dapibus. Suspendisse condimentum, nulla nec auctor ultrices, lorem diam faucibus erat, non pellentesque ex dui mollis neque. Proin vel elit accumsan, interdum mi eu, dapibus massa.";
}

function b03(){
    titulo = "Burrito con Papas";
    imagen = "../../images/burritos/03.jpeg"
    resumen = "orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis est est aliquam, sed faucibus massa lobortis. Maecenas non est justo.";
    precio = "$9500";
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec auctor turpis. Curabitur at nisi eu arcu blandit feugiat. Quisque mollis sodales dolor, vitae facilisis elit dictum in. Fusce condimentum molestie volutpat. Nam ut quam luctus, suscipit quam sed, egestas nibh. Maecenas pulvinar est ut lectus faucibus, vitae dictum est bibendum. Nunc dictum ligula nec sapien ultrices elementum. In hac habitasse platea dictumst. Proin non tortor vehicula elit facilisis auctor et id turpis. Phasellus eu velit eu urna fermentum semper at ut massa. Vivamus eget magna placerat, dictum odio at, posuere massa. Morbi ornare et arcu eget luctus. Suspendisse accumsan accumsan dapibus. Suspendisse condimentum, nulla nec auctor ultrices, lorem diam faucibus erat, non pellentesque ex dui mollis neque. Proin vel elit accumsan, interdum mi eu, dapibus massa.";
}

function b04(){
    titulo = "Burrito Vegetariano";
    imagen = "../../images/burritos/04.jpg"
    resumen = "orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis est est aliquam, sed faucibus massa lobortis. Maecenas non est justo.";
    precio = "$8000";
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec auctor turpis. Curabitur at nisi eu arcu blandit feugiat. Quisque mollis sodales dolor, vitae facilisis elit dictum in. Fusce condimentum molestie volutpat. Nam ut quam luctus, suscipit quam sed, egestas nibh. Maecenas pulvinar est ut lectus faucibus, vitae dictum est bibendum. Nunc dictum ligula nec sapien ultrices elementum. In hac habitasse platea dictumst. Proin non tortor vehicula elit facilisis auctor et id turpis. Phasellus eu velit eu urna fermentum semper at ut massa. Vivamus eget magna placerat, dictum odio at, posuere massa. Morbi ornare et arcu eget luctus. Suspendisse accumsan accumsan dapibus. Suspendisse condimentum, nulla nec auctor ultrices, lorem diam faucibus erat, non pellentesque ex dui mollis neque. Proin vel elit accumsan, interdum mi eu, dapibus massa.";
}

function b05(){
    titulo = "Burrito Mixto";
    imagen = "../../images/burritos/05.jpg"
    resumen = "orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis est est aliquam, sed faucibus massa lobortis. Maecenas non est justo.";
    precio = "$10000";
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec auctor turpis. Curabitur at nisi eu arcu blandit feugiat. Quisque mollis sodales dolor, vitae facilisis elit dictum in. Fusce condimentum molestie volutpat. Nam ut quam luctus, suscipit quam sed, egestas nibh. Maecenas pulvinar est ut lectus faucibus, vitae dictum est bibendum. Nunc dictum ligula nec sapien ultrices elementum. In hac habitasse platea dictumst. Proin non tortor vehicula elit facilisis auctor et id turpis. Phasellus eu velit eu urna fermentum semper at ut massa. Vivamus eget magna placerat, dictum odio at, posuere massa. Morbi ornare et arcu eget luctus. Suspendisse accumsan accumsan dapibus. Suspendisse condimentum, nulla nec auctor ultrices, lorem diam faucibus erat, non pellentesque ex dui mollis neque. Proin vel elit accumsan, interdum mi eu, dapibus massa.";
}

function ar01(){
    titulo = "Arepa con Carne";
    imagen = "../../images/arepas/01.jpg"
    resumen = "orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis est est aliquam, sed faucibus massa lobortis. Maecenas non est justo.";
    precio = "$6000";
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec auctor turpis. Curabitur at nisi eu arcu blandit feugiat. Quisque mollis sodales dolor, vitae facilisis elit dictum in. Fusce condimentum molestie volutpat. Nam ut quam luctus, suscipit quam sed, egestas nibh. Maecenas pulvinar est ut lectus faucibus, vitae dictum est bibendum. Nunc dictum ligula nec sapien ultrices elementum. In hac habitasse platea dictumst. Proin non tortor vehicula elit facilisis auctor et id turpis. Phasellus eu velit eu urna fermentum semper at ut massa. Vivamus eget magna placerat, dictum odio at, posuere massa. Morbi ornare et arcu eget luctus. Suspendisse accumsan accumsan dapibus. Suspendisse condimentum, nulla nec auctor ultrices, lorem diam faucibus erat, non pellentesque ex dui mollis neque. Proin vel elit accumsan, interdum mi eu, dapibus massa.";
}

function ar02(){
    titulo = "Arepa con Pollo";
    imagen = "../../images/arepas/02.jpg"
    resumen = "orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis est est aliquam, sed faucibus massa lobortis. Maecenas non est justo.";
    precio = "$6000";
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec auctor turpis. Curabitur at nisi eu arcu blandit feugiat. Quisque mollis sodales dolor, vitae facilisis elit dictum in. Fusce condimentum molestie volutpat. Nam ut quam luctus, suscipit quam sed, egestas nibh. Maecenas pulvinar est ut lectus faucibus, vitae dictum est bibendum. Nunc dictum ligula nec sapien ultrices elementum. In hac habitasse platea dictumst. Proin non tortor vehicula elit facilisis auctor et id turpis. Phasellus eu velit eu urna fermentum semper at ut massa. Vivamus eget magna placerat, dictum odio at, posuere massa. Morbi ornare et arcu eget luctus. Suspendisse accumsan accumsan dapibus. Suspendisse condimentum, nulla nec auctor ultrices, lorem diam faucibus erat, non pellentesque ex dui mollis neque. Proin vel elit accumsan, interdum mi eu, dapibus massa.";
}

function ar03(){
    titulo = "Arepa con Atún";
    imagen = "../../images/arepas/03.jpg"
    resumen = "orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis est est aliquam, sed faucibus massa lobortis. Maecenas non est justo.";
    precio = "$5500";
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec auctor turpis. Curabitur at nisi eu arcu blandit feugiat. Quisque mollis sodales dolor, vitae facilisis elit dictum in. Fusce condimentum molestie volutpat. Nam ut quam luctus, suscipit quam sed, egestas nibh. Maecenas pulvinar est ut lectus faucibus, vitae dictum est bibendum. Nunc dictum ligula nec sapien ultrices elementum. In hac habitasse platea dictumst. Proin non tortor vehicula elit facilisis auctor et id turpis. Phasellus eu velit eu urna fermentum semper at ut massa. Vivamus eget magna placerat, dictum odio at, posuere massa. Morbi ornare et arcu eget luctus. Suspendisse accumsan accumsan dapibus. Suspendisse condimentum, nulla nec auctor ultrices, lorem diam faucibus erat, non pellentesque ex dui mollis neque. Proin vel elit accumsan, interdum mi eu, dapibus massa.";
}

function ar04(){
    titulo = "Arepa Vegetariana";
    imagen = "../../images/arepas/04.jpg"
    resumen = "orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis est est aliquam, sed faucibus massa lobortis. Maecenas non est justo.";
    precio = "$6500";
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec auctor turpis. Curabitur at nisi eu arcu blandit feugiat. Quisque mollis sodales dolor, vitae facilisis elit dictum in. Fusce condimentum molestie volutpat. Nam ut quam luctus, suscipit quam sed, egestas nibh. Maecenas pulvinar est ut lectus faucibus, vitae dictum est bibendum. Nunc dictum ligula nec sapien ultrices elementum. In hac habitasse platea dictumst. Proin non tortor vehicula elit facilisis auctor et id turpis. Phasellus eu velit eu urna fermentum semper at ut massa. Vivamus eget magna placerat, dictum odio at, posuere massa. Morbi ornare et arcu eget luctus. Suspendisse accumsan accumsan dapibus. Suspendisse condimentum, nulla nec auctor ultrices, lorem diam faucibus erat, non pellentesque ex dui mollis neque. Proin vel elit accumsan, interdum mi eu, dapibus massa.";
}

function ar05(){
    titulo = "Arepa Mixta";
    imagen = "../../images/arepas/05.jpg"
    resumen = "orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis est est aliquam, sed faucibus massa lobortis. Maecenas non est justo.";
    precio = "$7500";
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec auctor turpis. Curabitur at nisi eu arcu blandit feugiat. Quisque mollis sodales dolor, vitae facilisis elit dictum in. Fusce condimentum molestie volutpat. Nam ut quam luctus, suscipit quam sed, egestas nibh. Maecenas pulvinar est ut lectus faucibus, vitae dictum est bibendum. Nunc dictum ligula nec sapien ultrices elementum. In hac habitasse platea dictumst. Proin non tortor vehicula elit facilisis auctor et id turpis. Phasellus eu velit eu urna fermentum semper at ut massa. Vivamus eget magna placerat, dictum odio at, posuere massa. Morbi ornare et arcu eget luctus. Suspendisse accumsan accumsan dapibus. Suspendisse condimentum, nulla nec auctor ultrices, lorem diam faucibus erat, non pellentesque ex dui mollis neque. Proin vel elit accumsan, interdum mi eu, dapibus massa.";
}

function al01(){
    titulo = "Alitas con Papas x5";
    imagen = "../../images/alitas/01.jpg"
    resumen = "orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis est est aliquam, sed faucibus massa lobortis. Maecenas non est justo.";
    precio = "$8000";
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec auctor turpis. Curabitur at nisi eu arcu blandit feugiat. Quisque mollis sodales dolor, vitae facilisis elit dictum in. Fusce condimentum molestie volutpat. Nam ut quam luctus, suscipit quam sed, egestas nibh. Maecenas pulvinar est ut lectus faucibus, vitae dictum est bibendum. Nunc dictum ligula nec sapien ultrices elementum. In hac habitasse platea dictumst. Proin non tortor vehicula elit facilisis auctor et id turpis. Phasellus eu velit eu urna fermentum semper at ut massa. Vivamus eget magna placerat, dictum odio at, posuere massa. Morbi ornare et arcu eget luctus. Suspendisse accumsan accumsan dapibus. Suspendisse condimentum, nulla nec auctor ultrices, lorem diam faucibus erat, non pellentesque ex dui mollis neque. Proin vel elit accumsan, interdum mi eu, dapibus massa.";
}

function al02(){
    titulo = "Alitas BBQ x10";
    imagen = "../../images/alitas/02.jpg"
    resumen = "orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis est est aliquam, sed faucibus massa lobortis. Maecenas non est justo.";
    precio = "$10000";
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec auctor turpis. Curabitur at nisi eu arcu blandit feugiat. Quisque mollis sodales dolor, vitae facilisis elit dictum in. Fusce condimentum molestie volutpat. Nam ut quam luctus, suscipit quam sed, egestas nibh. Maecenas pulvinar est ut lectus faucibus, vitae dictum est bibendum. Nunc dictum ligula nec sapien ultrices elementum. In hac habitasse platea dictumst. Proin non tortor vehicula elit facilisis auctor et id turpis. Phasellus eu velit eu urna fermentum semper at ut massa. Vivamus eget magna placerat, dictum odio at, posuere massa. Morbi ornare et arcu eget luctus. Suspendisse accumsan accumsan dapibus. Suspendisse condimentum, nulla nec auctor ultrices, lorem diam faucibus erat, non pellentesque ex dui mollis neque. Proin vel elit accumsan, interdum mi eu, dapibus massa.";
}

function al03(){
    titulo = "Alitas MielMostaza x10";
    imagen = "../../images/alitas/03.jpg"
    resumen = "orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis est est aliquam, sed faucibus massa lobortis. Maecenas non est justo.";
    precio = "$13000";
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec auctor turpis. Curabitur at nisi eu arcu blandit feugiat. Quisque mollis sodales dolor, vitae facilisis elit dictum in. Fusce condimentum molestie volutpat. Nam ut quam luctus, suscipit quam sed, egestas nibh. Maecenas pulvinar est ut lectus faucibus, vitae dictum est bibendum. Nunc dictum ligula nec sapien ultrices elementum. In hac habitasse platea dictumst. Proin non tortor vehicula elit facilisis auctor et id turpis. Phasellus eu velit eu urna fermentum semper at ut massa. Vivamus eget magna placerat, dictum odio at, posuere massa. Morbi ornare et arcu eget luctus. Suspendisse accumsan accumsan dapibus. Suspendisse condimentum, nulla nec auctor ultrices, lorem diam faucibus erat, non pellentesque ex dui mollis neque. Proin vel elit accumsan, interdum mi eu, dapibus massa.";
}

function al04(){
    titulo = "Alitas Picantes x10";
    imagen = "../../images/alitas/04.jpg"
    resumen = "orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis est est aliquam, sed faucibus massa lobortis. Maecenas non est justo.";
    precio = "$12000";
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec auctor turpis. Curabitur at nisi eu arcu blandit feugiat. Quisque mollis sodales dolor, vitae facilisis elit dictum in. Fusce condimentum molestie volutpat. Nam ut quam luctus, suscipit quam sed, egestas nibh. Maecenas pulvinar est ut lectus faucibus, vitae dictum est bibendum. Nunc dictum ligula nec sapien ultrices elementum. In hac habitasse platea dictumst. Proin non tortor vehicula elit facilisis auctor et id turpis. Phasellus eu velit eu urna fermentum semper at ut massa. Vivamus eget magna placerat, dictum odio at, posuere massa. Morbi ornare et arcu eget luctus. Suspendisse accumsan accumsan dapibus. Suspendisse condimentum, nulla nec auctor ultrices, lorem diam faucibus erat, non pellentesque ex dui mollis neque. Proin vel elit accumsan, interdum mi eu, dapibus massa.";
}

function e01(){
    titulo = "Changua";
    imagen = "../../images/especiales/01.jpg"
    resumen = "orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis est est aliquam, sed faucibus massa lobortis. Maecenas non est justo.";
    precio = "$8000";
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec auctor turpis. Curabitur at nisi eu arcu blandit feugiat. Quisque mollis sodales dolor, vitae facilisis elit dictum in. Fusce condimentum molestie volutpat. Nam ut quam luctus, suscipit quam sed, egestas nibh. Maecenas pulvinar est ut lectus faucibus, vitae dictum est bibendum. Nunc dictum ligula nec sapien ultrices elementum. In hac habitasse platea dictumst. Proin non tortor vehicula elit facilisis auctor et id turpis. Phasellus eu velit eu urna fermentum semper at ut massa. Vivamus eget magna placerat, dictum odio at, posuere massa. Morbi ornare et arcu eget luctus. Suspendisse accumsan accumsan dapibus. Suspendisse condimentum, nulla nec auctor ultrices, lorem diam faucibus erat, non pellentesque ex dui mollis neque. Proin vel elit accumsan, interdum mi eu, dapibus massa.";
}

function e02(){
    titulo = "Kebap de Ternera";
    imagen = "../../images/especiales/02.jpg"
    resumen = "orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis est est aliquam, sed faucibus massa lobortis. Maecenas non est justo.";
    precio = "$16000";
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec auctor turpis. Curabitur at nisi eu arcu blandit feugiat. Quisque mollis sodales dolor, vitae facilisis elit dictum in. Fusce condimentum molestie volutpat. Nam ut quam luctus, suscipit quam sed, egestas nibh. Maecenas pulvinar est ut lectus faucibus, vitae dictum est bibendum. Nunc dictum ligula nec sapien ultrices elementum. In hac habitasse platea dictumst. Proin non tortor vehicula elit facilisis auctor et id turpis. Phasellus eu velit eu urna fermentum semper at ut massa. Vivamus eget magna placerat, dictum odio at, posuere massa. Morbi ornare et arcu eget luctus. Suspendisse accumsan accumsan dapibus. Suspendisse condimentum, nulla nec auctor ultrices, lorem diam faucibus erat, non pellentesque ex dui mollis neque. Proin vel elit accumsan, interdum mi eu, dapibus massa.";
}

function e03(){
    titulo = "Lasaña de Carne";
    imagen = "../../images/especiales/03.jpg"
    resumen = "orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis est est aliquam, sed faucibus massa lobortis. Maecenas non est justo.";
    precio = "$9000";
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec auctor turpis. Curabitur at nisi eu arcu blandit feugiat. Quisque mollis sodales dolor, vitae facilisis elit dictum in. Fusce condimentum molestie volutpat. Nam ut quam luctus, suscipit quam sed, egestas nibh. Maecenas pulvinar est ut lectus faucibus, vitae dictum est bibendum. Nunc dictum ligula nec sapien ultrices elementum. In hac habitasse platea dictumst. Proin non tortor vehicula elit facilisis auctor et id turpis. Phasellus eu velit eu urna fermentum semper at ut massa. Vivamus eget magna placerat, dictum odio at, posuere massa. Morbi ornare et arcu eget luctus. Suspendisse accumsan accumsan dapibus. Suspendisse condimentum, nulla nec auctor ultrices, lorem diam faucibus erat, non pellentesque ex dui mollis neque. Proin vel elit accumsan, interdum mi eu, dapibus massa.";
}

function e04(){
    titulo = "Nachos con Queso";
    imagen = "../../images/especiales/04.jpg"
    resumen = "orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis est est aliquam, sed faucibus massa lobortis. Maecenas non est justo.";
    precio = "$7000";
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec auctor turpis. Curabitur at nisi eu arcu blandit feugiat. Quisque mollis sodales dolor, vitae facilisis elit dictum in. Fusce condimentum molestie volutpat. Nam ut quam luctus, suscipit quam sed, egestas nibh. Maecenas pulvinar est ut lectus faucibus, vitae dictum est bibendum. Nunc dictum ligula nec sapien ultrices elementum. In hac habitasse platea dictumst. Proin non tortor vehicula elit facilisis auctor et id turpis. Phasellus eu velit eu urna fermentum semper at ut massa. Vivamus eget magna placerat, dictum odio at, posuere massa. Morbi ornare et arcu eget luctus. Suspendisse accumsan accumsan dapibus. Suspendisse condimentum, nulla nec auctor ultrices, lorem diam faucibus erat, non pellentesque ex dui mollis neque. Proin vel elit accumsan, interdum mi eu, dapibus massa.";
}

function e05(){
    titulo = "Nuggets de Pollo";
    imagen = "../../images/especiales/05.jpg"
    resumen = "orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis est est aliquam, sed faucibus massa lobortis. Maecenas non est justo.";
    precio = "$13000";
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec auctor turpis. Curabitur at nisi eu arcu blandit feugiat. Quisque mollis sodales dolor, vitae facilisis elit dictum in. Fusce condimentum molestie volutpat. Nam ut quam luctus, suscipit quam sed, egestas nibh. Maecenas pulvinar est ut lectus faucibus, vitae dictum est bibendum. Nunc dictum ligula nec sapien ultrices elementum. In hac habitasse platea dictumst. Proin non tortor vehicula elit facilisis auctor et id turpis. Phasellus eu velit eu urna fermentum semper at ut massa. Vivamus eget magna placerat, dictum odio at, posuere massa. Morbi ornare et arcu eget luctus. Suspendisse accumsan accumsan dapibus. Suspendisse condimentum, nulla nec auctor ultrices, lorem diam faucibus erat, non pellentesque ex dui mollis neque. Proin vel elit accumsan, interdum mi eu, dapibus massa.";
}

function e06(){
    titulo = "Picada de Carne";
    imagen = "../../images/especiales/06.jpg"
    resumen = "orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis est est aliquam, sed faucibus massa lobortis. Maecenas non est justo.";
    precio = "$22000";
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec auctor turpis. Curabitur at nisi eu arcu blandit feugiat. Quisque mollis sodales dolor, vitae facilisis elit dictum in. Fusce condimentum molestie volutpat. Nam ut quam luctus, suscipit quam sed, egestas nibh. Maecenas pulvinar est ut lectus faucibus, vitae dictum est bibendum. Nunc dictum ligula nec sapien ultrices elementum. In hac habitasse platea dictumst. Proin non tortor vehicula elit facilisis auctor et id turpis. Phasellus eu velit eu urna fermentum semper at ut massa. Vivamus eget magna placerat, dictum odio at, posuere massa. Morbi ornare et arcu eget luctus. Suspendisse accumsan accumsan dapibus. Suspendisse condimentum, nulla nec auctor ultrices, lorem diam faucibus erat, non pellentesque ex dui mollis neque. Proin vel elit accumsan, interdum mi eu, dapibus massa.";
}

function e07(){
    titulo = "Sandwich de Atún";
    imagen = "../../images/especiales/07.jpg"
    resumen = "orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis est est aliquam, sed faucibus massa lobortis. Maecenas non est justo.";
    precio = "$8000";
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec auctor turpis. Curabitur at nisi eu arcu blandit feugiat. Quisque mollis sodales dolor, vitae facilisis elit dictum in. Fusce condimentum molestie volutpat. Nam ut quam luctus, suscipit quam sed, egestas nibh. Maecenas pulvinar est ut lectus faucibus, vitae dictum est bibendum. Nunc dictum ligula nec sapien ultrices elementum. In hac habitasse platea dictumst. Proin non tortor vehicula elit facilisis auctor et id turpis. Phasellus eu velit eu urna fermentum semper at ut massa. Vivamus eget magna placerat, dictum odio at, posuere massa. Morbi ornare et arcu eget luctus. Suspendisse accumsan accumsan dapibus. Suspendisse condimentum, nulla nec auctor ultrices, lorem diam faucibus erat, non pellentesque ex dui mollis neque. Proin vel elit accumsan, interdum mi eu, dapibus massa.";
}

function e08(){
    titulo = "Sandwich de Pollo";
    imagen = "../../images/especiales/08.jpg"
    resumen = "orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis est est aliquam, sed faucibus massa lobortis. Maecenas non est justo.";
    precio = "$8000";
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec auctor turpis. Curabitur at nisi eu arcu blandit feugiat. Quisque mollis sodales dolor, vitae facilisis elit dictum in. Fusce condimentum molestie volutpat. Nam ut quam luctus, suscipit quam sed, egestas nibh. Maecenas pulvinar est ut lectus faucibus, vitae dictum est bibendum. Nunc dictum ligula nec sapien ultrices elementum. In hac habitasse platea dictumst. Proin non tortor vehicula elit facilisis auctor et id turpis. Phasellus eu velit eu urna fermentum semper at ut massa. Vivamus eget magna placerat, dictum odio at, posuere massa. Morbi ornare et arcu eget luctus. Suspendisse accumsan accumsan dapibus. Suspendisse condimentum, nulla nec auctor ultrices, lorem diam faucibus erat, non pellentesque ex dui mollis neque. Proin vel elit accumsan, interdum mi eu, dapibus massa.";
}


function tooglePanel(){
    estilos.setAttribute("href", "toggle.css");
    const vistas = `
    <div class="contenedor">
        <div id="descripcion">
            <div class="cont_principal">
                <div class="cont_central">
                    <div class="cont_modal cont_modal_active">
                        <div class="cont_photo">
                            <div class="cont_img_back">
                            <img src="${imagen}" alt="" />
                        </div>
                        <div class="cont_detalles">
                            <h3 id="titulo">${titulo}</h3>
                            <p>${resumen}</p>
                         </div>
                    </div>
            <div class="cont_text_ingredients">
                <div class="cont_over_hidden">
                    <div class="cont_tabs">
                        <ul>
                            <li><a href="#"><h4>Descripción</h4></a></li>
                        </ul>  
                    </div>
                    <div class="cont_text_det_preparation">
                        <div id="precio" class="cont_title_preparation">${precio}</div>
                        <div class="cont_info_preparation">
                            <p style="text-align: justify;">${desc}</p>
                        </div>  
                    </div>         
                </div>    
            </div>
            </div>
        </div>
        </div>
        </div>

        <div id="formulario">
            <form>
                <input type="text" id = "nombre" placeholder="Nombre Completo">
                <input type="text" placeholder="Dirección">
                <select>
                    <option value="" disabled selected>Método de Pago</option>
                    <option value="tarjeta">Tarjeta de Crédito</option>
                    <option value="efectivo">Efectivo</option>
                </select>
                <input type="email" placeholder="Correo Electrónico">
                <input type="tel" placeholder="Celular">
                <input type="submit" onclick="buy()" value="Comprar">
            </form>
        </div>
    </div>
    
      
    <script></script>
    `;

    const divElement = document.createElement('div');
    divElement.innerHTML = vistas;

    return divElement;
}
 
//let prueba;


const router = (route) => {
    galerias.forEach(section => section.parentNode.removeChild(section));
    titulos.forEach(div => div.parentNode.removeChild(div));
    switch(route){
        case '':
            return home();
        case '#/h01':
            h01();
             content.appendChild(tooglePanel());
             break;
        case '#/h02':
            h02();
            content.appendChild(tooglePanel());
             break;
        case '#/h03':
            h03();
            content.appendChild(tooglePanel());
             break;
        case '#/h04':
            h04();
            content.appendChild(tooglePanel());
             break;
        case '#/h05':
            h05();
            content.appendChild(tooglePanel());
             break;
        case '#/pa01':
            pa01();
            content.appendChild(tooglePanel());
            break;
        case '#/pa02':
            pa02();
            content.appendChild(tooglePanel());
            break;
        case '#/pa03':
            pa03();
            content.appendChild(tooglePanel());
             break;
        case '#/pa04':
            pa04();
            content.appendChild(tooglePanel());
            break;
        case '#/pe01':
            pe01();
            content.appendChild(tooglePanel());
             break;
        case '#/pe02':
            pe02();
            content.appendChild(tooglePanel());
            break;
        case '#/pe03':
            pe03();
            content.appendChild(tooglePanel());
             break;
        case '#/pe04':
            pe04();
            content.appendChild(tooglePanel());
             break;
        case '#/b01':
            b01();
            content.appendChild(tooglePanel());
             break;
        case '#/b02':
            b02();
            content.appendChild(tooglePanel());
             break;
        case '#/b03':
            b03();
            content.appendChild(tooglePanel());
            break;
        case '#/b04':
            b04();
            content.appendChild(tooglePanel());
            break;
        case '#/b05':
            b05();
            content.appendChild(tooglePanel());
             break;
        case '#/ar01':
            ar01();
            content.appendChild(tooglePanel());
            break;
        case '#/ar02':
            ar02();
            content.appendChild(tooglePanel());
            break;
        case '#/ar03':
            ar03();
            content.appendChild(tooglePanel());
             break;
        case '#/ar04':
            ar04();
            content.appendChild(tooglePanel());
             break;
        case '#/ar05':
            ar05();
            content.appendChild(tooglePanel());
            break;
        case '#/al01':
            al01();
            content.appendChild(tooglePanel());
             break;
        case '#/al02':
            al02();
            content.appendChild(tooglePanel());
             break;
        case '#/al03':
            al03();
            content.appendChild(tooglePanel());
             break;
        case '#/al04':
            al04();
            content.appendChild(tooglePanel());
            break;
        case '#/e01':
            e01();
            content.appendChild(tooglePanel());
            break;
        case '#/e02':
            e02();
            content.appendChild(tooglePanel());
             break;
        case '#/e03':
            e03();
            content.appendChild(tooglePanel());
            break;
        case '#/e04':
            e04();
            content.appendChild(tooglePanel());
            break;
        case '#/e05':
            e05();
            content.appendChild(tooglePanel());
             break;
        case '#/e06':
            e06();
            content.appendChild(tooglePanel());
            break;
        case '#/e07':
            e07();
            content.appendChild(tooglePanel());
            break;
        case '#/e08':
            e08();
            content.appendChild(tooglePanel());
             break;
    }
 
}


export {router};
