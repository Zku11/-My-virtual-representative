function GetDialogLine(lineIdentifier){
    switch(lineIdentifier){
        case "presentationA":
            return PresentationLineA();
        case "InEnglishPlease":
            return InEnglishPleaseLine();
        case "InSpanish":
            return InSpanishPleaseLine();
        case "initial": 
            return InitialLine();
        case "InitialVisitor":
            return InitialVisitorLine();
        case "screenShot":
            return ScreenShoot();
        //------Training---------
        case "trainingQuestion":
            return TrainingQuestion();
        case "trainingA":
            return TrainingLineA();
        case "trainingB":
            return TrainingLineB();
        case "trainingC":
            return TrainingLineC();
        case "trainingD":
            return TrainingLineD();
        case "trainingE":
            return TrainingLineE();
        case "trainingF":
            return TrainingLineF();
        //------Siglo21----------
        case "siglo21Question":
            return Siglo21QuestionLine();
        case "siglo21LineA":
            return Siglo21LineA();
        case "siglo21LineB":
            return Siglo21LineB();
        case "siglo21LineC":
            return Siglo21LineC();
        case "siglo21LineD":
            return Siglo21LineD();
        case "siglo21LineE":
            return Siglo21LineE();
        case "siglo21LineF":
            return Siglo21LineF();
        //-------Issd-------
        case "issdQuestion":
            return IssdQuestion();
        case "issdLineA":
            return IssdLineA();
        case "issdLineB":
            return IssdLineB();
        case "issdLineC":
            return IssdLineC();
        case "issdLineD":
            return IssdLineD();
        case "issdLineE":
            return IssdLineE();
        //------Codo a Codo-----
        case "codoAcodoQuestion":
            return CodoAcodoQuestion();
        case "codoAcodoA":
            return CodoAcodoLineA();
        case "codoAcodoB":
            return CodoAcodoLineB();
        //----------Back-------------------
        case "goBack":
            return GoBackLine();
        case "goToInit":
            return GoBackToInitLine();
        //---------Specialty----------
        case "specialtyQuestion":
            return SpecialtyQuestionLine();
        case "specialtyA":
            return SpecialtyLineA();
        case "specialtyB":
            return SpecialtyLineB();
        case "specialtyC":
            return SpecialtyLineC();
        case "specialtyD":
            return SpecialtyLineD();
        case "specialtyE":
            return SpecialtyLineE();
        //---------Experience------------
        case "jobExperienceQuestion":
            return JobExperienceQuestionLine();
        case "jobExperienceA":
            return JobExperienceLineA();
        case "jobExperienceB":
            return JobExperienceLineB();
        case "jobExperienceC":
            return JobExperienceLineC();
        case "jobExperienceD":
            return JobExperienceLineD();
        case "jobExperienceE":
            return JobExperienceLineE();
        //--------Independent-----------
        case "independentQuestion":
            return IndependentQuestion();
        case "IndependentLineA":
            return IndependentLineA();
        case "IndependentLineB":
            return IndependentLineB();
        case "IndependentLineC":
            return IndependentLineC();
        //------La anonima----------
        case "laAnonimaQuestion":
            return LaAnonimaQuestion();
        case "laAnonimaA":
            return LaAnonimaLineA();
        case "laAnonimaB":
            return LaAnonimaLineB();
        case "laAnonimaC":
            return LaAnonimaLineC();
        //-------Livemedia----------
        case "LivemediaQuestion":
            return LivemediaQuestion();
        case "LivemediaA":
            return LivemediaLineA();
        case "LivemediaB":
            return LivemediaLineB();
        case "LivemediaC":
            return LivemediaLineC();
        //-------Skills----------
        case "oopProgramming":
            return OopProgrammingLine();
        case "elecytricitySkill":
            return ElectricityLine();
        case "ElectronicsSkill":
            return ElectronicsLine();
        //--------Portfolio----------
        case "portfolioQuestion":
            return PortfolioQuestion();
        case "portfolioAnswer":
            return PortfolioAnswer();
        case "gamesQuestion":
            return VideoGamesQuestion();
        case "androidAppsQuestion":
            return AndroidAppsQuestion();
        case "webAppsQuestion":
            return WebAppsQuestion();
        case "gamesPortfolio":
            return GamesLineA();
        case "androidAppA":
            return AndroidAppsLineA();
        case "moreGames":
            return MoreGamesLine();
        case "moreGamesLinks":
            return MoreGamesLinkLine();
        //-------Bots Chaos---------
        case "botsChaos":
            return BotsChaosLine();
        case "botsChaosdescription":
            return BotsChaosLineDescription();
        case "botsChaosImprovements":
            return BotsChaosImprovements();
        case "botsChaosIdea":
            return BotsChaosIdea();
        //-------Genius at work--------
        case "geniusAtWork":
            return GAWLine();
        case "geniusAtWorkDescription":
            return GAWLineDescription();
        case "geniusAtWorkIdea":
            return GawGeneralIdea();
        case "geniusAtWorkImprovements":
            return GawImprovemetsLine();
        //-------Quadruped Match--------
        case "quadrupedMatch":
            return QuadrupedMatchLine();
        case "quadrupedMtachDescription":
            return QuadrupedMatchLineDescription();
        //-----Proto akane----
        case "protoAkane":
            return ProtoAkaneLine(); 
        case "protoAkaneDescription":
            return ProtoAkaneDescription();
        //-----Mecha Snake-----
        case "mechaSnake":
            return MechaSnakeLine();
        case "mechaSnakeLineDescription":
            return MechaSnakeLineDescription();
        //------Sea Pets-------
        case "seaPets":
            return SeaPetsLine();
        case "seaPetsLineDescription":
            return SeaPetsLineDescription();
        //-----Ligths off---------
        case "ligthsOff":
            return LigthsOffLine();
        case "ligthsOffDescription":
            return LigthsOffLineDescription();
        //-------MobiAmp----------
        case "mobiAmp":
            return MobiAmpLine();
        case "mobiAmpDescription":
            return MobiAMPDescriptionLine();
        //-------Zeta Explorer-----
        case "zetaExplorer":
            return ZetaExplorerLine();
        case "ZetaExplorerDescription":
            return ZetaDescriptionLine();
        //-------Web--------------
        case "webPortfolioA":
            return WebPortfolioLineA();
        case "webPortfolioB":
            return WebPortfolioLineB();
        //-------All projects-----
        case "showStoresLinks":
            return StoreLinkLine();
        case "skillsUtilized":
            return SkillsUtilizedLine();
        case "possibleImprovements":
            return PossibleImprovementsLine();
        case "gameIdeaQuestion":
            return GameIdeaQuestion();
        //-------Personal information-------
        case "personalInfoQuestion":
            return PersonalInformationQuestionLine();
        case "personalInfo":
            return PersonalInformationLine();
        //-------Mini Game-------------
        case "gameQuestion":
            return GameQuestion();
        case "gameLine":
            return GameLine();

    }
}

