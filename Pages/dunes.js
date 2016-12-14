exports.fr = {
    title: "Les Dunes",
    description: "Une série d'image générées par des fonctions itératives.",
    content: String.raw `
    <div id="page"><p>Ce projet est basé sur
     <a href="http://koaning.io/fluctuating-repetition.html">Fluctuating Repetition</a>,
     un article de blog écrit par Vincent D. Warmerdam. Les images ci-dessous ont été générées
    avec ce système dynamique :</p>
    <div class="math">
    \[
        \begin{align*}
            x_{n+1} &= \sin(a \times x_n) + \tan(b \times x_n) - \tan z_n\\
            y_{n+1} &= \sin(c \times x_n) + \sin(d \times z_n)\\
            z_{n+1} &= z_n + 0.1
        \end{align*}
    \]
    </div>
    <p>J'ai réglé la valeur de \(x_{0}, y_{0}, z_{0}\) à \(0\), mais le résultat est presque
    identique peu importe les valeurs initiales. Le système est ensuite itéré plusieurs millions de fois, 
    et un point blanc d'une très faible opacité est dessiné à chaque itération.</p>
   
    <p>Différentes images sont générées lorsque les constantes \(a, b, c, d\) sont changées. On peut voir
    ci-dessous quatre ensembles de valeurs pour ces constantes, chacun suivi de l'image qu'il génère.</p>
    
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
};

exports.en = {
    title: "Dunes",
    description: "A series of images generated by iterated functions.",
    content: String.raw `
    <div id="page"><p>This project is based on 
    <a href="http://koaning.io/fluctuating-repetition.html">Fluctuating Repetition</a>, 
    a blog post by Vincent D. Warmerdam. The images below are generated by 
    this dynamical system :</p>
    <div class="math">
    \[
        \begin{align*}
            x_{n+1} &= \sin(a \times x_n) + \tan(b \times x_n) - \tan z_n\\
            y_{n+1} &= \sin(c \times x_n) + \sin(d \times z_n)\\
            z_{n+1} &= z_n + 0.1
        \end{align*}
    \]
    </div>
    <p>I set the value of \(x_{0}, y_{0}, z_{0}\) to \(0\), but setting them to different values
    gives practically identical results (for the purposes of this project). The system is then iterated
    several million times, and a white dot with a very low opacity is drawn on each iteration.</p>
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
};

exports.link = null;
