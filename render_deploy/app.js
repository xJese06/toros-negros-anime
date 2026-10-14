// ============================================================
// ORGANIZADOR DE ANIME - TOROS NEGROS
// Script vanilla sin módulos ES para máxima compatibilidad
// ============================================================

// --- ANIMES POR DEFECTO ---
var DEFAULT_ANIMES = [
    {
        id: 34572,
        title: "Black Clover",
        image: "Black Clover.jpg",
        synopsis: "Asta y Yuno fueron abandonados en la misma iglesia el mismo día. Criados juntos, prometieron competir para ver quién podría convertirse en el próximo Rey Mago. Pero hay un problema: Asta no tiene magia.",
        genre: "Action, Adventure, Comedy, Shonen",
        userRating: 5,
        userReview: "¡El mejor shonen! ¡Asta no se rinde nunca!",
        forumSnippet: "La animación mejora muchísimo después de los primeros arcos. ¡Totalmente recomendado!",
        addedAt: "2026-09-29T12:00:00.000Z"
    },
    {
        id: 2167,
        title: "Clannad",
        image: "Clannad.jpg",
        synopsis: "Tomoya Okazaki es un estudiante de tercer año de secundaria resentido con su vida. Un día conoce a Nagisa Furukawa, y juntos emprenden un camino que cambiará sus vidas para siempre.",
        genre: "Drama",
        userRating: 4,
        userReview: "Preparando los pañuelos... El After Story te rompe el corazón.",
        forumSnippet: "Una de las historias más hermosas y emotivas del anime. El After Story te destrozará.",
        addedAt: "2026-09-29T12:01:00.000Z"
    },
    {
        id: 11061,
        title: "Hunter x Hunter (2011)",
        image: "Hunter x Hunter.jpg",
        synopsis: "Gon Freecss aspira a convertirse en un Cazador para encontrar a su padre. En el camino conoce a Killua, Leorio y Kurapika, formando uno de los mejores grupos del anime.",
        genre: "Action, Adventure, Comedy, Shonen",
        userRating: 5,
        userReview: "El arco de las hormigas quimera es cine puro.",
        forumSnippet: "El sistema de poder (Nen) es de los mejores jamás escritos en el anime. Obra maestra.",
        addedAt: "2026-09-29T12:02:00.000Z"
    },
    {
        id: 38000,
        title: "Kimetsu no Yaiba",
        image: "Kimetsu no Yaiba.jpg",
        synopsis: "Tanjiro Kamado es un joven bondadoso que vende carbón para sostener a su familia. Un día regresa a casa y encuentra a todos muertos, víctimas de un demonio. Solo su hermana Nezuko sobrevivió, pero fue convertida en demonio. Tanjiro jura vengar a su familia y encontrar la cura para Nezuko.",
        genre: "Action",
        userRating: 5,
        userReview: "La animación de ufotable es increíble. ¡Una obra de arte visual!",
        forumSnippet: "Uno de los animes más aclamados de la era moderna. La animación del arco de Rengoku es simplemente perfecta.",
        addedAt: "2026-09-29T12:03:00.000Z"
    },
    {
        id: 52991,
        title: "Sōsō no Frieren",
        image: "Sosou no Frieren.jpg",
        synopsis: "Frieren, la maga elfa del grupo de héroes que derrotó al Rey Demonio, debe afrontar el peso de la vida eterna mientras sus compañeros envejecen y mueren. En su viaje, reflexiona sobre el tiempo, la conexión humana y el significado de los recuerdos.",
        genre: "Fantasy",
        userRating: 5,
        userReview: "Una obra maestra sobre el tiempo y la vida. Te hace pensar mucho.",
        forumSnippet: "Considerado uno de los mejores animes de la década. La narración pausada y profunda es simplemente impresionante.",
        addedAt: "2026-09-29T12:04:00.000Z"
    },
    {
        id: 52034,
        title: "Shangri-La Frontier",
        image: "Shangri-La Frontier.jpg",
        synopsis: "Rakuro Hizutome es un experto en superar juegos basura. Decide sumergirse en Shangri-La Frontier, el VRMMO más grande del mundo, con el objetivo de descubrir todos sus secretos y desafiar los límites del juego.",
        genre: "Adventure, Action",
        userRating: 5,
        userReview: "¡Los jefes son épicos! Sunraku nunca decepciona.",
        forumSnippet: "Probablemente el mejor anime de juegos desde SAO. Los combates contra los Únicos son pura adrenalina.",
        addedAt: "2026-09-29T12:05:00.000Z"
    },
    {
        id: 31592,
        title: "Hitorinoshita - The Outcast",
        image: "The Outcast.jpg",
        synopsis: "Zhang Chulan descubre que su abuelo, supuestamente muerto, es en realidad un maestro en artes ocultas. Envuelto en un mundo de habilidades sobrenaturales y peligrosas facciones, tendrá que encontrar su propio poder para sobrevivir.",
        genre: "Action",
        userRating: 5,
        userReview: "Muy buena historia. El sistema de poder es único y los personajes son geniales.",
        forumSnippet: "Anime chino (donghua) que sorprendió a todos. El desarrollo de poderes y la trama de facciones es adictiva.",
        addedAt: "2026-09-29T12:06:00.000Z"
    },
    {
        id: 1735,
        title: "Naruto Shippuden",
        image: "Naruto Shippuden.jpg",
        synopsis: "Naruto Uzumaki regresa tras años de entrenamiento con Jiraiya. Ahora más fuerte, debe enfrentarse a la Akatsuki y salvar a su amigo Sasuke, mientras el mundo ninja se encamina hacia una gran guerra.",
        genre: "Action",
        userRating: 5,
        userReview: "La guerra ninja y el arco de Pain son de los mejores momentos del anime.",
        forumSnippet: "A pesar de los fillers, los arcos principales son legendarios. Itachi y Pain son de los mejores antagonistas del anime.",
        addedAt: "2026-09-29T12:07:00.000Z"
    },
    {
        id: 454,
        title: "Elfen Lied",
        image: "Elfen Lied.jpg",
        synopsis: "Lucy es una Diclonius, una mutante con cuernos y vectores invisibles capaces de matar. Tras escapar de un laboratorio, pierde la memoria y es encontrada por dos jóvenes. Pero su pasado violento no tardará en alcanzarla.",
        genre: "Drama",
        userRating: 4,
        userReview: "Brutal, triste y hermosa a la vez. El opening es arte puro.",
        forumSnippet: "Un clásico perturbador que nadie olvida. La violencia tiene propósito narrativo y el trasfondo emocional es devastador.",
        addedAt: "2026-09-29T12:08:00.000Z"
    },
    {
        id: 4534,
        title: "Saint Seiya Omega",
        image: "Saint seiya Omega.jpg",
        synopsis: "La historia sigue a Kōga, un joven criado por Saori Kido (Atenea) tras ser rescatado en su infancia por Seiya, quien ahora es el Caballero Dorado de Sagitario. Cuando el malvado dios Marte reaparece para secuestrar a Atenea y establecer un nuevo orden mundial, Kōga despierta el poder del cosmos en su armadura de Pegaso.",
        genre: "Action",
        userRating: 5,
        userReview: "Buen anime, para empezar.",
        forumSnippet: "Saint Seiya Omega es una serie de anime derivada (spin-off) de la obra clásica Los Caballeros del Zodiaco, producida por Toei Animation.",
        addedAt: "2026-10-05T12:08:00.000Z"
    },
    {
        id: 45348,
        title: "Shingeki No Kyojin",
        image: "Snk.jpg",
        synopsis: "Ambientada en un mundo postapocalíptico donde los restos de la humanidad viven tras muros que los protegen de los gigantescos Titanes humanoides, Attack on Titan sigue al protagonista Eren Yeager, junto a sus amigos Mikasa Ackerman y Armin Arlert. Cuando un Titán Colosal atraviesa el muro de su ciudad natal, los Titanes destruyen la ciudad y devoran a la madre de Eren. Jurando venganza, Eren se une al Cuerpo de Exploración, un grupo de soldados de élite que luchan contra los Titanes.",
        genre: "Action",
        userRating: 5,
        userReview: "Buen anime, no lo he visto",
        forumSnippet: "Attack on Titan es una serie de anime japonesa de fantasía oscura basada en el manga de Hajime Isayama. La serie se estrenó el 7 de abril de 2013 y concluyó el 5 de noviembre de 2023.",
        addedAt: "2026-10-05T12:08:00.000Z"
    },
    {
        id: 60001,
        title: "Ahiru no Sora",
        image: "AHNS.jpg",
        synopsis: "Sora Kurumatani es un chico de baja estatura que sueña con jugar basketball como su madre. Al entrar al preparatorio encuentra un equipo lleno de delincuentes sin motivación. Con esfuerzo y pasión, Sora intenta cambiar al equipo y llevarlos a competir en serio.",
        genre: "Sports",
        userRating: 0,
        userReview: "",
        forumSnippet: "Uno de los mejores animes de basketball. La historia del esfuerzo de Sora a pesar de su estatura es muy motivadora.",
        addedAt: "2026-10-07T14:03:00.000Z"
    },
    {
        id: 60002,
        title: "Ace of Diamond",
        image: "AOD.jpg",
        synopsis: "Eijun Sawamura es un pitcher zurdo que llega a Seidou High School con su lanzamiento peculiar. Junto a su compañero Furuya, luchan por ganarse el puesto de pitcher as del equipo y llevar a Seidou a Koshien.",
        genre: "Sports",
        userRating: 0,
        userReview: "",
        forumSnippet: "Un clásico del anime de baseball. Repleto de momentos épicos y personajes memorables. El mejor anime de baseball.",
        addedAt: "2026-10-07T14:05:00.000Z"
    },
    {
        id: 49596,
        title: "Blue Lock",
        image: "bl.jpg",
        synopsis: "Tras la eliminación de Japón en el Mundial, la Asociación de Fútbol japonesa crea el proyecto Blue Lock: reclutar a los 300 mejores delanteros del país y enfrentarlos en una brutal competencia para forjar al mejor egoísta del mundo.",
        genre: "Sports",
        userRating: 0,
        userReview: "",
        forumSnippet: "Una perspectiva única del fútbol. El concepto del egoísmo en el deporte está brillantemente ejecutado. Cada partido es intensísimo.",
        addedAt: "2026-10-07T14:02:00.000Z"
    },
    {
        id: 55644,
        title: "Dandadan",
        image: "danda.jpg",
        synopsis: "Momo Ayase es creyente de los fantasmas pero no de los extraterrestres. Okarun cree en los aliens pero no en los fantasmas. Tras una apuesta, ambos terminan atrapados en situaciones sobrenaturales que los unirán en una aventura caótica y llena de acción.",
        genre: "Action",
        userRating: 0,
        userReview: "",
        forumSnippet: "Uno de los animes más frescos y dinámicos de los últimos años. La animación de Science SARU es una locura visual.",
        addedAt: "2026-10-07T14:07:00.000Z"
    },
    {
        id: 30,
        title: "Neon Genesis Evangelion",
        image: "evangelio.jpg",
        synopsis: "En el año 2015, la humanidad enfrenta a los Ángeles, seres de poder inmenso. Shinji Ikari es reclutado por su padre para pilotar el Eva-01, un misterioso robot biomecánico, y defender a la humanidad. Pero las batallas externas son nada comparadas con las internas.",
        genre: "Mecha",
        userRating: 0,
        userReview: "",
        forumSnippet: "Un clásico absoluto que redefinió el género mecha. El análisis psicológico de los personajes es profundísimo. Obra maestra.",
        addedAt: "2026-10-07T14:08:00.000Z"
    },
    {
        id: 13601,
        title: "Fire Force",
        image: "fireforce.jpg",
        synopsis: "En un mundo donde los humanos se convierten en llamas espontáneamente, existe la Brigada de Bomberos Especiales. Shinra Kusakabe, un joven con la habilidad de encender sus pies, se une para resolver el misterio que destruyó a su familia.",
        genre: "Action",
        userRating: 0,
        userReview: "",
        forumSnippet: "Excelente animación de David Production. El worldbuilding es único y los combates con fuego son visualmente espectaculares.",
        addedAt: "2026-10-07T14:09:00.000Z"
    },
    {
        id: 40748,
        title: "Jujutsu Kaisen",
        image: "Jujutsu_kaisen.jpg",
        synopsis: "Yuji Itadori es un estudiante de preparatoria con fuerza física extraordinaria. Tras verse involucrado con maldiciones, termina tragando el dedo de Ryomen Sukuna, el Rey de las Maldiciones, convirtiéndose en su recipiente. Ahora debe enfrentarse a un mundo oculto de hechiceros y maldiciones.",
        genre: "Action",
        userRating: 0,
        userReview: "",
        forumSnippet: "Uno de los shonens más hypeados de la última década. Gojo Satoru es quizás el personaje más icónico del anime moderno.",
        addedAt: "2026-10-07T14:03:00.000Z"
    },
    {
        id: 51179,
        title: "Mashle: Magic and Muscles",
        image: "mashle.jpg",
        synopsis: "En un mundo donde la magia lo determina todo, Mash Burnedead nació sin ella. Su solución: entrenar su cuerpo hasta niveles imposibles y resolver todo a puñetazos. Entra a la academia de magia más prestigiosa para demostrar que no necesita magia para ser el mejor.",
        genre: "Action",
        userRating: 0,
        userReview: "",
        forumSnippet: "La premisa es absurda y brillante al mismo tiempo. La parodia del género fantasía funciona perfectamente. Muy divertido.",
        addedAt: "2026-10-07T14:07:00.000Z"
    },
    {
        id: 39535,
        title: "Mushoku Tensei",
        image: "MKT.jpg",
        synopsis: "Un hombre de 34 años muere y renace en un mundo de fantasía con todas sus memorias. Decidido a no desperdiciar esta segunda oportunidad, se convierte en Rudeus Greyrat y comienza una nueva vida, aprendiendo magia y enfrentando los desafíos de este nuevo mundo.",
        genre: "Fantasy",
        userRating: 0,
        userReview: "",
        forumSnippet: "Considerado el isekai de referencia. El desarrollo del protagonista es uno de los más trabajados del género. Worldbuilding excepcional.",
        addedAt: "2026-10-07T14:06:00.000Z"
    },
    {
        id: 30276,
        title: "One Punch Man",
        image: "op.jpg",
        synopsis: "Saitama es un héroe que puede derrotar a cualquier enemigo de un solo golpe. Lejos de alegrarse, esto lo ha sumido en un profundo aburrimiento. Busca un rival que finalmente lo desafíe mientras el mundo enfrenta amenazas de clase apocalíptica.",
        genre: "Action",
        userRating: 0,
        userReview: "",
        forumSnippet: "La primera temporada es una obra maestra de la animación. La sátira del género de superhéroes es inteligente y muy entretenida.",
        addedAt: "2026-10-07T14:08:00.000Z"
    },
    {
        id: 1490,
        title: "Slam Dunk",
        image: "sld.jpg",
        synopsis: "Hanamichi Sakuragi, un delincuente sin experiencia deportiva, se une al equipo de basketball de Shohoku para impresionar a una chica. Lo que comienza como una broma se convierte en una pasión genuina mientras el equipo lucha por llegar al torneo nacional.",
        genre: "Sports",
        userRating: 0,
        userReview: "",
        forumSnippet: "Un clásico eterno del anime de deportes. La película 'The First Slam Dunk' demostró que la franquicia sigue siendo relevante décadas después.",
        addedAt: "2026-10-07T14:04:00.000Z"
    },
    {
        id: 7054,
        title: "Seikon no Qwaser",
        image: "SNQ.jpg",
        synopsis: "Alexander Nikolaevich Hero, conocido como Sasha, es un guerrero llamado Qwaser con el poder de manipular el hierro. Protege a dos chicas de una institución religiosa mientras enfrenta a otros Qwasers que buscan un ícono sagrado de inmenso poder.",
        genre: "Action",
        userRating: 0,
        userReview: "",
        forumSnippet: "Serie de acción con elementos sobrenaturales únicos. El sistema de poderes basado en elementos de la tabla periódica es original.",
        addedAt: "2026-10-07T14:09:00.000Z"
    },
    {
        id: 23755,
        title: "Vinland Saga",
        image: "VS.jpg",
        synopsis: "Thorfinn es el hijo de Thors, el mejor guerrero de los vikingos. Tras la muerte de su padre a manos del mercenario Askeladd, Thorfinn se une a su banda jurando venganza. La historia sigue su transformación de guerrero vengativo a hombre que busca la paz en una tierra sin guerra: Vinland.",
        genre: "Action",
        userRating: 0,
        userReview: "",
        forumSnippet: "Una de las obras más maduras y profundas del anime. El arco esclavo de la temporada 2 es simplemente brillante. Obra maestra de Wit Studio.",
        addedAt: "2026-10-07T14:02:00.000Z"
    },
    {
        id: 3588,
        title: "Soul Eater",
        image: "Soul_Eater_manga_volume_1.jpg",
        synopsis: "En la Escuela Vocacional de Técnicos y Armas Shinigami, los técnicos entrenan junto a sus compañeros que pueden transformarse en armas vivientes. Maka Albarn y Soul Eater luchan para convertir a Soul en una 'Guadaña de la Muerte' recolectando 99 almas humanas malvadas y 1 alma de bruja.",
        genre: "Action, Fantasy, Shonen",
        userRating: 0,
        userReview: "",
        forumSnippet: "Un clásico imprescindible con un estilo artístico único, una banda sonora increíble y peleas memorables.",
        addedAt: "2026-10-07T14:08:00.000Z"
    },
    {
        id: 120646,
        title: "Mirai Nikki",
        image: "Mirai_Nikki.jpg",
        synopsis: "Yukiteru Amano es un estudiante solitario cuyo único pasatiempo es escribir un diario en su teléfono móvil y hablar con su amigo imaginario Deus Ex Machina, el dios del tiempo y el espacio. Deus le entrega a Yukiteru un diario especial que predice el futuro, pero lo sumerge en un juego de supervivencia a muerte con otros 11 portadores de diarios.",
        genre: "Suspense, Psychological, Action",
        userRating: 0,
        userReview: "",
        forumSnippet: "Un clásico del género thriller psicológico y battle royale. Yuno Gasai es la reina yandere por excelencia del anime.",
        addedAt: "2026-10-14T18:55:30.000Z"
    },
    {
        id: 131634,
        title: "Hellsing Ultimate",
        image: "Hellsing.jpg",
        synopsis: "La Organización Hellsing, liderada por Sir Integra Fairbrook Wingates Hellsing, protege al Imperio Británico de amenazas sobrenaturales como vampiros y demonios. Su arma más poderosa es Alucard, un antiguo y sanguinario vampiro que sirve a la familia Hellsing.",
        genre: "Action, Supernatural, Horror",
        userRating: 0,
        userReview: "",
        forumSnippet: "Una obra maestra de la acción oscura y sangrienta. La animación de Madhouse y David Production es impecable y Alucard es uno de los personajes más imponentes del anime.",
        addedAt: "2026-10-14T18:55:41.000Z"
    },
    {
        id: 142537,
        title: "Fullmetal Alchemist: Brotherhood",
        image: "Fullmetal_Alchemist.jpg",
        synopsis: "Edward y Alphonse Elric sufren las consecuencias de intentar resucitar a su madre mediante la transmutación humana, violando el mayor tabú de la alquimia. Edward pierde un brazo y una pierna, y Alphonse su cuerpo completo, atado a una armadura de metal. Juntos buscan la Piedra Filosofal para recuperar sus cuerpos.",
        genre: "Action, Adventure, Fantasy, Shonen",
        userRating: 0,
        userReview: "",
        forumSnippet: "Considerado por millones como el mejor anime de todos los tiempos. La historia, el desarrollo de personajes y la coherencia del mundo son simplemente perfectos.",
        addedAt: "2026-10-14T18:55:52.000Z"
    },
    {
        id: 153437,
        title: "Shigatsu wa Kimi no Uso",
        image: "Shigatsu_wa_Kimi_no_Uso.jpg",
        synopsis: "Kousei Arima es un virtuoso pianista que tras la muerte de su madre pierde la capacidad de escuchar el sonido de su propio piano. Su vida monótona cambia radicalmente al conocer a Kaori Miyazono, una violinista enérgica y libre que lo empuja a regresar a la música y ver el mundo lleno de color.",
        genre: "Drama, Romance, Music",
        userRating: 0,
        userReview: "",
        forumSnippet: "Una de las historias más conmovedoras y hermosas del anime. La banda sonora y la animación de A-1 Pictures te tocarán el corazón hasta las lágrimas.",
        addedAt: "2026-10-14T18:56:03.000Z"
    },
    {
        id: 164333,
        title: "Tensei shitara Slime Datta Ken - Temporada 1",
        image: "Slime_T1.jpg",
        synopsis: "Satoru Mikami, un oficinista de 37 años, es apuñalado en la calle y reencarna en un mundo de fantasía como un slime llamado Rimuru Tempest. Con su habilidad única 'Depredador', absorbe poderes y crea una nación donde monstruos y humanos puedan convivir en armonía.",
        genre: "Fantasy, Adventure, Isekai, Comedy",
        userRating: 0,
        userReview: "",
        forumSnippet: "El isekai más entretenido y gratificante de ver. La construcción de la nación de monstruos y las habilidades de Rimuru son fascinantes.",
        addedAt: "2026-10-14T18:56:14.000Z"
    },
    {
        id: 175233,
        title: "Tensei shitara Slime Datta Ken - Temporada 2",
        image: "Slime_T2.jpg",
        synopsis: "La nación de la Tempestad enfrenta su mayor crisis cuando naciones humanas y un señor demonio atacan la ciudad de Rimuru. Para revivir a sus compañeros caídos y proteger a su gente, Rimuru debe dar un paso oscuro y evolucionar para convertirse en un Rey Demonio.",
        genre: "Action, Fantasy, Isekai, Drama",
        userRating: 0,
        userReview: "",
        forumSnippet: "El arco del nacimiento del Rey Demonio es uno de los momentos más épicos y satisfactorios de todo el género isekai.",
        addedAt: "2026-10-14T18:56:25.000Z"
    },
    {
        id: 186137,
        title: "Tensei shitara Slime Datta Ken - Temporada 3",
        image: "Slime_T3.jpg",
        synopsis: "Tras ascender como Rey Demonio oficial y vencer a Clayman, Rimuru debe lidiar con las repercusiones diplomáticas, el enfrentamiento contra la Iglesia Santa Occidental y la paladina Hinata Sakaguchi, culminando en la celebración del Festival de Fundación de Tempest.",
        genre: "Fantasy, Adventure, Isekai, Strategy",
        userRating: 0,
        userReview: "",
        forumSnippet: "Gran temporada enfocada en estrategia, política entre reinos y el esperado enfrentamiento con Hinata Sakaguchi.",
        addedAt: "2026-10-14T18:56:36.000Z"
    },
    {
        id: 197102,
        title: "Haikyuu!!",
        image: "Haikyuu.jpg",
        synopsis: "Shouyou Hinata, a pesar de su corta estatura, sueña con convertirse en el 'Pequeño Gigante' del voleibol. Al ingresar a la preparatoria Karasuno, se une a su antiguo rival, el prodigioso colocador Tobio Kageyama, para revivir al equipo y alcanzar el torneo nacional.",
        genre: "Sports, Comedy, Drama, Shonen",
        userRating: 0,
        userReview: "",
        forumSnippet: "El pináculo del anime de deportes moderno. La tensión de cada jugada, la música de Yuki Hayashi y el crecimiento de cada jugador es pura adrenalina.",
        addedAt: "2026-10-14T18:56:47.000Z"
    },
    {
        id: 208028,
        title: "One Piece",
        image: "One_Piece.jpg",
        synopsis: "Monkey D. Luffy, inspirado por su héroe de la infancia 'Shanks el Pelirrojo', se embarca en un viaje por el peligroso mar de Grand Line para encontrar el legendario tesoro One Piece y convertirse en el Rey de los Piratas junto a su tripulación de los Sombrero de Paja.",
        genre: "Action, Adventure, Fantasy, Shonen",
        userRating: 0,
        userReview: "",
        forumSnippet: "Una de las obras más épicas e influyentes de la historia de la humanidad. El worldbuilding, la emoción y la aventura no tienen rival.",
        addedAt: "2026-10-14T18:56:58.000Z"
    },
    {
        id: 218938,
        title: "Tate no Yuusha no Nariagari",
        image: "Tate_no_Yuusha.jpg",
        synopsis: "Naofumi Iwatani es invocado a un mundo paralelo junto a otros tres jóvenes para convertirse en los Héroes Legendarios. Equipado solo con un escudo, es traicionado, difamado y despojado de todo. Jurando venganza y autosuficiencia, entrena junto a la semihumana Raphtalia para salvar el mundo por sus propios medios.",
        genre: "Action, Adventure, Fantasy, Drama",
        userRating: 0,
        userReview: "",
        forumSnippet: "Uno de los arranques más impactantes del isekai. La evolución de Naofumi de héroe rechazado a protector implacable es muy adictiva.",
        addedAt: "2026-10-14T18:57:08.000Z"
    },
    {
        id: 229840,
        title: "Arifureta Shokugyou de Sekai Saikyou",
        image: "Arifureta.jpg",
        synopsis: "Hajime Nagumo y sus compañeros de clase son transportados a un mundo de fantasía. Siendo el más débil con habilidades básicas de artesano, es traicionado y arrojado al abismo de un calabozo letal. Tras luchar por su supervivencia al borde de la locura, renace como un guerrero frío y letal.",
        genre: "Action, Fantasy, Adventure, Isekai",
        userRating: 0,
        userReview: "",
        forumSnippet: "Muy popular por su protagonista badass que no duda en usar armas de fuego mágicas y aplastar a sus enemigos sin piedad.",
        addedAt: "2026-10-14T18:57:19.000Z"
    },
    {
        id: 240878,
        title: "Gachiakuta",
        image: "Gachiakuta.jpg",
        synopsis: "En una ciudad flotante donde los criminales y la basura son arrojados al Abismo, el joven Rudo es falsamente acusado del asesinato de su padre adoptivo y lanzado al basurero infinito. Allí despierta una habilidad especial para dar vida y poder a los objetos considerados 'basura' para abrirse paso de regreso y vengarse.",
        genre: "Action, Supernatural, Shonen, Fantasy",
        userRating: 0,
        userReview: "",
        forumSnippet: "Uno de los mangas más prometedores y estilizados de la nueva era de Studio Bones, con una estética urbana y un sistema de poder visualmente espectacular.",
        addedAt: "2026-10-14T18:57:30.000Z"
    },
    {
        id: 251805,
        title: "Btooom!",
        image: "Btooom.jpg",
        synopsis: "Ryouta Sakamoto es el mejor jugador japonés del videojuego de combate Btooom! Un día despierta en una isla tropical desierta con un cristal incrustado en su mano y una bolsa de bombas reales, obligado a participar en una versión a vida o muerte del juego contra otros humanos.",
        genre: "Action, Sci-Fi, Psychological, Suspense",
        userRating: 0,
        userReview: "",
        forumSnippet: "Un battle royale frenético con un concepto original de bombas BIM con distintos efectos tácticos. Cada enfrentamiento es pura tensión.",
        addedAt: "2026-10-14T18:57:41.000Z"
    },
    {
        id: 262715,
        title: "Bleach",
        image: "Bleach.png",
        synopsis: "Ichigo Kurosaki es un estudiante de preparatoria con la capacidad de ver fantasmas. Cuando su familia es atacada por un Hollow, un espíritu corrupto, la Shinigami Rukia Kuchiki le transfiere sus poderes para salvarlos, convirtiendo a Ichigo en un Shinigami Sustituto encargado de proteger a los vivos y guiar a las almas a la Sociedad de Almas.",
        genre: "Action, Supernatural, Shonen",
        userRating: 0,
        userReview: "",
        forumSnippet: "Parte del 'Big Three' histórico del anime. El diseño de personajes de Tite Kubo, las transformaciones Bankai y la música de Shiro Sagisu son legendarias.",
        addedAt: "2026-10-14T18:57:52.000Z"
    }
];