function NewLine(spanishVersion, englishVersion){
    return {
         spanishVer: spanishVersion,
         englishVer: englishVersion
        };
}

function LineLanguageSelection(currentLine){
    if(InEnglish()){
        return currentLine.englishVer;
    }
    else if(InSpanish()){
        return currentLine.spanishVer;
    }
}

function PresentationLineA(){
    return LineLanguageSelection(NewLine(
        "¡Hola! Mi nombre es Lucas y soy desarrollador de software.",
        "Hello! My name is Lucas and I'am a software developer."
    ));
}

function InEnglishPleaseLine(){
    return LineLanguageSelection(NewLine(
        "Let's talk in english please.",
        "Let's talk in english please."
    ));
}

function InSpanishPleaseLine(){
    return LineLanguageSelection(NewLine(
        "Mejor hablemos en español.",
        "Mejor hablemos en español."
    ));
}

function InitialLine(){
    return LineLanguageSelection(NewLine(
        "¿De que quieres hablar?",
        "What do you want to talk?"
    ));
}

function InitialVisitorLine(){
    return LineLanguageSelection(NewLine(
        "¡Empecemos!",
        "Let's get started!"
    ));
}

function ScreenShoot(){
    return LineLanguageSelection(NewLine(
        "Captura de pantalla",
        "Screenshot"
    ));
}

