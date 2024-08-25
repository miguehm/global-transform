---
title: Introducción
---

En el ámbito del procesamiento de imágenes, las transformaciones globales juegan un papel crucial al permitir la manipulación y mejora de imágenes digitales. Este proceso implica hacer operaciones matriciales como suma y multiplicación valor por valor, sin embargo requiere una capacidad de procesamiento razonable dado los grandes volúmenes de información que se debe manipular. Resulta útil resolver este problema para implementaciones en dispositivos con recursos limitados, pero que necesitan reflejar los resultados de la transformación de forma inmediata.

Actualmente, MatLab ofrece la manipulación de matrices y la representación de las mismas en forma de imágenes, su acceso online es gratuito para estudiantes y su capacidad de procesamiento permite hacer análisis en tiempo real, no obstante, la implementación diseñada solo es compatible en entornos específicos y con software privativo; limitando su uso en otros sistemas.

Este reporte técnico explora la implementación de diversas transformaciones globales utilizando OpenCV, una biblioteca de visión por computadora gratuita y compatible con Python y JavaScript. A lo largo del documento, se detallarán los métodos y algoritmos empleados, se presentarán ejemplos prácticos y se discutirán las aplicaciones potenciales de estas técnicas en diferentes campos, como la visión artificial y la fotografía digital.


## Abstracto

Las transformaciones globales en imágenes son esenciales para la manipulación y mejora de imágenes digitales, pero su implementación eficiente puede ser compleja.

Esta complejidad radica en la necesidad de manejar grandes volúmenes de datos y aplicar algoritmos precisos en tiempo real.
Este reporte técnico presenta una solución utilizando OpenCV con Python y una implementación real en una pagina web con JavaScript para realizar transformaciones globales de manera eficiente.

La solución propuesta con Python permite obtener los histogramas de cada canal de color de una imagen, transformación gamma, umbralización y suma ponderada de dos imágenes. Para JavaScript se hace una implementación de la transformación gamma en una pagina web.