// --- ESTADO ---
var myAnimeList = [];
var selectedAnime = null;
var currentRating = 0;
var STORAGE_KEY = 'animeList_toros_negros_v7';

// --- ELEMENTOS DOM ---
var searchInput   = document.getElementById('search-input');
var searchBtn     = document.getElementById('search-btn');
var searchResults = document.getElementById('search-results');
var animesContainer = document.getElementById('animes-container');
var totalCount    = document.getElementById('total-count');
var shareBtn      = document.getElementById('share-btn');
var modal         = document.getElementById('review-modal');
var closeModalBtn = document.getElementById('close-modal');
var saveAnimeBtn  = document.getElementById('save-anime');
var stars         = document.querySelectorAll('#star-rating i');
var modalTitle    = document.getElementById('modal-anime-title');
var modalReview   = document.getElementById('modal-review');

// --- MODAL DETALLE ---
var detailModal          = document.getElementById('detail-modal');
var detailImage          = document.getElementById('detail-image');
var detailTitle          = document.getElementById('detail-title');
var detailGenreBadges    = document.getElementById('detail-genre-badges');
var detailGenreInput     = document.getElementById('detail-genre-input');
var detailGenreQuickTags = document.getElementById('detail-genre-quick-tags');
var detailStars          = document.getElementById('detail-stars').querySelectorAll('i');
var detailSynopsis       = document.getElementById('detail-synopsis');
var detailReview         = document.getElementById('detail-review');
var detailForum          = document.getElementById('detail-forum');
var closeDetailBtn       = document.getElementById('close-detail');
var deleteAnimeBtn       = document.getElementById('delete-anime');
var saveDetailBtn        = document.getElementById('save-detail');
var currentDetailId      = null;
var currentDetailRating  = 0;