function TrainingQuestion(){
    return LineLanguageSelection(NewLine(
        "¿Qué estudios has cursado?",
        "What studies have you completed?"
    ));
}

function TrainingLineA(){
    return LineLanguageSelection(NewLine(
        "Estoy graduado en la carrera ",
        "I am graduated in "
    ));
}

function TrainingLineB(){
    return LineLanguageSelection(NewLine(
        "Licenciatura En Informática, ",
        "Bachelor's Degree in Computer Science "
    ));
}

function TrainingLineC(){
    return LineLanguageSelection(NewLine(
        "completé el curso de ",
        ", I completed the "
    ));
}

function TrainingLineD(){
    return LineLanguageSelection(NewLine(
        "Desarrollo web Fullstack ",
        "Fullstack Web Development "
    ));
}

function TrainingLineE(){
    return LineLanguageSelection(NewLine(
        "y cursé la carrera ",
        "course and I studied a "
    ));
}

function TrainingLineF(){
    return LineLanguageSelection(NewLine(
        "Técnico Superior En Telecomunicaciones.",
        "Higher Technician in Telecommunications."
    ));
}

function Siglo21QuestionLine(){
    return LineLanguageSelection(NewLine(
        "Háblame más de la carrera de informática.",
        "Tell me more about the computer science degree."
    ));
}

function Siglo21LineA(){
    return LineLanguageSelection(NewLine(
        "Me recibí de Licenciado En Informática en Universidad Siglo 21.",
        "I graduated with a Bachelor's Degree in Computer Science from Universidad Siglo 21."
    ));
}

function Siglo21LineB(){
    return LineLanguageSelection(NewLine(
        "Comencé la carrera en el año 2016 y la finalicé en el año 2023.",
        "I started the degree in 2016 and finished it in 2023."
    ));
}

function Siglo21LineC(){
    return LineLanguageSelection(NewLine(
        "Campus Córdoba",
        "Córdoba Campus"
    ));
}

function Siglo21LineD(){
    return LineLanguageSelection(NewLine(
        "Centro en Colón",
        "Center in Colón"
    ));
}

function Siglo21LineE(){
    return LineLanguageSelection(NewLine(
        "La Universidad Siglo 21 es una institución educativa privada de Argentina, destacada por su innovación, flexibilidad y modalidades de estudio presencial y virtual. Ofrece carreras de grado, posgrado y cursos cortos, enfocándose en habilidades prácticas y tecnología para el aprendizaje.",
        "Universidad Siglo 21 is a private educational institution in Argentina, highlighted for its innovation, flexibility and in-person and virtual study modalities. It offers undergraduate, graduate and short courses, focusing on practical skills and technology for learning."
    ));
}

function Siglo21LineF(){
    return LineLanguageSelection(NewLine(
        "La Licenciatura en Informática de la Universidad Siglo 21 forma profesionales en diseño, gestión y seguridad de sistemas de información. Ofrecida en modalidad online, incluye un título intermedio de Analista en Sistemas tras tres años y prepara para roles como auditor, gestor o desarrollador en tecnología.",
        "The Bachelor's Degree in Computer Science at Universidad Siglo 21 trains professionals in the design, management and security of information systems. Offered online, it includes an intermediate degree in Systems Analyst after three years and prepares for roles as auditor, manager or developer in technology."
    ));
}

function IssdQuestion(){
    return LineLanguageSelection(NewLine(
        "Háblame más de la carrera de telecomunicaciones.",
        "Tell me more about the telecommunications career."
    ));
}

function IssdLineA(){
    return LineLanguageSelection(NewLine(
        "Comencé la carrera de Técnico Superior en Telecomunicaciones en Instituto Superior Santo Domingo",
        "I began my career as a Higher Technician in Telecommunications at the Instituto Superior Santo Domingo"
    ));
}

