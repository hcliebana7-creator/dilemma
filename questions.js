const CATEGORY_NAMES = {
  normal: 'NORMAL',
  mas18: '+18',
  extremo: 'EXTREMO',
  sinfiltro: 'SIN FILTRO',
  parejas: 'PAREJAS'
};

// BASE DE DATOS DE DILEMMA (250 DILEMAS)
const QUESTIONS_DB = {
  normal: [
    {
      id: 'nor_1',
      a: 'Que cada vez que mientas suene una bocina de camión a todo volumen desde tu pecho.',
      b: 'Que cada vez que alguien te mienta a ti te dé un ataque de hipo incontrolable durante diez minutos.'
    },
    {
      id: 'nor_2',
      a: 'Vivir gratis en un hotel de cinco estrellas, pero compartiendo habitación con un desconocido nuevo cada semana.',
      b: 'Vivir solo y gratis en tu casa ideal, pero hacer andando cualquier trayecto de menos de tres kilómetros aunque llueva.'
    },
    {
      id: 'nor_3',
      a: 'Tener que terminar todas tus frases en el trabajo diciendo «guiño, guiño» mirando fijamente a tu jefe.',
      b: 'Que tu tono de llamada sea un audio tuyo llorando desconsoladamente y no poder poner nunca el móvil en silencio.'
    },
    {
      id: 'nor_4',
      a: 'Teletransportarte al instante a cualquier sitio, pero aparecer siempre descalzo y con la ropa empapada en agua helada.',
      b: 'Volar sin cansarte a 120 km/h, pero solo a medio metro del suelo, boca abajo y tragándote algún insecto.'
    },
    {
      id: 'nor_5',
      a: 'Que todos los perros de la calle te sigan en manada en silencio absoluto adondequiera que vayas.',
      b: 'Que todas las palomas de tu ciudad te reconozcan y te dejen monedas robadas en la ventana cada mañana.'
    },
    {
      id: 'nor_6',
      a: 'Cobrar el doble de tu sueldo actual trabajando 50 horas semanales de forma presencial sin excepción.',
      b: 'Cobrar tu sueldo actual trabajando solo de lunes a miércoles, pero sin poder ganar dinero extra por ninguna otra vía.'
    },
    {
      id: 'nor_7',
      a: 'Viajar gratis en avión y tren de por vida, pero siempre en el asiento del medio junto a alguien que habla sin parar.',
      b: 'Viajar siempre en primera clase con todo el lujo, pero que tu maleta se pierda durante los primeros tres días de cada viaje.'
    },
    {
      id: 'nor_8',
      a: 'Tener batería infinita y cobertura máxima en tu móvil, pero con el brillo de pantalla al mínimo cuando estás al sol.',
      b: 'Tener el mejor móvil del mercado gratis cada año, pero que se apague automáticamente todos los días a las diez de la noche.'
    },
    {
      id: 'nor_9',
      a: 'Comer gratis de por vida en cualquier restaurante del mundo, pero no poder repetir nunca el mismo local.',
      b: 'Tener un chef privado en casa todos los días, pero que el menú lo elija él sin aceptar sugerencias ni cambios.'
    },
    {
      id: 'nor_10',
      a: 'Que cada vez que entres en un sitio público suene por megafonía la canción más vergonzosa de tu adolescencia.',
      b: 'Tener que despedirte de todo el mundo, incluidos jefes, repartidores y policías, lanzándoles un beso al aire con las dos manos.'
    },
    {
      id: 'nor_11',
      a: 'Que tus padres o tus suegros se muden al piso de enfrente con copia de tus llaves y pasen a saludar sin avisar a diario.',
      b: 'Vivir puerta con puerta con tu jefe y coincidir con él en el ascensor todas las mañanas y todas las tardes.'
    },
    {
      id: 'nor_12',
      a: 'Ser siempre el organizador oficial de todos los planes de tus amigos y tener que adelantar tú el dinero de las reservas.',
      b: 'No organizar nada nunca, pero estar obligado a asistir a todos los planes a los que te inviten sin poder poner excusas.'
    },
    {
      id: 'nor_13',
      a: 'Hablar y entender a la perfección todos los idiomas del mundo, pero olvidar para siempre cómo conducir cualquier vehículo.',
      b: 'Recordar con exactitud todo lo que leas o escuches, pero ser completamente incapaz de pillar el sarcasmo y las indirectas.'
    },
    {
      id: 'nor_14',
      a: 'Recibir 120.000 € garantizados hoy mismo, libres de impuestos y directamente en tu cuenta bancaria.',
      b: 'Lanzar una moneda al aire una sola vez: si sale cara ganas un millón de euros y si sale cruz te llevas solo 10.000 €.'
    },
    {
      id: 'nor_15',
      a: 'Necesitar dormir solo tres horas al día para estar al 100%, pero tener que acostarte obligatoriamente antes de las once de la noche.',
      b: 'Quedarte dormido en diez segundos a cualquier hora, pero necesitar nueve horas completas de sueño para no pasar el día agotado.'
    },
    {
      id: 'nor_16',
      a: 'Hacerte viral en toda España por una caída ridícula en directo en televisión y protagonizar memes durante un mes.',
      b: 'Que todo tu entorno crea que eres millonario en secreto y te pidan pequeños favores económicos constantemente.'
    },
    {
      id: 'nor_17',
      a: 'Vivir en una ciudad donde siempre hace 24 grados y sol, pero sin playa, piscina ni montaña a menos de cuatro horas.',
      b: 'Vivir en primera línea de una playa espectacular, pero con seis meses seguidos al año de lluvia, viento y frío.'
    },
    {
      id: 'nor_18',
      a: 'Trabajar con compañeros divertidísimos con los que te ríes a diario, pero que son un desastre y te toca arreglar sus fallos.',
      b: 'Trabajar con gente ultraeficiente que nunca se equivoca, pero que jamás habla de nada personal ni hace una sola broma.'
    },
    {
      id: 'nor_19',
      a: 'Que encima de tu cabeza flote un indicador visible para todos con tu nivel real de paciencia del 0 al 100%.',
      b: 'Ver encima de la cabeza de los demás cuántos minutos llevan deseando que te calles cuando hablas con ellos.'
    },
    {
      id: 'nor_20',
      a: 'Tener el supermercado y la gasolina gratis de por vida, pero no poder comprar nunca nada por internet.',
      b: 'Tener un 70% de descuento en todas tus compras online, pero que cualquier pedido tarde un mínimo de tres semanas en llegar.'
    },
    {
      id: 'nor_21',
      a: 'Entrar gratis en zona VIP a cualquier concierto, partido o festival del mundo, pero tener que asistir siempre tú solo.',
      b: 'Ir gratis con todos tus amigos a cualquier evento, pero siempre en la última fila y con una columna tapándote media vista.'
    },
    {
      id: 'nor_22',
      a: 'Perder para siempre la capacidad de fingir una sonrisa cuando algo o alguien no te hace gracia.',
      b: 'Que se te escape una carcajada sonora e inevitable cada vez que alguien tropieza o se equivoca en público.'
    },
    {
      id: 'nor_23',
      a: 'No volver a encontrar jamás un atasco ni un semáforo en rojo, pero no poder superar nunca los 80 km/h en carretera.',
      b: 'Tener aparcamiento gratis en la puerta de cualquier sitio, pero conducir un coche rosa fosforito con bocina de cucaracha.'
    },
    {
      id: 'nor_24',
      a: 'Quedarte un sobre con 4.000 € que perdió un vecino humilde en el portal, sabiendo que son sus ahorros y nadie miraba.',
      b: 'Devolvérselo íntegro, pero que él crea que había 5.000 € y cuente a todo el bloque que le has robado 1.000 €.'
    },
    {
      id: 'nor_25',
      a: 'Tener una forma física envidiable sin pisar el gimnasio, pero no poder probar el dulce, el alcohol ni los fritos nunca más.',
      b: 'Comer y beber todo lo que quieras sin engordar ni perder salud, pero estar obligado a entrenar una hora intensa todos los días.'
    },
    {
      id: 'nor_26',
      a: 'Rebobinar tu vida diez minutos una vez al día para corregir errores o discusiones, pero sin poder ganar dinero ni apostar.',
      b: 'Ver por adelantado qué ocurrirá si tomas una decisión importante antes de elegir, hasta tres veces al año.'
    },
    {
      id: 'nor_27',
      a: 'Vivir en un ático de lujo a mitad de precio, pero en un quinto piso sin ascensor y sin posibilidad de instalarlo.',
      b: 'Vivir en un bajo con jardín privado y piscina, pero justo encima de la terraza de un bar abierta hasta las dos de la madrugada.'
    },
    {
      id: 'nor_28',
      a: 'Vestir exactamente con el mismo modelo de ropa todos los días del año como si fueras un personaje de dibujos animados.',
      b: 'Tener un armario infinito de ropa de marca gratis, pero que cada mañana una aplicación elija al azar qué te tienes que poner.'
    },
    {
      id: 'nor_29',
      a: 'No poder enviar ni escuchar audios de WhatsApp nunca más y tener que escribirlo todo o llamar por teléfono.',
      b: 'Que todos tus mensajes de texto se envíen en tiempo real letra por letra sin poder usar nunca la tecla de borrar.'
    },
    {
      id: 'nor_30',
      a: 'Tener que dar un discurso improvisado de diez minutos sin papeles delante de quinientas personas en un teatro lleno.',
      b: 'Pasar una noche entera tú solo en una cabaña aislada en mitad del monte sin cobertura ni electricidad.'
    },
    {
      id: 'nor_31',
      a: 'Borrar de tu memoria tus películas, series y canciones favoritas para revivirlas de cero, pero viéndolas y escuchándolas siempre solo.',
      b: 'Meterte dentro de cualquier película o serie como espectador invisible, pero viendo como máximo una película o dos capítulos al mes.'
    },
    {
      id: 'nor_32',
      a: 'Que tu casa aparezca limpia, recogida y perfumada sola cada mañana, pero tener que lavar toda tu ropa a mano.',
      b: 'Que te hagan la compra y la comida gratis todos los días, pero tener que limpiar a fondo el baño y la cocina cada dos noches.'
    },
    {
      id: 'nor_33',
      a: 'Tener que asistir a una boda de completos desconocidos un sábado al mes y sentarte en la mesa de los solteros.',
      b: 'Estar obligado a celebrar todos tus cumpleaños organizando una fiesta temática de disfraces con tu familia y tus jefes.'
    },
    {
      id: 'nor_34',
      a: 'Recuperar de golpe todo el dinero perdido, prestado sin retorno, pagado en multas o gastado en cosas que nunca usaste.',
      b: 'Ver en vídeo la verdad de los cinco mayores misterios de tu vida: quién te mintió, te robó o actuó a tus espaldas.'
    },
    {
      id: 'nor_35',
      a: 'Que tu mascota pueda hablar contigo en perfecto español, pero se pase el día criticando tus horarios y tus decisiones.',
      b: 'Entender el idioma de todos los animales, pero descubrir que los pájaros de tu calle se dedican a insultar a todo el que pasa.'
    },
    {
      id: 'nor_36',
      a: 'Saber con total certeza qué opina realmente alguien de ti en el instante en que le das la mano o dos besos.',
      b: 'Caerle increíblemente bien a todo el mundo a primera vista, pero olvidar siempre los nombres de las personas a los cinco segundos.'
    },
    {
      id: 'nor_37',
      a: 'Recibir 1.000 € extra al mes de por vida, pero llevar siempre los calcetines mojados y fríos cuando uses calzado.',
      b: 'Recibir 450 € extra al mes para siempre sin ninguna condición ni molestia.'
    },
    {
      id: 'nor_38',
      a: 'Viajar gratis por el mundo en hoteles de cinco estrellas, pero sin probar la comida local y comiendo solo comida rápida.',
      b: 'Viajar gratis por el mundo comiendo en los mejores restaurantes locales, pero durmiendo siempre en albergues de ocho literas.'
    },
    {
      id: 'nor_39',
      a: 'Que todas tus reuniones de trabajo o estudio duren un máximo de cinco minutos, pero sean siempre a las siete de la mañana.',
      b: 'Empezar tu jornada a las once de la mañana todos los días, pero tener una videollamada diaria de hora y media con cámara encendida.'
    },
    {
      id: 'nor_40',
      a: 'Quedarte encerrado dos horas sin cobertura en un ascensor pequeño con la persona que peor te cae de tu entorno.',
      b: 'Quedarte encerrado cuatro horas en un ascensor amplio con un grupo de excursionistas que cantan con guitarra sin parar.'
    },
    {
      id: 'nor_41',
      a: 'Tocar cualquier instrumento musical como un virtuoso, pero bloquearte por completo si hay alguien mirándote o grabándote.',
      b: 'Cantar desafinando de forma espantosa, pero escucharte a ti mismo como si fueras una estrella del pop y animarte en cada fiesta.'
    },
    {
      id: 'nor_42',
      a: 'No volver a hacer cola en ningún sitio (aeropuertos, supermercados, conciertos), pero llegar siempre quince minutos tarde a las citas.',
      b: 'Llegar siempre puntual al segundo a todas partes, pero elegir invariablemente la fila más lenta en cualquier caja o control.'
    },
    {
      id: 'nor_43',
      a: 'Pasar un año sin smartphones, redes ni mensajería en ningún dispositivo (solo llamadas y SMS tradicionales) a cambio de 20.000 €.',
      b: 'Pasar un año sin ver cine, series, vídeos, deportes ni escuchar música grabada en ningún formato por los mismos 20.000 €.'
    },
    {
      id: 'nor_44',
      a: 'Ayudar a dos amigos seguidos a hacer una mudanza por las escaleras de un cuarto piso sin ascensor en pleno agosto.',
      b: 'Alojar gratis dos semanas en tu sofá a un amigo encantador pero caótico, que ensucia la cocina y nunca recoge.'
    },
    {
      id: 'nor_45',
      a: 'No sentir frío ni calor extremos jamás aunque vayas en camiseta en invierno, pero tener cinco minutos de hipo tras cada comida.',
      b: 'No volver a sufrir dolor de cabeza, espalda ni muelas jamás, pero estornudar cinco veces seguidas cuando te dé el sol.'
    },
    {
      id: 'nor_46',
      a: 'Que a toda la comida que pruebes el resto de tu vida le falte un punto de sal y no puedas añadirle más.',
      b: 'Que todas las bebidas que tomes (agua, cerveza, refrescos o café) estén siempre del tiempo, ni frías ni calientes.'
    },
    {
      id: 'nor_47',
      a: 'Tener un parecido físico idéntico al de un famoso muy antipático y que la gente te mire mal por la calle.',
      b: 'Que tu nombre y apellidos coincidan con los de un estafador buscado y salgan sus noticias cada vez que alguien te busca en Google.'
    },
    {
      id: 'nor_48',
      a: 'Tener dos meses de vacaciones pagadas al año, pero obligatoriamente en noviembre y febrero y sin poder salir de tu país.',
      b: 'Tener tres semanas de vacaciones pagadas en las fechas y destinos que quieras, pero sin coger días sueltos ni puentes el resto del año.'
    },
    {
      id: 'nor_49',
      a: 'Que tu mejor amigo gane la lotería y te regale 30.000 €, pero te recuerde el favor en cada cena o viaje.',
      b: 'Ganar 30.000 € limpios, pero que todos crean por un error del periódico que ganaste dos millones y eres un tacaño.'
    },
    {
      id: 'nor_50',
      a: 'Que cada vez que te enfades y levantes la voz te salga automáticamente voz aguda de dibujo animado.',
      b: 'Tener una voz elegante y persuasiva, pero soltar un gallo estrepitoso en la palabra más importante de cada conversación seria.'
    },
    {
      id: 'nor_51',
      a: 'Acertar siempre con el regalo perfecto para cualquier persona, pero recibir en tus cumpleaños cosas que no necesitas sin ticket regalo.',
      b: 'Recibir siempre regalos increíbles que te encantan, pero quedar fatal cada vez que te toca hacer un regalo a ti.'
    },
    {
      id: 'nor_52',
      a: 'Tener un vecino arriba que ensaya con la batería todos los días de ocho a nueve de la mañana, incluidos fines de semana.',
      b: 'Tener un vecino silencioso casi siempre, pero que monta un karaoke a todo volumen hasta las cuatro de la madrugada un miércoles al mes.'
    },
    {
      id: 'nor_53',
      a: 'Pagar solo 150 € al mes por una vivienda estupenda para toda la vida, pero con la prohibición de mudarte de barrio.',
      b: 'Poder cambiar de casa y de ciudad gratis cuando te apetezca, pero pagando siempre el alquiler normal de mercado.'
    },
    {
      id: 'nor_54',
      a: 'Tener prohibido comer o beber nada mientras ves una película o serie, a cambio de que nadie haga jamás un ruido en el cine.',
      b: 'Tener cine, palomitas y bebida gratis de por vida, pero sentarte siempre junto a alguien que mastica con la boca abierta.'
    },
    {
      id: 'nor_55',
      a: 'Saludar con un abrazo efusivo por la calle a un desconocido creyendo que es un amigo y tardar un minuto en darte cuenta.',
      b: 'Que alguien te pare, te hable diez minutos de recuerdos juntos con toda confianza y no tener ni idea de quién es.'
    },
    {
      id: 'nor_56',
      a: 'Encontrar al instante cualquier objeto personal perdido (llaves, gafas, ropa o documentos, salvo dinero) con solo dar una palmada.',
      b: 'Reparar con dos toques cualquier pequeño aparato o prenda tuya (móvil, cafetera, gafas o calzado), máximo tres veces al año y sin revenderlo.'
    },
    {
      id: 'nor_57',
      a: 'Sentarte en todas las comidas familiares entre el cuñado que opina de todo y el familiar que interroga sobre tu vida privada.',
      b: 'Encargarte tú solo de cocinar y fregar para quince personas en Navidad a cambio de que nadie te haga preguntas incómodas.'
    },
    {
      id: 'nor_58',
      a: 'Viajar siempre únicamente con una mochila pequeña debajo del asiento, aunque te vayas tres semanas de vacaciones en invierno.',
      b: 'Poder llevar todo el equipaje que quieras gratis, pero que llueva exactamente la mitad de los días de cada viaje que hagas.'
    },
    {
      id: 'nor_59',
      a: 'Salir increíblemente fotogénico en todas las fotos y vídeos que te hagan los demás, pero tener la cámara de tu móvil rota para siempre.',
      b: 'Hacer fotos espectaculares con cualquier móvil, pero salir siempre con los ojos cerrados o bostezando cuando te fotografían a ti.'
    },
    {
      id: 'nor_60',
      a: 'Ganar el 100% de las veces a cualquier juego de mesa, cartas o deporte, hasta que tus amigos sospechen que haces trampas.',
      b: 'Perder casi siempre que compites en algo, pero tener tanta suerte en los sorteos que te toque una cesta o viaje cada año.'
    }
  ],

  mas18: [
    {
      id: 'm18_1',
      a: 'Tener el mejor sexo de tu vida pero que la otra persona narre cada movimiento con voz de comentarista de fútbol.',
      b: 'Tener sexo increíble en silencio absoluto pero que al terminar la otra persona aplauda formalmente durante un minuto.'
    },
    {
      id: 'm18_2',
      a: 'Que te pillen en pleno acto sexual en el salón de casa de tus suegros durante una cena familiar.',
      b: 'Enviar por error un vídeo íntimo tuyo de 30 segundos al grupo de WhatsApp del trabajo o de clase antes de poder borrarlo.'
    },
    {
      id: 'm18_3',
      a: 'Hacer un trío inolvidable con dos personas que te encantan pero no poder volver a tocar a ninguna de las dos nunca más.',
      b: 'Tener acceso libre a cumplir tu fantasía sexual más morbosa una vez al mes, pero con alguien que te cae fatal fuera de la cama.'
    },
    {
      id: 'm18_4',
      a: 'Que la persona que más morbo te da del grupo sepa exactamente qué partes de su cuerpo te vuelven loco.',
      b: 'Saber con total certeza quiénes de los presentes en esta habitación se han imaginado acostándose contigo.'
    },
    {
      id: 'm18_5',
      a: 'No poder llegar nunca al orgasmo si no hay al menos otra persona despierta en la habitación de al lado.',
      b: 'Llegar al orgasmo con una facilidad brutal pero soltar involuntariamente el nombre de la última persona con la que hablaste por teléfono.'
    },
    {
      id: 'm18_6',
      a: 'Ir por primera vez a una cala nudista y cruzarte de frente con tus padres o tus suegros también completamente desnudos.',
      b: 'Que tu jefe o profesor descubra tu perfil secreto en una app de citas donde detallas qué buscas exactamente en la cama.'
    },
    {
      id: 'm18_7',
      a: 'Que entreguen por error tu paquete de una tienda erótica sin embalar y a tu nombre al vecino más cotilla del bloque.',
      b: 'Que se encienda un vibrador a tope en tu mochila en el control del aeropuerto y te obliguen a vaciarla ante la cola.'
    },
    {
      id: 'm18_8',
      a: 'Tener sexo siempre que quieras, pero que nunca dure más de diez minutos con preliminares y sea en la misma postura.',
      b: 'Tener noches de sexo salvaje de dos horas cumpliendo todas tus fantasías, pero como máximo una vez cada mes y medio.'
    },
    {
      id: 'm18_9',
      a: 'Estar en la cama con alguien que te vuelve loco y que en pleno calentón se le escape llamarte por el nombre de su ex.',
      b: 'Estar a punto de acostarte por primera vez con esa persona y sufrir un apretón descomunal en su baño sin escobilla ni ambientador.'
    },
    {
      id: 'm18_10',
      a: 'Vivir en un piso con tabiques de papel donde tus vecinos escuchan con nitidez cada gemido y conversación picante que tienes.',
      b: 'Escuchar todas las noches a tus vecinos de arriba teniendo el sexo más escandaloso del edificio justo cuando intentas dormir.'
    },
    {
      id: 'm18_11',
      a: 'Que la persona con la que te acuestas solo se excite de verdad si le hablas sucio poniendo acento de telenovela mexicana.',
      b: 'Que en mitad del acto te pida siempre una pausa de dos minutos para enseñarte vídeos graciosos en el móvil antes de seguir.'
    },
    {
      id: 'm18_12',
      a: 'Descubrir que la persona que te encanta tiene un fetiche con los pies y necesita chuparte los dedos cinco minutos antes de empezar.',
      b: 'Descubrir que su mayor fantasía para los fines de semana es hacerlo disfrazados de personajes de dibujos animados de tu infancia.'
    },
    {
      id: 'm18_13',
      a: 'Acostarte con alguien que es un diez físico absoluto, pero que en la cama se tumba sin mover un músculo esperando que lo hagas todo.',
      b: 'Acostarte con alguien que de primeras no es tu tipo físicamente, pero que te da la noche más salvaje y placentera que recuerdas.'
    },
    {
      id: 'm18_14',
      a: 'Hacerlo a escondidas en el probador de una tienda un sábado por la tarde y que un dependiente abra la cortina de par en par.',
      b: 'Hacerlo de noche en el coche en un mirador apartado y que una patrulla de policía os ilumine con los focos para pediros el DNI.'
    },
    {
      id: 'm18_15',
      a: 'Que tu móvil se conecte al altavoz Bluetooth del salón en una comida familiar mientras ves un vídeo para adultos en el baño.',
      b: 'Compartir pantalla en el trabajo o en clase y que se vea abierta una pestaña con tu búsqueda erótica más rara de anoche.'
    },
    {
      id: 'm18_16',
      a: 'Tener sexo increíble en secreto con alguien de tu grupo de amigos, sabiendo que si alguien se entera se acaba para siempre.',
      b: 'Liarte de fiesta con el hermano o hermana de tu mejor amigo y que os pille saliendo de la habitación por la mañana.'
    },
    {
      id: 'm18_17',
      a: 'Perder el móvil sin contraseña dos horas en un bar lleno teniendo una carpeta con fotos y vídeos tuyos desnudo.',
      b: 'Enseñarle a tus padres fotos de un viaje en el móvil y que deslicen de más hasta ver una foto íntima recién recibida.'
    },
    {
      id: 'm18_18',
      a: 'Despertar en casa de tu cita tras la primera noche y descubrir que habéis roto una pata de la cama y manchado el colchón.',
      b: 'Despertar desnudo y solo en casa de tu ligue y cruzarte en el pasillo con sus padres, que acaban de entrar de visita.'
    },
    {
      id: 'm18_19',
      a: 'Hacerlo siempre con todas las luces blancas del techo encendidas al máximo y rodeados de espejos de cuerpo entero.',
      b: 'Hacerlo siempre en oscuridad total y silencio absoluto, sin poder veros las caras ni hacer el más mínimo ruido.'
    },
    {
      id: 'm18_20',
      a: 'Disfrutar del mejor sexo oral y juegos manuales siempre que quieras durante un año, pero teniendo prohibida la penetración.',
      b: 'Tener penetración siempre que te apetezca durante un año, pero sin un solo minuto de preliminares, besos largos ni sexo oral.'
    },
    {
      id: 'm18_21',
      a: 'Tener una noche de sexo de despedida brutal con un ex al que no soportas, sabiendo que por la mañana te arrepentirás.',
      b: 'Conseguir llevarte a la cama a tu amor platónico imposible, pero ponerte tan nervioso que todo termine en menos de un minuto.'
    },
    {
      id: 'm18_22',
      a: 'Que tu pareja o ligue quiera grabaros con tu propio móvil cada vez que lo hacéis para verlo juntos nada más terminar.',
      b: 'Que te pida dejar la puerta abierta y las cortinas sin correr al acostaros por el morbo de que alguien pueda mirar.'
    },
    {
      id: 'm18_23',
      a: 'Posar totalmente desnudo dos horas para una clase de dibujo con treinta universitarios de tu ciudad por 1.500 €.',
      b: 'Servir copas toda la noche en ropa interior en una fiesta privada llena de conocidos por 1.500 €.'
    },
    {
      id: 'm18_24',
      a: 'Que cada vez que te tomes dos copas de más sientas un impulso fortísimo de mandar mensajes picantes a quien te atrae.',
      b: 'Que cada vez que alguien te tire los trastos en un bar o discoteca te entre una risa nerviosa escandalosa que corte el rollo.'
    },
    {
      id: 'm18_25',
      a: 'Que surja acostarte de imprevisto con quien más te gusta justo al volver del gimnasio o de un viaje largo sin ducharte.',
      b: 'Pasar dos horas preparándote a fondo (ducha, depilación, perfume y ropa interior nueva) para que te cancelen la cita ya en su portal.'
    },
    {
      id: 'm18_26',
      a: 'Ir a hacerte el láser en las zonas íntimas y descubrir al tumbarte sin ropa interior que te atiende alguien con quien tonteas.',
      b: 'Darte un masaje profesional de cuerpo entero y excitarte de forma tan evidente que sea imposible disimularlo al darte la vuelta.'
    },
    {
      id: 'm18_27',
      a: 'Salir con alguien que tiene el triple de deseo sexual que tú y te busca tres veces al día aunque estés muerto de sueño.',
      b: 'Salir con alguien con quien encajas al 100% fuera de la cama, pero que solo quiere sexo una vez cada tres o cuatro semanas.'
    },
    {
      id: 'm18_28',
      a: 'Pasar toda la noche atado a la cama y con los ojos vendados, rindiéndote al control total de la otra persona.',
      b: 'Llevar tú el mando absoluto toda la noche, atando, vendando los ojos y marcando cada ritmo de principio a fin.'
    },
    {
      id: 'm18_29',
      a: 'Sufrir un tirón muscular fortísimo intentando una postura acrobática y tener que ir en ambulancia explicándole al médico cómo pasó.',
      b: 'Quedarte encerrado desnudo en el rellano de tu edificio al salir un segundo a recoger una prenda que se había caído fuera.'
    },
    {
      id: 'm18_30',
      a: 'Que en tu lista de música para momentos íntimos se cuele a todo volumen el himno de tu equipo o una canción infantil.',
      b: 'Que en el momento de mayor tensión en la cama entre la mascota de la casa y te lama la planta de los pies o el culo.'
    },
    {
      id: 'm18_31',
      a: 'Entrar por curiosidad con tu cita en un club de intercambio de parejas y encontrarte en la barra a un primo o a tu dentista.',
      b: 'Ir a un hotel romántico con jacuzzi en la terraza y descubrir que la pareja dándolo todo en el balcón vecino son amigos vuestros.'
    },
    {
      id: 'm18_32',
      a: 'Que después del sexo la otra persona insista siempre en dormir pegada a ti abrazándote fuerte toda la noche en pleno agosto.',
      b: 'Que cinco minutos después de terminar te dé las buenas noches y te pida irte a tu casa porque odia compartir cama.'
    },
    {
      id: 'm18_33',
      a: 'Enterarte de que la persona con la que llevas un mes acostándote ha fingido la mitad de sus orgasmos por no cortarte el rollo.',
      b: 'Que en vuestra primera noche te pare en seco y corrija con frialdad todo lo que haces como si fuera un examen.'
    },
    {
      id: 'm18_34',
      a: 'Perder una apuesta en una casa rural con amigos y bañarte desnudo en la piscina delante de todos a plena luz del día.',
      b: 'Perder a las cartas y dejar que tus amigos envíen un mensaje picante desde tu Instagram a quien elijan de tus seguidos.'
    },
    {
      id: 'm18_35',
      a: 'Que la persona que te gusta vea la lista de los últimos diez vídeos porno que has visto a solas.',
      b: 'Enterarte de que tu ligue usa fotos tuyas normales de Instagram para masturbarse cuando no estáis juntos.'
    },
    {
      id: 'm18_36',
      a: 'Vivir una semana de sexo inolvidable en vacaciones con alguien increíble a quien no volverás a ver jamás.',
      b: 'Liarte con un vecino de tu bloque con el que tienes una química brutal, pero cruzártelo tenso a diario.'
    },
    {
      id: 'm18_37',
      a: 'No volver a tener sexo en una cama jamás y apañarte siempre en sofás, duchas, mesas, suelos o coches.',
      b: 'Poder tener sexo únicamente en tu propia cama, renunciando para siempre a hoteles, escapadas o sitios improvisados.'
    },
    {
      id: 'm18_38',
      a: 'Que tus padres te cuenten con naturalidad tras la cena que usan juguetes eróticos y te recomienden su tienda favorita.',
      b: 'Entrar a por un cargador al cuarto de tus padres y encontrar en la mesilla unas esposas de peluche y lubricante.'
    },
    {
      id: 'm18_39',
      a: 'Salir con alguien que besa fatal en cualquier situación, pero que cuando os metéis en la cama tiene un talento descomunal.',
      b: 'Salir con alguien cuyos besos en un bar te vuelven loco, pero que una vez sin ropa resulta repetitivo y sin chispa.'
    },
    {
      id: 'm18_40',
      a: 'Presentarte un lunes en el trabajo o en una comida familiar con dos chupetones morados en el cuello imposibles de tapar.',
      b: 'Salir de una reunión importante tras una cita rápida al mediodía y notar al final que llevabas la bragueta bajada y el pelo revuelto.'
    },
    {
      id: 'm18_41',
      a: 'Encontrarte en una app de citas el perfil activo de la pareja de un buen amigo buscando un rollo discreto.',
      b: 'Hacer «match» en Tinder con ese compañero de trabajo al que no soportas y ver que te dio «Super Like».'
    },
    {
      id: 'm18_42',
      a: 'Tener el doble de sensibilidad y placer durante el sexo, pero ser incapaz de controlar el volumen de tus gemidos.',
      b: 'Tener una resistencia digna de película en la cama, pero necesitar siempre un mínimo de cuarenta y cinco minutos para llegar al clímax.'
    },
    {
      id: 'm18_43',
      a: 'Poder tener sexo únicamente recién despertados por la mañana, antes de salir de la cama, lavaros los dientes o pisar el baño.',
      b: 'Poder tener sexo únicamente pasadas las tres de la madrugada, cuando ya lleváis todo el día encima y os caéis de sueño.'
    },
    {
      id: 'm18_44',
      a: 'Que una ola te arranque el bañador por completo en la orilla de una playa abarrotada y tardes medio minuto en recuperarlo.',
      b: 'Que se te raje el pantalón o vestido de arriba abajo dejando tu ropa interior a la vista mientras bailas en una discoteca.'
    },
    {
      id: 'm18_45',
      a: 'Tener un sueño erótico tan real con la pareja de un amigo que te sientas culpable cada vez que coincidís a tomar algo.',
      b: 'Que alguien de tu grupo de amigos te confiese de fiesta que ha fantaseado varias veces contigo y te pregunte si te liarías.'
    },
    {
      id: 'm18_46',
      a: 'Tener fama entre tus ex de ser un desastre como pareja, pero el mejor polvo de toda su vida.',
      b: 'Tener fama de ser la pareja perfecta y más cariñosa, pero que tus ex digan que en la cama eras soso.'
    },
    {
      id: 'm18_47',
      a: 'Hacerlo siempre de pie bajo una ducha estrecha donde el jabón resbala y el agua alterna entre fría y caliente.',
      b: 'Hacerlo siempre de noche en una cala desierta espectacular, pero terminar invariablemente con arena pegada por todo el cuerpo.'
    },
    {
      id: 'm18_48',
      a: 'Que te llame tu madre por una urgencia justo en el momento cumbre y tengas que contestar intentando disimular la voz.',
      b: 'Que suene el timbre con un pedido a domicilio justo cuando estáis desnudos y esposados a la cama sin alcanzar las llaves.'
    },
    {
      id: 'm18_49',
      a: 'Tener una noche de hotel increíble con alguien que te pone muchísimo, pero con antifaz y sin saber nunca quién es.',
      b: 'Acostarte un fin de semana con un famoso que te vuelve loco, pero sin poder contárselo jamás a nadie.'
    },
    {
      id: 'm18_50',
      a: 'Renunciar al sexo y a la masturbación durante tres meses seguidos a cambio de 6.000 € limpios al terminar.',
      b: 'Subir fotos tuyas desnudo de cuello para abajo a una web para adultos durante tres meses por los mismos 6.000 €.'
    }
  ],

  extremo: [
    {
      id: 'ext_1',
      a: 'Borrar el peor recuerdo traumático de tu vida a cambio de olvidar también a la persona que más te ha querido.',
      b: 'Conservar intactos todos tus recuerdos pero revivir tu peor día con total realismo en sueños una vez al año.'
    },
    {
      id: 'ext_2',
      a: 'Saber la fecha exacta de tu muerte pero ser completamente inmune a cualquier accidente o enfermedad hasta ese día.',
      b: 'Vivir hasta los 100 años garantizados con salud perfecta, pero que una persona al azar de tu ciudad muera el día que aceptes el trato.'
    },
    {
      id: 'ext_3',
      a: 'Ir 3 años a prisión siendo totalmente inocente para evitar que tu mejor amigo o hermano vaya 15 años siendo culpable.',
      b: 'Entregar las pruebas que condenan a tu mejor amigo o hermano a 15 años de cárcel y quedar libre de toda sospecha.'
    },
    {
      id: 'ext_4',
      a: 'Perder la capacidad de sentir tristeza y miedo, pero perder también para siempre la capacidad de sentir euforia y amor.',
      b: 'Sentir todas las emociones humanas multiplicadas por tres, tanto la felicidad extrema como el dolor emocional.'
    },
    {
      id: 'ext_5',
      a: 'Descubrir que toda tu vida tus amigos y pareja han recibido un sueldo secreto por hacerte compañía.',
      b: 'Descubrir que eres el único humano real de tu entorno y que el resto son simulaciones programadas para quererte.'
    },
    {
      id: 'ext_6',
      a: 'Donar en vida un riñón para salvar a un familiar con el que te llevas fatal y que te hizo mucho daño.',
      b: 'Pedir en secreto al médico que finja que eres incompatible, sabiendo que sin tu donación difícilmente sobrevivirá.'
    },
    {
      id: 'ext_7',
      a: 'Colar a tu madre o padre al principio de la lista de espera de un trasplante vital, delante de un joven desconocido.',
      b: 'Respetar el turno legal de la lista de espera sabiendo que tu familiar no llegará con vida a la operación.'
    },
    {
      id: 'ext_8',
      a: 'Denunciar un fraude ambiental grave de tu empresa, logrando justicia pero dejando en el paro a tus trescientos compañeros.',
      b: 'Callar para proteger el empleo de esas trescientas familias y aceptar un ascenso sabiendo que el daño ambiental continuará.'
    },
    {
      id: 'ext_9',
      a: 'Provocar por distracción un accidente donde tu mejor amigo pierde una pierna, pero que él crea que le salvaste la vida.',
      b: 'Perder tú la movilidad de un brazo por una imprudencia de tu mejor amigo y ver cómo la culpa le destroza a diario.'
    },
    {
      id: 'ext_10',
      a: 'Ser señalado en tu ciudad como un cobarde que huyó de una emergencia, habiendo salvado varias vidas en el anonimato.',
      b: 'Ser premiado como un héroe nacional por un rescate donde te quedaste paralizado y el mérito fue de otro que murió.'
    },
    {
      id: 'ext_11',
      a: 'Hundir legal y públicamente a quien más daño te ha hecho, pero restando cinco años a tu esperanza de vida.',
      b: 'Ver cómo esa persona sale impune y triunfa, a cambio de recibir paz mental absoluta y olvidar para siempre el rencor.'
    },
    {
      id: 'ext_12',
      a: 'Quedarte ciego a los 50 años, pero conservar una mente brillante, oído perfecto y salud física intacta hasta los 95.',
      b: 'Conservar la vista perfecta toda la vida, pero perder por completo el oído y el habla a los 45 años.'
    },
    {
      id: 'ext_13',
      a: 'Saltar diez años al futuro con cinco millones en el banco, pero sin ningún recuerdo de lo vivido en esa década.',
      b: 'Volver diez años al pasado con tu mente actual, sabiendo que dos personas que hoy quieres no te conocerán jamás.'
    },
    {
      id: 'ext_14',
      a: 'Vivir veinticinco años más con juventud, salud perfecta y dinero ilimitado, y morir sin dolor al cumplirse el plazo.',
      b: 'Vivir hasta los noventa años con tu economía actual, afrontando el envejecimiento natural y los achaques propios de la edad.'
    },
    {
      id: 'ext_15',
      a: 'Restarte diez años de vida para sumárselos con plena salud y vitalidad a la persona que más quieres.',
      b: 'Conservar tu esperanza de vida, pero recibir un aviso exacto seis meses antes de la muerte de cada ser querido.'
    },
    {
      id: 'ext_16',
      a: 'Llegar a los ochenta años con el cuerpo ágil de alguien de treinta, pero olvidando poco a poco a tus seres queridos.',
      b: 'Llegar a los ochenta años con una memoria y lucidez prodigiosas, pero dependiendo de otros para levantarte de la cama.'
    },
    {
      id: 'ext_17',
      a: 'Despertar de un coma dentro de veinte años sin haber envejecido, viendo que tu pareja y amigos han rehecho su vida sin ti.',
      b: 'Que la persona que más quieres despierte hoy de un coma sana, pero habiendo olvidado para siempre quién eres.'
    },
    {
      id: 'ext_18',
      a: 'Curar con las manos cualquier enfermedad grave de los tuyos, sufriendo tú un año de convalecencia por cada curación.',
      b: 'Ser inmune a cualquier enfermedad toda tu vida, pero biológicamente incompatible para donar sangre u órganos a tu familia.'
    },
    {
      id: 'ext_19',
      a: 'Escuchar involuntariamente todas las críticas o decepciones que tu familia y amigos piensan sobre ti cuando estás con ellos.',
      b: 'Que cada pensamiento egoísta, cruel o envidioso que tengas sobre alguien cercano se le envíe al instante por mensaje.'
    },
    {
      id: 'ext_20',
      a: 'Descubrir con pruebas médicas que moriste hace cinco años y eres un clon con los recuerdos implantados del original.',
      b: 'Dejar un clon idéntico a ti cuidando de tu familia y tu trabajo, mientras tú desapareces para vivir otra vida desde cero.'
    },
    {
      id: 'ext_21',
      a: 'Perder la capacidad de mentir u ocultar nada, respondiendo siempre con la verdad cruda a cualquier pregunta que te hagan.',
      b: 'Que nadie pueda mentirte jamás, descubriendo de golpe todas las verdades dolorosas que tu entorno callaba para no herirte.'
    },
    {
      id: 'ext_22',
      a: 'Pasar a la historia como un genio cuya obra salva millones de vidas, pero vivir siempre incomprendido y en soledad.',
      b: 'Tener una vida feliz y rodeada de afecto, sabiendo que veinte años después de morir nadie recordará que exististe.'
    },
    {
      id: 'ext_23',
      a: 'Ver en pantalla cómo sería hoy tu vida si hubieras elegido distinto en tu decisión más difícil, sin poder cambiar el presente.',
      b: 'Borrar toda culpa por tus errores pasados, pero perder también lo aprendido y arriesgarte a cometerlos de nuevo.'
    },
    {
      id: 'ext_24',
      a: 'Vivir cada noche en sueños una vida alternativa tan perfecta y real que tu vida al despertar te parezca vacía.',
      b: 'Perder para siempre la capacidad de soñar, imaginar o fantasear, viviendo anclado solo en la realidad fría de cada día.'
    },
    {
      id: 'ext_25',
      a: 'Obtener la respuesta verdadera y con pruebas a una sola pregunta sobre cualquier misterio de la humanidad o de tu vida.',
      b: 'Recibir cada primero de enero una alerta con el mayor peligro que te amenaza ese año, sin saber cuándo ni cómo ocurrirá.'
    },
    {
      id: 'ext_26',
      a: 'En un incendio, salvar antes a tu perro de diez años que a un desconocido recién salido de prisión por un delito violento.',
      b: 'Salvar la vida de ese desconocido cumpliendo la ley y viendo cómo tu mascota no logra salir a tiempo.'
    },
    {
      id: 'ext_27',
      a: 'Que tu padre o madre te confiese en su lecho de muerte un secreto familiar devastador haciéndote jurar que lo callarás siempre.',
      b: 'Descubrir tras morir tus padres que tus hermanos siempre supieron ese secreto y te lo ocultaron por considerarte el más frágil.'
    },
    {
      id: 'ext_28',
      a: 'Tener el trabajo de tus sueños y la vida resuelta en otro continente, sin volver a ver en persona a familia ni amigos.',
      b: 'Quedarte toda la vida junto a las personas que quieres, pero en un trabajo precario que detestas y sin salir de tu provincia.'
    },
    {
      id: 'ext_29',
      a: 'Que tus hijos triunfen, sean felices y estén sanos, pero se avergüencen de tu origen y apenas te hablen de adultos.',
      b: 'Mantener con ellos un vínculo de amor inquebrantable toda la vida, pero verlos fracasar y pasar penurias sin poder ayudarles.'
    },
    {
      id: 'ext_30',
      a: 'Enterarte hoy de que tu mejor amigo saboteó en secreto la mayor oportunidad de tu pasado para que no te alejaras.',
      b: 'Haber cometido en el pasado una traición imperdonable contra tu mejor amigo sin que lo sepa, mientras él lo da todo por ti.'
    },
    {
      id: 'ext_31',
      a: 'Si fallecieras mañana, borrar todo recuerdo de tu existencia en tu familia y amigos para ahorrarles cualquier sufrimiento.',
      b: 'Que te recuerden toda su vida con todo el amor que te tienen, aunque tu pérdida les deje años de tristeza profunda.'
    },
    {
      id: 'ext_32',
      a: 'Descubrir hoy que te cambiaron por error al nacer y que tus padres biológicos son multimillonarios y quieren recuperarte.',
      b: 'Descubrir que tus padres te adoptaron en secreto tras una tragedia de tu familia biológica y que nunca pensaban contártelo.'
    },
    {
      id: 'ext_33',
      a: 'Ser el último en morir de tus amigos, hermanos y pareja, conservando la salud pero despidiéndolos a todos y quedándote solo.',
      b: 'Ser el primero de todos ellos en morir veinte años antes de lo normal, ahorrándote el duelo pero dejando ese vacío en ellos.'
    },
    {
      id: 'ext_34',
      a: 'Heredar seis millones de euros legales, descubriendo al firmar que tu antepasado los amasó dejando en la calle a decenas de familias.',
      b: 'Renunciar a toda esa fortuna para tener la conciencia tranquila y seguir pagando tus facturas y deudas con tu sueldo actual.'
    },
    {
      id: 'ext_35',
      a: 'Vender y borrar de tu mente todos tus recuerdos desde que naciste hasta los dieciocho años por tres millones de euros.',
      b: 'Trabajar cinco años completamente incomunicado en una estación polar, sin internet ni contacto con los tuyos, por los mismos tres millones.'
    },
    {
      id: 'ext_36',
      a: 'Que la obra o proyecto de tu vida triunfe en todo el mundo, pero firmada por un impostor sin que puedas demostrarlo.',
      b: 'Recibir dos millones de indemnización reconociendo tu autoría, pero bajo una sentencia que destruye tu obra y prohíbe publicarla jamás.'
    },
    {
      id: 'ext_37',
      a: 'Recibir veinte millones para ayudar a quien quieras en secreto, pero estando obligado a vivir siempre con un sueldo básico sin lujos.',
      b: 'Recibir dos millones para disfrutarlos a todo tren, pero sin poder regalar, prestar ni donar jamás un euro ni a tu familia.'
    },
    {
      id: 'ext_38',
      a: 'Recibir 400.000 € libres de impuestos, pero quitándole 4.000 € a cada una de cien familias trabajadoras elegidas al azar.',
      b: 'Recibir 400.000 € libres de impuestos, pero haciendo que tu peor enemigo reciba un millón de euros adicionales.'
    },
    {
      id: 'ext_39',
      a: 'Recibir cinco millones hoy a cambio de publicar en una web abierta con tu nombre todos los mensajes y audios privados de tu vida.',
      b: 'Recibir cinco millones empezando de cero en otro país con otra identidad, pero sin volver a comunicarte jamás con nadie de tu pasado.'
    },
    {
      id: 'ext_40',
      a: 'Recibir tres millones de euros al instante a cambio de perder para siempre el sentido del gusto y la emoción por la música.',
      b: 'Rechazar el dinero a cambio de garantizar que conservarás los cinco sentidos y la lucidez intactos hasta los 95 años.'
    },
    {
      id: 'ext_41',
      a: 'Al borde del desahucio familiar, aceptar 150.000 € por destruir la prueba que demuestra la corrupción millonaria de un político.',
      b: 'Entregar la prueba al juez cumpliendo tu deber cívico, sabiendo que nadie te compensará y que ese mes perderás tu casa.'
    },
    {
      id: 'ext_42',
      a: 'Atrapado en la nieve con un desconocido herido, repartir el único alimento reduciendo al 50% tus probabilidades de sobrevivir.',
      b: 'Consumir tú la ración necesaria para asegurar al 100% que llegarás vivo al rescate, sabiendo que el desconocido no resistirá.'
    },
    {
      id: 'ext_43',
      a: 'Pasar dos años completamente solo en un búnker de lujo, sin ver ni oír a ningún humano, por 1,5 millones de euros.',
      b: 'Vivir tres años con cámaras emitiendo en directo las 24 horas cada rincón de tu casa, incluido el baño, por la misma cifra.'
    },
    {
      id: 'ext_44',
      a: 'Saber con certeza que en dos años habrá un colapso nacional, pero con prohibición de avisar a nadie bajo pena de cárcel.',
      b: 'No saber nada del futuro, pero tener garantizada una única plaza de evacuación para ti en caso de catástrofe, sin llevar familiares.'
    },
    {
      id: 'ext_45',
      a: 'Ser inmortal e indestructible durante quinientos años obligatorios, viendo desaparecer a todas las personas y generaciones que ames.',
      b: 'Tener una esperanza de vida normal, pero olvidar por completo tu pasado cada quince años y reconstruir tu identidad desde cero.'
    },
    {
      id: 'ext_46',
      a: 'Lanzarte a un edificio en llamas para intentar salvar a un niño desconocido, teniendo un 50% de probabilidades de morir.',
      b: 'Esperar a los bomberos a salvo en la acera y descubrir después que habrías tenido tiempo de sacarlo ileso.'
    },
    {
      id: 'ext_47',
      a: 'En un accidente aislado, usar el único botiquín para salvar la vida del médico, dejando a tu mejor amigo con cojera permanente.',
      b: 'Usar el botiquín en tu mejor amigo para que quede sin secuelas, sabiendo que el médico morirá sin poder atender a más heridos.'
    },
    {
      id: 'ext_48',
      a: 'Al morir, volver a nacer en un país y familia totalmente al azar, sin conservar ningún recuerdo de quién fuiste.',
      b: 'Al morir, volver a nacer en el mismo año siendo tú mismo, con todos tus recuerdos actuales para cambiar tus decisiones.'
    },
    {
      id: 'ext_49',
      a: 'Sufrir hoy una amnesia irreversible de todo tu pasado y aprender desde cero quién eres y quiénes son los tuyos.',
      b: 'Conservar intactos tus recuerdos hasta hoy, pero que a partir de mañana tu memoria reciente se borre cada treinta días.'
    },
    {
      id: 'ext_50',
      a: 'Deshacer la mayor pérdida o tragedia de tu vida, sabiendo que ese mismo golpe recaerá sobre una familia desconocida.',
      b: 'Rechazar el cambio y cargar con las pérdidas de tu propia historia para no traspasar tu sufrimiento a ningún inocente.'
    }
  ],

  sinfiltro: [
    {
      id: 'sin_1',
      a: 'Que se proyecte en la televisión del salón tu historial completo de búsquedas nocturnas del último año delante de tus amigos.',
      b: 'Que se publiquen todos los audios y mensajes donde has criticado a alguien de este grupo a sus espaldas.'
    },
    {
      id: 'sin_2',
      a: 'Confesar ahora mismo en voz alta quién te parece la persona más atractiva y la menos atractiva de los presentes.',
      b: 'Dejar que la persona de tu derecha desbloquee tu móvil y lea en voz alta tu última conversación privada de Instagram o WhatsApp.'
    },
    {
      id: 'sin_3',
      a: 'Que tu ex más tóxico cuente su versión sin censura de vuestra relación delante de toda tu familia en Nochebuena.',
      b: 'Que tus padres reciban un informe detallado con cada mentira que les has dicho desde que cumpliste 15 años.'
    },
    {
      id: 'sin_4',
      a: 'Tener que oler la ropa interior usada del último cesto de la ropa sucia de la casa donde estás ahora.',
      b: 'Lamer de punta a punta la pantalla del teléfono móvil de la persona que tengas sentada enfrente.'
    },
    {
      id: 'sin_5',
      a: 'Perder todos tus ahorros actuales a cambio de que nadie descubra jamás tu secreto más vergonzoso.',
      b: 'Recibir 20.000 € mañana mismo pero que tu secreto más inconfesable aparezca publicado con tu nombre y foto en un periódico local.'
    },
    {
      id: 'sin_6',
      a: 'Dar «me gusta» por error a una foto en bañador de hace cuatro años del ex de tu pareja.',
      b: 'Subir por error a tus historias de Instagram una captura de pantalla de la persona que estabas cotilleando.'
    },
    {
      id: 'sin_7',
      a: 'Atascar el váter en casa de los padres de tu ligue el primer día y tener que pedirles un desatascador.',
      b: 'Vomitar por la borrachera en mitad de la tarta de cumpleaños de tu mejor amigo delante de todos los invitados.'
    },
    {
      id: 'sin_8',
      a: 'Decir ahora mismo en voz alta a quién de los presentes no le dejarías jamás 500 € aunque los tuvieras.',
      b: 'Decir ahora mismo quién de este grupo crees que sería el primero en traicionar a los demás por dinero.'
    },
    {
      id: 'sin_9',
      a: 'Que se publique una lista con el apodo secreto o mote que le has puesto a cada conocido tuyo.',
      b: 'Que todos tus amigos sepan cuánto dinero exacto tienes en el banco y cuánto cobras cada mes.'
    },
    {
      id: 'sin_10',
      a: 'Tirarte un pedo sonorísimo y con un olor letal en mitad de una entrevista de trabajo en un despacho cerrado.',
      b: 'Eructar en la cara de la persona que te gusta justo cuando se acerca para darte vuestro primer beso.'
    },
    {
      id: 'sin_11',
      a: 'Despertar de resaca viendo que anoche llamaste cinco veces llorando a tu ex y le dejaste tres audios cantando.',
      b: 'Despertar de resaca viendo que invitaste a chupitos a todo el bar y te has gastado 450 € de tu cuenta.'
    },
    {
      id: 'sin_12',
      a: 'Que te dé un ataque de risa floja incontrolable en primera fila durante el funeral de un familiar lejano.',
      b: 'Tirar al suelo la tarta nupcial en la boda de tu mejor amigo por querer hacerte un selfie gracioso.'
    },
    {
      id: 'sin_13',
      a: 'Cargar tú con la culpa de una broma pesada en una fiesta para que no echen a tu mejor amigo.',
      b: 'Delatar discretamente a tu mejor amigo ante el anfitrión para salvarte tú de pagar un jarrón caro que habéis roto.'
    },
    {
      id: 'sin_14',
      a: 'Lavarte los dientes a fondo durante un minuto usando el cepillo viejo de un desconocido en un piso compartido.',
      b: 'Beberte de un trago un vaso de agua donde alguien acaba de enjuagar su dentadura postiza delante de ti.'
    },
    {
      id: 'sin_15',
      a: 'Contar ahora mismo cuál es la excusa más rastrera que has puesto para no quedar con alguien de aquí.',
      b: 'Confesar ahora mismo de quién de este grupo has hablado mal por detrás la última vez y qué dijiste.'
    },
    {
      id: 'sin_16',
      a: 'Quedarte dormido en el transporte público con la boca abierta y hacerte viral en TikTok roncando y babeando.',
      b: 'Salir en las noticias locales siendo detenido por error en pijama en la puerta de tu casa mientras tus vecinos graban.'
    },
    {
      id: 'sin_17',
      a: 'Que todo el mundo piense siempre que te huele fatal el aliento aunque te laves los dientes diez veces al día.',
      b: 'Sudar a chorros por las axilas dejando cercos gigantes en la ropa cada vez que hablas con alguien atractivo.'
    },
    {
      id: 'sin_18',
      a: 'Llamar «mamá» o «papá» por equivocación a tu jefe delante de toda la oficina y quedarte en blanco.',
      b: 'Enviar al grupo general de la empresa un meme burlándote de tu jefe justo después de que él dé una orden.'
    },
    {
      id: 'sin_19',
      a: 'Decir en voz alta qué pareja de tu entorno crees que no va a durar ni un año más junta.',
      b: 'Decir en voz alta con qué ex de alguno de tus amigos te liarías sin pensarlo si nadie se enterase.'
    },
    {
      id: 'sin_20',
      a: 'Pedir limosna de rodillas durante una hora en la calle más concurrida de tu barrio a cambio de 600 €.',
      b: 'Ir a trabajar o a clase un día entero vestido con un disfraz inflable de dinosaurio por los mismos 600 €.'
    },
    {
      id: 'sin_21',
      a: 'Enterarte de que tus amigos tienen un grupo de WhatsApp paralelo sin ti para organizar planes a los que no te invitan.',
      b: 'Descubrir que eres el tema principal de burla en el grupo de amigos de la persona que te gusta.'
    },
    {
      id: 'sin_22',
      a: 'Que tus padres te pillen cogiendo 50 € de su cartera a escondidas para pagarte una noche de fiesta.',
      b: 'Que tus padres escuchen por un audio enviado sin querer cómo te burlas de ellos delante de tus amigos.'
    },
    {
      id: 'sin_23',
      a: 'Caerte de culo en un charco de barro y basura al entrar a la discoteca y quedarte toda la noche así.',
      b: 'Que un desconocido borracho te vomite encima de los zapatos y el pantalón nada más llegar a una fiesta.'
    },
    {
      id: 'sin_24',
      a: 'Criticar a gritos lo feo que es el bebé de una foto sin saber que estás hablando con su madre.',
      b: 'Preguntarle con toda ilusión a una conocida de cuántos meses está embarazada y que te responda que solo ha engordado.'
    },
    {
      id: 'sin_25',
      a: 'Que el anfitrión de una fiesta te pille cotilleando los cajones de su dormitorio y el armario del baño.',
      b: 'Que los padres de tu amigo te pillen a las cuatro de la mañana comiendo con las manos directamente de su nevera.'
    },
    {
      id: 'sin_26',
      a: 'Comprar crema para las hemorroides y un test de embarazo en la farmacia donde trabaja la madre de tu ex.',
      b: 'Llevar tu ropa a la tintorería del barrio y que saquen tu ropa interior sucia delante de toda la cola.'
    },
    {
      id: 'sin_27',
      a: 'Declararte en público hincando la rodilla en un restaurante lleno y que te digan que no y se marchen corriendo.',
      b: 'Tatuarte las iniciales de alguien con quien llevas dos meses saliendo y que te deje esa misma semana por otro.'
    },
    {
      id: 'sin_28',
      a: 'Quedar ante todo el grupo como el rata oficial que siempre se escaquea al pagar las rondas y los botes.',
      b: 'Ser siempre el tonto que paga de más en cada cena porque a los demás nunca les salen las cuentas.'
    },
    {
      id: 'sin_29',
      a: 'Llevar las cejas totalmente afeitadas durante un mes entero sin poder pintarlas ni taparlas con gorra o gafas.',
      b: 'Salir de la peluquería con una calva al cero en mitad de la cabeza por un trasquilón antes de una boda.'
    },
    {
      id: 'sin_30',
      a: 'Beber un sorbo del vaso que lleva toda la noche abandonado en la mesa de una discoteca con colillas flotando.',
      b: 'Comerte un chicle que alguien ha dejado pegado debajo de la mesa de un bar a cambio de 200 €.'
    },
    {
      id: 'sin_31',
      a: 'Quedarte dormido en el sofá de tus suegros después de comer y que te despierten tus propios ronquidos y gases.',
      b: 'Romper la figura más cara del salón de tus suegros y echarle la culpa a su perro delante de todos.'
    },
    {
      id: 'sin_32',
      a: 'Llamar ahora mismo a tus padres en manos libres y fingir durante un minuto que te ha detenido la policía.',
      b: 'Dejar que el grupo publique una foto tuya horrible en tu perfil de Instagram sin explicaciones durante doce horas.'
    },
    {
      id: 'sin_33',
      a: 'Que te pillen fingiendo que estás de viaje en el extranjero cuando en realidad llevas toda la semana encerrado en casa.',
      b: 'Que te cace tu jefe de fiesta en un bar el mismo día que has pedido baja médica por gastroenteritis.'
    },
    {
      id: 'sin_34',
      a: 'Decir ahora mismo quién del grupo tiene el peor gusto vistiendo y quién sube las cosas más ridículas a redes.',
      b: 'Confesar ahora mismo la vez que culpaste a un amigo de algo que habías hecho tú para evitar meterte en un lío.'
    },
    {
      id: 'sin_35',
      a: 'Quedarte sin papel higiénico en un baño público con diarrea y tener que usar tus propios calcetines para limpiarte.',
      b: 'Que se abra de golpe la puerta rota del baño de un bar lleno justo cuando estás sentado con los pantalones bajados.'
    },
    {
      id: 'sin_36',
      a: 'Enterarte por Instagram de que tu mejor amigo y tu ex se han ido juntos de viaje un fin de semana.',
      b: 'Tener que compartir mesa en una boda durante seis horas con tus tres últimos ex y sus respectivas parejas nuevas.'
    },
    {
      id: 'sin_37',
      a: 'Que cada vez que te rías a carcajadas sueltes un bufido de cerdo fuertísimo que deje a todos en silencio.',
      b: 'Que cada vez que hables con alguien que te intimida se te escape alguna gota de saliva a su cara.'
    },
    {
      id: 'sin_38',
      a: 'Tirarte en plancha a la piscina del hotel para lucirte y darte un barrigazo monumental que deje todo el pecho rojo.',
      b: 'Que se te enganchen los pantalones en una máquina del gimnasio y quedarte en ropa interior delante de toda la sala.'
    },
    {
      id: 'sin_39',
      a: 'Irte sin pagar de un restaurante caro con tu cita y que el camarero salga corriendo detrás de vosotros gritando.',
      b: 'Que te rechacen todas las tarjetas en la primera cita y tener que pedirle a tu ligue que lo pague todo.'
    },
    {
      id: 'sin_40',
      a: 'Que exista un vídeo tuyo borracho llorando en el suelo de una discoteca porque no te dejan entrar.',
      b: 'Que exista un vídeo tuyo intentando ligar de forma lamentable durante diez minutos con alguien que pasa totalmente de ti.'
    },
    {
      id: 'sin_41',
      a: 'Que tus amigos encuentren y lean en voz alta el diario íntimo o las cartas de amor que escribías con catorce años.',
      b: 'Que se proyecten en una fiesta todos los vídeos caseros y bailes ridículos que grababas a solas en tu habitación.'
    },
    {
      id: 'sin_42',
      a: 'Coger el último trozo de comida en una cena de amigos sin preguntar y que todos se queden mirándote en silencio.',
      b: 'Presentarte en un cumpleaños con las manos vacías y comerte y beberte la mitad de lo que han traído los demás.'
    },
    {
      id: 'sin_43',
      a: 'Pisar descalzo a oscuras el vómito frío de tu mascota nada más levantarte de la cama por la mañana.',
      b: 'Meter la mano sin guantes hasta el fondo de un fregadero atascado lleno de restos de comida de tres días.'
    },
    {
      id: 'sin_44',
      a: 'Enseñar ahora mismo al grupo las últimas cinco fotos eliminadas de tu móvil y tus últimas búsquedas de Instagram.',
      b: 'Enseñar ahora mismo el saldo exacto de tu cuenta bancaria y tus últimos diez pagos con tarjeta o Bizum.'
    },
    {
      id: 'sin_45',
      a: 'Que el portero de una discoteca te eche de la fila delante de todo el mundo diciendo que no das el nivel.',
      b: 'Que un camarero te llame la atención a gritos en un restaurante lleno por intentar llevarte comida del buffet en el bolso.'
    },
    {
      id: 'sin_46',
      a: 'Que el presidente de tu comunidad lea en la junta anual todas las quejas de los vecinos por tus ruidos y fiestas.',
      b: 'Quedarte encerrado en el ascensor con el vecino al que acabas de rayarle el coche aparcando sin dejarle nota.'
    },
    {
      id: 'sin_47',
      a: 'Tener que depilarle la espalda y el culo con cera caliente a un amigo antes de que se vaya de vacaciones.',
      b: 'Tener que cortarle las uñas de los pies y quitarle las durezas a un familiar después de una caminata larga.'
    },
    {
      id: 'sin_48',
      a: 'Salir en un anuncio de televisión nacional haciendo de paciente con diarrea explosiva o mal olor corporal por 3.000 €.',
      b: 'Ir como concursante a un programa de citas de la tele y que tu cita te rechace en directo por 3.000 €.'
    },
    {
      id: 'sin_49',
      a: 'Darle a un amigo por su cumpleaños un regalo reciclado y descubrir al abrirlo que te lo había regalado él.',
      b: 'Vender en Wallapop un regalo feísimo que te hizo tu pareja o tu madre y que descubra el anuncio publicado.'
    },
    {
      id: 'sin_50',
      a: 'Que cada persona de esta habitación diga en voz alta cuál es tu peor defecto sin que puedas defenderte.',
      b: 'Tener que decir tú a la cara de cada persona presente qué es lo que menos soportas de su personalidad.'
    }
  ],

  parejas: [
    {
      id: 'par_1',
      a: 'Perdonar un desliz físico de una sola noche en otra ciudad donde no hubo ningún sentimiento ni volverán a verse.',
      b: 'Descubrir que tu pareja lleva seis meses tonteando a diario y confesando sus intimidades a alguien del trabajo sin haber llegado a tocarse.'
    },
    {
      id: 'par_2',
      a: 'Tener acceso total e ilimitado al teléfono de tu pareja pero que ella tenga exactamente el mismo acceso al tuyo.',
      b: 'No poder mirar jamás su móvil ni sus redes, sabiendo que oculta un secreto del pasado que nunca te va a contar.'
    },
    {
      id: 'par_3',
      a: 'Estar con alguien que te vuelve loco en la cama y te divierte muchísimo, pero con quien discutes fuerte dos veces por semana.',
      b: 'Estar con alguien con quien la convivencia es perfecta y pacífica al 100%, pero la pasión sexual es tibia y predecible.'
    },
    {
      id: 'par_4',
      a: 'Que el mejor amigo o amiga de tu pareja esté secretamente enamorado de ella y no se separen nunca.',
      b: 'Que tu pareja se lleve tan mal con tus amigos y tu familia que tengas que verlos siempre por separado.'
    },
    {
      id: 'par_5',
      a: 'Vivir en casas separadas toda la vida manteniendo la chispa y el deseo intactos como el primer mes.',
      b: 'Vivir juntos compartiendo todos los gastos y rutinas, sabiendo que a los cinco años pareceréis más compañeros de piso que amantes.'
    },
    {
      id: 'par_6',
      a: 'Dormir toda la vida con una pareja que ronca fuerte y te roba toda la manta a medianoche.',
      b: 'Dormir con alguien silencioso, pero que necesita la tele encendida y tres alarmas cada cinco minutos para despertar.'
    },
    {
      id: 'par_7',
      a: 'Que tu pareja cocine de maravilla todos los días, pero deje siempre la encimera y las sartenes para que limpies tú.',
      b: 'Que tu pareja deje la casa reluciente a diario, pero queme hasta el agua y te toque cocinar siempre a ti.'
    },
    {
      id: 'par_8',
      a: 'Convivir con alguien ultramadrugador que los domingos a las ocho de la mañana ya está pasando el aspirador cantando.',
      b: 'Convivir con alguien tan nocturno que se acuesta a las cuatro y no es persona hasta la hora de comer.'
    },
    {
      id: 'par_9',
      a: 'Que tu pareja entre al baño con total confianza a charlar contigo mientras estás sentado en el váter.',
      b: 'Que sea tan pudorosa que tras años juntos siga cerrando con pestillo hasta para lavarse los dientes.'
    },
    {
      id: 'par_10',
      a: 'Una pareja muy fría en público que nunca te da la mano, pero en privado es la más cariñosa del mundo.',
      b: 'Una pareja que te llena de besos y dedicatorias delante de todos, pero en casa apenas es detallista.'
    },
    {
      id: 'par_11',
      a: 'Que tu pareja olvide siempre vuestro aniversario y tu cumpleaños, pero te sorprenda con planazos cualquier martes sin motivo.',
      b: 'Que recuerde cada fecha al milímetro, pero te obligue a celebrarlo con cenas empalagosas y vídeos románticos en redes.'
    },
    {
      id: 'par_12',
      a: 'Estar con alguien incapaz de decir «te quiero» o hablar de sentimientos, pero que te resuelve cualquier problema al instante.',
      b: 'Estar con alguien que te escribe textos preciosos a diario, pero nunca mueve un dedo cuando necesitas ayuda práctica.'
    },
    {
      id: 'par_13',
      a: 'Que tu pareja organice todas las citas y escapadas por sorpresa sin dejarte opinar jamás sobre el plan.',
      b: 'Que te diga siempre «lo que tú quieras, cariño» y tengas que decidirlo y reservarlo absolutamente todo tú.'
    },
    {
      id: 'par_14',
      a: 'Tener que tomar tú siempre la iniciativa en la cama, pero que tu pareja acepte con ganas el 100% de las veces.',
      b: 'Que tu pareja te busque con un morbo increíble a menudo, pero te rechace siempre que lo propones tú primero.'
    },
    {
      id: 'par_15',
      a: 'Que tu pareja te proponga incluir a una tercera persona desconocida en la cama solo por cumplir una fantasía juntos.',
      b: 'Descubrir que tu pareja tiene una fantasía muy morbosa que le encanta, pero prefiere no contártela nunca por vergüenza.'
    },
    {
      id: 'par_16',
      a: 'Tener sexo de diez con tu pareja, pero únicamente con cita previa fijada en el calendario dos veces por semana.',
      b: 'Tener sexo totalmente espontáneo en cualquier rincón de la casa, pero que la mitad de las veces se quede a medias.'
    },
    {
      id: 'par_17',
      a: 'Que tu pareja te diga sin filtro cada vez que un polvo no le ha gustado o no ha terminado.',
      b: 'Que te haga creer siempre que eres increíble en la cama, aunque a veces finja para no herir tu orgullo.'
    },
    {
      id: 'par_18',
      a: 'Juntar el 100% de vuestros sueldos en una única cuenta y tener que consensuar cualquier capricho de más de 50 €.',
      b: 'Llevar las cuentas tan separadas que tu pareja te pase por Bizum hasta la mitad de un café o una aspirina.'
    },
    {
      id: 'par_19',
      a: 'Que tu pareja gane cinco veces más que tú y lo pague todo, pero elija siempre dónde vais y qué compráis.',
      b: 'Ganar tú mucho más y tener que rebajar todos tus planes de viajes y cenas al presupuesto ajustado de tu pareja.'
    },
    {
      id: 'par_20',
      a: 'Estar con alguien tan ahorrador que mira el precio hasta del papel higiénico, pero os asegura jubilaros a los cincuenta.',
      b: 'Estar con alguien que os hace vivir viajes y caprichos de película, pero deja la cuenta a cero cada día veinticinco.'
    },
    {
      id: 'par_21',
      a: 'Enterarte al ir a vivir juntos de que tu pareja arrastra una deuda de 12.000 € en tarjetas por caprichos pasados.',
      b: 'Que tu pareja le preste 6.000 € de vuestros ahorros comunes a un hermano suyo sin consultarte antes.'
    },
    {
      id: 'par_22',
      a: 'Que tus suegros te adoren, te traigan táperes y os regalen dinero, pero opinen sin cortarse de toda vuestra vida.',
      b: 'Que tus suegros vivan lejos y no se metan jamás en nada, pero te traten con frialdad como a un extraño.'
    },
    {
      id: 'par_23',
      a: 'Pasar todos los años quince días de agosto compartiendo apartamento en la playa con tus suegros y cuñados a gastos pagados.',
      b: 'Pasar todas las Nochebuenas, Navidades y Nocheviejas en casa de la familia de tu pareja sin poder alternar nunca.'
    },
    {
      id: 'par_24',
      a: 'Que el grupo de amigos de tu pareja sea divertidísimos, pero te líen cada fin de semana hasta acabar agotado.',
      b: 'Que los amigos de tu pareja sean tan aburridos que cada cena con ellos se te haga eterna.'
    },
    {
      id: 'par_25',
      a: 'Que tu pareja le cuente cada discusión vuestra a su madre para pedirle consejo y luego te repita lo que opina.',
      b: 'Que tu pareja comente con todo detalle vuestra vida sexual y tus manías íntimas en el grupo de sus mejores amigos.'
    },
    {
      id: 'par_26',
      a: 'Dejar tu trabajo y tu ciudad para mudarte al extranjero porque a tu pareja le han ofrecido el puesto de su vida.',
      b: 'Mantener una relación a distancia durante tres años viéndoos solo un fin de semana al mes para no renunciar a nada.'
    },
    {
      id: 'par_27',
      a: 'Casaros por todo lo alto con doscientos invitados pagado por las familias, pero aguantando que los suegros organicen toda la boda.',
      b: 'Casaros en secreto vosotros dos solos en un viaje increíble, pero provocando un enfado monumental en ambas familias durante un año.'
    },
    {
      id: 'par_28',
      a: 'Comprar juntos una casa enorme con jardín a una hora en coche de todo, dependiendo del coche hasta para el pan.',
      b: 'Vivir toda la vida en un piso de cincuenta metros cuadrados en el mejor barrio del centro de tu ciudad.'
    },
    {
      id: 'par_29',
      a: 'Montar un negocio a medias con tu pareja y pasar juntos las veinticuatro horas del día en casa y en el trabajo.',
      b: 'Tener trabajos distintos muy estables, pero con turnos tan opuestos que entre semana solo coincidáis despiertos media hora al día.'
    },
    {
      id: 'par_30',
      a: 'Que tu pareja esté siempre impecable y arreglada en casa, pero tarde hora y media en vestirse antes de salir.',
      b: 'Que esté lista en dos minutos para cualquier plan, pero en casa lleve siempre el mismo chándal viejo con agujeros.'
    },
    {
      id: 'par_31',
      a: 'Que tu pareja se adelante a escondidas viendo los capítulos de vuestra serie favorita y luego finja sorprenderse contigo.',
      b: 'Que se quede profundamente dormida a los diez minutos de cada película que ponéis y no te deje quitarla.'
    },
    {
      id: 'par_32',
      a: 'Discutir a gritos durante diez minutos soltándolo todo y estar reconciliados y haciendo el amor media hora después.',
      b: 'No levantar jamás la voz en una bronca, pero pasarse dos días enteros hablándoos con monosílabos y caras largas.'
    },
    {
      id: 'par_33',
      a: 'Que tu pareja se vuelva adicta al deporte y la comida sana e intente convencerte a diario para entrenar juntos.',
      b: 'Que tu pareja te tiente cada noche para pedir comida a domicilio y abrir una botella de vino en el sofá.'
    },
    {
      id: 'par_34',
      a: 'Que tu pareja se vaya diez días de viaje cada verano solo con sus amigos a destinos de fiesta.',
      b: 'Que no quiera viajar jamás sin ti y se apunte absolutamente a todos los planes que haces con tus amigos.'
    },
    {
      id: 'par_35',
      a: 'Que tu pareja no suba jamás ni una sola foto contigo a redes sociales y parezca soltera en su perfil.',
      b: 'Que retransmita en Instagram cada cena, viaje o regalo vuestro y se enfade si no le comentas al momento.'
    },
    {
      id: 'par_36',
      a: 'Compartir absolutamente todos los gustos y aficiones con tu pareja, pero no tener ni una sola parcela exclusiva para ti.',
      b: 'No coincidir en ningún hobby ni gusto musical o de cine, pero disfrutar de total libertad para vuestros planes propios.'
    },
    {
      id: 'par_37',
      a: 'Que tu pareja mantenga una amistad sana con su ex y queden a tomar café a solas una vez al mes.',
      b: 'Que tu pareja odie a todos sus ex, pero te pregunte con recelo por cualquier persona nueva que conozcas.'
    },
    {
      id: 'par_38',
      a: 'Que tu pareja tontee descaradamente con camareros o porteros para conseguiros copas gratis y mesas VIP cuando salís juntos.',
      b: 'Que te monte una escena de celos en mitad del bar cada vez que alguien se acerca a hablar contigo.'
    },
    {
      id: 'par_39',
      a: 'Aceptar que un millonario desconocido le pague 50.000 € a tu pareja solo por cenar con ella a solas sin tocarse.',
      b: 'Rechazar los 50.000 € por puro orgullo y seguir pagando vuestra hipoteca o alquiler euro a euro como siempre.'
    },
    {
      id: 'par_40',
      a: 'Enterarte hoy de que al principio de salir juntos tu pareja seguía viéndose con otra persona hasta decidirse por ti.',
      b: 'Enterarte de que antes de estar contigo tu pareja tuvo un rollo de una noche con uno de tus mejores amigos.'
    }
  ]
};