var POPULAR_GENRES = [
    'Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror',
    'Mecha', 'Misterio', 'Romance', 'Sci-Fi', 'Shonen', 'Sports',
    'Supernatural', 'Slice of Life', 'Isekai'
];

function toggleGenreInInput(inputEl, genreName) {
    if (!inputEl) return;
    var raw = inputEl.value || '';
    var list = raw.split(',').map(function(s){ return s.trim(); }).filter(Boolean);
    var lowerList = list.map(function(s){ return s.toLowerCase(); });
    var idx = lowerList.indexOf(genreName.toLowerCase());
    if (idx !== -1) {
        list.splice(idx, 1);
    } else {
        list.push(genreName);
    }
    inputEl.value = list.join(', ');
}

function renderDetailBadges(genreStr) {
    if (!detailGenreBadges) return;
    detailGenreBadges.innerHTML = '';
    var list = (genreStr || 'Otros').split(',').map(function(s){ return s.trim(); }).filter(Boolean);
    if (list.length === 0) list = ['Otros'];
    list.forEach(function(g) {
        var badge = document.createElement('span');
        badge.className = 'bg-yellow-500/95 text-black font-extrabold text-[11px] px-2.5 py-0.5 rounded-full shadow border border-yellow-300';
        badge.textContent = g;
        detailGenreBadges.appendChild(badge);
    });
}