function IssdLineB(){
    return LineLanguageSelection(NewLine(
        "en el año 2015 y la abandoné en el año 2016 para comenzar con una carrera de informática.",
        "in 2015 and abandoned it in 2016 to begin a computer science degree."
    ));
}

function IssdLineC(){
    return LineLanguageSelection(NewLine(
        "Tecnicatura en telecomunicaciones",
        "Degree in telecommunications"
    ));
}

function IssdLineD(){
    return LineLanguageSelection(NewLine(
        "El Instituto Superior Santo Domingo (ISSD), fundado en Córdoba, Argentina, ofrece carreras tecnológicas y empresariales en modalidades presencial y a distancia. Destaca por programas en software, telecomunicaciones y administración, y convenios con universidades para continuidad académica.",
        "The Instituto Superior Santo Domingo (ISSD), founded in Córdoba, Argentina, offers technological and business degrees in face-to-face and distance learning modalities. It stands out for programs in software, telecommunications and administration, and agreements with universities for academic continuity."
    ));
}

function IssdLineE(){
    return LineLanguageSelection(NewLine(
        "La carrera de Técnico Superior en Telecomunicaciones del ISSD dura 3 años y se ofrece a distancia. Forma profesionales en programación, redes, telefonía y comunicaciones ópticas. Los egresados trabajan en empresas de tecnología, conectividad y servicios.",
        "The ISSD Higher Technician in Telecommunications degree lasts 3 years and is offered remotely. Trains professionals in programming, networks, telephony and optical communications. Graduates work in technology, connectivity and services companies."
    ));
}

function CodoAcodoQuestion(){
    return LineLanguageSelection(NewLine(
        "Háblame más del curso de desarrollo web fullstack.",
        "Tell me more about the fullstack web development course."
    ));
}

function CodoAcodoLineA(){
    return LineLanguageSelection(NewLine(
        "Completé el curso de Desarrollo Web Fullstack del programa Codo a Codo del Ministerio de Educación.",
        "I completed the Fullstack Web Development course from the Codo a Codo program of the Ministry of Education."
    ));
}

function CodoAcodoLineB(){
    return LineLanguageSelection(NewLine(
        'El programa "Codo a Codo 4.0" ofrece cursos gratuitos de Programación Full Stack en lenguajes como Java, PHP, Python y Desarrollo Web. Las clases son virtuales, con una duración de 20 semanas, incluyendo dos sesiones semanales de 90 minutos con docentes en línea. El plan de estudios abarca tanto Front-End (HTML, CSS, JavaScript, Bootstrap) como Back-End (bases de datos, lenguajes de servidor). Para inscribirse, se requiere título secundario, conocimientos básicos de programación e inglés.',
        'The "Codo a Codo 4.0" program offers free Full Stack Programming courses in languages ​​such as Java, PHP, Python and Web Development. Classes are virtual, lasting 20 weeks, including two 90-minute sessions per week with online teachers. The curriculum covers both Front-End (HTML, CSS, JavaScript, Bootstrap) and Back-End (databases, server languages). To register, a high school diploma, basic programming knowledge and English are required.'
    ));
}

function GoBackLine(){
    return LineLanguageSelection(NewLine(
        "Volvamos atrás.",
        "Let's go back."
    ));
}

function GoBackToInitLine(){
    return LineLanguageSelection(NewLine(
        "Empecemos desde el inicio.",
        "Let's start from the beginning."
    ));
}

function SpecialtyQuestionLine(){
    return LineLanguageSelection(NewLine(
        "¿En que te especializaste?",
        "What did you specialize in?"
    ));
}

function SpecialtyLineA(){
    return LineLanguageSelection(NewLine(
        "Me especialicé en desarrollo de:",
        "I specialize in development of:"
    ));
}

function SpecialtyLineB(){
    return LineLanguageSelection(NewLine(
        "Videojuegos para PC y móviles.",
        "Video games for PC and mobiles."
    ));
}

function SpecialtyLineC(){
    return LineLanguageSelection(NewLine(
        "Aplicaciones para móviles Android.",
        "Android mobile applications."
    ));
}

