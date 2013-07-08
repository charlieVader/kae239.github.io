---
layout: post
title: "Cómo crear un simple Logo Animado sólo con CSS"
date: 2013-07-07 22:20
comments: true

image_meta: https://lh6.googleusercontent.com/-8jU-OOX50cc/UdpNhIurawI/AAAAAAAAAKA/WPEWFp1KqJ0/s800/css.jpg

desc_meta: Un diseño animado rápido y sencillo logrado únicamente con CSS.

keywords: cómo, hacer, logo, animar, animado, sólo , css, html

categories: [Coding, CSS]
---

Para los *amantes del CSS* y de los *diseños rápidos y simples*, hoy les presento esta especie de logo (fácilmente adaptable a sus necesidades) que nació de una idea que encontré mientras hacía mis acostumbrados recorridos por la web.

{% include asides/logo_css_iframe.html %}

<!-- more -->

La idea, en general, es la siguiente: Tenemos un `div` contenedor de nuestro *logo*. Este div, al cual le hemos asignado la *clase 'container'* (`class='container'`) es padre de seis divs adicionales; estos divs son, como se puede observar en el diseño líneas arriba, los seis segmentos horizontales de distinto color cada uno.

Además de los distintos colores, agregamos un poco de sombra (`box-shadow`) y las esquinas redondeadas (del lado izquierdo -ya que las del derecho aun no están visibles-) del segmento superior e inferior, así como tamaños distintos (`width`) a cada uno de ellos para lograr el efecto inicial. Hasta aquí, tendremos la mitad del diseño logrado … Una figura no muy concreta a simple vista, verdad? … pues hagamos un poco de magia.

Para empezar, a cada uno de nuestros segmentos deberemos asignarles la **propiedad transition**. Esta propiedad permite que los cambios realizados sobre los elementos afectados, en este caso nuestros segmentos de colores, no tengan efecto inmediato sino que se realicen en un cierto intervalo de tiempo (dentro del cual se va desde el valor A hasta el valor B pasando por todos los valores intermedios -para una mejor y más completa explicación pueden visitar *[este link](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_CSS_transitions)*-). Entonces, dentro de nuestra hoja de estilos tendremos algo como esto:

```
.a, .b, .c, .d, .e, .f {
  …
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
  ...
}
```

Con estas líneas nos aseguramos que todo cambio (`all`) realizado sobre los divs deseados (clases a, b, c, d, e y f) se haga en un intervalo de 0.5 segundos (`0.5s`) y de manera *suave* (`ease`). Hecho esto, nos queda definir bajo qué circunstancias queremos que empiece la animación; recurrimos al efecto `hover`:

```
.container:hover > .a,
.container:hover > .b,
.container:hover > .c,
.container:hover > .d,
.container:hover > .e,
.container:hover > .f {
  width: 300px;
}
```

Así definimos que, si el usuario hacer pasar el mouse sobre cualquier punto de nuestro div contenedor, el ancho (`width`) de todos los segmentos de colores va a pasar del tamaño definido anteriormente hasta los 300px (y debido a *la propiedad transition*, veremos cómo cambian de tamaño en un lapso de 0.5 segundos). Luego de esto, añadimos las esquinas redondeadas (ahora sí las del lado derecho) de los segmentos superior e inferior, y listo! … Ya vemos cómo nuestro diseño *se transforma* al pasar el mouse sobre él.

Pero … ¿y las letras que aparecen dentro del logo? Podría ser fácilmente otro div con texto dentro del mismo y correctamente posicionado en el centro de nuestro logo, pero no lo es. Es un **[Pseudo-Elemento](http://www.creativasfera.com/aprende-a-usar-los-pseudo-elementos-before-y-after-en-CSS)** de nuestro div contenedor, y tiene asignadas las siguientes propiedades:

```
.container:after {
  content: 'sólo CSS';
  font-family: 'Lobster', cursive;
  font-size: 3em;
  text-align: center;
  position: absolute;
  height: 40px;
  width: 300px;
  margin: -90px 0 0 0;
  color: #fbfbfb;
}	
```

Aquí no hay más truco que darle al texto (`content`)[^1] el mismo color del fondo del diseño (`color: #fbfbfb`) para que no sea visible hasta que se realice la animación.

Y ahora sí está listo! … Hay infinidad de posibilidades para crear nuevos diseños y usar estos sencillos estilos para lograr grandes e interesantes resultados.

Si desean ver sólo el logo, y poder vizualizar el código completo usado, pueden hacer click **[aquí](/assets/logo_animado_css.html)** y utilizar el Inspector Web del navegador que esten usando.

[^1]:La fuente usada puede ser encontrada **[aquí](http://www.google.com/fonts/#QuickUsePlace:quickUse/Family:Lobster)**.