function renderDetailQuickTags() {
    if (!detailGenreQuickTags || !detailGenreInput) return;
    detailGenreQuickTags.innerHTML = '';
    var currentTags = (detailGenreInput.value || '').split(',').map(function(s){ return s.trim().toLowerCase(); }).filter(Boolean);

    POPULAR_GENRES.forEach(function(g) {
        var isSelected = currentTags.indexOf(g.toLowerCase()) !== -1;
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'text-xs px-2.5 py-1 rounded-full font-semibold transition border cursor-pointer ' +
            (isSelected
                ? 'bg-yellow-500 text-black border-yellow-300 font-bold shadow'
                : 'bg-gray-700 hover:bg-gray-600 text-gray-300 border-gray-600');
        btn.textContent = (isSelected ? '✓ ' : '+ ') + g;
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            toggleGenreInInput(detailGenreInput, g);
            renderDetailBadges(detailGenreInput.value);
            renderDetailQuickTags();
        });
        detailGenreQuickTags.appendChild(btn);
    });
}

if (detailGenreInput) {
    detailGenreInput.addEventListener('input', function() {
        renderDetailBadges(this.value);
        renderDetailQuickTags();
    });
}

// Hacer las estrellas del modal de detalle interactivas
detailStars.forEach(function(star) {
    star.addEventListener('click', function() {
        currentDetailRating = parseInt(this.getAttribute('data-val'));
        updateDetailStars(currentDetailRating);
    });
    star.addEventListener('mouseover', function() {
        updateDetailStars(parseInt(this.getAttribute('data-val')));
    });
    star.addEventListener('mouseout', function() {
        updateDetailStars(currentDetailRating);
    });
});

