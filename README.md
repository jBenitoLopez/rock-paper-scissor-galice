# Piedra Papel Tijera

Implementa el típico juego de piedra-papel-tijera.

Puedes ver la funcionalidad deseada en [este enlace](https://nityagulati.github.io/rock-paper-scissors/)

## Diseño

No os preocupéis por el diseño CSS, no es el objetivo. Dejadlo para el final. Con que se vea un cuadrado con el dibujo dentro es suficiente. Si queréis, podéis copiar el CSS de la solución

<img src="https://oscarm.tinytake.com/media/14b3fcc?filename=1688712611183_TinyTake07-07-2023-08-49-51_638243094105667513.png&sub_type=thumbnail_preview&type=attachment&width=1199&height=599" title="Powered by TinyTake Screen Capture"/>

## Metodología

1. Explorad la carpeta _design_ y mirad el diseño esperado.[Haced _cajitas_](https://raw.githubusercontent.com/breatheco-de/exercise-landing-page-javascript/master/strategy.png) para determinar los diferentes componentes de la interfaz gráfica
2. Crea primero la parte estática de cada componente. Pensad que componentes existen y que _props_ deben tener.
3. Codifica los componentes y verifica que se muestran correctamente. Es decir, que si invoco el componente <Plate image={rock} /> voy a ver una chapa con el dibujo de una roca
4. Piensa que variables de estado existen en esta aplicación
5. Codifica las variables de estado y cambia aquellas partes del JSX que deban variar en función de dichas variables. Juega con el valor inicial de estas para ir codificando los diferentes estados en los que tiene que estar tu interfaz.
6. ¿Si cambio la variable de estado el contador de victorias cambia?
7. ¿Si la _IA_ ha elegido y yo he elegido, se muestra la pantalla con el resultado del combate?
8. Agrega los eventos necesarios para cambiar las variables de estado en función de la interacción del usuario. Recomendación: los eventos NO los codifiques dentro del componente hijo. Hazlo siempre en el componente App.