function SpecialtyLineD(){
    return LineLanguageSelection(NewLine(
        "Sitios web.",
        "Web sites."
    ));
}

function SpecialtyLineE(){
    return LineLanguageSelection(NewLine(
        "También poseo conocimientos básicos en:",
        "I also have basic knowledge in:"
    ));
}

function OopProgrammingLine(){
    return LineLanguageSelection(NewLine(
        "Programación orientada a objetos.",
        "Object-oriented programming."
    ));
}

function ElectricityLine(){
    return LineLanguageSelection(NewLine(
        "Electricidad",
        "Electricity"
    ));
}

function ElectronicsLine(){
    return LineLanguageSelection(NewLine(
        "Electronica",
        "Electronics"
    ));
}

function JobExperienceQuestionLine(){
    return LineLanguageSelection(NewLine(
        "¿Qué experiencia laboral tienes?",
        "What work experience do you have?"
    ));
}

function JobExperienceLineA(){
    return LineLanguageSelection(NewLine(
        "Fuí repositor en Supermercados La Anónima",
        "I was a stockist at La Anónima Supermarkets"
    ));
}

function JobExperienceLineB(){
    return LineLanguageSelection(NewLine(
        " durante 8 años.",
        " for 8 years."
    ));
}

function JobExperienceLineC(){
    return LineLanguageSelection(NewLine(
        "Fuí programador de videojuegos para Livemedia Digital Agency",
        "I was a video game programmer for Livemedia Digital Agency"
    ));
}

function JobExperienceLineD(){
    return LineLanguageSelection(NewLine(
        " durante 8 meses.",
        " for 8 months."
    ));
}

function JobExperienceLineE(){
    return LineLanguageSelection(NewLine(
        "Soy desarrollador independiente desde el año 2017.",
        "I have been an independent developer since 2017."
    ));
}

function IndependentQuestion(){
    return LineLanguageSelection(NewLine(
        "Detalla tu experiencia como desarrollador independiente.",
        "Detail your experience as an independent developer."
    ));
}

function IndependentLineA(){
    return LineLanguageSelection(NewLine(
        "De manera independiente desarrollé videojuegos para PC y móviles Android. Desarrollo videojuegos desde el año 2017 y he llegado a publicar 6 de esos juegos en Steam, logrando calificaciones positivas en general por parte de los usuarios.",
        "I independently developed video games for PC and Android phones. I have been developing video games since 2017 and have published 6 of those games on Steam, achieving generally positive ratings from users."
    ));
}

function IndependentLineB(){
    return LineLanguageSelection(NewLine(
        "Desarrollé tres aplicaciones para Android y las publiqué en la Playstore, las cuáles son dos reproductores de música descargada en el dispositivo, y un gestor de archivos locales.",
        "I developed three applications for Android and published them on the Playstore, which are two music players downloaded to the device, and a local file manager."
    ));
}

function IndependentLineC(){
    return LineLanguageSelection(NewLine(
        "Desarrollé aplicaciones web, como este chat por ejemplo.",
        "I developed web applications, like this chat for example."
    ));
}

function LaAnonimaQuestion(){
    return LineLanguageSelection(NewLine(
        "Detalla tu experiencia en La Anónima.",
        "Detail your experience at La Anónima."
    ));
}

function LaAnonimaLineA(){
    return LineLanguageSelection(NewLine(
        "Fuí repositor en Supermercados La Anónima",
        "I was a stockist at La Anónima Supermarkets"
    ));
}

function LaAnonimaLineB(){
    return LineLanguageSelection(NewLine(
        "desde el año 2008 al 2017. Mis tareas eran realizar recuentos de mercaderías, control de precios y reposición de mercaderías.",
        "from 2008 to 2017. My tasks were to carry out merchandise counts, price control and merchandise replacement."
    ));
}