function updateDetailStars(rating) {
    detailStars.forEach(function(star) {
        var val = parseInt(star.getAttribute('data-val'));
        star.style.color = val <= rating ? '#EAB308' : '#4B5563';
    });
}

function openDetailModal(anime) {
    currentDetailId = anime.id;
    currentDetailRating = anime.userRating || 0;

    detailImage.onerror = function() { this.src = 'icon.png'; };
    detailImage.src = anime.image;
    detailImage.alt = anime.title;
    detailTitle.textContent = anime.title;
    if (detailGenreInput) detailGenreInput.value = anime.genre || 'Action';
    renderDetailBadges(anime.genre);
    renderDetailQuickTags();

    detailSynopsis.textContent = anime.synopsis || 'Sin sinopsis disponible.';
    detailForum.textContent = '"' + (anime.forumSnippet || '') + '"';
    detailReview.value = anime.userReview || '';

    updateDetailStars(currentDetailRating);
    detailModal.classList.remove('hidden');
}

closeDetailBtn.addEventListener('click', function() {
    detailModal.classList.add('hidden');
    currentDetailId = null;
});

detailModal.addEventListener('click', function(e) {
    if (e.target === detailModal) {
        detailModal.classList.add('hidden');
        currentDetailId = null;
    }
});

// Guardar cambios (estrellas + reseña + géneros)
saveDetailBtn.addEventListener('click', function() {
    if (currentDetailId === null) return;
    var newGenres = detailGenreInput ? detailGenreInput.value.trim() : '';
    if (!newGenres) newGenres = 'Otros';

    myAnimeList = myAnimeList.map(function(a) {
        if (a.id === currentDetailId) {
            a.userRating = currentDetailRating;
            a.userReview = detailReview.value.trim();
            a.genre = newGenres;
        }
        return a;
    });
    saveList();
    renderList();
    detailModal.classList.add('hidden');
    currentDetailId = null;
});

deleteAnimeBtn.addEventListener('click', function() {
    if (currentDetailId === null) return;
    if (!confirm('¿Eliminar este anime de tu lista?')) return;
    myAnimeList = myAnimeList.filter(function(a) { return a.id !== currentDetailId; });
    saveList();
    renderList();
    detailModal.classList.add('hidden');
    currentDetailId = null;
});

// --- MODAL AGREGAR MANUALMENTE ---
var openManualBtn        = document.getElementById('open-manual-btn');
var manualModal          = document.getElementById('manual-modal');
var closeManualBtn       = document.getElementById('close-manual');
var saveManualBtn        = document.getElementById('save-manual');
var manualTitle          = document.getElementById('manual-title');
var manualGenre          = document.getElementById('manual-genre');
var manualGenreQuickTags = document.getElementById('manual-genre-quick-tags');
var manualImageFile      = document.getElementById('manual-image-file');
var manualImageUrl       = document.getElementById('manual-image-url');
var manualStars          = document.querySelectorAll('#manual-stars i');
var manualSynopsis       = document.getElementById('manual-synopsis');
var manualReview         = document.getElementById('manual-review');
var manualForum          = document.getElementById('manual-forum');
var currentManualRating  = 5;

