exports.fr = {
    title: "Les Dunes",
    description: "Une série d'image générées par des fonctions itératives.",
    content: String.raw `
    <div id="page">
    <p>Cette série d'images a été générée par une variété de fonctions itératives.
    J'aime les mathématiques et la programmation, et j'ai décidé de m'en servir pour dessiner. 
    Pour ce projet, j'ai tout d'abord écrit une équation paramétrique dont la courbe ressemble 
    un peu à une méduse.</p>

    <pre><code>function makePage(page, language) {
    var fileName = filenameFormatter(page[language].title);
    makeFile(language, fileName, header + navigation + content + footer);
}</code></pre>

    <img src="../images/dunes/dunes001.jpg">
    <img src="../images/dunes/dunes002.jpg">
    <img src="../images/dunes/dunes003.jpg">

    <pre><code>function makePage(page, language) {
    var fileName = filenameFormatter(page[language].title);
    var header = makeHeader(page, language);
    var navigation = makeNavigation(page, language);
    var content = makeContent(page, language);
    var footer = makeFooter(page, language);
    makeFile(language, fileName, header + navigation + content + footer);
}</code></pre>

    </div>
    `
};

exports.en = {
    title: "Dunes",
    description: "A series of images generated by iterated functions.",
    content: String.raw `
    <div id="page"><p>This project is based on 
    <a href="http://koaning.io/fluctuating-repetition.html">Fluctuating Repetition</a>, 
    a great blog post by Vincent D. Warmerdam. The images below were generated with 
    this dynamical system :</p>
    <div class="math">
    \[
        \begin{align*}
            x_{n+1} &= \sin(a \times x_n) + \tan(b \times x_n) - \tan(z_n)\\
            y_{n+1} &= \sin(c \times x_n) + \sin(d \times z_n)\\
            z_{n+1} &= z_n + 0.1
        \end{align*}
    \]
    </div>
    <p>Different images are obtained when the constants \(a, b, c, d\) are changed. Below are four sets
    of values for these constants, followed by the image that each set generates.</p>
    <div class="math">
    \[
        a = -0.1, b = 1, c = 0.1, d = 1
    \]
    </div>
    <img src="../images/dunes/dunes002b.jpg">
    <div class="math">
    \[
        a = -0.1, b = -1, c = 0.1, d = 3
    \]
    </div>
    <img src="../images/dunes/dunes001b.jpg">
    <div class="math">
    \[
        a = -0.6, b = 1, c = 0.1, d = 1
    \]
    </div>
    <img src="../images/dunes/dunes003b.jpg">
    <div class="math">
    \[
        a = -0.3, b = 1, c = 0.12, d = 3
    \]
    </div>
    <img src="../images/dunes/dunes004.jpg">
    <p>Here's the complete code for the project, written in JavaScript with p5.js:</p>
        <pre><code>var duneOne = {
    a: -0.1,
    b: 1,
    c: 0.1,
    d: 1
};

var duneTwo = {
    a: -0.1,
    b: -1,
    c: 0.1,
    d: 3
};

var duneThree = {
    a: -0.6,
    b: 1,
    c: 0.1,
    d: 1
};

var duneFour = {
    a: -0.3,
    b: 1,
    c: 0.12,
    d: 3
};

var vals = duneFour;
var vec = new p5.Vector(0, 0, 0);

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    fill(255, 5);
    noStroke();
}

function draw() {
    translate(width / 2, height / 2);
    for (var i = 0; i < 1500; i++) {
        vec = iterative(vec.x, vec.y, vec.z);
        ellipse(vec.x * 70, vec.y * 200, 0.5, 0.5);
    }
}

function iterative(x, y, z) {
    var newX = sin(vals.a * x) + tan(vals.b * x) - tan(z);
    var newY = sin(vals.c * x) + sin(vals.d * z);
    var newZ = z + 0.1;
    return createVector(newX, newY, newZ);
}</code></pre>
    </div>
    `
}

exports.link = null;