function LaAnonimaLineC(){
    return LineLanguageSelection(NewLine(
        "Supermercados La Anónima es una cadena de supermercados argentina fundada en 1908. Con presencia en varias provincias del país, se caracteriza por ofrecer productos de alimentación, limpieza, y otros bienes de consumo a precios competitivos. La empresa destaca por su enfoque en el servicio al cliente y su fuerte presencia en la Patagonia.",
        "Supermercados La Anónima is an Argentine supermarket chain founded in 1908. With a presence in several provinces of the country, it is characterized by offering food, cleaning, and other consumer goods at competitive prices. The company stands out for its focus on service to the client and its strong presence in Patagonia."
    ));
}

function LivemediaQuestion(){
    return LineLanguageSelection(NewLine(
        "Detalla tu experiencia en Livemedia Digital Agency.",
        "Detail your experience at Livemedia Digital Agency."
    ));
}

function LivemediaLineA(){
    return LineLanguageSelection(NewLine(
        "Fuí programador de videojuegos para Livemedia Digital Agency",
        "I was a video game programmer for Livemedia Digital Agency"
    ));
}

function LivemediaLineB(){
    return LineLanguageSelection(NewLine(
        "durante 8 meses. Desarrollé videojuegos para Android y iOS, y también juegos para la web. Mi principal aporte fué realizar la programación del juego Sea Pets: Match & Merge y la continuación del juego Ligths Off hasta su finalización.",
        "for 8 months. I developed video games for Android and iOS, and also games for the web. My main contribution was programming the game Sea Pets: Match & Merge and the continuation of the game Lights Off until its completion."
    ));
}

function LivemediaLineC(){
    return LineLanguageSelection(NewLine(
        "Livemedia Digital Agency es una agencia argentina especializada en marketing digital, desarrollo web y diseño de videojuegos. Se enfoca en crear experiencias digitales innovadoras y efectivas, trabajando con marcas reconocidas y ofreciendo soluciones personalizadas para sus clientes.",
        "Livemedia Digital Agency is an Argentine agency specialized in digital marketing, web development and video game design. It focuses on creating innovative and effective digital experiences, working with recognized brands and offering personalized solutions for its clients."
    ));
}

function PortfolioQuestion(){
    return LineLanguageSelection(NewLine(
        "¿Tienes un portfolio?",
        "Do you have a portfolio?"
    ));
}

function PortfolioAnswer(){
    return LineLanguageSelection(NewLine(
        "Si, ¿qué tipo de proyectos te interesan?",
        "Yes, what kind of projects are you interested in?"
    ));
}

function VideoGamesQuestion(){
    return LineLanguageSelection(NewLine(
        "Muéstrame tu portfolio de videojuegos.",
        "Show me your video game portfolio."
    ));
}

function AndroidAppsQuestion(){
    return LineLanguageSelection(NewLine(
        "Muéstrame tu portfolio de aplicaciones Android.",
        "Show me your portfolio of Android applications."
    ));
}

function WebAppsQuestion(){
    return LineLanguageSelection(NewLine(
        "Muéstrame tu portfolio de aplicaciones web.",
        "Show me your portfolio of web applications."
    ));
}

function GamesLineA(){
    return LineLanguageSelection(NewLine(
        "Estos son mis mejores juegos, ¿sobre cuál quieres saber más?",
        "These are my best games, which one do you want to know more about?"
    ));
}

function MoreGamesLine(){
    return LineLanguageSelection(NewLine(
        "¿Tienes más juegos?",
        "Do you have more games?"
    ));
}

function MoreGamesLinkLine(){
    return LineLanguageSelection(NewLine(
        "Puede encontrar más juegos en:",
        "You can find more games at:"
    ));
}

function AndroidAppsLineA(){
    return LineLanguageSelection(NewLine(
        "Desarrollé estas apps, ¿sobre cuál quieres saber más?",
        "I developed these apps, which one do you want to know more about?"
    ));
}

function BotsChaosLine(){
    return LineLanguageSelection(NewLine(
        "Háblame de Bots Chaos.",
        "Tell me about Bots Chaos."
    ));
}

function BotsChaosLineDescription(){
    return LineLanguageSelection(NewLine(
        "Bots Chaos es un juego FPS de acción en el que debes destruir muchos robots para superar una puntuación en 10 minutos.",
        "Bots Chaos is an action FPS game in which you must destroy many robots to beat a score in 10 minutes."
    ));
}