function renderManualQuickTags() {
    if (!manualGenreQuickTags || !manualGenre) return;
    manualGenreQuickTags.innerHTML = '';
    var currentTags = (manualGenre.value || '').split(',').map(function(s){ return s.trim().toLowerCase(); }).filter(Boolean);

    POPULAR_GENRES.forEach(function(g) {
        var isSelected = currentTags.indexOf(g.toLowerCase()) !== -1;
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'text-xs px-2.5 py-1 rounded-full font-semibold transition border cursor-pointer ' +
            (isSelected
                ? 'bg-yellow-500 text-black border-yellow-300 font-bold shadow'
                : 'bg-gray-700 hover:bg-gray-600 text-gray-300 border-gray-600');
        btn.textContent = (isSelected ? '✓ ' : '+ ') + g;
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            toggleGenreInInput(manualGenre, g);
            renderManualQuickTags();
        });
        manualGenreQuickTags.appendChild(btn);
    });
}

if (manualGenre) {
    manualGenre.addEventListener('input', function() {
        renderManualQuickTags();
    });
}

// Manejo de estrellas para modal manual
manualStars.forEach(function(star) {
    star.addEventListener('click', function() {
        currentManualRating = parseInt(this.getAttribute('data-val'));
        updateManualStars(currentManualRating);
    });
    star.addEventListener('mouseover', function() {
        updateManualStars(parseInt(this.getAttribute('data-val')));
    });
    star.addEventListener('mouseout', function() {
        updateManualStars(currentManualRating);
    });
});

function updateManualStars(rating) {
    manualStars.forEach(function(star) {
        var val = parseInt(star.getAttribute('data-val'));
        star.style.color = val <= rating ? '#EAB308' : '#4B5563';
    });
}

if (openManualBtn) {
    openManualBtn.addEventListener('click', function() {
        manualTitle.value = '';
        manualImageFile.value = '';
        manualImageUrl.value = '';
        manualSynopsis.value = '';
        manualReview.value = '';
        manualForum.value = '';
        manualGenre.value = 'Action';
        currentManualRating = 5;
        updateManualStars(5);
        renderManualQuickTags();
        manualModal.classList.remove('hidden');
    });
}

if (closeManualBtn) {
    closeManualBtn.addEventListener('click', function() {
        manualModal.classList.add('hidden');
    });
}

if (manualModal) {
    manualModal.addEventListener('click', function(e) {
        if (e.target === manualModal) {
            manualModal.classList.add('hidden');
        }
    });
}

if (saveManualBtn) {
    saveManualBtn.addEventListener('click', function() {
        var title = manualTitle.value.trim();
        if (!title) {
            alert('Por favor, escribe el título del anime.');
            return;
        }

        var genre = manualGenre.value.trim() || 'Otros';
        var synopsis = manualSynopsis.value.trim() || 'Sin sinopsis disponible.';
        var userReview = manualReview.value.trim();
        var forumSnippet = manualForum.value.trim() || 'Agregado manualmente por el usuario.';

        function guardarAnime(imgSrc) {
            var nuevoAnime = {
                id: Date.now(),
                title: title,
                image: imgSrc || 'icon.png',
                synopsis: synopsis,
                genre: genre,
                userRating: currentManualRating,
                userReview: userReview,
                forumSnippet: forumSnippet,
                addedAt: new Date().toISOString()
            };

            myAnimeList.push(nuevoAnime);
            saveList();
            renderList();
            manualModal.classList.add('hidden');
            alert('¡Anime "' + title + '" agregado a tu lista con éxito!');
        }

        if (manualImageFile.files && manualImageFile.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                guardarAnime(e.target.result);
            };
            reader.readAsDataURL(manualImageFile.files[0]);
        } else {
            var urlText = manualImageUrl.value.trim();
            guardarAnime(urlText || 'icon.png');
        }
    });
}

// --- MODAL CELULAR / API ---
var mobileApiBtn     = document.getElementById('mobile-api-btn');
var mobileModal      = document.getElementById('mobile-modal');
var closeMobileModal = document.getElementById('close-mobile-modal');
var closeMobileBtn2  = document.getElementById('close-mobile-btn-2');
var mobileUrlLink    = document.getElementById('mobile-url-link');
var mobileLocalUrl   = document.getElementById('mobile-local-url');
var mobileQrImg      = document.getElementById('mobile-qr-img');

function openMobileModal() {
    if (!mobileModal) return;
    mobileModal.classList.remove('hidden');

    fetch('/api/ip')
        .then(function(r){ return r.json(); })
        .then(function(data){
            var publicUrl = data.public_url || data.url || 'https://mode-breakfast-prohibited-california.trycloudflare.com';
            var localUrl = data.local_url || ('http://' + data.ip + ':' + data.port);

            mobileUrlLink.href = publicUrl;
            mobileUrlLink.textContent = publicUrl;
            if (mobileLocalUrl) mobileLocalUrl.textContent = localUrl;
            mobileQrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=' + encodeURIComponent(publicUrl);
        })
        ['catch'](function(){
            var publicUrl = 'https://mode-breakfast-prohibited-california.trycloudflare.com';
            mobileUrlLink.href = publicUrl;
            mobileUrlLink.textContent = publicUrl;
            if (mobileLocalUrl) mobileLocalUrl.textContent = 'http://10.16.205.120:8080';
            mobileQrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=' + encodeURIComponent(publicUrl);
        });
}

if (mobileApiBtn)     mobileApiBtn.addEventListener('click', openMobileModal);
if (closeMobileModal) closeMobileModal.addEventListener('click', function(){ mobileModal.classList.add('hidden'); });
if (closeMobileBtn2)  closeMobileBtn2.addEventListener('click', function(){ mobileModal.classList.add('hidden'); });
if (mobileModal) {
    mobileModal.addEventListener('click', function(e){
        if (e.target === mobileModal) mobileModal.classList.add('hidden');
    });
}

// --- ESTADO DE SINCRONIZACIÓN ---
var syncIndicator = document.getElementById('sync-indicator');
var syncIcon      = document.getElementById('sync-icon');
var syncText      = document.getElementById('sync-text');

function updateSyncStatus(status) {
    if (!syncIndicator) return;
    syncIndicator.classList.remove('hidden');
    if (status === 'syncing') {
        syncIndicator.className = 'hidden sm:flex items-center text-xs font-semibold px-2.5 py-1.5 rounded-full bg-yellow-950/80 border border-yellow-500/40 text-yellow-400';
        if (syncIcon) syncIcon.className = 'fas fa-spinner fa-spin mr-1.5';
        if (syncText) syncText.textContent = 'Guardando...';
    } else if (status === true) {
        syncIndicator.className = 'hidden sm:flex items-center text-xs font-semibold px-2.5 py-1.5 rounded-full bg-green-950/80 border border-green-500/40 text-green-400';
        if (syncIcon) syncIcon.className = 'fas fa-check-circle mr-1.5';
        if (syncText) syncText.textContent = 'Sincronizado';
    } else {
        syncIndicator.className = 'hidden sm:flex items-center text-xs font-semibold px-2.5 py-1.5 rounded-full bg-gray-800 border border-gray-600 text-gray-400';
        if (syncIcon) syncIcon.className = 'fas fa-cloud mr-1.5';
        if (syncText) syncText.textContent = 'Sin conexión';
    }
}

