# Data Lovers

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Historias de usuario](#2-historias-de-usuario)
* [3. Diseño](#3-Diseño)
* [4. UX y tests de usabilidad](#4-ux-y-tests-de-usabilidad)
* [5.Test unitarios ](#5-test-unitarios)
* [6.planificacion ](#6-planificacion)

***

## 1. Resumen del Proyecto:

En este proyecto construimos una página web llamada The Golden Snitch (El nombre hace referencia a una pelota del quidditch que es un deporte en el mundo de harry potter) que nos permite entrar al mundo magico de Harry potter, encontraran un toque de magia en cada paso, historias y datos sobre el mundo magico, a los personajes y sus caracteristicas.
Los principales usuarios de este producto son: Son los fans de harry potter o tambien llamados Potterheads.

El objetivo principal de este proyecto es diseñar y construir una interfaz web donde los ususarios puedan:
 
 - Conocer en rasgos generales la historia del mundo de harry potter, sus personajes y caracteristicas principales.
    
Las características de los personajes ayudan a conocer la historia del mundo mágico (nombre, especie, casa, edad, rol etc.), es importante mostrar esta información del personajes en la pagina.

Nuestro proyecto tiene de base los comentarios de usuarios que respondieron a travez de una investigación hecha por el equipo de Laboratoria donde se encuentra que:

    Antes de ir a una batalla contra un incontratus los usuarios pueden cambiar su varita con nucleo para sentirse más confiados. Los filtros permite seleccionar los personajes por nucleo de varita.

    Los personajes de la saga tienen distintos roles como por ejemplo, profesores. Esta característica es importante cuando un mago o bruja elige una profesión, ya que toma de referencia a su personaje favorito. Por ello, es importante para un mago o bruja poder filtrar por esta característica.

    Los personajes de la saga pertenecen a distintas casas y es importante para un mago o bruja estar en la casa de su personaje favorito.

Por esto definimos los objetivos especificos, que son:

    Hacer que el ususario viva una experiencia magica desde la primera hinteraccion hasta la ultima.
    La pagina permite al usuario visualizar distintos temas sobre el mundo magico de Harry como:
    Historias de la magia, artefactos magicos, hogwarts, hechizos
    Tambien tenemos una parte muy amplia sobre los personajes del juego y nos permite filtar por:
    Casas (Gryffindor, Hufflepuff, Ravenclaw, Slyterin);
    Especie (Humano, mitad gigante, gato, hombre lobo);
    Genero (unicorn tail-hair, dragon heartstring, phoenix feather);
    Linaje (pure-blood, half-blood, muggleborn).
    y por ultimo ordenamos los personajes de:
    A - Z 
    Z - A

## 2. Historias de usuario:

Despues de entender las necesidades del usuario en base a lo anterior, definimos nuestras historias:
-Historia de ususario 1: Yo COMO : Jugador QUIERO: Ver todos los personajes PARA: para visualizar los que hayan disponibles en la pagina.

-Historia de usuario 2: Yo COMO: Jugador QUIERO: Filtrar los personajes por casa, genero, linaje y especie PARA: Conocer los personajes de mi casa favorita

-Historia de ususario 3: Yo COMO: Jugador QUIERO:Ordenar los personajes de a-z PARA: Encontrar un personaje por su nombre

-HIstoria de ususario 4: Yo COMO: JUgador QUIERO:Tener un buscador donde pueda encontrar por palabras clave lo que quiera acerca de la informacion que me dan en la pagina.

## 3. Diseño: 
Para satisfacer las necesidades de nuestros usuarios y que tengan una experiencia magica de inicio a fin, empezamos con un sketch simple:

![1](https://i.ibb.co/BzcwxVZ/ndice.jpg)

![1](https://i.ibb.co/gS4ZjLd/ndice2.jpg)

Despues hicimos el prototipo en invision:

![Protoripo invision 1](https://i.ibb.co/QQG96hY/invision1.jpg)

![Protoripo invision 2](https://i.ibb.co/xqqSvWq/invision2.jpg)

y por ultimo nuestro prototipo de alta fidelidad en figma:

 ![inicio](https://i.ibb.co/2dp2ZKF/inicio.jpg)
 
 ![Historia y presentacion](https://i.ibb.co/Zm4MPc2/historia-y-tgs.jpg)
 
 ![personajes 1](https://i.ibb.co/61ZVQpK/personajes.jpg)
 
 ![personajes 2](https://i.ibb.co/R3zmqgt/personajesfiltrados.jpg)
 
 ![hogwarts y patronus](https://i.ibb.co/rHPStfw/hogwartsypatronus.jpg)
 
 ![Varitas](https://i.ibb.co/2dSw8BV/varitas.jpg)


## 4. Ux y tests de usabilidad:

Las entrevistas fueron hechas por diferentes usuarios con distinto grado de entendimiento del tema, tanto para tener variedad de opiniones y tambien lapara corroborar si la informacion era entendible aun que no seas parte de nuestro publico objetivo.

Se realizaron los testeos de usabilidad mediantes entrevistas por zoom, en la cual se siguio la pauta a continuacion:

-  Buenos dias mi nombre es Nathalia, como estas?

-  Te voy a comentar un poco acerca de esta entrevista, se trata acerca de un testeo de usuario para este prototipo que tenemos en pantalla, un prototipo es una maquetacion de lo que sera en un producto final, una pagina o aplicacion web.
Entonbces el fin de esta entrevista es que vos probes nuestro prototipo y nos comentes todo lo que pensas y sentis acerca de nuestra pagina.

-  Tenes alguna duda?

-  Antes de comenzar te comento que esto esta siendo grabado pero solo sera usado para medios educativos y solo lo vera un equipo de trabajo en concreto, estas de acuerdo?

-  Bueno ahora podemos empezar:

#el usuarios empieza a probar la prototipo y se le va guiando respecto a las dudas que tenga mientras va investigando nuestra pagina, terminado esto proseguimos a una entrevista con preguntas directas.

-  Habiendo terminado de probar el prototipo seguiiremos con una serie de preguntas:

  -- Que te parecio el nombre de nuestra pagina?
  -- Que pensas de que no tengas que registrarte para entrar a la pagina?
  -- Crees que la pagina refleja la identidad de Harry Potter?
  -- En tus propias palabras me puedes decir que te parece la pagina, si te parece amigable, dificil de usar, interesante etc?
  -- Que piensas acerca de la parte de personajes?
  -- que piensas acerca de la parte de los filtrados y las categorias?
  -- que piensas acerca de la parte del modal y  que se extienda para darte mas informacion acerca de cada personaje?
  -- Comentame si estarias dispuesto a usar esta app regularmente, compartirla y recomendara?
  -- Dime que fue lo que mas te gusto de nuestra pagina?
  -- Que fue lo que menos te gusto?
  
  Bueno, finalizadas todas estas preguntas damos por terminada la entrevista y decirte que muchas gracias por tu tiempo y tus honestinad, va a ser muy tomada en cuenta con mucho gusto! esperamos que hayas disfrutado de esta experiencia, que estes muy bien, saludos!
  
  ++ se concluye con la entrevista.



Aqui esta el enlace con las entrevistas a los usuarios para testear nuestro prototipo de alta fidelidad.

https://drive.google.com/open?id=19HzicxPo6NWG6OMnCjCsJqqhRpaUZTcQ
 
 Adjuntamos el enlace de Zeplin
 https://zpl.io/VQXdBBP

## 5. Test unitarios:

 ![Test](https://i.ibb.co/MGsgvd4/test.jpg)



## 6. Planificacion:
 
 Adjunto el enlace de trello
 
 https://trello.com/b/xPjLxcoS/harry-potter
