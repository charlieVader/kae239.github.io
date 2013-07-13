---
layout: post
title: "Menú Lateral sólo con CSS"
date: 2013-07-13 14:14
comments: true

image_meta: https://lh6.googleusercontent.com/-8jU-OOX50cc/UdpNhIurawI/AAAAAAAAAKA/WPEWFp1KqJ0/s800/css.jpg

desc_meta: Sencillo Menú Lateral animado creado sólo con CSS.

keywords: cómo, hacer, menú, lateral, navbar, animar, animado, sólo , css, html


categories: [Coding, CSS]
---

Un menú lateral, una barra de navegación, una forma sencilla de organizar el contenido de nuestra web y por sobre todo un aspecto muy importante del diseño de la misma. ¿Se puede hacer de manera sencilla? Por supuesto! … Aquí se los muestro.

{% include asides/menu_lateral_css_iframe.html %}

<!-- more -->

Para empezar, tenemos nuestra estructura básica html:

```
  <ul>
    <li>Inicio</li>
    <li>Noticias</li>
    <li>Videos</li>
    <li>Contacto</li>
  </ul>

```

En nuestra hoja de estilos, empezaremos añadiento las propiedades para la lista (`<ul>`):

```
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 15em;
  }
```

Con esto nos aseguramos de deshacernos de las viñetas que aparecen automáticament en cada entrada (`<li>`) de nuestra lista, establecemos las propiedades `margin` y `padding` en 0 (para luego poder trabajar más a detalle en ellas), y definimos el ancho (`width`) en 15em (si desean aprender un poco más sobre las **unidades em**, aquí les dejo un **_[link](http://www.impressivewebs.com/understanding-em-units-css/)_** bastante interesante).

Luego empezamos a darle el aspecto deseado a nuestro menú, pero debemos tener muy en cuenta que vamos a modificar el aspecto de **cada entrada de nuestra lista**, así que tenemos que utilizar los selectores correspondientes (`ul > li` - *con lo que dejamos bien en claro que los elementos afectados serán todos aquellos identificados con la etiqueta `<li>` que se encuentren dentro de un segmento delimitado por etiquetas `<ul></ul>`*).

Como primer paso, definiremos las siguientes propiedades básicas:

```
  ul > li { 
    background-color: rgb(69,72,77);    
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.3em;
    height: 3em;
    line-height: 2.8em;
    padding-left: 1em;
  }
```

Hasta aquí tenemos simplemente una serie de palabras con fondo oscuro y algo de espaciado interlineal que no hacen que imaginemos que se trata de un menú, ¿verdad?. Pues cuando diseñamos, uno de los aspectos más importante es **pensar como el usuario** -que si bien es cierto no es una tarea fácil, nos va a ayudar muchísimo al momento de tratar de lograr diseños intuitivos-; por lo que a continuación, le daremos a nuestro menú un aspecto más cercano a lo que queremos que el usuario piense cuando lo vea. Dentro del mismo selector mencionado anteriormente, colocaremos las siguientes propiedades:

```
  ul > li {
    
    ...
    
    cursor: pointer;			
    box-shadow: inset 0px 1px 2px rgba(255,255,255,0.2);
    text-shadow: 1px 1px 4px rgba(black,0.3);
  }
```

¿Notan la diferencia? Ahora ya tenemos la sensación de que se trata de pestañas, o de opciones, ¿cierto? … Y además, el cursor cambia cuando lo pasamos sobre cualquier parte de nuestra lista! No es una hazaña lograr esto, pero personalmente creo que tiene un efecto súper importante respecto a lo que se puede percibir.

Ahora haremos un poco de magia con la propiedad `transition` (_de la que pueden ver más detalles **[aquí](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_CSS_transitions)**_) para lograr que, cuando pasemos el mouse sobre cualquiera de las Entradas de nuestra lista (haciendo uso de la propiedad `hover`), obtengamos el efecto de 'crecimiento' de los bordes de colores mostrados en la presentación del inicio de este post. Para ello, agregamos las siguientes propiedades (que en realidad es una sola, pero cubriendo el aspecto **cross browser** -_compatibilidad inter-exploradores web_-):

```
  ul > li {
    
    ...
    
    -moz-transition: 0.4s all ease-in-out;
    -webkit-transition: 0.4s all ease-in-out;
    -o-transition: 0.4s all ease-in-out;
    transition: 0.4s all ease-in-out;
  }
```

Asignando esta propiedad lograremos que, al definir (más adelante) los cambios que se realizarán cuando el evento `hover` sea activado, el crecimiento sea gradual y se realice en un intervalo de 0.4 segundos (aun no veremos el efecto causado porque todavía no definimos qué cambios se van a realizar).

Una vez hecho esto, nos queda definir el estado inicial (el que se verá ni bien se cargue la web) así como la 'animación' del evento hover:

```
  /* Selector para la Primera Entrada de nuestra lista - Estado Inicial */
  
  ul > li:first-child {	
    border-left: 6px solid #00AE68; /* color y ancho del borde izquierdo */
    border-radius: 0 1em 0 0; /* esquina redondeada */
  }
```
```
  /* Selector para la Primera Entrada de nuestra lista - Evento Hover */
  
  ul > li:first-child:hover { border-left: 2.5em solid #00AE68; }
```

Básicamente, establecemos el tamaño inicial (con el color deseado) para el borde de la Entrada; luego, cuando se desencadene el evento hover, hacemos que el **_'tamaño del borde crezca'_** y, debido a que hemos asignado la propiedad _transition_, el crecimiento no será de golpe, sino que se realizará en un intervalo de tiempo definido.

Para las demás Entradas la figura es bastante similar:

```
  ul > li:nth-child(2) { border-left: 6px solid #FF4C00; }
  ul > li:nth-child(2):hover { border-left: 2.5em solid #FF4C00; }
		
  ul > li:nth-child(3) { border-left: 6px solid #FF9400; }
  ul > li:nth-child(3):hover { border-left: 2.5em solid #FF9400; }
		
  ul > li:nth-child(4) { 
    border-left: 6px solid #0B5FA5;
    border-radius: 0 0 1em 0;
  }
  ul > li:nth-child(4):hover { border-left: 2.5em solid #0B5FA5; }

```

En este punto ya tenemos un menú lateral bastante presentable (dentro de lo sencillo que es), pero si le agregamos una propiedad más veremos que el efecto es bastante significativo:

```
  ul > li:hover {
    color: rgba(255,255,255,1);
    text-shadow: 1px 1px 2px white;
  }
```

Con esto lo único que hacemos es que, a parte de la animación asignada, el color del texto de la Entrada sobre la que estamos posando el mouse _se resalte_ un poco y así se diferencie aun más del resto.

Y eso es todo! … Nuestro menú lateral está listo para ser posicionado dentro de nuestra web (obviamente, y como siempre les comento, es sólo una de las tantas posibilidades de personalización que podemos lograr).

_PD: La fuente usada en este ejemplo es **'[Indie Flower](http://www.google.com/fonts#UsePlace:use/Collection:Indie+Flower)'**._