// --- CARGAR LISTA ---
function loadList() {
    // 1. Mostrar primero desde localStorage para rapidez inmediata
    var localCached = loadFromLocalStorage();
    if (localCached && localCached.length > 0) {
        myAnimeList = localCached;
        renderList();
    }

    // 2. Consultar el servidor central (animes_data.json) que es la fuente de la verdad
    fetch('/api/animes')
        .then(function(r){ return r.json(); })
        .then(function(serverAnimes){
            if (Array.isArray(serverAnimes) && serverAnimes.length > 0) {
                myAnimeList = serverAnimes;
                try { localStorage.setItem(STORAGE_KEY, JSON.stringify(myAnimeList)); } catch(e){}
                renderList();
                updateSyncStatus(true);
            } else if (!myAnimeList || myAnimeList.length === 0) {
                initDefaults();
            }
        })
        ['catch'](function(){
            if (!myAnimeList || myAnimeList.length === 0) {
                initDefaults();
            }
            updateSyncStatus(false);
        });
}

function loadFromLocalStorage() {
    try {
        var saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            var parsed = JSON.parse(saved);
            if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        }
    } catch(e) {}

    var oldKeys = [
        'animeList_toros_negros_v6',
        'animeList_toros_negros_v5',
        'animeList_toros_negros_v4',
        'animeList_toros_negros_v3',
        'animeList_toros_negros_v2',
        'animeList_toros_negros_v1'
    ];
    for (var k = 0; k < oldKeys.length; k++) {
        try {
            var old = localStorage.getItem(oldKeys[k]);
            if (old) {
                var oldParsed = JSON.parse(old);
                if (Array.isArray(oldParsed) && oldParsed.length > 0) return oldParsed;
            }
        } catch(e2) {}
    }
    return null;
}

function initDefaults() {
    myAnimeList = JSON.parse(JSON.stringify(DEFAULT_ANIMES));
    saveList();
    renderList();
}

function saveList() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(myAnimeList));
    } catch(e) {}

    updateSyncStatus('syncing');
    fetch('/api/animes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(myAnimeList)
    })
    .then(function(r){ return r.json(); })
    .then(function(){
        updateSyncStatus(true);
    })
    ['catch'](function(){
        updateSyncStatus(false);
    });
}

// --- SINCRONIZACIÓN AUTOMÁTICA EN TIEMPO REAL (Celular <-> Computadora) ---
var isSyncing = false;
function syncWithServer() {
    if (detailModal && !detailModal.classList.contains('hidden')) return;
    if (manualModal && !manualModal.classList.contains('hidden')) return;
    if (isSyncing) return;

    isSyncing = true;
    fetch('/api/animes')
        .then(function(r){ return r.json(); })
        .then(function(serverAnimes){
            isSyncing = false;
            if (Array.isArray(serverAnimes) && serverAnimes.length > 0) {
                var serverStr = JSON.stringify(serverAnimes);
                var currentStr = JSON.stringify(myAnimeList);
                if (serverStr !== currentStr) {
                    myAnimeList = serverAnimes;
                    try { localStorage.setItem(STORAGE_KEY, serverStr); } catch(e){}
                    renderList();
                    updateSyncStatus(true);
                }
            }
        })
        ['catch'](function(){
            isSyncing = false;
        });
}

// Polling cada 3 segundos
setInterval(syncWithServer, 3000);
// Al recuperar foco en la ventana
window.addEventListener('focus', syncWithServer);

// --- BÚSQUEDA (JIKAN API) ---
searchBtn.addEventListener('click', function() {
    var q = searchInput.value.trim();
    if (!q) return;
    searchBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    searchResults.innerHTML = '';
    searchResults.classList.remove('hidden');

    fetch('https://api.jikan.moe/v4/anime?q=' + encodeURIComponent(q) + '&limit=6')
        .then(function(r){ return r.json(); })
        .then(function(data) {
            searchBtn.innerHTML = 'Buscar';
            if (!data.data || data.data.length === 0) {
                searchResults.innerHTML = '<p class="text-gray-400 col-span-2">No se encontraron resultados.</p>';
                return;
            }
            data.data.forEach(function(anime) {
                var card = document.createElement('div');
                card.className = 'bg-gray-700 p-4 rounded-lg flex space-x-4 items-start anime-card';
                card.innerHTML =
                    '<img src="' + anime.images.jpg.image_url + '" alt="' + anime.title + '" class="w-20 h-28 object-cover rounded">' +
                    '<div class="flex-1">' +
                        '<h3 class="font-bold text-lg text-yellow-400 line-clamp-1">' + anime.title + '</h3>' +
                        '<p class="text-xs text-gray-300 line-clamp-2 mt-1 mb-2">' + (anime.synopsis || 'Sin sinopsis disponible.') + '</p>' +
                        '<button class="bg-yellow-600 hover:bg-yellow-700 text-black text-sm px-3 py-1 rounded font-bold add-btn">Agregar a mi lista</button>' +
                    '</div>';
                card.querySelector('.add-btn').addEventListener('click', function(){ openModal(anime); });
                searchResults.appendChild(card);
            });
        })
        ['catch'](function() {
            searchBtn.innerHTML = 'Buscar';
            searchResults.innerHTML = '<p class="text-red-400 col-span-2">Error al buscar. Verifica tu conexión.</p>';
        });
});

// Buscar también al presionar Enter
searchInput.addEventListener('keydown', function(e){
    if (e.key === 'Enter') searchBtn.click();
});

// --- MODAL ---
function openModal(anime) {
    selectedAnime = anime;
    modalTitle.textContent = 'Calificar: ' + anime.title;
    modalReview.value = '';
    currentRating = 0;
    updateStars();
    modal.classList.remove('hidden');
}

closeModalBtn.addEventListener('click', function(){
    modal.classList.add('hidden');
    selectedAnime = null;
});

stars.forEach(function(star) {
    star.addEventListener('click', function(){
        currentRating = parseInt(this.getAttribute('data-value'));
        updateStars();
    });
});

function updateStars() {
    stars.forEach(function(star) {
        var val = parseInt(star.getAttribute('data-value'));
        if (val <= currentRating) {
            star.style.color = '#EAB308';
        } else {
            star.style.color = '#4B5563';
        }
    });
}