function BotsChaosIdea(){
    return LineLanguageSelection(NewLine(
        "La idea principal era diferenciarse un poco del resto de FPS colocando al jugador en un entorno con una gran cantidad de elementos peligrosos que esquivar. Para eso se implementó una cámara lenta de duración ilimitada pero con las desventaja de disminuir el tiempo que el jugador tiene para completar el juego.",
        "The main idea was to differentiate itself a little from the rest of FPS by placing the player in an environment with a large number of dangerous elements to avoid. For that, a slow motion of unlimited duration was implemented but with the disadvantage of reducing the time the player has to complete the game."
    ));
}

function BotsChaosImprovements(){
    return LineLanguageSelection(NewLine(
        "Se podrían sumar variedad de escenarios y agregar un modo campaña. Además se podría sumar un tablero en línea de puntajes máximos obtenidos por los jugadores.",
        "A variety of scenarios could be added and a campaign mode could be added. In addition, an online board of maximum scores obtained by the players could be added."
    ));
}

function GAWLine(){
    return LineLanguageSelection(NewLine(
        "Háblame de Genius At Work.",
        "Tell me about Genius At Work."
    ));
}

function GAWLineDescription(){
    return LineLanguageSelection(NewLine(
        "Genius At Work tendrás tu área de construcción donde dejar volar tu imaginación y llevar a cabo tus proyectos técnicos.",
        "Genius At Work will have your construction area where you can let your imagination fly and carry out your technical projects."
    ));
}

function GawGeneralIdea(){
    return LineLanguageSelection(NewLine(
        "La idea era darle al jugador un conjunto de piezas con las que pueda construir diferentes tipos de máquinas que este imagine, diferenciándose así de otros sistemas que solo permiten crear cosas previamente establecidas.",
        "The idea was to give the player a set of pieces with which he can build different types of machines that he imagines, thus differentiating himself from other systems that only allow the creation of previously established things."
    ));
}

function GawImprovemetsLine(){
    return LineLanguageSelection(NewLine(
        "El número de creaciones posibles resultó ser un poco limitado, para poder crear una gran cantidad de máquinas diferentes habría que aumentar el número de piezas y las combinaciones posibles entre ellas. Además una vez que la creación es terminada el jugador no puede darle utilidad, un mundo abierto con el cuál interactura podría solucionar esto.",
        "The number of possible creations turned out to be a bit limited, in order to create a large number of different machines the number of pieces and the possible combinations between them would have to be increased. Furthermore, once the creation is finished the player cannot use it, an open world with which to interact could solve this."
    ));
}

function QuadrupedMatchLine(){
    return LineLanguageSelection(NewLine(
        "Háblame de Quadruped Match.",
        "Tell me about Quadruped March."
    ));
}

function QuadrupedMatchLineDescription(){
    return LineLanguageSelection(NewLine(
        "Tu robot cuadrúpedo tiene una increíble capacidad para desplazarse por los terrenos más difíciles. ¡Solo dale un objetivo y gana la carrera!",
        "Your quadruped robot has an incredible ability to navigate the most difficult terrain. Just give it a goal and win the race!"
    ));
}

function ProtoAkaneLine(){
    return LineLanguageSelection(NewLine(
        "Háblame de Proto Akane.",
        "Tell me about Proto Akane."
    ));
}

function ProtoAkaneDescription(){
    return LineLanguageSelection(NewLine(
        "Akane pilota un vehículo que se transforma para tener diferentes habilidades para avanzar y derrotar a sus enemigos.",
        "Akane pilots a vehicle that transforms to have different abilities to advance and defeat her enemies."
    ));
}

function MechaSnakeLine(){
    return LineLanguageSelection(NewLine(
        "Háblame de Mecha Snake.",
        "Tell me about Mecha Snake."
    ));
}

function MechaSnakeLineDescription(){
    return LineLanguageSelection(NewLine(
        "Cruza la base enemiga con la serpiente y consigue la mejor puntuación.",
        "Cross the enemy base with the snake and get the best score."
    ));
}

