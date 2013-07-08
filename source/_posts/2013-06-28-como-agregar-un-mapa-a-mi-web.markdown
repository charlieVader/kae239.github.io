---
layout: post
title: "Cómo agregar un Mapa a mi Página Web"
date: 2013-06-28 10:16
comments: true

image_meta: https://lh3.googleusercontent.com/-2jkiOtOlMcM/Uc5RGL1kFcI/AAAAAAAAAJw/5i1n_PWSBFg/s144/google-maps-icon.png

desc_meta: Una forma fácil de implementar esta útil y gratuita herramienta proporcionada por Google en nuestra propia web. 

keywords: google maps, cómo, agregar, mapa, web, javascript, js

categories: [Coding, JS]
---

{% include asides/google_maps_iframe.html %}

¿Quién no ha visto este tipo de recurso en alguna página web? Lo cierto es que un `Mapa` es una herramienta sumamente útil tanto para Usuarios como para `Diseñadores / Programadores` de `Páginas / Aplicaciones Web`.

En este post aprenderemos cómo incluir, de manera sencilla, un mapa (soportado `Google Maps`, por supuesto) en cualquier parte de la página o aplicación web en la que estemos trabajando.

<!-- more -->

Para empezar, debemos entender que nuestro mapa se tendrá que cargar en un contenedor ("`div`" - para ser más exactos), el cual podrá estar en cualquier parte de nuestra página y tendrá las dimensiones que queramos; para este ejemplo se está utilizando una altura de 400 pixels (`height:400px;`) y todo el ancho posible permitido (`width:100%;`), por lo que nuestra página inicialmente lucirá más o menos de la siguiente manera:

```
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <style>
      #contenedor-mapa {
      background-color:#999;
      margin: 0; padding: 0;
      height: 400px; width:100%;
    }
    </style>
  </head>
  <body>
    <div id="contenedor-mapa"></div>
  </body>
</html>
```

Lo que tenemos hasta aquí, es un contenedor llamado `contenedor-mapa` que, como es de esperarse, contendrá nuestro mapa. En la cabecera de la página hemos establecido algunos `estilos` (bastante básicos) para poder observar -si es que cargamos la página tal y como está- que ya tenemos el contenedor creado (de color gris `#999`) esperando por mostrar las imágenes de Google Maps.

Una vez hecho esto vamos a emplear la magia del `JavaScript (JS)` para llamar la librería responsable por el completo funcionamiento de nuestro mapa. Para ello, justo después de la etiqueta `</style>` agregaremos lo siguiente:

	<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>
	
Con esta línea estamos invocando al [API][url1] de Google para el uso de los Mapas (`Versión 3, por si acaso`- en otro post veremos más a detalle los parámetros de invocación) y quedamos listos para explotar todo su potencial. Justo a continuación, agregamos nuevamente una etiqueta `<script>` que contendrá los **parámetros de inicio**[^1] del mapa que mostraremos:

```
<script> 
  var mapa;
  function iniciarMapa() {
    var parametrosInicio = {
      zoom: 12,
      center: new google.maps.LatLng(-8.1119444444444,  -79.028888888889),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
  mapa = new google.maps.Map(document.getElementById('contenedor-mapa'), parametrosInicio);
  }
  google.maps.event.addDomListener(window, 'load', iniciarMapa);
</script>
```
 
 Lo que estamos haciendo aquí es lo siguiente:
 
 - Creamos una variable `mapa`, la cual contendrá todas las opciones que nos permitirán manejar la visualización y la funcioncionalidad del mapa que mostraremos.
 
 - Creamos una función `iniciarMapa()`:
 
 	- Esta ejecutará una vez que la página este lista para cargarse; dentro de esta función definimos nuestra variable `parametrosInicio`, que incluirá las siguientes _opciones básicas (requeridas)_:
 
 		-  `zoom`: El nivel inicial de Zoom que presentará el mapa.
 	
 		- `center`: El Punto Central que se mostrará en el mapa. Este punto está dado por una variable de tipo [**LatLng**](https://developers.google.com/maps/documentation/javascript/reference?hl=es#LatLng) definido por el propio Google para establecer las **[coordenadas](https://support.google.com/maps/answer/2533464?hl=es) centrales iniciales** de acuerdo a las cuales mostraremos nuestro mapa. (Para obtener las coordendas de cualquier punto en `nuestro planeta`, podemos utilizar [esta simple web](http://www.agenciacreativa.net/coordenadas_google_maps.php)). En esta variable, el primer parámetro es la Latitud y el siguiente la Longitud del punto deseado.
 	
 		- `mapTypeId`: El Tipo de Mapa que deseamos mostrar inicialmente (puede ser ROADMAP, HYBRID, SATELLITE, TERRAIN). Pueden encontrar una definición más amplia de cada tipo de mapa [aquí](https://developers.google.com/maps/documentation/javascript/maptypes?hl=es).
 
	- Lo siguiente es asignar a nuestra variable `mapa` el objeto definido por el tipo de variable [google.maps.Map](https://developers.google.com/maps/documentation/javascript/reference?hl=es#Map), al cual le pasamos como parámetros el contenedor (`div` -ya que dentro de este mostraremos el mapa-) que creamos inicialmente en nuestra web, así como la variable `parametrosInicio`.

- Una vez hecho esto, agregaremos la llamada a nuestra función `iniciarMapa` agregando como trigger el evento **'load'** al DOM de nuestra página (para simplificar las cosas: **cuando nuestra página este lista para ser mostrada -ya cargada- se ejecutará la función indicada**).

Y listo !!! … Podemos empezar a personalizar nuestro mapa para mostar los lugares que queramos, empleando el tipo de mapa que deseemos y con el zoom que nosotros elijamos.

_PD: En un próximo post veremos cómo agregar `marcadores` a nuestro mapa, de tal forma que podamos mostrar uno o varios lugares específicos y con la posibilidad de generar un poco más de interactividad entre el usuario y nuestra web._
 
<br><br/>
[^1]: La documentación completa sobre los parámetros de inicio se haya [aquí.](https://developers.google.com/maps/documentation/javascript/reference?hl=es#MapOptions)


[url1]: http://es.wikipedia.org/wiki/Interfaz_de_programaci%C3%B3n_de_aplicaciones