// --- GUARDAR ANIME ---
saveAnimeBtn.addEventListener('click', function() {
    if (!selectedAnime) return;
    saveAnimeBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Guardando...';
    saveAnimeBtn.disabled = true;

    var genre = (selectedAnime.genres && selectedAnime.genres.length > 0)
        ? selectedAnime.genres[0].name
        : 'Otros';

    // Intentar obtener reseña del foro, con timeout de 5 segundos
    var forumPromise = fetch('https://api.jikan.moe/v4/anime/' + selectedAnime.mal_id + '/reviews')
        .then(function(r){ return r.json(); })
        .then(function(data){
            if (data.data && data.data.length > 0) {
                return data.data[0].review.substring(0, 150) + '...';
            }
            return 'La comunidad aún no tiene muchas reseñas sobre este anime.';
        })
        ['catch'](function(){ return 'No se pudo cargar la reseña del foro.'; });

    var timeoutPromise = new Promise(function(resolve){
        setTimeout(function(){ resolve('La comunidad aún no tiene muchas reseñas sobre este anime.'); }, 5000);
    });

    Promise.race([forumPromise, timeoutPromise]).then(function(forumSnippet) {
        var newAnime = {
            id: selectedAnime.mal_id,
            title: selectedAnime.title,
            image: selectedAnime.images.jpg.image_url,
            synopsis: selectedAnime.synopsis || 'Sin sinopsis.',
            genre: genre,
            userRating: currentRating,
            userReview: modalReview.value.trim(),
            forumSnippet: forumSnippet,
            addedAt: new Date().toISOString()
        };

        myAnimeList.push(newAnime);
        saveList();
        renderList();

        modal.classList.add('hidden');
        saveAnimeBtn.innerHTML = 'Guardar en Lista';
        saveAnimeBtn.disabled = false;
        searchInput.value = '';
        searchResults.innerHTML = '';
        searchResults.classList.add('hidden');
        selectedAnime = null;
    });
});

// --- RENDERIZAR LISTA ---
function renderList() {
    animesContainer.innerHTML = '';
    totalCount.textContent = myAnimeList.length + ' animes';

    if (myAnimeList.length === 0) {
        animesContainer.innerHTML = '<p class="text-gray-500 text-center py-10">¡Busca un anime arriba para agregar a tu lista!</p>';
        return;
    }

    // Agrupar por género: si un anime tiene varios géneros, se muestra en cada categoría correspondiente
    var grouped = {};
    myAnimeList.forEach(function(anime) {
        var rawGenres = (anime.genre || 'Otros').split(',');
        var cleanGenres = [];
        rawGenres.forEach(function(g) {
            var trimmed = g.trim();
            if (trimmed) cleanGenres.push(trimmed);
        });
        if (cleanGenres.length === 0) cleanGenres.push('Otros');

        cleanGenres.forEach(function(g) {
            if (!grouped[g]) grouped[g] = [];
            grouped[g].push(anime);
        });
    });

    var iconMap = {
        'Action': 'fa-fire', 'Accion': 'fa-fire', 'Acción': 'fa-fire',
        'Adventure': 'fa-compass', 'Aventura': 'fa-compass',
        'Comedy': 'fa-laugh-squint', 'Comedia': 'fa-laugh-squint',
        'Drama': 'fa-theater-masks',
        'Fantasy': 'fa-dragon', 'Fantasía': 'fa-dragon',
        'Horror': 'fa-skull', 'Terror': 'fa-skull',
        'Mecha': 'fa-robot',
        'Romance': 'fa-heart',
        'Sci-Fi': 'fa-rocket', 'Ciencia Ficción': 'fa-rocket',
        'Shonen': 'fa-fist-raised',
        'Sports': 'fa-futbol', 'Deportes': 'fa-futbol',
        'Mystery': 'fa-search', 'Misterio': 'fa-search',
        'Supernatural': 'fa-hat-wizard', 'Sobrenatural': 'fa-hat-wizard',
        'Slice of Life': 'fa-leaf',
        'Isekai': 'fa-door-open',
        'Otros': 'fa-tv'
    };

    var sortedGenres = Object.keys(grouped).sort();

    sortedGenres.forEach(function(genre) {
        var animes = grouped[genre];
        var icon = iconMap[genre] || 'fa-tv';

        var section = document.createElement('div');
        section.className = 'mb-8';
        section.innerHTML =
            '<h3 class="text-2xl font-bold mb-4 text-white flex items-center border-b border-gray-700 pb-2">' +
                '<i class="fas ' + icon + ' text-yellow-500 mr-3"></i> ' + genre +
                ' <span class="ml-2 text-sm text-gray-400 font-normal">(' + animes.length + ')</span>' +
            '</h3>' +
            '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 anime-grid"></div>';

        var grid = section.querySelector('.anime-grid');

        animes.forEach(function(anime) {
            var starsHtml = '';
            for (var i = 1; i <= 5; i++) {
                starsHtml += '<i class="' + (i <= anime.userRating ? 'fas text-yellow-500' : 'far text-gray-600') + ' fa-star text-sm"></i>';
            }

            var genreBadgesHtml = '';
            var cardGenres = (anime.genre || 'Otros').split(',').map(function(s){ return s.trim(); }).filter(Boolean);
            cardGenres.forEach(function(cg) {
                genreBadgesHtml += '<span class="bg-gray-900/90 text-yellow-300 text-[10px] font-bold px-1.5 py-0.5 rounded border border-yellow-500/40 shadow">' + cg + '</span>';
            });

            var card = document.createElement('div');
            card.className = 'bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 flex flex-col anime-card cursor-pointer hover:border-yellow-500 transition';
            card.innerHTML =
                '<div class="relative h-48">' +
                    '<img src="' + anime.image + '" alt="' + anime.title + '" class="w-full h-full object-cover" onerror="this.onerror=null; this.src=\'icon.png\';">' +
                    '<div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>' +
                    '<div class="absolute bottom-2 left-2 flex space-x-1 bg-black bg-opacity-70 px-2 py-1 rounded">' +
                        starsHtml +
                    '</div>' +
                    '<div class="absolute top-2 right-2 flex flex-wrap gap-1 max-w-[70%] justify-end">' +
                        genreBadgesHtml +
                    '</div>' +
                '</div>' +
                '<div class="p-4 flex-1 flex flex-col">' +
                    '<h4 class="font-bold text-lg text-yellow-400 mb-1 leading-tight">' + anime.title + '</h4>' +
                    '<p class="text-xs text-gray-400 mb-3 line-clamp-2 italic">"' + (anime.synopsis || '') + '"</p>' +
                    (anime.userReview
                        ? '<div class="bg-gray-700 p-2 rounded mb-2"><span class="text-xs text-gray-300 font-bold block mb-1"><i class="fas fa-comment-dots text-yellow-500"></i> Tu reseña:</span><p class="text-sm text-white italic line-clamp-1">"' + anime.userReview + '"</p></div>'
                        : '') +
                    '<div class="mt-auto pt-2 border-t border-gray-700 flex items-center justify-center text-yellow-500 text-xs font-bold">' +
                        '<i class="fas fa-edit mr-1"></i> Ver / Editar info y géneros' +
                    '</div>' +
                '</div>';

            card.addEventListener('click', function() {
                openDetailModal(anime);
            });

            grid.appendChild(card);
        });

        animesContainer.appendChild(section);
    });
}

// --- COMPARTIR ---
shareBtn.addEventListener('click', function() {
    var text = '🎌 Mi lista de animes vistos:\n\n';
    myAnimeList.forEach(function(a) {
        var stars = '⭐'.repeat(a.userRating);
        text += '• ' + a.title + ' ' + stars + '\n';
        if (a.userReview) text += '  "' + a.userReview + '"\n';
    });
    text += '\n¡Generado con Toros Negros Anime Tracker!';

    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(function(){
            alert('¡Lista copiada al portapapeles! Puedes pegarla donde quieras.');
        })['catch'](function(){
            prompt('Copia este texto:', text);
        });
    } else {
        prompt('Copia este texto:', text);
    }
});

// --- INICIAR ---
loadList();