function SeaPetsLine(){
    return LineLanguageSelection(NewLine(
        "Háblame de Sea Pets.",
        "Tell me about Sea Pets."
    ));
}

function SeaPetsLineDescription(){
    return LineLanguageSelection(NewLine(
        "¡Combina personajes! Déjalas caer para fusionarlas en personajes más grandes. Evita que el espacio se llene de gente.",
        "Merge characters! Drop them to merge them into larger characters. Prevent the space from filling up with people."
    ));
}

function LigthsOffLine(){
    return LineLanguageSelection(NewLine(
        "Háblame de Lights Off.",
        "Tell me about Lights Off."
    ));
}

function LigthsOffLineDescription(){
    return LineLanguageSelection(NewLine(
        "En este juego debes intentar que el aro no toque el cable y apagar todos los interruptores hasta llegar al final. Este juego actualmente no está publicado.",
        "In this game you must try to keep the ring from touching the cable and turn off all the switches until you reach the end. This game is currently unreleased."
    ));
}

function StoreLinkLine(){
    return LineLanguageSelection(NewLine(
        "Muéstrame enlaces a las tiendas.",
        "Show me links to stores."
    ));
}

function SkillsUtilizedLine(){
    return LineLanguageSelection(NewLine(
        "Habilidades utilizadas:",
        "Skills used:"
    ));
}

function PossibleImprovementsLine(){
    return LineLanguageSelection(NewLine(
        "¿Qué mejoras piensas que podrías hacerle al juego?",
        "What improvements do you think you could make to the game?"
    ));
}

function GameIdeaQuestion(){
    return LineLanguageSelection(NewLine(
        "¿Cuál es la idea general del proyecto?",
        "What is the general idea of ​​the project?"
    ));
}

function MobiAmpLine(){
    return LineLanguageSelection(NewLine(
        "Háblame de MobiAmp.",
        "Tell me about MobiAmp."
    ));
}

function MobiAMPDescriptionLine(){
    return LineLanguageSelection(NewLine(
        "MobiAMP es un reproductor de música gratuito para Android. Actualmente no está publicado en ninguna tienda aunque estuvo publicado en la Playstore.",
        "MobiAMP is a free music player for Android. It is currently not published in any store although it was published in the Playstore."
    ));
}

function ZetaExplorerLine(){
    return LineLanguageSelection(NewLine(
        "Háblame de Zeta File Explorer.",
        "Tell me Zeta File Explorer."
    ));
}

function ZetaDescriptionLine(){
    return LineLanguageSelection(NewLine(
        "Zeta File Explorer es un administrador de archivos gratuito para Android.",
        "Zeta File Explorer is a free file manager for Android."
    ));
}

function WebPortfolioLineA(){
    return LineLanguageSelection(NewLine(
        "He desarrollado este chat que se encuentra usted usando, y varias aplicaciones web para la universidad.",
        "I have developed this chat that you are using, and several web applications for the university."
    ));
}

function WebPortfolioLineB(){
    return LineLanguageSelection(NewLine(
        "Puede ver el código fuente de estos proyectos en mi perfil de Github.",
        "You can see the source code for these projects on my Github profile."
    ));
}

function PersonalInformationLine(){
    return LineLanguageSelection(NewLine(
        "Licenciado en Informática. Desarrollador de software.",
        "Graduate in Computer Science. Software developer."
    ));
}

function PersonalInformationQuestionLine(){
    return LineLanguageSelection(NewLine(
        "Muéstrame tu información personal y de contacto.",
        "Show me your personal and contact information."
    ));
}

function GameQuestion(){
    return LineLanguageSelection(NewLine(
        "¿Puedo jugar un minijuego aquí?",
        "Can I play a minigame here?"
    ));
}

function GameLine(){
    return LineLanguageSelection(NewLine(
        "¡Si! Aquí tiene un juego de esquivar autos. Haga click para moverse de un lado a otro.",
        "Yes! Here's a car dodging game. Click to move from one side to the other."
    ));
}