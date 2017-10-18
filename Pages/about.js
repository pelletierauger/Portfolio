exports.fr = {
    title: "À propos",
    description: "Guillaume Pelletier-Auger est un artiste.",
    content: `
        <div id ="contact">
            <ul>
            <li><a href="https://twitter.com/pelletierauger">Twitter</a></li>
            <li><a href="mailto:pelletierauger@gmail.com">Courriel</a></li>
            <li><a href="https://github.com/pelletierauger">GitHub</a></li>
            </ul>
        </div>
        <div id ="about">
        <h2><i>Comment les choses prennent-elles leurs formes ?</i></h2>
        <p>Je suis un artiste visuel et un cinéaste d'animation vivant à Montréal, Québec, Canada.</p>
        <p>Mon travail explore divers sujets mathématiques. Je suis fasciné par les mathématiques et
        les divers procédés qui nous entourent : comment les arbres croissent et prennent leur forme,
        comment les statistiques gouvernent silencieusement nos vies, comment il nous est possible
        de construire des modèles des choses qui nous entourent afin de mieux les comprendre. 
        <i>Comment les choses prennent-elles leurs formes ?</i> est la question que je me pose 
        constamment. Et qu'est-ce que la forme des choses révèle sur elles ?</p>

        <p>Je suis un grand anxieux et découvrir la beauté de la science m'a aidé à appréhender
        le monde et à m'approprier davantage la petite place que j'y occupe. 
        Et l'art me permet d'explorer et de communiquer ces sujets.</p>
        <p>
        J'ai d'abord étudié le film d'animation au Cégep du Vieux Montréal, puis l'illustration
        à l'Académie d'été internationale des Beaux-Arts de Salzbourg, en Autriche, et finalement
        les arts graphiques à l'Académie des Beaux-Arts de Varsovie, en Pologne.
        </p>
        <h2>Contact</h2>
        N'hésitez pas à me contacter par <a href="mailto:pelletierauger@gmail.com">courriel</a>,
        sur <a href="https://twitter.com/pelletierauger">Twitter</a>
        ou sur <a href="https://github.com/pelletierauger">GitHub</a> pour des questions, 
        commentaires ou suggestions
        concernant mon travail ou les divers sujets qui y sont explorés. Il me fait toujours
        plaisir de discuter et de découvrir des points de vue différents.

        <h2>Code source libre</h2>
        <p>Les programmes que j'écris pour la création de mes œuvres sont tous offerts en code 
        source libre, une chose qui me tient à cœur.</p>

        <h2>Soutenir</h2>
        <p>Si vous aimez mon travail et que vous désirez m'aider à continuer, je vous invite à
        me soutenir sur la plateforme Patreon.</p>

        <h2>Ce site Web</h2>
        <p>
            Pour réaliser ce site Web, j'ai développé une petite application Node.js qui lit une
            base de données puis génère automatiquement tous les fichiers HTML. J'ai créé
            cette application parce que je cherchais un <i>générateur de site statique</i> ("static site
            generator") à la fois simple et offrant quelques fonctionnalités qui me sont importantes
            (tel que la possibilité de gérer une base de données de contenu bilingue), et
            j'étais insatisfait des générateurs déjà existants.
            <br><br>
            Vous pouvez voir le code source de cette application Node.js (avec le code source de ce site
            Web au complet) ici : <a href="https://github.com/pelletierauger/pelletierauger.github.io">
            https://github.com/pelletierauger/pelletierauger.github.io</a>
            <br><br>
            Le module principal est <i>maker.js</i> et il lit les données présentes dans
            le dossier <i>pages</i>.
        </p>

        </div>
    `
};

exports.en = {
    title: "About",
    description: "Guillaume Pelletier-Auger is an artist.",
    content: `
        <div id ="contact">
            <ul>
            <li><a href="https://twitter.com/pelletierauger">Twitter</a></li>
            <li><a href="mailto:pelletierauger@gmail.com">Email</a></li>
            <li><a href="https://github.com/pelletierauger">GitHub</a></li>
            </ul>
        </div>
        <div id ="about">
            <p>
                I'm an artist and programmer living in Montréal, Québec, Canada.
            </p>
            <p>
                I first studied animation film at the Cégep du Vieux Montréal, and then took an illustration 
                course at the International Summer Academy of Fine Arts in Salzburg, Austria. I then 
                studied graphic arts at
                the Academy of Fine Arts in Warsaw, Poland, were I concentrated on illustration with professor
                Zygmunt Januszewski and animation with professor Hieronim Neumann.
            </p>
        </div>
    `
}

exports.link = null;