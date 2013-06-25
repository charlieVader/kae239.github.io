---
layout: post
title: "Selector de Navegador para CSS"
date: 2013-06-23 14:02
comments: true

image_meta: https://lh5.googleusercontent.com/-PXp6Yj0_Gbc/Uciw-jPWuAI/AAAAAAAAAE0/M8woHz0ZL98/s800/browsers-css.jpg

desc_meta: Una forma fácil de enfrentar problemas en la visualización de tus estilos e incluso algunas de tus funcionalidades por distintos navegadores web.

key_meta: selector, navegador, css, javascript, cross, browsing

categories: [Coding, CSS, JS]
---

Mientras trataba de arreglar algunos detalles de mi recientemente creado y humilde blog, me encontré con esta herramienta súper útil.

> ¿ Qué Programador / Diseñador Web no ha sufrido alguna vez una de esas malas pasadas de los [Cross-Browser][url1] CSS ? 

Pues bien, hoy les presento `CSS Browser Selector`[^1]. Este pequeño `.js` nos va a sacar de apuros más de una vez en caso queramos aplicar *estilos definidos para cada navegador*, dependiendo del que este usando el usuario; incluso brinda la posibilidad de **identificar el sistema operativo** desde el que se está ejecutando el mismo, lo que nos permite asignar diferentes estilos según el navegador usado (_por cuestiones de compatibilidad, tal vez_) o, yendo un poco más allá, según el sistema operativo detectado.

<!-- more -->

![CSS Cross Browser](https://lh5.googleusercontent.com/-PXp6Yj0_Gbc/Uciw-jPWuAI/AAAAAAAAAE0/M8woHz0ZL98/s800/browsers-css.jpg) 

Su implementación es bastante sencilla: Primero debemos agregar la llamada al archivo desde la cabecera de nuestra `página HTML`; para ello, copiamos esta línea dentro de las etiquetas `<head>` y `</head>`:

	<script src="ruta_del_archivo/css_browser_selector.js" type="text/javascript">	</script>

Una vez hecho esto, sólo debemos empezar a usarla en nuestro diseño! … En mi caso, estoy usando este selector para aplicar una **"animación"** a los Links Sociales que se encuentran justo debajo de mi nombre.

Si estás usando Chrome, podrás darte cuenta que si pasas el mouse sobre alguno de los íconos mencionados `( evento :hover)` aparece un pequeño círculo al rededor del mismo. Esto se logra de la siguiente manera:

	.chrome #social-links li : hover {
		…
		CSS que se desea aplicar
		…
	}


`#social-links` es el _ID_ del contenedor de los íconos, por lo que cada etiqueta `<li>` dentro del mismo (_donde están distribuidos los íconos_) sufrirá los cambios que se hayan establecido dentro de las llaves `{ }`.

Ahora, la parte interesante (y donde radica la parte central de esta herramienta) está en que, **sin necesidad de definir clases adicionales dentro de nuestras etiquetas** (en HTML), CSS Browser Selector gestiona automáticamente el uso de dichos estilos sólo para el navegador establecido (en este caso `Chrome`) o, en caso se haya definido, algún Sistema Operativo en especial.

Dicho esto, la sintaxis general sería la siguiente:

	.[Código_de_OS].[Código_de_Navegador] [Selector] { 
		...
	} 
	
	-> Sin espacio entre los Códigos de OS y Navegador

Y listo! … Podemos empezar a customizar nuestros diseños según navegadores y sistemas operativos!

El link de descarga de, así como la documentación completa de este pequeño y efectivo .js, con ejemplos de aplicación y con la ***lista de Códigos de Navegadores y Sistemas Operativos disponibles***, se encuentra en su [web oficial][url2].

No es lo último en aplicación de tecnología (ni la más actualizada tampoco) pero me pareció súper útil y además fácil de implementar, así que con esto me despido.

Hasta pronto!
<br></br>

[^1]:Documentación Oficial y guía de implementación [aquí](http://rafael.adm.br/css_browser_selector/)

[url1]: http://coding.smashingmagazine.com/2010/06/07/the-principles-of-cross-browser-css-coding/
[url2]: http://rafael.adm.br/css_browser_selector/
